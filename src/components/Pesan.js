import React, { Component } from 'react';
import { View, FlatList,Image, Alert, TouchableOpacity, AsyncStorage,Button,TextInput } 
 from 'react-native'
import { Drawer, Container, Header,Input, Content, Card, Item, 
        CardItem, Thumbnail, Text,  Icon, Left, Body, Right } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation'
import axios from 'axios'

export default class Pesan extends Component {

	constructor(){
		super()
		this.state = {
		
			id:'',
			jumlah:0,
			total:0,
			nama:'',
			no1:'',no2:'',no3:'',no4:'',no5:'',no6:'',no7:'',no8:'',no9:'',no10:'',
			no11:'',no12:'',no13:'',no14:'',no15:'',no16:'',no17:'',no18:'',no19:'',no20:'',
			judul:'',
			kursi:'',
			buttonColor1: 'blue',buttonColor2: 'blue',
			buttonColor3: 'blue',buttonColor4: 'blue',
			buttonColor5: 'blue',buttonColor6: 'blue',
			buttonColor7: 'blue',buttonColor8: 'blue',
			buttonColor9: 'blue',buttonColor10: 'blue',
			buttonColor11: 'blue',buttonColor12: 'blue',
			buttonColor13: 'blue',buttonColor14: 'blue',
			buttonColor15: 'blue',buttonColor16: 'blue',
			buttonColor17: 'blue',buttonColor18: 'blue',
			buttonColor19: 'blue',buttonColor20: 'blue'
		}
	}

	save() {
  	const { dispatch } = this.props.navigation
  	var kursiArray = [this.state.no1,this.state.no2,this.state.no3,this.state.no4,this.state.no5,this.state.no6,this.state.no7,this.state.no8,this.state.no9,this.state.no10,
  						this.state.no11,this.state.no12,this.state.no13,this.state.no14,this.state.no15,this.state.no16,this.state.no17,this.state.no18,this.state.no19,this.state.no20]
  	let arrayData      = []
  	const data         = {
  		judul      : this.props.navigation.getParam('id'),
  		kursi      : kursiArray,
  		nama       : this.state.nama,
  		total      : this.state.total,
  		jumlah     : this.state.jumlah,
  		no         : this.state.no,
  		timestamp : Math.floor(Date.now()/1000)
  	}

  	try {
      AsyncStorage.getItem('pemesanan',
      	(error,result) => {
      		if(result) {
      			arrayData = JSON.parse(result)
      		}
      		arrayData.push(data)

      		AsyncStorage.setItem('pemesanan',
      		  JSON.stringify(arrayData), () => {
                Alert.alert('Berhasil',
                	'Pemesanan Berhasil', [
                	{text: 'OK', onPress: () => {
                		dispatch(detailAction)
                	}}
                	])
      		  })
      	})
  	}catch(error) {
  		console.log(error)
  	}
  }

	onButtonPress1= () => {
		if(this.state.buttonColor1 === "blue"){
  		this.setState({ buttonColor1: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no1:'A1 '})
  		}else{
  		this.setState({buttonColor1: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no1:''})
  		}
	}
	onButtonPress2= () => {
		if(this.state.buttonColor2 === "blue"){
  		this.setState({ buttonColor2: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no2:'A2 '})
  		
  		}else{
  		this.setState({buttonColor2: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no2:''})
  		}
	}
	onButtonPress3= () => {
		if(this.state.buttonColor3 === "blue"){
  		this.setState({ buttonColor3: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no3:'A3 '})
  		}else{
  		this.setState({buttonColor3: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no3:''})
  		}
	}
	onButtonPress4= () => {
		if(this.state.buttonColor4 === "blue"){
  		this.setState({ buttonColor4: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no4:'A4 '})
  		}else{
  		this.setState({buttonColor4: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no4:''})
  		}
	}
	onButtonPress5= () => {
		if(this.state.buttonColor5 === "blue"){
  		this.setState({ buttonColor5: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no5:'A5 '})
  		}else{
  		this.setState({buttonColor5: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no5:''})
  		}
	}
	onButtonPress6= () => {
		if(this.state.buttonColor6 === "blue"){
  		this.setState({ buttonColor6: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no6:'B1 '})
  		}else{
  		this.setState({buttonColor6: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no6:''})
  		}
	}
	onButtonPress7= () => {
		if(this.state.buttonColor7 === "blue"){
  		this.setState({ buttonColor7: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no7:'B2 '})
  		}else{
  		this.setState({buttonColor7: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no7:''})
  		}
	}
	onButtonPress8= () => {
		if(this.state.buttonColor8 === "blue"){
  		this.setState({ buttonColor8: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no8:'B3 '})
  		}else{
  		this.setState({buttonColor8: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no8:''})
  		}
	}
	onButtonPress9= () => {
		if(this.state.buttonColor9 === "blue"){
  		this.setState({ buttonColor9: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no9:'B4 '})
  		}else{
  		this.setState({buttonColor9: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no9:''})
  		}
	}
	onButtonPress10= () => {
		if(this.state.buttonColor10 === "blue"){
  		this.setState({ buttonColor10: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no10:'B5 '})
  		}else{
  		this.setState({buttonColor10: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no:''})
  		}
	}
	onButtonPress11= () => {
		if(this.state.buttonColor11 === "blue"){
  		this.setState({ buttonColor11: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no11:'C1 '})
  		}else{
  		this.setState({buttonColor11: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no11:''})
  		}
	}
	onButtonPress12= () => {
		if(this.state.buttonColor12 === "blue"){
  		this.setState({ buttonColor12: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no12:'C2 '})
  		}else{
  		this.setState({buttonColor12: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no12:''})
  		}
	}
	onButtonPress13= () => {
		if(this.state.buttonColor13 === "blue"){
  		this.setState({ buttonColor13: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no13:'C3 '})
  		}else{
  		this.setState({buttonColor13: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no13:''})
  		}
	}
	onButtonPress14= () => {
		if(this.state.buttonColor14 === "blue"){
  		this.setState({ buttonColor14: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no14:'C4 '})
  		}else{
  		this.setState({buttonColor14: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no14:''})
  		}
	}
	onButtonPress15= () => {
		if(this.state.buttonColor15 === "blue"){
  		this.setState({ buttonColor15: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no15:'C5 '})
  		}else{
  		this.setState({buttonColor15: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no15:''})
  		}
	}
	onButtonPress16= () => {
		if(this.state.buttonColor16 === "blue"){
  		this.setState({ buttonColor16: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no16:'D1 '})
  		}else{
  		this.setState({buttonColor16: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no16:''})
  		}
	}
	onButtonPress17= () => {
		if(this.state.buttonColor17 === "blue"){
  		this.setState({ buttonColor17: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no17:'D2 '})
  		}else{
  		this.setState({buttonColor17: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no17:''})
  		}
	}
	onButtonPress18= () => {
		if(this.state.buttonColor18 === "blue"){
  		this.setState({ buttonColor18: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no18:'D3 '})
  		}else{
  		this.setState({buttonColor18: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no18:''})
  		}
	}
	onButtonPress19= () => {
		if(this.state.buttonColor19 === "blue"){
  		this.setState({ buttonColor19: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no19:'D4 '})
  		}else{
  		this.setState({buttonColor19: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no19:''})
  		}
	}
	onButtonPress20= () => {
		if(this.state.buttonColor20 === "blue"){
  		this.setState({ buttonColor20: 'red'})
  		this.setState({jumlah:this.state.jumlah+1})
  		this.setState({total:this.state.total+30000})
  		this.setState({no20:'D5 '})
  		}else{
  		this.setState({buttonColor20: 'blue'})
  		this.setState({jumlah:this.state.jumlah-1})
  		this.setState({total:this.state.total-30000})
  		this.setState({no20:''})
  		}
	}

	render() {
		const { navigate } = this.props.navigation
		return(
		<Container style={{padding:2,margin:2}}>
          <Content style={{backgroundColor:'#F2F1EF'}}>
			<CardItem>
			<Image source={{uri: 'https://image.tmdb.org/t/p/w200'+this.props.navigation.getParam('gambar')}} style={{height: 100, width: 100}}/>
			<Right>
			<Text>Judul : {this.props.navigation.getParam('id')}</Text>
			</Right>
			</CardItem>
			<CardItem>
          	<Text>Nama Anda : </Text>
          	<TextInput 
          		style={{width:'100%'}} placeholder="Masukkan Nama Anda"
          		onChangeText       ={(nama) => this.setState({nama})}/>
          	</CardItem>
			<Text>Pilih Kursi</Text>
			<CardItem>

		<View style={{flex: 5,flexDirection: 'row',flexWrap: 'wrap', margin:8}}>

        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='D1' color={this.state.buttonColor16} onPress={this.onButtonPress16}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='D2' color={this.state.buttonColor17} onPress={this.onButtonPress17}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='D3' color={this.state.buttonColor18} onPress={this.onButtonPress18}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='D4' color={this.state.buttonColor19} onPress={this.onButtonPress19}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='D5' color={this.state.buttonColor20} onPress={this.onButtonPress20}/>
        </View>

        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='C1' color={this.state.buttonColor11} onPress={this.onButtonPress11}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='C2' color={this.state.buttonColor12} onPress={this.onButtonPress12}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='C3' color={this.state.buttonColor13} onPress={this.onButtonPress13}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='C4' color={this.state.buttonColor14} onPress={this.onButtonPress14}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='C5' color={this.state.buttonColor15} onPress={this.onButtonPress15}/>
        </View>

        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='B1' color={this.state.buttonColor6} onPress={this.onButtonPress6}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='B2' color={this.state.buttonColor7} onPress={this.onButtonPress7}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='B3' color={this.state.buttonColor8} onPress={this.onButtonPress8}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='B4' color={this.state.buttonColor9} onPress={this.onButtonPress9}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='B5' color={this.state.buttonColor10} onPress={this.onButtonPress10}/>
        </View>

        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='A1' color={this.state.buttonColor1} onPress={this.onButtonPress1}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='A2' color={this.state.buttonColor2} onPress={this.onButtonPress2}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='A3' color={this.state.buttonColor3} onPress={this.onButtonPress3}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='A4' color={this.state.buttonColor4} onPress={this.onButtonPress4}/>
        </View>
        <View style={{width: 50, height: 50, margin:5,padding:1}}>
        <Button title='A5' color={this.state.buttonColor5} onPress={this.onButtonPress5}/>
        </View>

      </View>
    
			</CardItem>
			<View>
			<CardItem>
			<Left>
			  <Text style={{fontWeight:'bold',fontSize:15}}>Jumlah</Text><Text style={{color:'blue'}}>{this.state.jumlah} X 30.000 </Text>
			</Left>
			<Right>
			  <Text style={{fontWeight:'bold',fontSize:15}}>Total Bayar</Text><Text style={{color:'red'}}>Rp. {this.state.total}</Text>
			</Right>
			</CardItem>
			  <Button title='PESAN' color='blue'  onPress={() => this.save()}/>
			</View>
      	 </Content>
      	</Container>
		)
	}
}

const detailAction = StackActions.reset({
	index   :0,
	actions  : [
	NavigationActions.navigate({routeName: 'Detail'})
	]
})