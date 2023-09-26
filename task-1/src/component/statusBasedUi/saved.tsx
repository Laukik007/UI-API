import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons"; // Import the edit icon

interface SavedQuestionProps {
  index: number;
  content: any; // Assuming that `questionContent` is an array of question objects
  questionContent: any[]; 
  setQuestionContent: (content: any[]) => void;
}


const SavedQuestion: React.FC<SavedQuestionProps> = ({ index, content, questionContent,setQuestionContent }) => {


  const handleEdit=()=>{
    console.log('hello');
    
    const updatedContent = [...questionContent];
          updatedContent[index] = {
            ...updatedContent[index],
            status: 'editing'
    };
    setQuestionContent(updatedContent);
  }
  
  return (
    <div key={index}>
      <p>Type: {content.type}</p>
      <p>Question: {content.question}</p>
      <button onClick={handleEdit}>
        <FontAwesomeIcon icon={faEdit} /> Edit 
      </button>
    </div>
  );
};

export default SavedQuestion;
