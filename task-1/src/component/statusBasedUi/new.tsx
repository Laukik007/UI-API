// NewQuestion.tsx
import React from "react";

interface NewStatusProps {
  content: any;
  index: number;
  SelectType: (e: React.ChangeEvent<HTMLSelectElement>, selectedObjectId: string) => void;
}

const StatusNew: React.FC<NewStatusProps> = ({ content, index, SelectType }) => {
  return (
    <div key={index}>
      <h3>Type</h3>
      <select onChange={(e) => SelectType(e, content.id)} value={content.type}>
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
  );
};

export default StatusNew;
