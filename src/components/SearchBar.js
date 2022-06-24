import { SearchIcon } from '@chakra-ui/icons'
import { Flex, InputGroup, InputLeftElement, Input, Button, borderRadius, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { FaMapMarkedAlt, FaSchool } from 'react-icons/fa'

function SearchBar() {
  return (
    <>
    <Flex w={'fit-content'} align={'center'} ml={'18%'}>
        <InputGroup border={'none'} bg={'white'} borderRadius={'20px'} p={4} gap={5}>
          <InputGroup>
            <InputLeftElement pointerEvents={'none'} children={<SearchIcon color={'gray'}/>}/>
            <Input placeholder={'Posisi'} borderRadius={'20px'}/>
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents={'none'} children={<FaMapMarkedAlt color={'gray'}/>}/>
            <Input placeholder={'Lokasi'} borderRadius={'20px'}/>
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents={'none'} children={<FaSchool color={'gray'}/>}/>
            <Input placeholder={'Institusi'} borderRadius={'20px'}/>
          </InputGroup>

          <Box>
          <Button colorScheme={'red'} variant={'solid'} w={'fit-content'}>Jelajahi</Button>
          </Box>

        </InputGroup>
    </Flex>
    </>
  )
}

export default SearchBar