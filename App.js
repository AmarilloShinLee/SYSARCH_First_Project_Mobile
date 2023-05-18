
import { StyleSheet, Text, View } from 'react-native';
import { Button, Stack } from "@react-native-material/core"

export default function App() {
  return (
    <View style={styles.container}>
      <Stack fill center spacing={32}>
        <Text>Try clicking these two wonderful button below!</Text>
        <Button title="SIGN IN" color='#E83636' tintColor='#FEFEFE' onPress={() => alert("Hello!")} />
        <Button title="SIGN UP" color='#EED8B6'  tintColor='#29252A'  onPress={() => alert("Hello!")} />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#E83636',
  },
  secondaryButton: {
    backgroundColor: '#EED8B6',
  }
});
