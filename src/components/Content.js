import { Grid, GridItem, Text } from '@chakra-ui/react'
import Table2 from './Table2'

const Content =()=>{
    return(
        <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)']} gap={6}>
            
            
            <GridItem w='100%' h='100%' >
                <Table2/>
            </GridItem>
            <GridItem w='100%' h='100%' >
                <small>To be reimbursed</small>
                <hr/>
                <Text fontSize='1.2em'>$826.27</Text>
            </GridItem>
        </Grid>
    )
}

export default Content;