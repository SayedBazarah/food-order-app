import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native'

//dependence 
import Swiper from 'react-native-swiper';


export default class Welcome extends Component {
    
 

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#FFF" barStyle="light-content" />
                <Swiper 
                    removeClippedSubviews={false}
                    autoplay={true} style={styles.swiper} 
                    dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7, marginBottom:12}} />}
                    activeDot={<View style={{backgroundColor: '#fff', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7, marginBottom:12}} />}
                    >
                    <View style={styles.swiperImageContainer}>
                        <Image
                            source= {require('../assets/welcome-1.png')}
                            style={styles.swiperImage}
                        />
                    </View>
                    <View style={styles.swiperImageContainer}>
                        <Image
                            source= {require('../assets/welcome.png')}
                            style={styles.swiperImage}
                        />
                    </View>
                </Swiper>
                <View style={styles.loginContainer}>

                    <Text style={{fontSize:34, color:'#26315F', marginBottom: 15}}>Welcome back</Text>
                    <Text style={{fontSize:18, color:'#C7CAD1', marginBottom: 20}} >Login to your account</Text>

                    <TextInput 
                        style={styles.textInput}
                        placeholder={'Email'}
                        placeholderTextColor= {'#979797'}
                        color={'#979797'}
                        autoFocus
                        
                    />
                     <TextInput 
                        style={styles.textInput}
                        placeholder={'Password'}
                        placeholderTextColor= {'#979797'}
                        color={'#979797'}
                        secureTextEntry

                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'#FFF'}}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{color:'#26315F'}}>Forgot your password?</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row',marginTop:10}}>
                       <Text style={{color:'#C7CAD1'}}> Don’t have an account? </Text><TouchableOpacity><Text style={{color:'#F93963'}}> Sign up</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    position:'relative'
    },
    swiper:{
        flex: 1
    },
    swiperImageContainer:{
        flex:1,

    },
    swiperImage:{
        flex:1,
        height: '45%',
        resizeMode: 'cover'
    },
    loginContainer:{
        flex: 1.5,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: - 13,
        backgroundColor:'#FFF'
       
    },
    textInput:{
        backgroundColor:'#ECEDF1',
        height: 48,
        borderRadius: 24,
        width: '90%',
        marginTop:10,
        paddingLeft:15
    },
    button:{
        backgroundColor:'#F93963',
        width: '90%',
        height: 48,
        borderRadius: 24,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:20
    },
    test:{
    position:'relative'
    }
})

//