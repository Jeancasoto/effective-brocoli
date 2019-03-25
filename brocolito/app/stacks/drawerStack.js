import {
    StackNavigator
} from 'react-navigation';

import {
    TouchableHightlight,
    Text,
    View
} from 'react-native'

import React from 'react';

//import DrawerScreen from './drawerScreen';
import DrawerScreen from '../components/screen1';

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerScreen}
},{
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: 'rgb(255, 45, 85)',
            paddingLeft: 10,
            paddingRight: 10
        },
        title: 'Home',
        headerTintColor: 'white',
        headerLeft: <View> 
            <TouchableHightlight
                onPress={() => {
                    navigation.navigate('DrawerOpen');
                }}>
                <Text>Menu</Text>
                </TouchableHightlight>
        </View>

    })
})

export default DrawerNavigation;