import { Dimensions, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Box, FlatList, HStack, Image, Pressable, ScrollView, StatusBar, Text } from 'native-base'
import { COLORS } from '../../styles'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
import { PrivateNavigationProps } from '../../types/AllRoutes'

const Welcome = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [viewableItems, setViewableItems] = useState<any>([]);
  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    setViewableItems(viewableItems);
  });
  const flatlistRef = useRef<{ FlatList: any }>(null);

  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);

  const banner = [
    {
      id: '1',
      img: 'https://assets9.lottiefiles.com/packages/lf20_pm5qdb4j.json',
    },
    {
      id: '3',
      img: 'https://assets6.lottiefiles.com/packages/lf20_jei6otjn.json',
    },
    {
      id: '2',
      img: 'https://assets6.lottiefiles.com/packages/lf20_5ngs2ksb.json',
    },
  ]
  const { navigate } = useNavigation<PrivateNavigationProps>();
  const renderFlatListItem = ({ item }: any) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} >
        <Box
          bgColor={COLORS.PRIMARY}
        // borderBottomRadius={'full'}
        >
          <Box bgColor={'#ffff'}
            width={Dimensions.get('window').width / 1}
            height={Dimensions.get('window').height / 2.1}
            borderBottomRadius={'70'}
          >
            <LottieView
              source={{ uri: item?.img }}
              autoPlay
              loop={true}
            />
          </Box>
          <HStack
            justifyContent={'center'}
            p={3}
            mt={5}
          >
            {
              // No. of dots
              [...Array(banner.length)].map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: index == currentPage ? 50 : 12,
                    height: 12,
                    borderRadius: 200,
                    backgroundColor:
                      index == currentPage
                        ? '#ffff'
                        : '#ffff' + '200',
                    marginRight: 15,
                  }}
                />
              ))
            }
          </HStack>
        </Box>
      </ScrollView >
    );
  };

  return (
    <Box safeAreaTop bgColor={COLORS.PRIMARY} borderTopRadius={'full'}>
      <StatusBar backgroundColor={COLORS.PRIMARY} />
      <FlatList
        data={banner}
        renderItem={renderFlatListItem}
        keyExtractor={(_item, index) => index.toString()}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={flatlistRef}
        initialNumToRender={1}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      <Box
        justifyContent={'center'}
        alignItems={'center'}
        p={4}
        // py={15}
        height={'45%'}
      >
        <Text
          color={'#fff'}
          fontSize={'3xl'}
          bold
          textAlign={'center'} >
          Your Style in Your Way
        </Text>
        <Text
          fontSize={'md'}
          bold
          color={'gray.300'}
          textAlign={'center'}
          italic
          lineHeight={'30'}
          py={2} >
          A message is a discrete communication
          intended by the source consumption.
        </Text>
        <Pressable
          onPress={() => navigate('Account')}
          alignItems={'center'}
          bgColor={'rose.500'}
          borderRadius={'12'}
          px={8}
          py={4}
          mt={'10'} >
          <HStack>
            <Text
              fontSize={'md'}
              color={'#fff'}
              bold >
              Let's Start
            </Text>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8166/8166472.png' }} alt=''
              alignSelf={'center'}
              size={'5'}
              ml={4}
            />
          </HStack>
        </Pressable>
      </Box>
    </Box>
  );

  return (
    <Box
      justifyContent={'center'}
      alignItems={'center'}
      borderTopLeftRadius={90}
      px={8}
      height={'50%'}
      bgColor={COLORS.PRIMARY} >
      <Text
        color={'#fff'}
        fontSize={'3xl'}
        px={12}
        bold
        textAlign={'center'} >
        Your Style in Your Way
      </Text>
      <Text
        fontSize={'md'}
        bold
        color={'gray.300'}
        textAlign={'center'}
        italic
        lineHeight={'30'}
        py={2} >
        A message is a discrete communication
        intended by the source consumption.
      </Text>
      <Pressable
        onPress={() => navigate('Account')}
        alignItems={'center'}
        bgColor={'rose.500'}
        borderRadius={'12'}
        px={8}
        py={4}
        mt={'10'} >
        <HStack>
          <Text
            fontSize={'md'}
            color={'#fff'}
            bold >
            Let's Start
          </Text>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8166/8166472.png' }} alt=''
            alignSelf={'center'}
            size={'5'}
            ml={4}
          />
        </HStack>
      </Pressable>
    </Box>
  )
}

export default Welcome

const styles = StyleSheet.create({})