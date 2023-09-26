// Card.tsx
import React, { ReactNode } from 'react';
import './Card.css';
import ImageUploader from '../imageUploader/imageUploader';
 // Import the ImageUploader component

interface CardProps {
  children: ReactNode;
  headerColor?: string;
  heading:string
  type:string
}

const Card: React.FC<CardProps> = ({ children, headerColor,heading,type }) => {
  const className = `card${type === 'select' ? '-2' : type === 'question' ? '-3' : ''}`;
  return (
    <div className={className}>
      <div className="card-header" style={{ backgroundColor: headerColor }}>
       <h2>{heading}</h2>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
