import Card from '../card/card';
import crossbtn from '/cross.svg'

interface VidoQuestionProps {
    content: any; 
    questionInput: string;
    setQuestionInput: (input: string) => void;
    newChoice: string;
    setNewChoice: (choice: string) => void;
    typeofQuestion:string
    index: number;
    questionContent: any[];
    setQuestionContent: (content: any[]) => void;
    status:string
    SelectType: (e: React.ChangeEvent<HTMLSelectElement>, selectedObjectId: string) => void;
    setpersonalQuestion: (content: any) => void;
}


const VideoQuestion: React.FC<VidoQuestionProps> = ({
    content,
    questionInput,
    setQuestionInput,
    index,
    questionContent,
    setQuestionContent,
    SelectType,
    setpersonalQuestion
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
    <Card type='question' heading='Question' headerColor="#D0F7FA">
        <div key={index}>
          <h3 style={{margin:0,marginBottom:"0.5rem"}}>Type</h3>
          <select style={{ width: '25.5rem',height:"2rem"}}  onChange={(e) => SelectType(e, content.id)} value={content.type}>
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
    <div style={{display: 'flex',flexDirection:"column"}}>
        <h3 style={{margin: '0',marginTop: '1rem', marginBottom: '1rem'}}>Question</h3>
        <input style={{marginBottom: '1rem', height: '1.5rem'}}  onChange={(e) => setQuestionInput(e.target.value)} type='text' placeholder='Q:'/>
        <textarea style={{marginBottom: '1rem'}}  rows={4} cols={30} placeholder='Type here'></textarea>
        <div style={{marginBottom: '1rem',display: 'flex',justifyContent: 'space-between'}}>
        <input style={{width:"60%",height:"1.5rem"}}  type='text' placeholder='max duration of video'/>
        <select style={{width:"30%",height:"2rem"}}>
            <option>minutes</option>
            <option>seconds</option>
        </select>
        </div>
       
    </div>
      <div  style={{width: '25rem',display: 'flex',justifyContent: 'space-between',height: '2rem',marginTop:"1rem"}}>
      <div onClick={handleDelete} style={{display:"flex",cursor:"pointer"}}><img style={{width: '1.6rem',cursor:"pointer"}} src={crossbtn}/><span style={{color: '#A80000',fontWeight: '550',marginTop: '8px'}}>Delete Question</span></div>
        <button
        style={{backgroundColor: '#087B2F',color: 'white',cursor:"pointer"}}
          onClick={() => {
            const updatedContent = [...questionContent];
            updatedContent[index] = {
              ...updatedContent[index],
              question: questionInput,
              status:'saved'
              
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

export default VideoQuestion;
