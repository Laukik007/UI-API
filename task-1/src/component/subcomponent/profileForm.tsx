// PersonalInfoFormComponent.tsx
import React, { useState } from 'react';

interface ProfileFormProps {
  onFormSubmit: (formData: FormData) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  onFormSubmit
}) => {

  const [formData, setFormData] = useState({
   
    education: {
      internal: false,
      hide: false,  
    },
    experience: {
      internal: false,
      hide: false,
    },
    resume: {
      internal: false,
      hide: false,
    },
  });

  console.log('form data',formData);
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("education.")) {
      const fieldName = name.split(".")[1];
      const checkboxValue = (e.target as HTMLInputElement).checked; // Type assertion
      setFormData((prevData) => ({
        ...prevData,
        education: {
          ...prevData.education,
          [fieldName]: checkboxValue,
        },
      }));
    } else if (name.startsWith("experience.")) {
      const fieldName = name.split(".")[1];
      const checkboxValue = (e.target as HTMLInputElement).checked; // Type assertion
      setFormData((prevData) => ({
        ...prevData,
        experience: {
          ...prevData.experience,
          [fieldName]: checkboxValue,
        },
      }));
    } else if (name.startsWith("resume.")) {
      const fieldName = name.split(".")[1];
      const checkboxValue = (e.target as HTMLInputElement).checked; // Type assertion
      setFormData((prevData) => ({
        ...prevData,
        resume: {
          ...prevData.resume,
          [fieldName]: checkboxValue,
        },
      }));
    } 
    else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new FormData object and populate it with formData
    const formDataToSend = new FormData();
    

    // Append values for education
    formDataToSend.append("education.internal", formData.education.internal.toString());
    formDataToSend.append("education.hide", formData.education.hide.toString());

    // Append values for experience
    formDataToSend.append(
      "experience.internal",
      formData.experience.internal.toString()
    );
    formDataToSend.append(
      "experience.hide",
      formData.experience.hide.toString()
    );

    // Append values for resume
    formDataToSend.append(
      "resume.internal",
      formData.resume.internal.toString()
    );
    formDataToSend.append("resume.hide", formData.resume.hide.toString());
    onFormSubmit(formDataToSend);
  };
  
  return (
    <form onSubmit={handleSubmit}>
    
    <div className="form1-group">
      <label>Education:</label>
      <div className="bool-group">
        <label>
          <input
            type="checkbox"
            name="education.internal"
            checked={formData.education.internal}
            onChange={handleInputChange}
          />
          Internal
        </label>
        <label>
          <input
            type="checkbox"
            name="education.hide"
            checked={formData.education.hide}
            onChange={handleInputChange}
          />
          Hide
        </label>
      </div>
    </div>
    <div className="form1-group">
      <label>Experience:</label>
      <div className="bool-group">
        <label>
          <input
            type="checkbox"
            name="experience.internal"
            checked={formData.experience.internal}
            onChange={handleInputChange}
          />
          Internal
        </label>
        <label>
          <input
            type="checkbox"
            name="experience.hide"
            checked={formData.experience.hide}
            onChange={handleInputChange}
          />
          Hide
        </label>
      </div>
    </div>
    <div className="form1-group">
      <label>Resume:</label>
      <div className="bool-group">
        <label>
          <input
            type="checkbox"
            name="resume.internal"
            checked={formData.resume.internal}
            onChange={handleInputChange}
          />
          Internal
        </label>
        <label>
          <input
            type="checkbox"
            name="resume.hide"
            checked={formData.resume.hide}
            onChange={handleInputChange}
          />
          Hide
        </label>
      </div>
    </div>
    </form>
  );
};

export default ProfileForm;
