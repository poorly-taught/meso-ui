import {
  Card,
  Stack,
  Flex,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function ProgramEditor({ exercises }) {
  const ExerciseInput = ({ exercise }) => {
    return (
      <Card direction="row" bg="bg.2" p={2} mb={1}>
        <Flex direction="column" flex={2}>
          <Text textStyle="name" fontSize={15}>
            {exercise.name}
          </Text>
        </Flex>
        <Flex direction="column" flex={1}>
          <Flex direction="row">
            <Flex dir="column">
              <NumberInput size="sm" defaultValue={15} min={10} max={20}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
            <Flex dir="column">
              <NumberInput size="sm" defaultValue={15} min={10} max={20}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    );
  };

  ExerciseInput.propTypes = {
    exercise: PropTypes.object.isRequired,
  };

  return (
    <Stack>
      {Object.keys(exercises).map((e) => (
        <ExerciseInput key={e} exercise={exercises[e]} />
      ))}
    </Stack>
  );
}

ProgramEditor.propTypes = {
  exercises: PropTypes.object,
};
