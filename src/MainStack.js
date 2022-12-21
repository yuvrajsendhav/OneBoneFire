import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import BottomTab from './BottomTab';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from './AuthProvider';
import {useContext} from 'react';
import ProductDetails from './ProductDetails';
import GridView from './GridView';
const Stack = createStackNavigator();

function MainStack() {
  const {logout} = useContext(AuthContext);
  const createTwoButtonAlert = () =>
    Alert.alert('Confirm Logout',"Are you Sure ? ", [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancelled'),
      },
      {
        text: 'OK',
        onPress: () => logout(),
      }
    ]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Icons name="shuffle-variant" size={30} color="black" />
        ),
        headerTitle: () => (
          <Image
            style={styles.logo}
            source={require('../src/assets/logo.png')}
          />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => createTwoButtonAlert()}>
            <Icons name="logout" size={30} color="black" />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="Home" component={BottomTab} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
export default MainStack;

const styles = StyleSheet.create({
  logo: {
    width: 190,
    height: 40,
    marginLeft: 10,
    marginTop: 18,
    // marginHorizontal:'10%'
  },
});
