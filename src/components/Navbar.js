import { Box, Button,HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box w='100%' display='flex' bg='#233348' justifyContent='space-between' p='1rem'>
        <Box>
            <Text color='#f5f9ff' fontWeight='600' fontSize='1.375rem'>Expense Tracker</Text>
        </Box>
        <HStack gap='3'>
            <Button bg='hsla(214, 65%, 85%, 0.06)'  p='1px 6px' color='hsl(214, 100%, 70%)' >Info</Button>
            <Button bg='hsla(214, 65%, 85%, 0.06)'  p='1px 6px' color='hsl(214, 100%, 70%)' >Logout</Button>
        </HStack>
    </Box>
  )
}

export default Navbar