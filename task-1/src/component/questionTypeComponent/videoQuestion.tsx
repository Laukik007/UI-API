// McqQuestion.tsx
import React, { useEffect } from 'react';

interface VidoQuestionProps {
    content: any; // Adjust the type as needed
    questionInput: string;
    setQuestionInput: (input: string) => void;
    newChoice: string;
    setNewChoice: (choice: string) => void;
    typeofQuestion:string
    index: number;
    questionContent: any[]; // Adjust the type as needed
    setQuestionContent: (content: any[]) => void;
    status:string
}


const VideoQuestion: React.FC<VidoQuestionProps> = ({
    content,
    questionInput,
    setQuestionInput,
    newChoice,
    setNewChoice,
    index,
    questionContent,
    setQuestionContent,
    typeofQuestion,
    status
}) => {

  const handleDelete = () => {
    // Filter out the question with the specified content.id
    const updatedContent = questionContent.filter(
      (item) => item.id !== content.id
    );
    // Update the state to remove the deleted question
    setQuestionContent(updatedContent);
  };
  
  return (
    <>
    <div>
        <h3>Question</h3>
        <input type='text' placeholder='Q:'/>
        <textarea  rows={4} cols={30} placeholder='Type here'></textarea>
        <input type='text' placeholder='max duration of video'/>
        <select>
            <option>minutes</option>
            <option>seconds</option>
        </select>
    </div>
      <div>
        <button onClick={handleDelete}>delete</button>
        <button
          onClick={() => {
            const updatedContent = [...questionContent];
            updatedContent[index] = {
              ...updatedContent[index],
              question: questionInput,
              status:'saved'
              
            };
            setQuestionContent(updatedContent);
          }}
        >
          save
        </button>
      </div>
    </>
  );
};

export default VideoQuestion;
