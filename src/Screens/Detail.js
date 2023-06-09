import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import CountQuantity from '../common/CountQuantity';
import Size from '../common/Size';
import CommonButton from '../common/CommonButton';
import AddDetail from '../common/AddDetail';

const Detail = ({ route, navigation }) => {
  let [quantity, setQuantity] = useState(1);

  const subtraction = () => {
    setQuantity(quantity -1);
  }

  const addition = () => {
    setQuantity(quantity +1);
  }


  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, marginBottom: 100 }}>
        <Image
          source={route.params.image}
          style={{
            width: '100%',
            height: 250,
            resizeMode: 'contain',
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 10
          }}
        />

        <TouchableOpacity
          style={{
            width: 50,
            elevation: 5,
            height: 50,
            backgroundColor: '#999999',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 20,
            left: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require('../images/back.png')}
            style={{ width: 24, height: 24, }}
          />
        </TouchableOpacity>

        <ImageBackground
          source={require('../images/star.png')}
          style={{
            width: 50,
            height: 50,
            position: 'absolute',
            top: 20,
            right: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>{route.params.star}</Text>
        </ImageBackground>

        {/* Title */}
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            marginLeft: 15,
            textAlign: 'left',
            marginTop: 15,
          }}>
          {route.params.title}
        </Text>

        <View style={{ height: 1, borderWidth: 0.5, borderColor: '#BBBBBB', marginTop: 10, marginBottom: 10 }} />

        {/* Price */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 15,
            color: 'red',
            textAlign: 'left',
          }}>
          {route.params.price} VNĐ
        </Text>

        <View style={{ height: 1, borderWidth: 0.5, borderColor: '#BBBBBB', marginTop: 10, marginBottom: 10 }} />

        <Size />

        <View style={{ height: 1, borderWidth: 0.5, borderColor: '#BBBBBB', marginTop: 5, marginBottom: 10 }} />

        {/* Quantity */}
        <View style={{
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15
        }}>
          <Text style={{ fontSize: 20, color: 'black' }}>Số Lượng: </Text>
          <View style={{
            width: 130, height: 40, borderRadius: 5,
            flexDirection: 'row', padding: 10, borderWidth: 1,
            justifyContent: 'center', alignItems: 'center',
          }}>
            <TouchableOpacity
              onPress={() => {
                subtraction();
              }}
              style={{
                width: 35,
                justifyContent: 'center',
                alignItems: 'center',

              }}>
              <Image
                source={require('../images/sub.png')}
                style={{ width: 26, height: 26 }} />
            </TouchableOpacity>
            <View style={{
              width: 60,
              height: 40,
              borderWidth: 1,
              textAlign: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>{quantity}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                addition();
              }}
              style={{
                width: 35,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Image
                source={require('../images/add.png')}
                style={{ width: 26, height: 26 }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 1, borderWidth: 0.5, borderColor: '#BBBBBB', marginTop: 5, marginBottom: 10 }} />

        {/* Desc */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              margin: 15
            }}>Mô tả</Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              margin: 15
            }}
          >
            {route.params.desc}
          </Text>
        </View>
      </ScrollView>
      <AddDetail />
    </View>
  )
}

export default Detail