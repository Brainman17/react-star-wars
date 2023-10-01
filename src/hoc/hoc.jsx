import { useState } from "react";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

const withApiError = (Component) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);

    return (
      <>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <Component setErrorApi={setErrorApi} {...props} />
        )}
      </>
    );
  };
};

export default withApiError;
