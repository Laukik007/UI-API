// Card.tsx
import React, { ReactNode } from 'react';
import './Card.css';
import { Content } from 'antd/es/layout/layout';

interface CardProps {
  children: ReactNode;
  headerColor?: string;
  heading:string
  type:string
}

const Card: React.FC<CardProps> = ({ children, headerColor,heading,type }) => {
  const className = `card${type === 'select' ? '-2' : type === 'question' ? '-3' : ''}`;
  return (
    <Content style={{ padding: '24px' }}>
    <div className={className}>
      <div className="card-header" style={{ backgroundColor: headerColor }}>
       <h2>{heading}</h2>
      </div>
      <div className="card-content">{children}</div>
    </div>
    </Content>
  );
};

export default Card;
