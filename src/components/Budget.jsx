import React from 'react'
import Base from './Base'
import api from '../scripts/api'
import Paper from 'material-ui/lib/paper'
import SpreadSheet from 'google-spreadsheet-reader'
import BudgetGraph from './BudgetGraph'


export default class Budget extends Base{
	constructor(props){
		super(props)
		this.getSheet()
		this.state ={
			sheet: {}
		}
	}
	componentWillMount() {
	    this.getSheet()  
	}
	getSheet(){
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
	render(){
		
		return(
				<BudgetGraph realized={this.state.sheet.realized} sheet={this.state.sheet}/>
			)
	}
}



							