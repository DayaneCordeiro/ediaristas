import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";
import { Container } from "@mui/material"; // Limit screen size

// function that will be the component
// All component needs to have Upper case to React knows that it's a component
const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Safe environment <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
