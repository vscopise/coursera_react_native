import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    }
}


function RenderItem({ item }) {

    if (item != null) {
        return (
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={{ uri: baseUrl + item.image }}
            >
                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>
        )
    } else {
        return <View />;
    }
}

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.props.dishes.dishes.filter(item => item.featured)[0]}
                />
                <RenderItem
                    item={this.props.promotions.promotions.filter(item => item.featured)[0]}
                />
                <RenderItem
                    item={this.props.leaders.leaders.filter(leader => leader.featured)[0]}
                />
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(Home);