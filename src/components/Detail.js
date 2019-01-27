import React,{ Component } from 'react'
import { View,  TextInput, Button,AsyncStorage,FlatList,TouchableOpacity } from 'react-native'
import {  Container, Header,Input, Content, Card, Item, Text,
        CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base';
export default class Detail extends Component {
	constructor(){
		super()
		this.state = {
			data:[]
			
		}
	}

	componentDidMount(){
		AsyncStorage.getItem('pemesanan', (error, result) => {
			const  d = JSON.parse(result)
			this.setState({data:d})
		})
	}

	

	
		clean = async() => {
    	AsyncStorage.clear();
    	this.props.navigation.navigate('Home');
		}
	  


	render(){
		
		return(
			<Content style={{backgroundColor:'#F2F1EF'}}>
			<Card>
		
			<Text>Pemesanan Tiket</Text>

			 <FlatList
			        data={this.state.data}
			        renderItem={({item, index}) =>
			          <View style={{margin:5}}>
			         	
			            <CardItem>
			            <Text style={{fontWeight:'bold'}}>Atas Nama : </Text> 
			            <Text style={{fontWeight:'bold',color:'blue'}}>{item.nama}</Text>
			            </CardItem>
			            <CardItem>
			           <Text style={{fontWeight:'bold'}}>Judul Film : </Text> 
			           <Text style={{fontWeight:'bold',color:'blue'}}>{item.judul}</Text>
			         	</CardItem>
			         	
			            <CardItem>
			           <Text style={{fontWeight:'bold'}}>Jumlah Tiket : </Text>
			           <Text style={{fontWeight:'bold',color:'red'}}>{item.jumlah}</Text>
			         	</CardItem>
			         	<CardItem>
			           <Text style={{fontWeight:'bold'}}>No Kursi : </Text>
			           <Text style={{fontWeight:'bold',color:'blue'}}>{item.kursi}</Text>
			         	</CardItem>
			            <CardItem>
			           <Text style={{fontWeight:'bold'}}>Bayar : </Text>
			           <Text style={{fontWeight:'bold',color:'red'}}>{item.total}
			           </Text>
			         	</CardItem>

			          </View>
			       } />
		
			</Card>
		
			<Button title='OK'  onPress={this.clean} />
	
			</Content>

			
			)
	}
}