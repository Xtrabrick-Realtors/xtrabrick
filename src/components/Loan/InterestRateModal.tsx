import { BANK_INTEREST_RATE } from '@/constants';
import React from 'react'
import { CloseButton, ModalContent, ModalOverlay, Table, TableWrapper, Td, Th } from './Loan.styles';

const InterestRateModal:React.FC<{closeModal?: () => void}> = ({closeModal}) => {
 return (
 <ModalOverlay onClick={closeModal}>
 <ModalContent onClick={(e: any) => e.stopPropagation()} width={"767px"} height={'600px'}>
 <CloseButton onClick={closeModal}>×</CloseButton>
 <TableWrapper>
 <Table>
 <thead style={{backgroundColor: '#0173B0'}}>
 <tr>
 <Th>Bank</Th>
 <Th>Interest Rate</Th>
 <Th>Processing Fees</Th>
 </tr>
 </thead>
 <tbody>
 {BANK_INTEREST_RATE.map((item, index) => (
 <tr key={index}>
 <Td>{item.bank}</Td>
 <Td>{item.interestRate}</Td>
 <Td>{item.processingFees}</Td>
 </tr>
 ))}
 </tbody>
 </Table>
 </TableWrapper>
 </ModalContent>
 </ModalOverlay>
 )
}

export default InterestRateModal