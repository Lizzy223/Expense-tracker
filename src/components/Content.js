import { Grid, Box, Text ,Modal,useDisclosure, ModalOverlay, ModalBody, ModalContent,ModalHeader, ModalCloseButton, ModalFooter,Button, Circle} from '@chakra-ui/react'
import Table2 from './Table2'
import AddIcon from '@mui/icons-material/Add';
import Form from './Form'

const Content =()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <Grid overflow='hidden'  templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)']} width={['75%','50%']} gap={3}>
            <Box >
                <Table2/>

                <Box bottom='20' right='10' position='absolute' >
                    <Circle onClick={onOpen} cursor='pointer' w='5rem' h='5rem' bg='red' justifyContent='center' alignItems='center' p='1rem' >
                        <AddIcon style={{ color:'#fff'}}/>
                    </Circle>
                </Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent w='70vw'>
                        <ModalHeader>Add Expense</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Form/>
                        </ModalBody>
            
                        <ModalFooter>
                        <Box float='right'>
                            <Button bg='blue' color='#fff' >Save</Button>
                            <Button bg='white' color='blue' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                        </Box>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
            <Box >
                <small>To be reimbursed</small>
                <hr/>
                <Text fontSize='1.2em' fontWeight='700' mt='1.5rem' >$826.27</Text>
            </Box>
        </Grid>
    )
}


export default Content;