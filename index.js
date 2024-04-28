/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import Core from './src/router/Core.router';

AppRegistry.registerComponent(appName, () => Core);
