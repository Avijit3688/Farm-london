import { StyleSheet, Text, View,TextInput,ToastAndroid } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { Button } from '@rneui/themed'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const SignUp = () => {
  const navigation=useNavigation()
  return (
    <Formik
    initialValues={{
    FirstName:"",
    LastName:"",
    Mobile:"",
    Email:"",
    Pwd:'',
    Cpwd:'',}}
    onSubmit={values => {
      axios.post("http://localhost:4080/registerusers",values)
      // ToastAndroid.show("Registered successfully", ToastAndroid.SHORT);
      navigation.navigate("Customer")
  }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) =>(


           <View style={styles.container}>
      <Text style={{fontSize: 20,color:"green"}}>Create account</Text>
           <TextInput
                   placeholder="FirstName"
                   onChangeText={handleChange('FirstName')}
                   onBlur={handleBlur('FirstName')}
                   value={values.FirstName}
                   style={styles.input}
         />
        <TextInput
                  placeholder="LastName"
                  onChangeText={handleChange('LastName')}
                  onBlur={handleBlur('LastName')}
                  value={values.LastName}
                  style={styles.input}
        />
        <TextInput
                  placeholder="Mobile"
                  onChangeText={handleChange('Mobile')}
                  onBlur={handleBlur('Mobile')}
                  value={values.Mobile}
                  style={styles.input}
        />
        <TextInput
        placeholder="Email"
        onChangeText={handleChange('Email')}
        onBlur={handleBlur('Email')}
        value={values.Email}
        style={styles.input}
        />
        <TextInput
          placeholder="Pwd"
          onChangeText={handleChange('Pwd')}
          onBlur={handleBlur('Pwd')}
          value={values.Pwd}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          placeholder="Cpwd"
          onChangeText={handleChange('Cpwd')}
          onBlur={handleBlur('Cpwd')}
          value={values.Cpwd}
          style={styles.input}
        />
         <Button onPress={handleSubmit} title="Submit" />
       </View>
       )}
  </Formik>
          // {/* <Link to='/login' className="text-danger">Go to Login</Link> */}
  )
}
export default SignUp

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})