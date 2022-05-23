import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext'; 


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Index' component={IndexScreen} options={{title:'Blogs'}} />
          <Stack.Screen name='Show' component={ShowScreen} options={{title:'Show'}} />
          <Stack.Screen name='Create' component={CreateScreen} options={{title:'Create'}} />
          <Stack.Screen name='Edit' component={EditScreen} options={{title:'Edit'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

