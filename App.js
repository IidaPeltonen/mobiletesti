import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home'
import Settings from './screens/Settings';

const Tab = createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


