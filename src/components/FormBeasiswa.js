import { Box, Flex, Heading, Input, InputGroup, InputLeftElement, Textarea, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdTitle } from 'react-icons/md'
import { FormControl, FormLabel, Select } from '@chakra-ui/react'

const [value, setValue] = useState('')
  
const handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
}

function FormBeasiswa() {
  return (
    <Flex align={'center'} direction='column' mt={'3em'}>
        <Box borderWidth={'2px'} p='2em'>
            <Heading>Form Pengisian Beasiswa</Heading>
        <Box w={'full'} mt='2em'>
        <InputGroup>
            <InputLeftElement pointerEvents={'none'} children={<MdTitle color='gray'/>}/>
            <Input placeholder='Judul anda disini'/>
        </InputGroup>
        </Box>

        <FormControl mt={'1em'}>
            <FormLabel htmlFor='kategori'>Kategori</FormLabel>
            <Select id='kategori' placeholder='Pilih Kategori'>
                <option>Science</option>
                <option>Education</option>
                <option>Culture Knowledge</option>
                <option>Finance</option>
                <option>Tech</option>
            </Select>
        </FormControl>

        <Text mt='1em' mb='8px'>Deskripsi:</Text>
        <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder='Ketik Disini'
            size='sm'
        />
        <Flex justify={'right'}> 
        <Button colorScheme={'red'} variant={'solid'} w={'fit-content'} mt='1em'>Buat</Button>
        <Button colorScheme={'red'} variant={'outline'} w={'fit-content'} mt='1em' ml={2}>Kembali</Button>
        </Flex>
        </Box>
    </Flex>
  )
}

export default FormBeasiswa