import React, { Component } from 'react';
import { View } from 'react-native';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectDish: dishId })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Menu 
                    dishes={this.state.dishes} 
                    onPress={(dishId) => this.onDishSelect(dishId)}
                />
                <DishDetail 
                    dish={this.state.dishes.filter(dish=>dish.id===this.state.selectDish)[0]}
                />
            </View>
        );
    }
}

export default Main;