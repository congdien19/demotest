import React from 'react';
import './StyledComponent.css';

interface StyledComponentProps {
  title: string;
  children: React.ReactNode;
}

const StyledComponent: React.FC<StyledComponentProps> = ({ title, children }) => {
  return (
    <div className="styled-component">
      <h2 className="styled-component-title">{title}</h2>
      <div className="styled-component-content">
        {children}
      </div>
    </div>
  );
};

export default StyledComponent;