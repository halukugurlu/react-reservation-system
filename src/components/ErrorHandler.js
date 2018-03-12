import React from 'react';

const errorMessageStyl = {
  backgroundColor: '#ff7272',
  padding: '1em',
};

const ErrorHandler = WrappedComponent => ({showError, children}) => {
  return (
    <WrappedComponent>
      {showError && <div style={errorMessageStyl}>The reservation cannot be found.</div>}
      {children}
    </WrappedComponent>
  );
};

export default ErrorHandler;