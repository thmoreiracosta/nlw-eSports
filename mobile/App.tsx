import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black});
  return (
    <Background>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
