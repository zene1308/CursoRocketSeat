import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, AsyncStorage, Text, TextInput } from 'react-native';

function handleSubmit(){}

export default function Book({ navigation }) {
   const [date, setDate] = useState('');
   const id = navigation.getParam('id');
   return (
      <SafeAreaView>
         <Text style={styles.label}> DATA DE INTERESSE</Text>
         <TextInput
            style={styles.input}
            placeholder="Qual data você quer reservar?"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={date}
            onChangeText={setDate}
         />
         <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Encontrar spots</Text>
         </TouchableOpacity>

      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   label: {
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 8,
   },

   input: {
      borderWidth: 1,
      borderColor: '#ddd',
      paddingHorizontal: 20,
      fontSize: 16,
      color: '#444',
      height: 44,
      marginBottom: 20,
      borderRadius: 2,
   },

   button: {
      height: 42,
      backgroundColor: '#f05a5b',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
   },

   buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
   },
});
