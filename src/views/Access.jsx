import { useCallback, useState, useContext } from "react";
import {
  Text,
  Flex,
  Box,
  Link,
  Circle,
  ScaleFade,
  useToast,
} from "@chakra-ui/react";
import Loader from "../components/Loader";
import CreateAccountForm from "./components/CreateAccountForm";
import LoginForm from "./components/LoginForm";
import { usePostUser } from "../hooks/api/useUsers";
import { usePostAuth } from "../hooks/api/useAuth";
import { AuthContext } from "../store/authContext";

export default function Access() {
  const authContext = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState(true);
  const { isLoading: userIsLoading, post: userPost } = usePostUser();
  const { isLoading: authIsLoading, post: authPost } = usePostAuth();

  const toast = useToast();

  const createAccountHandler = useCallback(
    async (values) => {
      if (!values.username || !values.email || !values.password) return;
      try {
        await userPost(values);
        toast({
          title: "Account Created",
          description: "Go ahead and try to login.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setLoginForm(true);
      } catch (error) {
        toast({
          title: error.statusText,
          description:
            "If there's an issue please describe what's happened by pressing the T.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    },
    [userPost, toast]
  );

  const loginUserHandler = useCallback(
    async (values) => {
      if (!values.username || !values.password) return;
      try {
        const token = await authPost(values);
        authContext.updateToken(token);
      } catch (error) {
        console.log(error);
        toast({
          title: error.statusText,
          description:
            "If there's an issue please describe what's happened by pressing the T.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    },
    [authPost, toast, authContext]
  );

  return (
    <Flex direction={"column"} flex={1} h={"100vh"} w={"100vw"}>
      {(userIsLoading || authIsLoading) && <Loader />}
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
