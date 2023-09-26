import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons"; // Import the edit icon
import Card from "../card/card";

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
    
    <div style={{marginBottom: '1rem',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',marginTop:"1rem"}} key={index}>
      <div> <p style={{margin:"0", color:"#979797"}}>{content.type}</p>
      <p style={{margin:"0"}}>{content.question}</p></div>
     
      <button onClick={handleEdit}>
        <FontAwesomeIcon icon={faEdit} /> Edit 
      </button>
    </div>
  );
};

export default SavedQuestion;
