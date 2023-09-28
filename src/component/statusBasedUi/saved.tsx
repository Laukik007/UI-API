import React from "react";

import editicon from '/edit.svg'

interface SavedQuestionProps {
  index: number;
  content: any; 
  questionContent: any[]; 
  setQuestionContent: (content: any[]) => void;
}


const SavedQuestion: React.FC<SavedQuestionProps> = ({ index, content, questionContent,setQuestionContent }) => {


  const handleEdit=()=>{
    const updatedContent = [...questionContent];
          updatedContent[index] = {
            ...updatedContent[index],
            status: 'editing'
    };
    setQuestionContent(updatedContent);
  }
  
  return (
    <>
    <div style={{marginBottom: '1rem',
    display: 'flex',
    width: '60%',
    marginTop: '1rem',
    justifyContent: 'space-between',
    marginLeft: '8px'}} key={index}>
      <div> <p style={{margin:"0", color:"#979797"}}>{content.type}</p>
      <p style={{margin:"0",fontSize: '18px',fontWeight: 'bold'}}>{content.question}</p></div>
     
     
          
        <img style={{marginTop:"1rem"}} src={editicon} onClick={handleEdit}/>
      
    </div>
    <hr style={{width:"97%"}}></hr>
    </>
  );
};

export default SavedQuestion;
