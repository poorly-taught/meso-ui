import { useCallback, useState } from "react";
import {
  Text,
  Flex,
  Box,
  Button,
  Input,
  Stack,
  Link,
  Circle,
  ScaleFade,
  InputGroup,
  InputRightElement,
  Spinner,
  AbsoluteCenter,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { usePostUser } from "../hooks/useUsers";
import { usePostAuth } from "../hooks/useAuth";

const PasswordInput = ({ onChange }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        onChange={onChange}
        pr="4.5rem"
        name="password"
        focusBorderColor="bg.1"
        type={show ? "text" : "password"}
        placeholder="Password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" bg="bg.2" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const LoginForm = ({ setLoginForm, loginUserHandler }) => {
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

const CreateAccountForm = ({ setLoginForm, createAccountHandler }) => {
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
};

CreateAccountForm.propTypes = {
  setLoginForm: PropTypes.func.isRequired,
  createAccountHandler: PropTypes.func.isRequired,
};

export default function AccessGate() {
  const [loginForm, setLoginForm] = useState(true);
  const { isLoading: userIsLoading, post: userPost } = usePostUser();
  const { isLoading: authIsLoading, post: authPost } = usePostAuth();

  const createAccountHandler = useCallback(
    async (values) => {
      if (!values.username || !values.email || !values.password) return;
      await userPost(values);
    },
    [userPost]
  );

  const loginUserHandler = useCallback(
    async (values) => {
      if (!values.username || !values.password) return;
      await authPost(values);
    },
    [authPost]
  );

  return (
    <Flex direction={"column"} flex={1} h={"100vh"} w={"100vw"}>
      {userIsLoading || authIsLoading && (
        <AbsoluteCenter
          zIndex={99}
          bg="white"
          opacity={userIsLoading || authIsLoading ? 0.5 : 1}
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"100vw"}
        >
          <Spinner
            thickness="5px"
            speed="0.80s"
            emptyColor="bg.2"
            color="bg.1"
            size="xl"
          />
        </AbsoluteCenter>
      )}

      <Flex
        bg="bg.1"
        direction={"row"}
        h={"30%"}
        justify="center"
        align="center"
      >
        <Box
          bg="bg.2"
          w="90%"
          h="90%"
          pr={4}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
        >
          <Text textStyle={"name"} fontSize={"35px"}>
            MESOGROWTH
          </Text>
        </Box>
      </Flex>
      <Flex bg="bg.2" direction={"row"} flex={1} justify={"center"}>
        <Flex
          h="100%"
          w="90%"
          direction={"column"}
          align={"center"}
          justify={"space-between"}
        >
          <Flex
            w="100%"
            flex={1}
            direction={"row"}
            justifyContent={"center"}
            align={"center"}
          >
            <ScaleFade in={loginForm}>
              {loginForm && (
                <Text textStyle={"cursive"}>
                  &quot;Take care of your body as if you were going to live
                  forever; and take care of your soul as if you were going to
                  die tomorrow.&quot; — Saint Augustin
                </Text>
              )}
            </ScaleFade>

            <ScaleFade in={!loginForm}>
              {!loginForm && (
                <Text textStyle={"cursive"}>
                  &quot;Faith is to believe what you do not see; the reward of
                  this faith is to see what you believe.&quot; — Saint Augustine
                </Text>
              )}
            </ScaleFade>
          </Flex>

          <Flex flex={2} w="100%" direction={"row"}>
            {loginForm ? (
              <LoginForm
                setLoginForm={setLoginForm}
                loginUserHandler={loginUserHandler}
              />
            ) : (
              <CreateAccountForm
                setLoginForm={setLoginForm}
                createAccountHandler={createAccountHandler}
              />
            )}
          </Flex>

          <Flex
            direction={"row"}
            w="100%"
            pb={5}
            pt={5}
            align={"center"}
            justify={"space-between"}
          >
            <Link>About Us</Link>
            <Circle size="40px" bg="bg.1" color="white">
              T
            </Circle>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
