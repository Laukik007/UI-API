import React, { useState } from "react";
import "./personalInfo..css";
import PersonalInfoFormComponent from "../subcomponent/personalForm";
import { generateUUID } from "../../utils/formUtils";
import StatusNew from "../statusBasedUi/new";
import CreatingQuestion from "../statusBasedUi/create_edit";
import SavedQuestion from "../statusBasedUi/saved";
interface PersonalInfoFormProps {
  onFormSubmit: (formData: FormData) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  onFormSubmit,
}) => {
  const [questionContent, setQuestionContent] = useState([] as any[]);
  const [newChoice, setNewChoice] = useState("");
  const [questionInput, setQuestionInput] = useState("");
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
  console.log("question content", questionContent);
  console.log('sdjfhgfasasdfadsfsfasddfasdfsdfsddsa',typeof(questionContent));
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
  console.log("form data", formData);

  const handleAddquestion = () => {
    const question = {
      status: "new",
      id: generateUUID(),
      type: "",
      question: "",
      choices: [],
      maxChoice: 0,
      disqualify: false,
      other: false,
    };
    const newContent = [...questionContent, question];
    setQuestionContent(newContent);
  };
  const SelectType = (
    e: React.ChangeEvent<HTMLSelectElement>,
    selectedObjectId: string
  ) => {
    const { value } = e.target;

    // Find the index of the object with the matching id
    const indexToUpdate = questionContent.findIndex(
      (obj) => obj.id === selectedObjectId
    );

    if (indexToUpdate !== -1) {
      // Clone the current questionContent array to avoid mutating state directly
      const updatedContent = [...questionContent];

      // Update the type and status of the selected object
      updatedContent[indexToUpdate] = {
        ...updatedContent[indexToUpdate],
        type: value,
        status: "creating",
      };

      // Update the state with the modified array
      setQuestionContent(updatedContent);
    }
  };

  return (
    <>
     <PersonalInfoFormComponent
      onFormSubmit={onFormSubmit} 
      />
      {questionContent.map((content, index) => {
        let uiElement;

        switch (content.status) {
          case "new":
            uiElement = (
              <StatusNew
                key={index}
                content={content}
                index={index}
                SelectType={SelectType}
              />
            );
            break;

          case "creating":
            uiElement = (
              <CreatingQuestion
                key={index}
                content={content}
                index={index}
                questionInput={questionInput}
                setQuestionInput={setQuestionInput}
                newChoice={newChoice}
                setNewChoice={setNewChoice}
                questionContent={questionContent}
                setQuestionContent={setQuestionContent}
                SelectType={SelectType}
                status="creating"
              />
            );
            break;
          case "editing":
            uiElement =  <CreatingQuestion
            key={index}
            content={content}
            index={index}
            questionInput={questionInput}
            setQuestionInput={setQuestionInput}
            newChoice={newChoice}
            setNewChoice={setNewChoice}
            questionContent={questionContent}
            setQuestionContent={setQuestionContent}
            SelectType={SelectType}
            status="editing"
          />
            break;

          case "saved":
            uiElement = <SavedQuestion
            setQuestionContent={setQuestionContent}
            questionContent={questionContent} 
            content={content} 
            key={index} 
            index={index} 
            />;
            break;

          default:
            uiElement = null;
            break;
        }

        return uiElement;
      })}

      <button onClick={handleAddquestion}>add question</button>
    </>
  );
};

export default PersonalInfoForm;
