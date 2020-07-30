import React from 'react';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  //TODO: implement loader
  return isLoading ? <h1>Loading...</h1> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
