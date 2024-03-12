import { AbsoluteCenter, Spinner } from "@chakra-ui/react";

export default function Loader() {
  return (
    <AbsoluteCenter
      zIndex={99}
      bg="white"
      opacity={0.5}
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
  );
}