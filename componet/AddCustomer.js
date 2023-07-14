// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useEffect, useState} from 'react';
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// import {Text} from 'react-native-paper';

// import * as SQLite from 'expo-sqlite';
// // import {SQLite} from 'expo-sqlite';

// const db = SQLite.openDatabase('Little_lemon');
// export default function AddCustomers() {
//   const [textValue, setTextValue] = useState('');
//   const [costumers, setCostumers] = useState([]);
//   useEffect(() => {
//     db.transactionAsync(tx => {
//       tx.executeSqlAsync(
//         'create table if not exist customers (id integer primary not null , name text);',
//       );
//       tx.executeSqlAsync('select * from customers', [], (_, {rows}) => {
//         const customers = rows._array.map(item => item.name);
//         setCostumers(customers);
//       });
//     })();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Little Lemon Costumers</Text>
//       <TextInput
//         style={styles.input_style}
//         placeholder="Input Costumers Name ."
//         value={textValue}
//         onChangeText={setTextValue}
//       />
//       <TouchableOpacity
//         onPress={() => {
//           setCostumers([...costumers, textValue]);
//           setTextValue('');
//           db.transactionAsync(tx => {
//             tx.executeSqlAsync('insert into customers (name) value (?)', [
//               textValue,
//             ]);
//           });
//         }}
//         style={styles.touch_style}>
//         <Text>Add Costumers</Text>
//       </TouchableOpacity>
//       <View style={styles.list_costumers}>
//         <Text>Costumer:</Text>
//         <FlatList
//           data={costumers}
//           renderItem={({item}) => {
//             return <Text>{item}</Text>;
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 20,
//   },
//   input_style: {
//     alignSelf: 'stretch',
//     textAlign: 'center',
//     borderWidth: 4,
//     borderColor: 'green',
//     marginVertical: 8,
//   },
//   touch_style: {
//     alignSelf: 'stretch',
//     textAlign: 'center',
//     borderWidth: 4,
//     borderColor: 'green',
//     backgroundColor: 'green',
//     marginVertical: 8,
//   },
//   list_costumers: {
//     fontSize: 12,
//   },
// });
