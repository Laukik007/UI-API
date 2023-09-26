// ParagraphQuestion.tsx
import React from 'react';

interface ParagraphQuestionProps {
  // Define any props specific to this question type
    questionInput: string;
    setQuestionInput: (input: string) => void;
    typeofQuestion:string
    index: number;
    questionContent: any[]; // Adjust the type as needed
    setQuestionContent: (content: any[]) => void;
    status:string
    content:any
} 

const ParagraphQuestion: React.FC<ParagraphQuestionProps> = ({
  questionInput,
  setQuestionInput,
  index,
  questionContent,
  setQuestionContent,
  typeofQuestion,
  status,
  content,
}) => {
  const inputValue = status === 'editing' ? questionInput : ''; // Use questionInput as the value

  return (
    <>
      <div>
        <h3>Question</h3>
        <input
          type='text'
          placeholder='Type here'
           defaultValue={inputValue}
          
          onChange={(e) => setQuestionInput(e.target.value)}
        ></input>
      </div>
      <div>
        <button>delete</button>
        <button
          onClick={() => {
            const updatedContent = [...questionContent];
            updatedContent[index] = {
              ...updatedContent[index],
              question: questionInput,
              status: 'saved',
            };
            setQuestionContent(updatedContent);
          }}
        >
          save
        </button>
      </div>
      {typeofQuestion === 'yes/no' && (
        <div>
          <label>
            <input type='checkbox' />
            Disqualify candidate if the answer is no
          </label>
        </div>
      )}
    </>
  );
};


export default ParagraphQuestion;
