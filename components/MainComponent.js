import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { createStackNavigator } from 'react-navigation';
import Constants from 'expo-constants';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    DishDetail: { screen: DishDetail }
},
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

class Main extends Component {

    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS ==='ios' ? 0 : Constants.statusBarHeight }}>
                <MenuNavigator />
            </View>
        );
    }
}

export default Main;