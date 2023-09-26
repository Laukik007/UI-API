// PersonalInfoFormComponent.tsx
import React, { useState } from 'react';

interface PersonalInfoFormComponentProps {
  onFormSubmit: (formData: FormData) => void;
}

const PersonalInfoFormComponent: React.FC<PersonalInfoFormComponentProps> = ({
  onFormSubmit
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

  console.log('form data',formData);
  
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new FormData object and populate it with formData
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);

    // Append values for phone
    formDataToSend.append("phone.internal", formData.phone.internal.toString());
    formDataToSend.append("phone.hide", formData.phone.hide.toString());

    // Append values for nationality
    formDataToSend.append(
      "nationality.internal",
      formData.nationality.internal.toString()
    );
    formDataToSend.append(
      "nationality.hide",
      formData.nationality.hide.toString()
    );

    // Append values for residence
    formDataToSend.append(
      "residence.internal",
      formData.residence.internal.toString()
    );
    formDataToSend.append("residence.hide", formData.residence.hide.toString());

    // Append values for id
    formDataToSend.append("id.internal", formData.id.internal.toString());
    formDataToSend.append("id.hide", formData.id.hide.toString());

    // Append values for dob
    formDataToSend.append("dob.internal", formData.dob.internal.toString());
    formDataToSend.append("dob.hide", formData.dob.hide.toString());

    // Append values for gender
    formDataToSend.append(
      "gender.internal",
      formData.gender.internal.toString()
    );
    formDataToSend.append("gender.hide", formData.gender.hide.toString());

    onFormSubmit(formDataToSend);
  };
  
  return (
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
    </div>
    <div className="form-group">
      <label>Phone no:</label>
      <div className="phone-group">
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
    <div className="form-group">
      <label>Nationality:</label>
      <div className="nationality-group">
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
    <div className="form-group">
      <label>Current Residence:</label>
      <div className="residence-group">
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
    <div className="form-group">
      <label>ID Number:</label>
      <div className="id-group">
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
    <div className="form-group">
      <label>Date of Birth:</label>
      <div className="dob-group">
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
    <div className="form-group">
      <label>Gender:</label>
      <div className="gender-group">
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
    </form>
  );
};

export default PersonalInfoFormComponent;
