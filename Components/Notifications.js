import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View>
      <Text style={{
                display: 'flex',
                justifyContent: 'center',
      }
      }>
           Currently you don't have any notifications
      </Text>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})