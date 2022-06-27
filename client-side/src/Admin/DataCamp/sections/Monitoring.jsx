import React from "react";
import { Box, Center, SimpleGrid, Container, useColorModeValue, Stack, Grid, GridItem, Flex, Spacer, MenuGroup, MenuDivider, Image, Heading, Text, Button, Link, IconButton, Menu, MenuButton, MenuItem, MenuList, HStack, } from '@chakra-ui/react';
import { RepeatIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import Kip from '../../../Images/kip.svg';
import Aperti from '../../../Images/aperti.svg';
import Besu from '../../../Images/besu.svg';
import Lpdp from '../../../Images/lpdp.svg';
import Pertamina from '../../../Images/pertamina.svg';
import Tanato from '../../../Images/tanato.svg';
import Modal from './Modal';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
const Monitoring = () => {
    return (

        <Box
            bg={useColorModeValue('#ffff')}
            color={useColorModeValue('black')}
            backgroundSize="cover">
            <SimpleGrid columns={1} spacing={10}>
                <Box height='auto'>
                <Center h='100px' ml='auto' mr='auto' color='black'>
                <Heading>Daftar Instansi</Heading>

            </Center>
            <TableContainer color='black' height='auto' pr='400px' pl='400px'>
                <Table variant='simple'>
                    <TableCaption>BigDream 2022</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Nama Peserta</Th>
                            <Th>Created By</Th>
                            <Th isNumeric>Detail</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Bukhari Naufal</Td>
                            <Td>12 June 2022</Td>
                            <Td isNumeric>
                                <div>
                                    <Modal />
                                </div>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bukhari Naufal</Td>
                            <Td>12 June 2022</Td>
                            <Td isNumeric>
                                <div>
                                    <Modal />
                                </div>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bukhari Naufal</Td>
                            <Td>12 June 2022</Td>
                            <Td isNumeric>
                                <div>
                                    <Modal />
                                </div>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bukhari Naufal</Td>
                            <Td>12 June 2022</Td>
                            <Td isNumeric>
                                <div>
                                    <Modal />
                                </div>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bukhari Naufal</Td>
                            <Td>12 June 2022</Td>
                            <Td isNumeric>
                                <div>
                                    <Modal />
                                </div>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bukhari Naufal</Td>
                            <Td>12 June 2022</Td>
                            <Td isNumeric>
                                <div>
                                    <Modal />
                                </div>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Bukhari Naufal</Td>
                            <Td>12 June 2022</Td>
                            <Td isNumeric>
                                <div>
                                    <Modal />
                                </div>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
                </Box>
            </SimpleGrid>
            
        </Box >

    );
}
export default Monitoring;