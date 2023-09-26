// NewQuestion.tsx
import React from "react";
import Card from "../card/card";

interface NewStatusProps {
  content: any;
  index: number;
  SelectType: (e: React.ChangeEvent<HTMLSelectElement>, selectedObjectId: string) => void;
}

const StatusNew: React.FC<NewStatusProps> = ({ content, index, SelectType }) => {
  return (
    <Card headerColor="#D0F7FA" heading='Question' type="select">
         <div key={index}>
          <h3 style={{margin:0,marginBottom:"0.7rem"}}>Type</h3>
          <select style={{ width: '30rem',height:"2rem"}}  onChange={(e) => SelectType(e, content.id)} value={content.type}>
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
    </Card>
 
  );
};

export default StatusNew;
