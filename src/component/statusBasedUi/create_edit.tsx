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
  setpersonalQuestion: (content: any[]) => void;
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
  status,
  setpersonalQuestion
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
                  SelectType={SelectType}
                  questionInput={questionInput}
                  setQuestionInput={setQuestionInput}
                  index={index}
                  questionContent={questionContent}
                  setQuestionContent={setQuestionContent}
                  typeofQuestion="paragraph"
                  status={status}
                  content={content}
                  setpersonalQuestion={setpersonalQuestion}
                  />;

                case "mcq":
                  return (
                    <McqQuestion
                     SelectType={SelectType}
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
                      setpersonalQuestion={setpersonalQuestion}
                    />
                  );

                case "short answer":
                  return <ParagraphQuestion
                  SelectType={SelectType}
                  questionInput={questionInput}
                  setQuestionInput={setQuestionInput}
                  index={index}
                  questionContent={questionContent}
                  setQuestionContent={setQuestionContent}
                  typeofQuestion="short_answer"
                  status={status}
                  content={content}
                  setpersonalQuestion={setpersonalQuestion}
                  />;;

                case "yes/no":
                  return <ParagraphQuestion
                  SelectType={SelectType}
                  questionInput={questionInput}
                  setQuestionInput={setQuestionInput}
                  index={index}
                  questionContent={questionContent}
                  setQuestionContent={setQuestionContent}
                  typeofQuestion="yes/no"
                  status={status}
                  content={content}
                  setpersonalQuestion={setpersonalQuestion}
                  />;
                
                case "file_upload":
                  return <ParagraphQuestion
                  SelectType={SelectType}
                  questionInput={questionInput}
                  setQuestionInput={setQuestionInput}
                  index={index}
                  questionContent={questionContent}
                  setQuestionContent={setQuestionContent}
                  typeofQuestion="file_upload"
                  status={status}
                  content={content}
                  setpersonalQuestion={setpersonalQuestion}
                  />;

                  case "dropdown":
                    return <McqQuestion
                    SelectType={SelectType}
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
                      setpersonalQuestion={setpersonalQuestion}
                    />;

                  case "video":
                    return <VideoQuestion
                    SelectType={SelectType}
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
                      setpersonalQuestion={setpersonalQuestion}
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
