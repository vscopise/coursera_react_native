import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactItems: [
                {
                    id: 0,
                    item: '121, Clear Water Bay Road'
                },
                {
                    id: 1,
                    item: 'Clear Water Bay, Kowloon'
                },
                {
                    id: 2,
                    item: 'HONG KONG'
                },
                {
                    id: 3,
                    item: 'Tel: +852 1234 5678'
                },
                {
                    id: 4,
                    item: 'Fax: +852 8765 4321'
                },
                {
                    id: 5,
                    item: 'Email:confusion@food.net'
                },
            ]
        }
    }

    render() {
        return (
            <View>
                <Card
                    title='Contact Information'
                >
                    {
                        this.state.contactItems.map(
                            contactItem => {
                                return (
                                    <Text 
                                        key={contactItem.id}
                                        style={{fontWeight: 'bold', marginBottom: 20}}
                                    >
                                        {contactItem.item}
                                    </Text>
                                )
                            })
                    }
                </Card>
            </View>
        )
    }
}

export default ContactUs; 