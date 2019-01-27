import React, { Component } from 'react';
import { View, FlatList,Image, Alert, TouchableOpacity, AsyncStorage } 
 from 'react-native'
import { Drawer, Container, Header,Input, Content, Card, Item, 
        CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import axios from 'axios'

export default class Index extends Component {
	constructor(){
		super()
		this.state = {
			datafilm:[],
			id:'',
			gambar:''
		}
		
	}

	componentDidMount(){

		axios({
			method: 'GET',
			url: 'https://api.themoviedb.org/3/movie/popular?api_key=d12ef77f88f19a9f05c74aedf8d93e0a'
		}).then((response) => {
			this.setState({datafilm:response.data.results})
		}).catch(error => {
			console.log(error)
		})

	}
	
	render() {
	const { navigate } = this.props.navigation
		return(
		<Container style={{padding:5}}>
		 <Header/>
          <Content style={{backgroundColor:'#F2F1EF'}}>
			<View>
		 	<Card>
		 	<View style={{alignItems: 'center'}}>
      		<Text style={{fontWeight: 'bold'}}>PILIH FILM</Text>
      		</View>
      			<FlatList
        			horizontal={true}
        			data={this.state.datafilm}
        			renderItem={({item, index}) =>
        			 <View style={{margin:5}}>
           				 <CardItem>
              				<Body>
                			<Text style={{fontSize:20,width:150,fontWeight:'bold'}}>{item.title}</Text>
               				<Text note>{item.release_date}</Text> 
              			    </Body>
           				 </CardItem>
            			<CardItem cardBody>
             			 
             			 <TouchableOpacity>
             			 <Body>
              			<Image source={{uri: 'https://image.tmdb.org/t/p/w200/'+item.poster_path}} style={{height: 200, width: 150}}/>
              			</Body>
              			</TouchableOpacity>
            			</CardItem>
            			<CardItem>
              			 <Button  onPress={()=> navigate('Pesan',{id:item.title,gambar:item.poster_path})}>
                 		 <Text>Beli Tiket</Text>
                		</Button>
              			</CardItem>
           
         </View>
         
          } />
      		</Card>
			</View>
			</Content>
			</Container>
		)
	}
}