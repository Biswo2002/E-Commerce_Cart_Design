import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from '../../screen/private/Welcome'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PrivateRoutesType } from '../../types/AllRoutes';
import Account from '../../screen/private/Account';

const Stack = createNativeStackNavigator<PrivateRoutesType>();
const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Welcome'} component={Welcome} />
      <Stack.Screen name={'Account'} component={Account} />
    </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})