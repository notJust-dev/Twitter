import { withLayoutContext } from 'expo-router';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);

export default function DrawerLayout() {
  return <Drawer />;
}
