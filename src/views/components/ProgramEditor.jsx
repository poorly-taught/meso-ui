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
import { useCallback } from "react";

const ExerciseInput = ({ exercise, onChange }) => {
  const onValueChange = useCallback((exercise, value, type) => {
    onChange(prev => {
      if (prev[exercise._id]) {
        return {
          ...prev,
          [exercise._id]: {
            ...prev[exercise._id],
            exercise,
            [type]: parseInt(value)
          }
        }

      }

      if (!prev[exercise._id]) {
        return {
          ...prev,
          [exercise._id]: {
            exercise,
            [type]: parseInt(value)
          }
        }
      }
    })
  }, [onChange])
  
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
            <NumberInput size="sm" defaultValue={0} min={0} max={50} onChange={(value) => onValueChange(exercise, value, 'sets')}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
          <Flex dir="column">
            <NumberInput size="sm" defaultValue={0} min={0} max={50} onChange={(value) => onValueChange(exercise, value, 'reps')}>
              <NumberInputField size="sm" />
              <NumberInputStepper size="sm">
                <NumberIncrementStepper size="sm" />
                <NumberDecrementStepper size="sm" />
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
export default function ProgramEditor({ exercises, onChange }) {
  return (
    <Stack>
      {Object.keys(exercises).map((e) => (
        <ExerciseInput key={e} exercise={exercises[e]} onChange={onChange} />
      ))}
    </Stack>
  );
}

ProgramEditor.propTypes = {
  exercises: PropTypes.object,
};
