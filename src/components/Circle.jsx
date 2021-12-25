import React from "react";

function Circle({ content, classColor }) {
  return (
    <div>
      <button className={classColor}>{content}</button>
    </div>
  );
}

export default Circle;
