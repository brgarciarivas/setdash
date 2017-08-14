import React from 'react'
import Base from './Base'
import api from '../scripts/api';
var FontAwesome = require('react-fontawesome');




export default class BitcoinPrice extends Base {
	constructor(props){
			super(props)
			this.state = {
				btcValue: ''
			}
		}
		componentWillMount(){
			this.getBtc()
		}

		getBtc(){
	
			api.bitcoin("https://api.coindesk.com/v1/bpi/currentprice.json")
				.then( (res) => {
					console.log(res)
					
					
					var btcValue = res['bpi']['USD']['rate']
					var btcValue = btcValue.slice(0,6)			

					this.setState({
						btcValue: btcValue
					});
				})
				.catch(error => console.error(error))
		}
			
	render(){
	var style = this.props.style

	var style2 = {
			 height: 50,
  			 width: 50,
  			 margin: 0,
  			 textAlign: 'center',
  			 verticalAlign: 'center',
  			 display:'flex',
  			 backgroundColor: '#673ab7'
		};

		return(
			
			<div className='root'>
				<div id='bitcoin-tile'className='small-container'>
					<FontAwesome name='bitcoin' className='bitcoin-icon' />
				</div>
				<div className='container'>
					<p className='bra-tiles'>Bitcoin Price</p>
					<p id='active-bitcoin' className='bra-data'>{this.state.btcValue}</p>
				</div>
			</div>
		)
	}
}

