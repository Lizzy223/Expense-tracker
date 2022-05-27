import { Table, TableContainer, Thead, Tr, Th, Td,Tbody  } from '@chakra-ui/react'

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
  
  const Trdata = (props) =>{
      return(
          <Tr>
              <Td>{props.id}</Td>
              <Td>{props.date}</Td>
              <Td>{props.merchant}</Td>
              <Td>{props.total}</Td>
              <Td>{props.status}</Td>
              <Td>{props.comment}</Td>
          </Tr>
      )
  }

const Table2 = () =>{




    return(
        <>
            <TableContainer overflow='auto' size={['sm','md' ]} width={['100%','100%']} height={['50%', '100%']} >
                <Table overflow='auto' size={['sm','md' ]} width={['50%','70%']} height={['50%', '100%']} >
                    <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Date</Th>
                        <Th>Merchant</Th>
                        <Th>Total</Th>
                        <Th>Status</Th>
                        <Th>Comment</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {
                        rows.map((e)=>{
                            return(
                                <Trdata key={e.id} date={e.date} merchant={e.merchant} total={e.total} status={e.status} comment={e.comment} />
                            )
                        })
                    }
                    </Tbody>
                    
                </Table>
            </TableContainer>
        </>
    );
}

export default Table2;