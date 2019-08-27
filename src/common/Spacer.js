
import React from 'react';

const HorizontalRule = () => (
  <hr className="w-100" />
);

const Spacer = ({ showLine, showLineTop, showLineMiddle, showLineBottom }) => (
  <>
    {showLineTop ? (
      <HorizontalRule />
    ) : null}
    <div className="p-4" />
    {showLineMiddle || showLine ? (
      <HorizontalRule />
    ) : null}
    <div className="p-4" />
    {showLineBottom ? (
      <HorizontalRule />
    ) : null}
  </>
);

export default Spacer;
