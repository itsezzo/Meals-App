import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import Menu from './screens/Menu';
import MealsScreen from './screens/MealsScreen';
import DetailScreen from './screens/DetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351400' },
        headerTintColor: '#fff',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        headerTitleAlign: 'center',
        drawerContentStyle: { backgroundColor: '#e2b497' },
        drawerActiveTintColor: '#e2b497',
        drawerInactiveTintColor: '#351400',
        drawerActiveBackgroundColor: '#351400',
      }}
    >
      <Drawer.Screen
        name='menu'
        component={Menu}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='favorites'
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351400' },
              headerTintColor: '#fff',
              contentStyle: { backgroundColor: '#3f2f25' },
              headerTitleAlign: 'center',
            }}
          >
            <Stack.Screen
              name='MenuCategories'
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='MealsScreen' component={MealsScreen} />
            <Stack.Screen name='DetailScreen' component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
