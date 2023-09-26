// McqQuestion.tsx
import React, { useEffect } from 'react';

interface McqQuestionProps {
    content: any; // Adjust the type as needed
    questionInput: string;
    setQuestionInput: (input: string) => void;
    newChoice: string;
    setNewChoice: (choice: string) => void;
    typeofQuestion:string
    index: number;
    questionContent: any[]; // Adjust the type as needed
    setQuestionContent: (content: any[]) => void;
    status:string,
}


const McqQuestion: React.FC<McqQuestionProps> = ({
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
  
  console.log('index',index);
  console.log('questionc',questionContent);
  console.log('content',content);
  
  const handlemcq = (index: number, newChoice: string) => {

    console.log('agsd',index);
    console.log('insoglsdfsofjnsdflsjdnfosnlfnlsdknflnsdl');
    
    // Clone the current questionContent array to avoid mutating state directly
    const updatedContent = [...questionContent];

    // Find the content object by index
    const selectedContent = updatedContent[index];

    // Add a new choice to the selected content
    selectedContent.choices.push(newChoice);

    // Update the state with the modified array
    setQuestionContent(updatedContent);
    setNewChoice("");
  };
  
  return (
    <>
      <div>
        <h3>Question</h3>
        <input
          type='text'
          placeholder='Type here'
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
        />
      </div>
      <div>
        <h3>Choice</h3>
        {content.choices.length === 0 && (
          <div>
            
            <input
              type="text"
              placeholder="Add Option"
              value={newChoice}
              onChange={(e) => setNewChoice(e.target.value)}
            />
            <button onClick={() => handlemcq(index, newChoice)}>Add Option</button>
          </div>
        )}

        {content.choices.map((choice:string ,contentindex: number) => {
          console.log(`Content Index: ${contentindex}`);

          return (
            <>
              {!contentindex && (
                <>
                  <div key={contentindex}>
                    <input type='text' value={content.choices[contentindex]} />
                  </div>
                </>
              )}
              <div>
                <input
                  type='text'
                  placeholder='type here'
                  onChange={(e) => setNewChoice(e.target.value)}
                />
                {contentindex === content.choices.length - 1 && (
                  <button onClick={() => handlemcq(index, newChoice)}>Add Option</button>
                )}
              </div>
            </>
          );
        })}
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

export default McqQuestion;
