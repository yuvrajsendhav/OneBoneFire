import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import {AuthContext} from './AuthProvider';
import {useContext} from 'react';
const Stack = createStackNavigator();

function LoginStack() {
  const {logout} = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login Screen" component={Login} />
    </Stack.Navigator>
  );
}
export default LoginStack;
