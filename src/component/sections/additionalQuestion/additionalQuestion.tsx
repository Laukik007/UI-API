import React, { useState } from "react";
import StatusNew from "../../statusBasedUi/new";
import CreatingQuestion from "../../statusBasedUi/create_edit";
import SavedQuestion from "../../statusBasedUi/saved";
import { generateUUID } from "../../../utils/formUtils";
import addbtn from '/addbtn.svg'
interface AdditionalQuestionFormProps {
  setpersonalQuestion: (content: any[]) => void;
}

const AdditonalQuestion: React.FC<AdditionalQuestionFormProps> = ({setpersonalQuestion
}) => {
  const [additionalQuestion, setAdditionalQuestion] = useState([] as any[]);
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
    const newContent = [...additionalQuestion, question];
    setAdditionalQuestion(newContent);
  };
  const SelectType = (
    e: React.ChangeEvent<HTMLSelectElement>,
    selectedObjectId: string
  ) => {
    const { value } = e.target;

    // Find the index of the object with the matching id
    const indexToUpdate = additionalQuestion.findIndex(
      (obj) => obj.id === selectedObjectId
    );

    if (indexToUpdate !== -1) {
      // Clone the current questionContent array to avoid mutating state directly
      const updatedContent = [...additionalQuestion];

      // Update the type and status of the selected object
      updatedContent[indexToUpdate] = {
        ...updatedContent[indexToUpdate],
        type: value,
        status: "creating",
      };

      // Update the state with the modified array
      setAdditionalQuestion(updatedContent);
    }
  };

  return (
    <>
      
      {additionalQuestion.map((content, index) => {
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
                questionContent={additionalQuestion}
                setQuestionContent={setAdditionalQuestion}
                SelectType={SelectType}
                status="creating"
                setpersonalQuestion={setpersonalQuestion}
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
            questionContent={additionalQuestion}
            setQuestionContent={setAdditionalQuestion}
            SelectType={SelectType}
            status="editing"
            setpersonalQuestion={setpersonalQuestion}
          />
            break;

          case "saved":
            uiElement = <SavedQuestion
            setQuestionContent={setAdditionalQuestion}
            questionContent={additionalQuestion} 
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

    <div style={{ display: 'flex', alignItems: 'center',marginTop:"1rem",cursor:"pointer"}} onClick={handleAddquestion}>
      <img src={addbtn} alt="Add Question" style={{ marginRight: '4px',width:"1.1rem"}} />
      <span style={{fontWeight:"550"}}>Add Question</span>
    </div>
    </>
  );
};

export default AdditonalQuestion;
