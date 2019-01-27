import {createStackNavigator}
	from 'react-navigation'
import Index from './components/Index'
import Pesan from './components/Pesan'
import Detail from './components/Detail'

export const Route = createStackNavigator({
	Home: {
		screen            : Index,
		navigationOptions : {
			title         : 'Pesan Tiket Bioskopmini'
		}
	},
	Pesan: {
		screen			  : Pesan,
		navigationOptions : {
			title		  : 'Pesan'
		}
	},
	Detail: {
		screen			  : Detail,
		navigationOptions : {
			title		  : 'Detail Pemesanan'
		}
	}

	

})