import Link from 'next/link';
import { Menu, MenuButton, Menulist, MenuItem, IconButton, Flex, Box, Spacer, MenuList } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor='gray.200'>

        <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
            <Link href='/' paddingLeft='2'>Sawaria Properties</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" /> 
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href='/' passHref>
                        <MenuItem icon={<BsSearch/>}></MenuItem>
                    </Link>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcAbout/>}>Buy property</MenuItem>
                    </Link>
                 
                </MenuList>
            </Menu>
        </Box>

    </Flex>
)

export default Navbar;