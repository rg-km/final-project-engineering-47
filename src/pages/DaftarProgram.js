import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Flex } from '@chakra-ui/react';
import SearchBar from "../components/SearchBar";
import RightDP from "../components/RightDP";
import LeftDP from "../components/LeftDP";

function DaftarProgram() {
  return (
    <>
    <Header />
    <Flex
      w={'full'}
      h={'410px'}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <SearchBar />
    </Flex>
    
    <Flex h={"100vh"} mt={"1em"} mb={"1em"}>
      <LeftDP />
      <RightDP />
    </Flex>

    <Footer />
    </>
  )
}

export default DaftarProgram;
