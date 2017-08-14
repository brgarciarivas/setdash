//**********************************
//**********************************
//THIS COMPONENTS IS THE PARENT OF BEACONS, TOTAL AND ARTIST
//**********************************
//**********************************

import React from 'react'
import Base from './Base'

import ActiveBeacons from './ActiveBeacons'
import Total from './Total'
import Artist from './Artist'
import BitcoinPrice from './BitcoinPrice'


import SpreadSheet from 'google-spreadsheet-reader'


const style = {
	height: 80,
	width: 160,
	margin:0,
	textAlign: 'center',
	display: 'inline',
	backgroundColor:'#ffffff'
};

export default class BRA extends Base{
	constructor(props) {
		super(props)
		this.fetchSheet()
		this.state = {
			sheet: {}
		}
	}
	componentWillMount() {
		this.fetchSheet()
	}
	fetchSheet() {
		var ss = new SpreadSheet("1CoVfvZS8UrqPkWFG1rPM2LFT3Z994ehWAsPCBP-Nq2E");
		ss.load({ camelcase: true }).then(res => { 
			
			this.setState({
				sheet: res.sheet1[0]
			})

		}).catch(err => { 
			console.error(err.message); 
			console.log("shit hit the fucking fan")
		});			
	} 
	render() {
	
		
		
		return (
			<div  className=' BRA '>
				<div className=' bra-container flex-column'>
					<ActiveBeacons sheet={this.state.sheet} />	
					<Total sheet={this.state.sheet}/>
				</div>
				
				<div className=' bra-container flex-column'>
					<Artist sheet={this.state.sheet} />
					<BitcoinPrice />
				</div>
				
			
				
			</div>
		)
	}
}