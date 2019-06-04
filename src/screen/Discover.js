import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar,Image, TextInput,TouchableOpacity, Dimensions } from 'react-native'

//dependence 
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Content } from 'native-base';
import StarRating from 'react-native-star-rating';
//Custom component
import Restaurant from '../component/Restaurant';
export default class Discover extends Component {
    constructor(props){
        super(props)
        this.state={
            restaurant:[
                {id:1,name:'Rahat Brasserie',address:'124 Levent\Besiktas',rating:4.9,noReviews:120,freeDelivery:true,image:require('../assets/place1.png')},
                {id:2,name:'Garage Bar',address:'124 Levent\Besiktas',rating:4.9,noReviews:238,freeDelivery:true,image:require('../assets/place2.png')},
            ],
            categories:[
               { id:1,name:'Pizza',countPlaces:2343,icon: require('../assets/pizza.png')},
               { id:2,name:'Burger',countPlaces:443,icon: require('../assets/vegan-burger.png')},
               { id:3,name:'Steak',countPlaces:689,icon: require('../assets/steak.png')},
               { id:4,name:'Pasta',countPlaces:285,icon: require('../assets/spaguetti.png')},
               { id:5,name:'Sashi',countPlaces:2343,icon: require('../assets/sashimi.png')},
            ]
        }
    }
    render() {
        return (
            <Content enableResetScrollToCoords={false} style={styles.container}>
                <StatusBar backgroundColor="#FFF" barStyle= 'dark-content' />
                {this._SearchBox()}
                <Text style={{fontSize:30, color:'#26315F', marginLeft:15, marginTop:15}}>Discovery new places</Text>
           
                <Content horizontal={true} 	 style={styles.placesContent}>
                   {this._renderRestaurants()}
                </Content>
                <View style={styles.topCatBar}>
                    <Text style={{color:'#26315F', fontSize:20}}>Top categories</Text>
                    <TouchableOpacity style={styles.showAll}>
                        <Text style={{color:'#26315F', fontSize:16}}>Show all</Text>
                        <Ionicons 
                            name= "ios-arrow-forward"
                            size= {14}
                        />
                    </TouchableOpacity>
                </View>
                <Content horizontal={true} style={styles.categories}>
                {this._renderCategories()}
                </Content>
            </Content>
        )
    }
    //Render Categories
    _renderCategories(){
        const list = []

        for( let i = 0; i < this.state.categories.length; i++){
            const cat = this.state.categories[i]
            list.push(
                <View key={i} style={{marginRight:10}}>
                    <View style={styles.imageBox}>
                    <Image
                        source={cat.icon}
                        style={{width:44,height:44}}
                    />
                    </View>
                    <Text style={{fontSize:18,marginTop:7, color:'#26315F'}}>{cat.name}</Text>
                    <Text style={{fontSize:18,marginTop:5, color:'#C7CAD1'}}>{cat.countPlaces} places</Text>
                </View>
            )
        }
        return list
    }

    //Render Restaurants 
    _renderRestaurants(){
        const list = []
        for( let i = 0; i < this.state.restaurant.length; i++){
          list.push(
            <Restaurant
            key = {i}
            restaurant = {this.state.restaurant[i]}
           />
           ) }
        return list
    }
    //render Search bar
    _SearchBox(){
        return(
            <View style={styles.SearchBar}>
                <View style={styles.SearchBarTextInput}>
                    <Ionicons name= "md-search" color='#C7CAD1' size={22}/>
                    <TextInput 
                        placeholder= 'Search'
                        placeholderTextColor = '#D8D8D8'
                       
                    >
                    </TextInput>
                </View>
                <Image
                    source={require('../assets/filter.png')}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Constants.statusBarHeight,
      
        
    },
    //SearchBar styles
    SearchBar:{
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight:10

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
        alignItems:'center',

    },
    placesContent:{
        flex:1,
        marginTop:15,
        marginLeft: 20,
        
    },
    topCatBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:15,
        marginLeft:15,
        marginTop: 15

    },
    showAll:{
        alignItems:'center',
        flexDirection:'row'
    },
    categories:{
        flexDirection:'row',
        marginLeft:15,
        marginTop:15,
        paddingLeft:3,
        paddingTop:3,
    },
    imageBox:{
        shadowColor:'#000000',
        height:88,
        width:88,
        shadowOffset:{ width: 0, height: 2},
        shadowOpacity: 0.3,
        borderRadius:7,
        borderColor:'#FFF',
        borderWidth:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#FFF',
        marginRight: 10,
        
    },
    test:{
        
    },

})