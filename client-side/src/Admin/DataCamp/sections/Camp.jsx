import React from "react";
import { Box, Center, SimpleGrid, Container, useColorModeValue, Stack, Grid, GridItem, Flex, Spacer, MenuGroup, MenuDivider, Image, Heading, Text, Button, Link, IconButton, Menu, MenuButton, MenuItem, MenuList, HStack, } from '@chakra-ui/react';
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
const Camp = () => {
    return (
        <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Index</Th>
        <Th>Keterangan</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Nama Peserta</Td>
        <Td>Default</Td>
      </Tr>
      <Tr>
        <Td>Email</Td>
        <Td>Default</Td>
      </Tr>
      <Tr>
        <Td>Jenis Kelamin</Td>
        <Td>Default</Td>
      </Tr>
      <Tr>
        <Td>Tanggal Lahir</Td>
        <Td>Default</Td>
      </Tr>
      <Tr>
        <Td>Nomor HP</Td>
        <Td>Default</Td>
      </Tr><Tr>
        <Td>Instansi</Td>
        <Td>Default</Td>
      </Tr>
      <Tr>
        <Td>Nomor Induk</Td>
        <Td>Default</Td>
      </Tr>
      <Tr>
        <Td>Nama Wali</Td>
        <Td>Default</Td>
      </Tr>
      <Tr>
        <Td>Penghasilan Orang Tua</Td>
        <Td>Default</Td>
      </Tr>
    </Tbody>

  </Table>
</TableContainer>
    )
}
export default Camp;