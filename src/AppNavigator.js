import { View, Text } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import database from '@react-native-firebase/database';
import auth, { firebase } from '@react-native-firebase/auth';

import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import Checkout from './Screens/Checkout';
import OrderSucess from './OrderSucess';
import ForgotPass from './Screens/ForgotPass';
import Code from './Screens/Code';
import Detail from './Screens/Detail';
import Category from './Screens/Category';
import ProductsManager from './Screens/ProductsManager';
import CategoriesMan from './Screens/CategoriesMan';
import OrderCustom from './Screens/OrderCustom'
import SliderMan from './Screens/SliderMan'
import VoucherStore from './Screens/VoucherStore'
import MyOrder from './Screens/MyOrder'
import SearchScreen from './Screens/SearchScreen'
import Payment from './Screens/Payment'

const Stack = createStackNavigator();

const AppNavigator = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <Stack.Navigator >
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Splash"
                    component={Splash} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Login"
                    component={Login} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Signup"
                    component={Signup} />
            </Stack.Navigator>

        );
    }
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="MyAddress"
                component={MyAddress} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="AddAddress"
                component={AddAddress} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Checkout"
                component={Checkout} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="OrderSuccess"
                component={OrderSucess} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="ForgotPass"
                component={ForgotPass} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Code"
                component={Code} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Detail"
                component={Detail} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Category"
                component={Category} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="ProductsManager"
                component={ProductsManager} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="CategoriesMan"
                component={CategoriesMan} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="SliderMan"
                component={SliderMan} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="OrderCustom"
                component={OrderCustom} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="VoucherStore"
                component={VoucherStore} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="MyOrder"
                component={MyOrder} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="SearchScreen"
                component={SearchScreen} />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Payment"
                component={Payment} />

        </Stack.Navigator>
    )
}

export default () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
};