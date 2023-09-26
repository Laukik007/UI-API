// Card.tsx
import React, { ReactNode } from 'react';
import './Card.css';
import ImageUploader from '../imageUploader/imageUploader';
 // Import the ImageUploader component

interface CardProps {
  children: ReactNode;
  headerColor?: string;
  heading:string
}

const Card: React.FC<CardProps> = ({ children, headerColor,heading }) => {
  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: headerColor }}>
       <h2>{heading}</h2>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
