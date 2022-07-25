import React from 'react';
import Navbar from './Navbar';
import { Box,Grid, Text } from '@chakra-ui/react';
import Table2 from './Table2';
import Filter from './Filter';

const Dashboard = () => {
  return (
    <Box>
      <Navbar />
      <Box w="100%" display="flex" flexDirection={['column', 'row']}>
        <Box w="25%">
          <Filter />
        </Box>
        <Box w={['100%', '50%']}>
          <Table2 />
        </Box>
        <Box
          w={['100%', '25%']}
          shadow="md"
		  p='1rem'
          bg="hsla(214, 57%, 24%, 0.1)"
          h="100vh"
        >
			<Grid templateColumns="repeat(1, 1fr)" p='1rem'>
          <Text>To be reimbursed</Text>
        </Grid>
        <hr />
		<Text fontWeight='600' fontSize='2rem' textAlign='center' p='1.5rem' >$826.96</Text>
		</Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
