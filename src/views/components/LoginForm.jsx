import { useState, useCallback } from "react";
import PropTypes from 'prop-types';
import { Stack, Input, Button } from "@chakra-ui/react";
import PasswordInput from "../../components/PasswordInput";

export default function LoginForm ({ setLoginForm, loginUserHandler }) {
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
      <PasswordInput onChange={inputHandler} />
      <Button
        onClick={() => {
          loginUserHandler(loginFormInputs);
        }}
        bg="bg.1"
        color="ft.2"
        variant="solid"
        size={"lg"}
      >
        Login
      </Button>
      <Button
        onClick={() => setLoginForm(false)}
        colorScheme="bg.1"
        variant="outline"
        size={"sm"}
      >
        Create Account
      </Button>
    </Stack>
  );
};

LoginForm.propTypes = {
  setLoginForm: PropTypes.func.isRequired,
  loginUserHandler: PropTypes.func.isRequired,
};
