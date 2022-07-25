import {
  Stack,
  FormControl,
  FormLabel,
  Grid,
  Select,
  Text,
  Checkbox,
  CheckboxGroup,
  Input,
  InputGroup,
  HStack,
  InputLeftElement,
} from '@chakra-ui/react';


const rows = [
  {
    id: '1',
    date: '05/25/2022',
    merchant: 'Taxi',
    total: '$565.38',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '2',
    date: '05/25/2022',
    merchant: 'Breakfast',
    total: '$117.2',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '3',
    date: '05/25/2022',
    merchant: 'Office Supplies',
    total: '$105.17',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '4',
    date: '05/25/2022',
    merchant: 'Shuttle',
    total: '$76',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '5',
    date: '05/25/2022',
    merchant: 'Taxi',
    total: '$565.38',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '6',
    date: '05/25/2022',
    merchant: 'Breakfast',
    total: '$117.2',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '7',
    date: '05/25/2022',
    merchant: 'Office Supplies',
    total: '$105.17',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '8',
    date: '05/25/2022',
    merchant: 'Shuttle',
    total: '$76',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '9',
    date: '05/25/2022',
    merchant: 'Taxi',
    total: '$565.38',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '10',
    date: '05/25/2022',
    merchant: 'Taxi',
    total: '$565.38',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
];


const Filter = () => {
  const sortMerchant =()=>{
    return(
    rows.filter(row => row.merchant === 'Taxi').map(filteredName => (
   
      console.log(filteredName)
      
      
  )))
  }
  

  
  return (
    <>
      <Stack
        spacing={['3', '6']}
        bg="hsla(214, 57%, 24%, 0.1)"
        shadow='md'
        h="100vh"
        p="1rem"
        color="gray"
        fontSize=".85rem"
      >
        <Grid templateColumns="repeat(2, 1fr)">
          <Text>Filter Expense</Text>
          <Text color="blue">Clear Filters</Text>
        </Grid>
        <hr />
        <FormControl>
          <FormLabel htmlFor="email">From</FormLabel>
          <Input id="" type="date" border="none" bg="#ccc" color="#000" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">To</FormLabel>
          <Input id="" type="date" border="none" bg="#ccc" color="#000" />
        </FormControl>
        <HStack>
          <FormControl>
            <FormLabel htmlFor="min">Min</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray"
                fontSize="1.2em"
                children="$"
              />
              <Input
                id="number"
                type="text"
                border="none"
                bg="#ccc"
                color="#000"
              />
            </InputGroup>
          </FormControl>

          <Text color="gray" mt=".5rem" fontSize="1em">
            -
          </Text>
          <FormControl>
            <FormLabel htmlFor="max">Max</FormLabel>
            <Input id="" type="text" border="none" bg="#ccc" color="#000" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel htmlFor="merchant">Merchant</FormLabel>
          <Select placeholder="" bg="#ccc" color="#000">
            <option value="option1"></option>
            <option onClick={()=>sortMerchant()} value="option1">Taxi</option>
            <option value="option2">Breakfast</option>
            <option value="option3">Office Supplies</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="status">Status</FormLabel>
          <CheckboxGroup spacing={2}>
            <Checkbox colorScheme='#ccc'>New</Checkbox>
            <Checkbox colorScheme='#ccc'>In Progress</Checkbox>
            <Checkbox colorScheme='#ccc'>Reimbursed</Checkbox>
          </CheckboxGroup>
        </FormControl>
      </Stack>
    </>
  );
};

export default Filter;
