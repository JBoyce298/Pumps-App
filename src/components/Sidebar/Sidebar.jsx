import { Avatar, Box, Center, Flex, Link, Tooltip } from '@chakra-ui/react';
import React from 'react'
import {Link as RouterLink} from 'react-router-dom';
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, PumpsMobile2, PumpsMobileLogo, SearchLogo, PumpsLogo } from '../../assets/constants';
import { IoMdHome } from "react-icons/io";
import { GiWeightLiftingUp } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi"
import { CgGym } from "react-icons/cg";

const Sidebar = () => {
  const sidebarItems = [
    {
        icon: <IoMdHome size={25} />,
        text: "Home",
        link: "/",
        size: "A3",
    },
    {
        icon: <SearchLogo />,
        text: "Search",
    },
    {
        icon: <NotificationsLogo />,
        text: "Notifications",
    },
    {
        icon: <CreatePostLogo />,
        text: "Create",
    },
    {
        icon: <Avatar size={"sm"} name='Waltuh Wyte' src='/waltuh.png'/>,
        text: "Profile",
        link: "/WaltWyte",
    },
  ];
  return <Box height={"100vh"} borderRight={"1px solid"} borderColor={"whiteAlpha.300"} py={8} position={"sticky"} top={0} left={0} px={{base:2,md:4}}>
    <Flex direction={"column"} gap={20} w="full" height={"full"}>
        <Link to={"/"} as={RouterLink} pl={2} display={{base:"none",md:"block"}} cursor={"pointer"}>
            <PumpsLogo />
        </Link>
        <Link to={"/"} as={RouterLink} pl={2} display={{base:"block",md:"none"}} borderRadius={6} _hover={{bg:"whiteAlpha.300"}} w={10} cursor={"pointer"}>
            <CgGym height={30} width={30} role='img' size={27}/>
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
            {sidebarItems.map((item, index) => (
                <Tooltip
                hasArrow
                label={item.text}
                placement='right'
                key={index}
                ml={1}
                openDelay={500}
                display={{base:"block",md:"none"}}
                >
                    <Link
                    display={"flex"}
                    to={item.link || null}
                    as={RouterLink}
                    alignItems={"center"}
                    gap={4}
                    _hover={{bg:"whiteAlpha.400"}}
                    borderRadius={6}
                    p={2}
                    w={{base:10,md:"full"}}
                    justifyContent={{base:"center",md:"flex-start"}}
                    >
                        {item.icon}
                        <Box display={{base:"none", md:'block'}}>
                            {item.text}
                        </Box>
                    </Link>
                </Tooltip>
            ))}
        </Flex>
        <Tooltip
        hasArrow
        label={"Logout"}
        placement='right'
        ml={1}
        openDelay={500}
        display={{base:"block",md:"none"}}
        >
            <Link
            display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{bg:"whiteAlpha.400"}}
            borderRadius={6}
            p={2}
            w={{base:10,md:"full"}}
            mt={"auto"}
            justifyContent={{base:"center",md:"flex-start"}}
            >
                <BiLogOut size={25} />
                <Box display={{base:"none", md:'block'}}>
                    Logout
                </Box>
            </Link>
        </Tooltip>
    </Flex>
  </Box>;
};

export default Sidebar