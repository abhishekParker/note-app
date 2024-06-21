import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import AddNotesScreen from './AddNotesScreen';
import EditNotesScreen from './EditNotesScreen';
import ViewNoteScreen from './ViewNoteScreen';

const Stack = createNativeStackNavigator();

function InitialStacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddNotesScreen" component={AddNotesScreen} />
        <Stack.Screen name="EditNotesScreen" component={EditNotesScreen} />
        <Stack.Screen name="ViewNoteScreen" component={ViewNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default InitialStacks;
