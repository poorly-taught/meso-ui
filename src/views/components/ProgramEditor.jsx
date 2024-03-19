import { useRef, useState } from 'react';
import { Card, Stack, Text, Input, Textarea, Flex } from '@chakra-ui/react';


export default function ProgramEditor({ exercises }) {

    const ExerciseInput = ({ exercise }) => {
        return <Card bg='bg.2' p={2} mb={1}>
            {exercise.name}
        </Card>

    }


    return <Stack>
        {Object.keys(exercises).map((e, i) => <ExerciseInput key={e} exercise={exercises[e]} />)}
    </Stack>
}