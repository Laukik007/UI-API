
import React, { useEffect, useState } from 'react';
import './style.css'
interface PersonalInfoFormComponentProps {
  setpersonalQuestion: (content: any) => void;
}

const PersonalInfoFormComponent: React.FC<PersonalInfoFormComponentProps> = ({
  setpersonalQuestion
}) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: {
      internal: false,
      hide: false,
    },
    nationality: {
      internal: false,
      hide: false,
    },
    residence: {
      internal: false,
      hide: false,
    },
    id: {
      internal: false,
      hide: false,
    },
    dob: {
      internal: false,
      hide: false,
    },
    gender: {
      internal: false,
      hide: false,
    },
  });

  useEffect(() => {
    setpersonalQuestion((prevData: any) => ({
      ...prevData,
      pI: formData, // Update personalInformation with formData
    }));    
  }, [formData, setpersonalQuestion]);
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("nationality.")) {
      const fieldName = name.split(".")[1];
      const checkboxValue = (e.target as HTMLInputElement).checked; // Type assertion
      setFormData((prevData) => ({
        ...prevData,
        nationality: {
          ...prevData.nationality,
          [fieldName]: checkboxValue,
        },
      }));
    } else if (name.startsWith("phone.")) {
      const fieldName = name.split(".")[1];
      const checkboxValue = (e.target as HTMLInputElement).checked; // Type assertion
      setFormData((prevData) => ({
        ...prevData,
        phone: {
          ...prevData.phone,
          [fieldName]: checkboxValue,
        },
      }));
    } else if (name.startsWith("residence.")) {
      const fieldName = name.split(".")[1];
      const checkboxValue = (e.target as HTMLInputElement).checked; // Type assertion
      setFormData((prevData) => ({
        ...prevData,
        residence: {
          ...prevData.residence,
          [fieldName]: checkboxValue,
        },
      }));
    } else if (name.startsWith("id.")) {
      const fieldName = name.split(".")[1];
      const checkboxValue = (e.target as HTMLInputElement).checked; // Type assertion
      setFormData((prevData) => ({
        ...prevData,
        id: {
          ...prevData.id,
          [fieldName]: checkboxValue,
        },
      }));
    } else if (name.startsWith("dob.")) {
      const fieldName = name.split(".")[1];
      const checkboxValue = (e.target as HTMLInputElement).checked; // Type assertion
      setFormData((prevData) => ({
        ...prevData,
        dob: {
          ...prevData.dob,
          [fieldName]: checkboxValue,
        },
      }));
    } else if (name.startsWith("gender.")) {
      const fieldName = name.split(".")[1];
      const checkboxValue = (e.target as HTMLInputElement).checked; // Type assertion
      setFormData((prevData) => ({
        ...prevData,
        gender: {
          ...prevData.gender,
          [fieldName]: checkboxValue,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  
  return (
    <div>
    <div className="form-group">
      <p className='custom-p'>First Name</p>
      <hr className='custom_hr'/>
    </div>
    <div className="form-group">
      <p className='custom-p'>Last Name</p>  
      <hr className='custom_hr'/>
    </div>
    <div className="form-group">
      <p className='custom-p'>Email</p>
      <hr className='custom_hr'/>
    </div>
    <div className="form1-group">
      <label>Phone no:</label>
      <div className="bool-group">
        <label>
          <input
            type="checkbox"
            name="phone.internal"
            checked={formData.phone.internal}
            onChange={handleInputChange}
          />
          Internal
        </label>
        <label>
          <input
            type="checkbox"
            name="phone.hide"
            checked={formData.phone.hide}
            onChange={handleInputChange}
          />
          
          Hide
        </label>
      </div>
    </div>
    <div className="form1-group">
      <label>Nationality:</label>
      <div className="bool-group">
        <label>
          <input
            type="checkbox"
            name="nationality.internal"
            checked={formData.nationality.internal}
            onChange={handleInputChange}
          />
          Internal
        </label>
        <label>
          <input
            type="checkbox"
            name="nationality.hide"
            checked={formData.nationality.hide}
            onChange={handleInputChange}
          />
          Hide
        </label>
      </div>
    </div>
    <div className="form1-group">
      <label>Current Residence:</label>
      <div className="bool-group">
        <label>
          <input
            type="checkbox"
            name="residence.internal"
            checked={formData.residence.internal}
            onChange={handleInputChange}
          />
          Internal
        </label>
        <label>
          <input
            type="checkbox"
            name="residence.hide"
            checked={formData.residence.hide}
            onChange={handleInputChange}
          />
          Hide
        </label>
      </div>
    </div>
    <div className="form1-group">
      <label>ID Number:</label>
      <div className="bool-group">
        <label>
          <input
            type="checkbox"
            name="id.internal"
            checked={formData.id.internal}
            onChange={handleInputChange}
          />
          Internal
        </label>
        <label>
          <input
            type="checkbox"
            name="id.hide"
            checked={formData.id.hide}
            onChange={handleInputChange}
          />
          Hide
        </label>
      </div>
    </div>
    <div className="form1-group">
      <label>Date of Birth:</label>
      <div className="bool-group">
        <label>
          <input
            type="checkbox"
            name="dob.internal"
            checked={formData.dob.internal}
            onChange={handleInputChange}
          />
          Internal
        </label>
        <label>
          <input
            type="checkbox"
            name="dob.hide"
            checked={formData.dob.hide}
            onChange={handleInputChange}
          />
          Hide
        </label>
      </div>
    </div>
    <div className="form1-group">
      <label>Gender:</label>
      <div className="bool-group">
        <label>
          <input
            type="checkbox"
            name="gender.internal"
            checked={formData.gender.internal}
            onChange={handleInputChange}
          />
          Internal
        </label>
        <label>
          <input
            type="checkbox"
            name="gender.hide"
            checked={formData.gender.hide}
            onChange={handleInputChange}
          />
          Hide
        </label>
      </div>
    </div>
    </div>
  );
};

export default PersonalInfoFormComponent;
