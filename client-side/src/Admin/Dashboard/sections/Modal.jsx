import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { Box, Stack, SimpleGrid, useDisclosure, Button, Text, Container, useColorModeValue, Image, Heading, } from '@chakra-ui/react';
  import User from './User'
    function BasicUsage() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button colorScheme='teal' onClick={onOpen}>Detail</Button>
      
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Data Peserta</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <div>
                    <User />
                  </div>
                  
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }

  export default BasicUsage;