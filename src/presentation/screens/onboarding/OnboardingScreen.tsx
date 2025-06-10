/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Text} from 'react-native-paper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {appColor, arrayLocations} from '../../../config/utils/constanst';
import {storage} from '../../../config/storage/mmkvStorage';
import {RootStackParams} from '../../navigation/StackNavigator';

const OnboardingScreen = () => {
  const [value, setValue] = useState<null | string>(null);
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: appColor}}>
      <View style={styles.container}>
        <View
          style={{
            marginTop: 150,
          }}>
          <Text variant="headlineLarge" style={{color: 'white'}}>
            Bienvenido a Lluvias MDE
          </Text>

          <Image
            source={require('../../../assets/icons/lluviasMdeLogo.png')}
            style={{width: 300, height: 300, alignSelf: 'center'}}
          />

          <Button
            mode="contained"
            onPress={() => setVisible(!visible)}
            icon={'menu-down'}
            contentStyle={{flexDirection: 'row-reverse'}}
            labelStyle={{fontWeight: '600'}}
            buttonColor="#FFFFFF"
            textColor="#228997">
            {value ?? 'Selecciona una opción'}
          </Button>
          <View>
            {visible && (
              <View style={styles.dropdown}>
                <FlatList
                  data={arrayLocations}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <Button
                      style={styles.option}
                      onPress={() => {
                        setValue(item.name);
                        setVisible(false);
                      }}
                      labelStyle={{fontWeight: '600'}}
                      textColor="#228997">
                      {item.name}
                    </Button>
                  )}
                />
              </View>
            )}
          </View>
        </View>
        {value && (
          <Button
            style={{
              width: '100%',
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            mode="contained"
            onPress={() => {
              storage.setString('location', value);
              navigation.navigate('bottomTabNavigation');
            }}
            labelStyle={{fontWeight: '600'}}
            buttonColor="#FFFFFF"
            textColor="#228997">
            Confirmar
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown: {
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 250,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontWeight: '800',
  },
});
