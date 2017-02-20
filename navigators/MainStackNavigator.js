import { StackNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';

const MainStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Main',
  },
);

export default MainStackNavigator;
