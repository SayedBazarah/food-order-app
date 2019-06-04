import React, { Component } from 'react'
import { Text, View ,Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'


import StarRating from 'react-native-star-rating';


export default class Restaurant extends Component {
    
    render() {
        console.log(this.props.restaurant.image)
       
        return (
            <View style={styles.container}>
                <Image 
                    source={this.props.restaurant.image}
                    style={styles.restaurantImage}
                />
                <Text style={{fontSize:18,color:'#26315F',marginTop:10}}>{this.props.restaurant.name}</Text>
                <Text style={{fontSize:14,color:'#C7CAD1',marginTop:7}}>{this.props.restaurant.address}</Text>
                <View style={styles.ratingContainer}>
                    <StarRating
                        maxStars= {1}
                        fullStarColor={'#FDC900'}
                        rating={1}
                        starSize={16}   
                        emptyStarColor={'#FDC900'}                 
                    />
                    <Text style={{fontSize:14, marginLeft:4,marginRight:2}}>{this.props.restaurant.rating}</Text>
                    <Text style={{fontSize:14,color:'#C7CAD1'}}>({this.props.restaurant.noReviews} rating)</Text>
                    <View style={styles.deleveryStatus}>
                        <Text style={{fontSize:10,color:'#FFF',marginLeft:5,marginRight:5}}>Free delivery</Text>
                    </View>
                </View>
            </View>
        )
            }
        
    }
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginRight: 15,
        marginBottom:10

    },
    restaurantImage:{
        width:201,
        height:252,
        resizeMode:'cover',
        borderRadius: 6

    },
    ratingContainer:{
        flexDirection:'row',
        marginTop:6
    },
    deleveryStatus:{
        height:18,
        backgroundColor:'#F93963',
        borderRadius: 10.5,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:5

    },
})