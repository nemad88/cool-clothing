import React from "react";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  console.log(isLoading);
  return isLoading ? <h1>Loading...</h1> : <WrappedComponent {...otherProps} />;
  // return <h1>Loading...</h1>
};

export default WithSpinner;
