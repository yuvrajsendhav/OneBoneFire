import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Community from './Community';
import Home from './Home';
import Message from './Message';
import More from './More';
import Mystuff from './Mystuff';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = focused ? 'home': 'home';
          } else if (route.name === 'Community') {
            iconName = focused ? 'account-details' : 'account-details';
          }
          else if (route.name === 'Mystuff') {
            iconName = focused ? 'bookmark' : 'bookmark';
          }
          else if (route.name === 'Message') {
            iconName = focused ? 'email-newsletter' : 'email-newsletter';
          }
          else if (route.name === 'More') {
            iconName = focused ? 'more' : 'more';
          }

          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#32a88d',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign:'center',
        headerShown:false
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Mystuff" component={Mystuff} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}
export default BottomTab