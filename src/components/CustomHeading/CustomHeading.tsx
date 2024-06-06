import React from 'react'
import { CustomHeadingContainer, Heading, HeadingSeparator } from './CustomHeading.styles'

const CustomHeading:React.FC<{heading: string; id?: string}> = ({heading, id}) => {
  return (
   <CustomHeadingContainer id={id}>
       <HeadingSeparator />
       <Heading>{heading}</Heading>
       <HeadingSeparator />
   </CustomHeadingContainer>
  )
}

export default CustomHeading