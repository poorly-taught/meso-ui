import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Stack, Input, Button } from "@chakra-ui/react";
import PasswordInput from "../../components/PasswordInput";

export default function CreateAccountForm({
  setLoginForm,
  createAccountHandler,
}) {
  const [loginFormInputs, setLoginFormInputs] = useState({});

  const inputHandler = useCallback(
    (event) => {
      setLoginFormInputs((prev) => {
        return {
          ...prev,
          [event.target.name]: event.target.value,
        };
      });
    },
    [setLoginFormInputs]
  );

  return (
    <Stack direction="column" spacing={5} w={"100%"}>
      <Input
        onChange={inputHandler}
        name="username"
        focusBorderColor="bg.1"
        variant="outline"
        placeholder="Username"
      />
      <Input
        onChange={inputHandler}
        name="email"
        focusBorderColor="bg.1"
        variant="outline"
        placeholder="Email"
      />
      <PasswordInput onChange={inputHandler} />
      <Button
        colorScheme="bg.1"
        variant="outline"
        size={"lg"}
        onClick={() => createAccountHandler(loginFormInputs)}
      >
        Create
      </Button>
      <Button
        onClick={() => setLoginForm(true)}
        bg="bg.1"
        color="ft.2"
        variant="solid"
        size={"sm"}
      >
        Back
      </Button>
    </Stack>
  );
}

CreateAccountForm.propTypes = {
  setLoginForm: PropTypes.func.isRequired,
  createAccountHandler: PropTypes.func.isRequired,
};
