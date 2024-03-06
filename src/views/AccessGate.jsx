import { useState } from 'react';
import { Text, Flex, Box, Button, Input, Stack, Link, Circle, ScaleFade} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const LoginForm = ({ setLoginForm }) => {
    return (
      <Stack direction='column' spacing={5} w={'100%'}>
        <Input focusBorderColor='bg.1' variant='outline' placeholder='Username/Email' />
        <Input focusBorderColor='bg.1' variant='outline' placeholder='Password' type='password'/>
        <Button bg='bg.1' color='ft.2' variant='solid' size={'lg'}>
            Login
        </Button>
        <Button  onClick={() => setLoginForm(false)} colorScheme='bg.1' variant='outline' size={'sm'} >
            Create Account
        </Button>
      </Stack>
    )
}

LoginForm.propTypes = {
  setLoginForm: PropTypes.func.isRequired
}

const CreateAccountForm = ({ setLoginForm }) => {
  if (!setLoginForm) return null;
    return (
      <Stack direction='column' spacing={5} w={'100%'}>
        <Input focusBorderColor='bg.1' variant='outline' placeholder='Username' />
        <Input focusBorderColor='bg.1' variant='outline' placeholder='Email' />
        <Input focusBorderColor='bg.1' variant='outline' placeholder='Password' type='password'/>
        <Button colorScheme='bg.1' variant='outline' size={'lg'}>
            Create
        </Button>
        <Button onClick={() => setLoginForm(true)} bg='bg.1' color='ft.2' variant='solid' size={'sm'}>
            Back
        </Button>
      </Stack> 
    )
}

CreateAccountForm.propTypes = {
  setLoginForm: PropTypes.func.isRequired
}

export default function AccessGate() {
    const [ loginForm, setLoginForm ] = useState(true)

    return (
      <Flex direction={'column'} flex={1} h={'100vh'} w={'100vw'}>
        <Flex bg='bg.1' direction={'row'} h={'30%'} justify='center' align='center'>
          <Box bg='bg.2' w="90%" h='90%' pr={4} display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'}>
            <Text textStyle={'name'} fontSize={'35px'}>
              MESOGROWTH
            </Text>
          </Box>
        </Flex>
        <Flex bg='bg.2' direction={'row'} flex={1} justify={'center'}>
          <Flex h='100%' w='90%' direction={'column'} align={'center'} justify={'space-between'}>
            
            <Flex w='100%' flex={1} direction={'row'} justifyContent={'center'} align={'center'}>
              <ScaleFade in={loginForm}>
               { loginForm ? <Text textStyle={'cursive'}>&quot;Take care of your body as if you were going to live forever; and take care of your soul as if you were going to die tomorrow.&quot; — Saint Augustin</Text> : null}
              </ScaleFade>

              <ScaleFade in={!loginForm}>
                { !loginForm ? <Text textStyle={'cursive'}>&quot;Faith is to believe what you do not see; the reward of this faith is to see what you believe.&quot; — Saint Augustine</Text> : null}
              </ScaleFade>
            </Flex>
            
            <Flex flex={2} w='100%' direction={'row'}>
                { loginForm ? <LoginForm setLoginForm={setLoginForm}/> : <CreateAccountForm setLoginForm={setLoginForm} /> }
            </Flex>
           
           
            <Flex direction={'row'} w='100%' pb={5} pt={5} align={'center'} justify={'space-between'}>
              <Link>About Us</Link>
              <Circle size='40px' bg='bg.1' color='white'>
                T
              </Circle>
            </Flex>
          </Flex>
        </Flex>
      </Flex> 
    )
}