import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  ScrollView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen01 from './components/screen01';
import Screen02 from './components/screen02';
import Home from './components/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="screen01"
            component={Screen01}
            options={{ title: '' }}
          />
          <Stack.Screen
            name="screen02"
            component={Screen02}
            options={{ title: '' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
