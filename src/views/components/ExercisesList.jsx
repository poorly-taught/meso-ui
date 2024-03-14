import ExerciseCard from '../../components/GeneralCard';
import { Stack, Button, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types'

export default function ExercisesList({ exercises }) {
  return (
    <Stack>
      {exercises.map((e, i) => {
        return (
          <ExerciseCard key={e.name + i} name={e.name}>
            <Button p={0} bg={"none"} borderRadius={"50%"}>
              <Text
                m={0}
                fontSize={25}
                onClick={() => {
                  console.log(e.name);
                }}
              >
                +
              </Text>
            </Button>
          </ExerciseCard>
        );
      })}
    </Stack>
  );
}

ExercisesList.propTypes = {
    exercises: PropTypes.array.isRequired
}