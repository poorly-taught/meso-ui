import { useCallback, useState } from "react";
import {
  Text,
  Flex,
  Box,
  Link,
  Circle,
  ScaleFade,
  Spinner,
  AbsoluteCenter,
} from "@chakra-ui/react";
import CreateAccountForm from "./components/CreateAccountForm";
import LoginForm from "./components/LoginForm";
import { usePostUser } from "../hooks/api/useUsers";
import { usePostAuth } from "../hooks/api/useAuth";

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
