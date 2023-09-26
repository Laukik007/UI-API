import React, { useEffect } from 'react';
import Card from '../card/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // Import the plus icon

interface McqQuestionProps {
  content: any; // Adjust the type as needed
  questionInput: string;
  setQuestionInput: (input: string) => void;
  newChoice: string;
  setNewChoice: (choice: string) => void;
  typeofQuestion: string;
  index: number;
  questionContent: any[]; // Adjust the type as needed
  setQuestionContent: (content: any[]) => void;
  status: string;
  SelectType: (e: React.ChangeEvent<HTMLSelectElement>, selectedObjectId: string) => void;
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
  status,
  SelectType
}) => {
  const handleDelete = () => {
    // Filter out the question with the specified content.id
    const updatedContent = questionContent.filter((item) => item.id !== content.id);
    // Update the state to remove the deleted question
    setQuestionContent(updatedContent);
  };

  const handlemcq = (index: number, newChoice: string) => {
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
    <Card type='question' heading='Question' headerColor="#D0F7FA">
      <div key={index}>
        <h3 style={{ margin: 0, marginBottom: "0.5rem" }}>Type</h3>
        <select style={{ width: '30rem', height: "2rem" }} onChange={(e) => SelectType(e, content.id)} value={content.type}>
          <option value={content.type} disabled>
            {content.type}
          </option>
          <option>paragraph</option>
          <option>mcq</option>
          <option>short answer</option>
          <option>yes/no</option>
          <option>dropdown</option>
          <option>file_upload</option>
          <option>video</option>
        </select>
      </div>
      <div>
        <h3 style={{ margin: "0", marginTop: "0.7rem", marginBottom: "0.4rem" }}>Question</h3>
        <input
          type='text'
          placeholder='Type here'
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
          style={{ width: '29.5rem', height: "1.5rem" }}
        />
      </div>
      <div>
        <h3 style={{ margin: "0", marginTop: "0.7rem", marginBottom: "0.4rem" }}>Choice</h3>
        {content.choices.length === 0 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', marginLeft: "2rem  " }}>
            <input
              type="text"
              placeholder="Add Option"
              value={newChoice}
              onChange={(e) => setNewChoice(e.target.value)}
              style={{ width: '90%', height: '1.5rem' }}
            />
            <button onClick={() => handlemcq(index, newChoice)}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
        )}

        {content.choices.map((choice: string, contentindex: number) => {
          console.log(`Content Index: ${contentindex}`);
          return (
            <>
              {!contentindex && (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', marginLeft: "2rem  " }} key={contentindex}>
                    <input style={{ width: '90%', height: '1.5rem' }} type='text' value={content.choices[contentindex]} />
                  </div>
                </>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', marginLeft: "2rem  " }}>
                <input
                  type='text'
                  placeholder='type here'
                  onChange={(e) => setNewChoice(e.target.value)}
                  style={{ width: '90%', height: '1.5rem' }}
                />
                {contentindex === content.choices.length - 1 && (
                  <button onClick={() => handlemcq(index, newChoice)}><FontAwesomeIcon icon={faPlus} /></button>
                )}
              </div>
            </>
          );
        })}
      </div>

      <div style={{ width: '30rem', display: 'flex', justifyContent: 'space-between', height: '2rem', marginTop: "1rem" }}>
        <button onClick={handleDelete}>delete</button>
        <button
          onClick={() => {
            const updatedContent = [...questionContent];
            updatedContent[index] = {
              ...updatedContent[index],
              question: questionInput,
              status: 'saved'
            };
            setQuestionContent(updatedContent);
          }}
        >
          save
        </button>
      </div>
    </Card>
  );
};

export default McqQuestion;
