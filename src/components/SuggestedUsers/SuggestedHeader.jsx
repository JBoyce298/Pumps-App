import { Avatar, Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const SuggestedHeader = () => {
  return <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
    <Flex alignItems={"center"} gap={2}>
        <Avatar name='Waltuh Wyte' size={"lg"} src="waltuh.png"/>
        <Box fontSize={12} fontWeight={"bold"}>
            WaltWyte
        </Box>
    </Flex>
    <Link as={RouterLink} to={"/auth"} fontSize={14} fontWeight={"medium"} color={"blue.400"} cursor={"pointer"} style={{textDecoration:"none"}}>Log out</Link>
  </Flex>
}

export default SuggestedHeader