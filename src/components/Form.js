import { Grid, Box , Stack, FormControl, FormLabel , Select,  Input, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react'

const Form = () =>{
    return(
        <>
            <Grid templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)']}>
                <Box>
                    <Stack spacing={['3','4']}  p='.75rem' color='gray' fontSize='.75rem' >
                       
                        <FormControl>
                            <FormLabel htmlFor='merchant'>Merchant</FormLabel>
                            <Select placeholder=''  border='1px solid #ccc'  bg='#ccc' color='#000'>
                                <option value='option1'></option>
                                <option value='option1'>Taxi</option>
                                <option value='option2'>Breakfast</option>
                                <option value='option3'>Office Supplies</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='email'>Total</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none' color='gray' fontSize='1.2em' children='$' />
                                <Input id='number' type='text' border='1px solid #ccc'  bg='#ccc' color='#000'   />
                            </InputGroup> 
                        </FormControl>
                        
                        <FormControl>
                            <FormLabel htmlFor='min'>Date</FormLabel>
                                <Input  type='datet' border='1px solid red' bg='red.100' color='#ccc'   />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='max'>Comment</FormLabel>
                            <Textarea id='' type='text'  bg='#ccc' color='#000' border='none'  />
                        </FormControl>
                    </Stack>
                </Box>
                <Box h='100%' >
                    <Input type='file'  py='5rem' px='1rem' h='100%' color='blue'/>
                </Box>
            </Grid>
        </>
    )
}

export default Form;