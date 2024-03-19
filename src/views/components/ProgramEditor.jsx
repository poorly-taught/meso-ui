import { useRef, useState } from 'react';
import { Card, Text, Input, Textarea } from '@chakra-ui/react';
export default function ProgramEditor() {
    return <Card bg="bg.2" p={2} mb={1} m={0}>
        <Text textStyle='name' fontSize={15}>Name</Text>
        <Input size='sm' name='programName' focusBorderColor="bg.1" variant='outline'></Input>
        <Text textStyle='name' fontSize={15}>Description</Text>
        <Textarea size='sm' name='programDescription' focusBorderColor="bg.1" variant='outline'></Textarea>
    </Card>
}