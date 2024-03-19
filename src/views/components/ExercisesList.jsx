
import { useState } from 'react';
import { AddIcon, CheckIcon } from '@chakra-ui/icons'
import { Stack, Card, Flex, Button, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types'

const ExerciseCard = (e, i, selected, onSelect) => {
  return <Card key={e.name + i} direction={"row"} bg="bg.2" p={2} mb={1}>
    <Flex direction="column" flex={1} justify={"center"}>
      <Text textStyle={"name"} fontSize={15}>
        {e.name}
      </Text>
    </Flex>
    <Flex direction="column" justify={"center"}>
      <Button p={0} bg={"none"} borderRadius={"50%"} onClick={() => {
        onSelect((prev) => {
          if (prev[e._id]) {
            const tmp = { ...prev }
            delete tmp[e._id];
            return tmp
          }

          return {
            ...prev,
            [e._id]: e
          }
        })
      }}>
        <Text
          m={0}
        >
          {selected ? <CheckIcon /> : <AddIcon />}
        </Text>
      </Button>
    </Flex>
  </Card>
}

export default function ExercisesList({ exercises, selectedExercises, onSelect }) {

  return (
    <Stack>
      {exercises.map((e, i) => ExerciseCard(e, i, selectedExercises[e._id], onSelect))}
    </Stack>
  );
}

ExercisesList.propTypes = {
  exercises: PropTypes.array.isRequired,
  selectedExercises: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}
