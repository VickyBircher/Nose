import { registerRootComponent } from 'expo';

import App from './App';
import LogIn from '../my-art-front/src/screens/LogIn'
import ImgDetail from '../my-art-front/src/screens/ImgDetail'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
//registerRootComponent(LogIn);
registerRootComponent(App);