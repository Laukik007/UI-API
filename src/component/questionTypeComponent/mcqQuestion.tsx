import React, { useEffect } from 'react';
import Card from '../card/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 
import crossbtn from '/cross.svg'

interface McqQuestionProps {
  content: any; 
  questionInput: string;
  setQuestionInput: (input: string) => void;
  newChoice: string;
  setNewChoice: (choice: string) => void;
  typeofQuestion: string;
  index: number;
  questionContent: any[];
  setQuestionContent: (content: any[]) => void;
  status: string;
  SelectType: (e: React.ChangeEvent<HTMLSelectElement>, selectedObjectId: string) => void;
  setpersonalQuestion: (content: any) => void;
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
  SelectType,
  setpersonalQuestion
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

  useEffect(()=>{
    setQuestionInput("");
  },[])

  return (
    <Card type='question' heading='Question' headerColor="#D0F7FA">
      <div key={index}>
        <h3 style={{ margin: 0, marginBottom: "0.5rem" }}>Type</h3>
        <select style={{ width: '100%', height: "2rem" }} onChange={(e) => SelectType(e, content.id)} value={content.type}>
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
          style={{ width: '100%rem', height: "1.5rem" }}
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
        {
          content.status=='creating' &&(
            content.choices.map((choice: string, contentindex: number) => {
              console.log(choice);
              return (
                <>
                  {contentindex===0 && (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', marginLeft: "2rem  " }} key={contentindex}>
                        <input style={{ width: '90%', height: '1.5rem' }} type='text' defaultValue={content.choices[contentindex]} onChange={(e)=>setNewChoice(e.target.value)} />
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
            })
          )

          
        }
        {
          content.status==="editing" && (
            content.choices.map((choice: string, contentindex: number) => {
              console.log(choice);
              
            return(
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', marginLeft: "2rem  " }} key={contentindex}>
              <input style={{ width: '90%', height: '1.5rem' }} type='text' defaultValue={content.choices[contentindex]} onChange={(e)=>setNewChoice(e.target.value)} />
            </div>
            )
            
            })
          
            
          )
        }

       
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: '2rem', marginTop: "1rem" }}>
      <div onClick={handleDelete} style={{display:"flex",cursor:"pointer"}}><img style={{width: '1.6rem',cursor:"pointer"}} src={crossbtn}/><span style={{color: '#A80000',fontWeight: '550',marginTop: '8px'}}>Delete Question</span></div>
        <button
        style={{backgroundColor: '#087B2F',color: 'white',cursor:"pointer"}}
          onClick={() => {
            const updatedContent = [...questionContent];
            updatedContent[index] = {
              ...updatedContent[index],
              question: questionInput,
              status: 'saved'
            };
            setQuestionContent(updatedContent);
            setpersonalQuestion((prevData: any) => ({
              ...prevData,
              updatedContent: updatedContent, // Update personalInformation with formData
            }));
          }}
        >
          save
        </button>
      </div>
    </Card>
  );
};

export default McqQuestion;
