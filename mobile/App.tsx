import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iphone de Thiago Costa</Text>
      <Button title="Clique aqui" />
      <StatusBar style='light' />
    </View>
  );
}

interface ButtonProps {
  title: string;  
}


function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',    
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22
  },
  buttonText: {
    color: '#fff',
    padding: 15,
    backgroundColor: '#7159c1',     
    marginTop: 10,
  } 
});
