import React, { useState } from "react";
import StatusNew from "../../statusBasedUi/new";
import CreatingQuestion from "../../statusBasedUi/create_edit";
import SavedQuestion from "../../statusBasedUi/saved";
import PersonalInfoFormComponent from "../../subcomponent/personalForm";
import { generateUUID } from "../../../utils/formUtils";
interface PersonalInfoFormProps {
  onFormSubmit: (formData: FormData) => void;
}

const PersonalInformationForm: React.FC<PersonalInfoFormProps> = ({
  onFormSubmit,
}) => {
  const [personalQuestion, setPersonalQuestion] = useState([] as any[]);
  const [newChoice, setNewChoice] = useState("");
  const [questionInput, setQuestionInput] = useState("");
 
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
    const newContent = [...personalQuestion, question];
    setPersonalQuestion(newContent);
  };
  const SelectType = (
    e: React.ChangeEvent<HTMLSelectElement>,
    selectedObjectId: string
  ) => {
    const { value } = e.target;

    // Find the index of the object with the matching id
    const indexToUpdate = personalQuestion.findIndex(
      (obj) => obj.id === selectedObjectId
    );

    if (indexToUpdate !== -1) {
      // Clone the current questionContent array to avoid mutating state directly
      const updatedContent = [...personalQuestion];

      // Update the type and status of the selected object
      updatedContent[indexToUpdate] = {
        ...updatedContent[indexToUpdate],
        type: value,
        status: "creating",
      };

      // Update the state with the modified array
      setPersonalQuestion(updatedContent);
    }
  };

  return (
    <>
      <PersonalInfoFormComponent
      onFormSubmit={onFormSubmit} 
      />
      {personalQuestion.map((content, index) => {
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
                questionContent={personalQuestion}
                setQuestionContent={setPersonalQuestion}
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
            questionContent={personalQuestion}
            setQuestionContent={setPersonalQuestion}
            SelectType={SelectType}
            status="editing"
          />
            break;

          case "saved":
            uiElement = <SavedQuestion
            setQuestionContent={setPersonalQuestion}
            questionContent={personalQuestion} 
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

export default PersonalInformationForm;
