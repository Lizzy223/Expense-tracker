import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import {useState} from 'react'
import {ViewIcon,ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  let navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <Box
      minH={'100vh'}
      display='flex'
      flexDirection='column'
      gap='5'
      alignItems={'center'}
      justifyContent={'center'}
      bg="hsl(214, 35%, 21%)"
      color="#fff"
    >
      <Stack
        align={'center'}
        w="full"
        p="1rem"
        borderBottom="4px solid hsla(214, 86%, 55%, 0.5)"
      >
        <Heading
          fontSize={['1.35rem', '1.75rem']}
          textAlign="center"
          fontWeight="600"
        >
          Expense Manager
        </Heading>
      </Stack>
      <Stack alignItems="center" justifyContent="center" w="50%">
        <Box
          rounded={'lg'}
          color="white"
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel color='hsla(214, 87%, 92%, 0.7)'>Username</FormLabel>
              <Input type="text" color='hsla(214, 87%, 92%, 0.7)'  bg='#adc8eb24' border='none'/>
            </FormControl>
            <FormControl id="password">
              <FormLabel color='hsla(214, 87%, 92%, 0.7)'>Password</FormLabel>
              <InputGroup borderRadius='4px'>
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              color='hsla(214, 87%, 92%, 0.7)'
              borderRadius='4px'
              bg='#adc8eb24' border='none'
              placeholder=""
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm"bg='none' border='none' onClick={handleClick}>
                {show ? <ViewOffIcon/> : <ViewIcon/>}
              </Button>
            </InputRightElement>
          </InputGroup>
            </FormControl>
            <Stack >
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              ></Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                width={['50%', '50%']}
                float={['left', 'left']}
                onClick={e => handleSubmit(e)}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
