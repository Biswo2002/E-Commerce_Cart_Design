import React from "react";
import { Button, Modal, Stack, FormControl, Input, Center, NativeBaseProvider, Box, Text, ScrollView } from "native-base";
import { useState } from "react";
import RightSlideModal from "../../components/RightSlideModal";
import { TouchableOpacity } from "react-native";
import LeftSlideModal from "../../components/LeftSlideModal";

const Account = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleOpenModal1 = () => {
    setModalVisible1(true);
  };

  const handleCloseModal1 = () => {
    setModalVisible1(false);
  };



  return <>

    <TouchableOpacity style={{ backgroundColor: 'gray', margin: 20 }} onPress={handleOpenModal}>
      <Text
        fontSize={'lg'}
        m={4}
        bold
        underline
        color={'#272762'}
      >Open Modal sideModal By Chart Gpt </Text>
    </TouchableOpacity>
    < TouchableOpacity style={{ backgroundColor: 'gray', margin: 20 }} onPress={handleOpenModal1}>
      <Text
        fontSize={'lg'}
        m={4}
        bold
        underline
        color={'#272762'}
      >Open Modal sideModal By Chart Gpt </Text>
    </TouchableOpacity>
    <RightSlideModal
      isVisible={modalVisible}
    // onClose={handleCloseModal}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <TouchableOpacity onPress={handleCloseModal}>
          <Text textAlign={'center'} >Close Modal</Text>
        </TouchableOpacity>
        <Box>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
        </Box>
      </ScrollView>
    </RightSlideModal>

    <LeftSlideModal
      isVisible={modalVisible1}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <TouchableOpacity onPress={handleCloseModal1}>
          <Text textAlign={'center'} >Close Modal</Text>
        </TouchableOpacity>
        <Box>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
        </Box>
      </ScrollView>
    </LeftSlideModal>
  </>;
};
export default Account
