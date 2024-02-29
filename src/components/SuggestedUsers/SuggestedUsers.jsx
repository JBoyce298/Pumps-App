import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import { Text, Flex, VStack, Box, Link } from '@chakra-ui/react'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested for you</Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>See all</Text>
        </Flex>
        <SuggestedUser name='John1' followers={1496} avatar='img1.png'/>
        <SuggestedUser name='John2' followers={53} avatar='img2.png'/>
        <SuggestedUser name='John3' followers={792} avatar='img3.png'/>
        <SuggestedUser name='John4' followers={3753} avatar='img4.png'/>

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            @ 2024 Built By {" "}
            <Link href='https://github.com/JBoyce298' target='_blank' color={"blue.500"} fontSize={14}>
                Jacob Boyce
            </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers