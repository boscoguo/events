import React, { ReactElement } from "react";
import "./slopRctangle.scss";

interface SlopRectangleProps {
  children?: ReactElement,
  backgroundColor: string;
  border?: string;
}

const SlopRectangle = ({ children, backgroundColor, border }: SlopRectangleProps) => {


  return (
    <div className="slop-rectangle" style={{ backgroundColor: backgroundColor, border: border }} data-testid="slop-rectangle-element">
      <div className="slop-rectangle__children">
        {children}
      </div>
    </div>
  );
};

export default SlopRectangle;
