import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useContext, useState} from 'react';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from './AuthProvider';
import {ScrollView} from 'react-native-gesture-handler';
import {regx} from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [eye, setEye] = useState(false);
  const [visible, setVisible] = useState(true);

  const {login, loading} = useContext(AuthContext);
  const _onClick = async () => {
    if (email && password) {
      const response = await login(screen);
      console.log(response?.token);
      if (response && response?.token) {
        navigation.navigate('Home');
      } else {
        Alert.alert('invalid email/password');
      }
    } else {
      Alert.alert('please enter email/password');
    }
  };

  const screen = {
    email: email,
    password: password,
  };
  return (
    <React.Fragment>
      {loading ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView style={{flex: 1}}>
          <View>
            <TextInput
              style={styles.Emailinput}
              name={'email'}
              placeholder="Email"
              onChangeText={value => setEmail(value)}
            />
            {!email && isSubmit ? (
              <Text style={{color: 'red', marginLeft: '5%'}}>
                Please enter Email id
              </Text>
            ) : !regx.email.test(email) ? (
              <Text style={{color: 'red', marginLeft: '5%'}}>
                Please enter valid Email id
              </Text>
            ) : null}
            <View>
              <TextInput
                style={styles.Passwordinput}
                name="password"
                onChangeText={value => setPassword(value)}
                placeholder="Password"
                secureTextEntry={visible}
              />
              <Icons
                style={{position: 'absolute', right: 50, top: 20}}
                name={eye === false ? 'eye-off' : 'eye'}
                size={30}
                color="black"
                onPress={() => {
                  setEye(!eye);
                  setVisible(!visible);
                }}
              />
            </View>
            {!password && isSubmit && (
              <Text style={{color: 'red', marginLeft: '5%'}}>
                Please enter Password
              </Text>
            )}
          </View>
          <View>
            <TouchableOpacity onPress={_onClick} style={styles.LoginMainBtn}>
              <Text style={styles.LoginBtn(!email || !password)}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </React.Fragment>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 85,
    marginTop: 80,
  },
  Emailinput: {
    height: 50,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderColor: '#db699d',
    backgroundColor: 'white',
    marginTop: 80,
  },
  Passwordinput: {
    height: 50,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  LoginBtn: value => ({
    backgroundColor: value ? 'gray' : '#ae44db',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    padding: 10,
    fontWeight: '600',
    fontSize: 20,
    marginTop: 80,
  }),
  LoginMainBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
  },
});
