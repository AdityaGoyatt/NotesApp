import { Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      {isRouteErrorResponse(error) ? (
        <Heading fontStyle="Caprismo">
          The Page you are trying to access doesnt exists
        </Heading>
      ) : (
        <Heading>Opps Sorry an Error Occured</Heading>
      )}
    </>
  );
};

export default ErrorPage;
