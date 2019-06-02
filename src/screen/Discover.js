import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, StatusBar, TextInput, Icon } from 'react-native'

//dependence 
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
export default class Discover extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFF" barStyle= 'dark-content' />
                {this._SearchBox()}
            </View>
        )
    }
    _SearchBox(){
        return(
            <View style={styles.SearchBar}>
                <View style={styles.SearchBarTextInput}>
                    <Ionicons name= "md-search" color='#C7CAD1' size={22}/>
                    <TextInput 
                        placeholder= 'Search'
                        color ='#D8D8D8'
                    >
                    </TextInput>
                </View>
                <Ionicons style={{flex:1}} name= "md-search"  color='#C7CAD1' size={32}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        marginTop: Constants.statusBarHeight
    },
    //SearchBar styles
    SearchBar:{
        flexDirection:'row',
        alignItems:'center'        

    },
    SearchBarTextInput:{
        flex:4,
        flexDirection:'row',
        height: 48,
        borderWidth:.5,
        borderRadius: 21,
        borderColor:'#D8D8D8',
        marginRight: 15,
        marginLeft: 15,
        marginTop: 15,
        paddingLeft: 15,
        alignItems:'center'        

    },
    test:{
    }

})