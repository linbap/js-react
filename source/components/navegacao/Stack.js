import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator>
        <Screen.Screen />
    </Stack.Navigator>
)