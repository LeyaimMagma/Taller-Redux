import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from './src/redux/actions/index';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [newAddress, setAddress] = useState(0);

  const {name, address, age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View>
          <TextInput
            style={styles.input}
            placeholder={'Name'}
            onChangeText={text => setNewName(text)}
            value={newName}
          />
          <TextInput
            style={styles.input}
            placeholder={'Age'}
            onChangeText={text => setNewAge(text)}
            value={newAge}
          />
          <TextInput
            style={styles.input}
            placeholder={'Address'}
            onChangeText={text => setAddress(text)}
            value={newAddress}
          />
          <Button
            onPress={() => {dispatch(getUser(newName, newAge, newAddress))}}
            title="Update"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>{`${name}-${address}-${age}`}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
