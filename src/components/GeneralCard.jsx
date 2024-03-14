import { Card, Text, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function GeneralCard({ name, children }) {
  return (
    <Card direction={"row"} bg="bg.2" p={2} mb={1}>
      <Flex direction="column" flex={1} justify={"center"}>
        <Text textStyle={"name"} fontSize={15}>
          {name}
        </Text>
      </Flex>
      <Flex direction="column" justify={"center"}>
        {children}
      </Flex>
    </Card>
  );
}

GeneralCard.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
};
