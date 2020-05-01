import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import QRcodeScreen from '../screens/QRcodeScreen'
import DepartamentoScreen from '../screens/DepartamentoScreen'

const Stack = createStackNavigator();
const DepartamentosStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DepartamentoScreen" component={DepartamentoScreen} />
            {/* <Stack.Screen name="QRcodeScreen" component={OTHERSCREEN} />
        <Stack.Screen name="QRcodeScreen" component={OTHERSCREN} /> */}
        </Stack.Navigator>
    );
}

export default DepartamentosStack;