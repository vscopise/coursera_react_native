import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderDish({dish}) {
    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}
            >
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    } else {
        return <View />
    }
}

const DishDetail = ({dish}) => {
    return (<RenderDish dish={dish} />);
}

export default DishDetail;