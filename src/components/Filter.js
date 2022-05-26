import { Stack, FormControl, FormLabel,Grid,Select, Text,Checkbox, CheckboxGroup, Input, InputGroup,HStack, InputLeftElement } from '@chakra-ui/react'

const Filter = () =>{
    return(
        <>
            <Stack spacing={['3','6']}  p='.75rem' color='gray' fontSize='.85rem' >
                <Grid templateColumns='repeat(2, 1fr)' >
                    <Text >Filter Expense</Text>
                    <Text color='blue'>Clear Filters</Text>
                </Grid>
                <hr/>
                <FormControl>
                    <FormLabel htmlFor='email'>From</FormLabel>
                    <Input id='' type='date' border='none' bg='#ccc' color='#000' />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>To</FormLabel>
                    <Input id='' type='date' border='none' bg='#ccc' color='#000'  />
                </FormControl>
                <HStack>
                    <FormControl>
                        <FormLabel htmlFor='min'>Min</FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' color='gray' fontSize='1.2em' children='$' />
                            <Input id='number' type='text' border='none' bg='#ccc' color='#000'   />
                        </InputGroup>                        
                    </FormControl>

                    <Text color='gray' mt='.5rem' fontSize='1em'>-</Text>
                    <FormControl>
                        <FormLabel htmlFor='max'>Max</FormLabel>
                        <Input id='' type='text'  border='none' bg='#ccc' color='#000'   />
                    </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel htmlFor='merchant'>Merchant</FormLabel>
                    <Select placeholder=''>
                        <option value='option1'></option>
                        <option value='option1'>Taxi</option>
                        <option value='option2'>Breakfast</option>
                        <option value='option3'>Office Supplies</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='status'>Status</FormLabel>
                    <CheckboxGroup spacing={2}>
                        <Checkbox>New</Checkbox>
                        <Checkbox>In Progress</Checkbox>
                        <Checkbox>Reimbursed</Checkbox>
                    </CheckboxGroup>
                </FormControl>
            </Stack>
        </>
    )
}

export default Filter;