
import React from 'react';

/**
 * Determine if a function or boolean is truthy.
 * @param {Function|Boolean|Any} condition
 * @param  {...any} params
 * @returns {Boolean}
 */
function checkCondition(condition, ...params) {
  const safeParams = params || [];
  if (typeof condition === 'function') {
    return !!condition(...safeParams);
  }
  if (typeof condition === 'boolean') {
    return condition;
  }
  return !!condition;
}

const ShowIf = ({
  condition,
  children,
}) => {
  if (!checkCondition(condition)) {
    return null;
  }
  return (
    <>
      {children}
    </>
  );
};

ShowIf.defaultProps = {
  condition: false,
  children: null,
};

export default ShowIf;
