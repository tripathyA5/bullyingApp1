import React,{Component} from 'react';

import {TouchableOpacity, View, Text, TextInput, Image} from 'react-native';
import RequestScreen from './RequestScreen'
export default class HomeScreen extends Component{
    render(){
        return(
            <View>

            <Text>
                Bullying Advisary App
            </Text>
            <Image source={require('../images/Bullying-Image.jpg')}
            width='100%'
            />

          
            <TouchableOpacity>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
                this.props.navigation.navigate('RequestScreen')
            }}
            >
                <Text>
                    Request
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    Laws
                </Text>
            </TouchableOpacity>
            
</View>
        )
    }
}