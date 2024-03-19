import { useRef, useState } from 'react';
import { Card, Stack, Text, Input, Textarea, Flex } from '@chakra-ui/react';


export default function ProgramEditor({ exercises }) {

    const ExerciseInput = (e) => <Card p={2} mb={1}>
        test
    </Card>

    return <Stack>
        {Object.keys(exercises).map((e) => <ExerciseInput />)}
    </Stack>
}