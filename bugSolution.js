// bugSolution.js
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@my_key');
        if (value !== null) {
          setData(value);
        }
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    };
    getData();
  }, []);

  return (
    <View>
      {data ? <Text>{data}</Text> : <Text>Loading...</Text>}
    </View>
  );
};
export default App;