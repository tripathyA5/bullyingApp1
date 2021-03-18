import React,{Component} from 'react';

import {TouchableOpacity, View, Text, TextInput} from 'react-native';

export default class RequestScreen extends Component{

    
    render(){
        return(
            <View>
            <Text>
                Request Screen
            </Text>
            <TextInput
            multiline={true}
            placeholder="Name and Topic"
            onChangeText= {(text)=>{
                this.setState({
                    nameAndTopic:text
                })
            }}
            /> 
              <TextInput
            multiline={true}
            placeholder="Write Text Here"
            onChangeText={(text)=>{
                this.setState({
                    writeRequest:text
                })
            }}
            />
            <TouchableOpacity>
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}