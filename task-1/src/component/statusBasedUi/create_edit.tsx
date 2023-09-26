// CreatingQuestion.tsx
import React from "react";
import ParagraphQuestion from "../questionTypeComponent/paragraphQuestion";
import McqQuestion from "../questionTypeComponent/mcqQuestion";
import VideoQuestion from "../questionTypeComponent/videoQuestion";
interface CreatingQuestionProps {
  content: any;
  index: number;
  questionInput: string;
  setQuestionInput: React.Dispatch<React.SetStateAction<string>>;
  newChoice: string;
  setNewChoice: React.Dispatch<React.SetStateAction<string>>;
  questionContent: any[];
  setQuestionContent: React.Dispatch<React.SetStateAction<any[]>>;
  SelectType: (e: React.ChangeEvent<HTMLSelectElement>, selectedObjectId: string) => void;
  status:string
}

const CreatingQuestion: React.FC<CreatingQuestionProps> = ({
  content,
  index,
  questionInput,
  setQuestionInput,
  newChoice,
  setNewChoice,
  questionContent,
  setQuestionContent,
  SelectType,
  status
}) => {
  return (
    <div key={index}>
      {content.type && (
        <>
          <div>
            {(() => {
              switch (content.type) {
                case "paragraph":
                  return <ParagraphQuestion
                  questionInput={questionInput}
                  setQuestionInput={setQuestionInput}
                  index={index}
                  questionContent={questionContent}
                  setQuestionContent={setQuestionContent}
                  typeofQuestion="paragraph"
                  status={status}
                  content={content}
                  />;

                case "mcq":
                  return (
                    <McqQuestion
                      content={content}
                      questionInput={questionInput}
                      setQuestionInput={setQuestionInput}
                      newChoice={newChoice}
                      setNewChoice={setNewChoice}
                      index={index}
                      questionContent={questionContent}
                      setQuestionContent={setQuestionContent}
                      typeofQuestion="mcq"
                      status={status}
                    />
                  );

                case "short answer":
                  return <ParagraphQuestion
                  questionInput={questionInput}
                  setQuestionInput={setQuestionInput}
                  index={index}
                  questionContent={questionContent}
                  setQuestionContent={setQuestionContent}
                  typeofQuestion="short_answer"
                  status={status}
                  content={content}
                  />;;

                case "yes/no":
                  return <ParagraphQuestion
                  questionInput={questionInput}
                  setQuestionInput={setQuestionInput}
                  index={index}
                  questionContent={questionContent}
                  setQuestionContent={setQuestionContent}
                  typeofQuestion="yes/no"
                  status={status}
                  content={content}
                  />;
                
                case "file_upload":
                  return <ParagraphQuestion
                  questionInput={questionInput}
                  setQuestionInput={setQuestionInput}
                  index={index}
                  questionContent={questionContent}
                  setQuestionContent={setQuestionContent}
                  typeofQuestion="file_upload"
                  status={status}
                  content={content}
                  />;

                  case "dropdown":
                    return <McqQuestion
                    content={content}
                      questionInput={questionInput}
                      setQuestionInput={setQuestionInput}
                      newChoice={newChoice}
                      setNewChoice={setNewChoice}
                      index={index}
                      questionContent={questionContent}
                      setQuestionContent={setQuestionContent}
                      typeofQuestion="dropdown"
                      status={status}
                    />;

                  case "video":
                    return <VideoQuestion
                    content={content}
                      questionInput={questionInput}
                      setQuestionInput={setQuestionInput}
                      newChoice={newChoice}
                      setNewChoice={setNewChoice}
                      index={index}
                      questionContent={questionContent}
                      setQuestionContent={setQuestionContent}
                      typeofQuestion="video"
                      status={status}
                    />;
                default:
                  return null;
              }
            })()}
          </div>
        </>
      )}
    </div>
  );
};

export default CreatingQuestion;
