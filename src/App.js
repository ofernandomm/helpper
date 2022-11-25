import { ActivityIndicator,View,StyleSheet} from 'react-native';
import {Categories} from './screens'
import{useFonts} from 'expo-font'



export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular' : require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf')
  })

  if (!loaded) {
    return (
      <View styles={styles.container}>
        <ActivityIndicator color="#DAC4F7" size="large" />
      </View>
    );
  }

  return (
    <Categories></Categories>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

