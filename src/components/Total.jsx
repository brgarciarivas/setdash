import React from 'react';
import Paper from 'material-ui/lib/paper';
import Base from './Base';
import FontAwesome from'react-fontawesome';


export default class Total extends Base {
	constructor(props){
		super(props)
		
	}
	render(){
		var style = this.props.style

		
		
		return(
				<div className='root'>
					<div id='total-tile'className='small-container'>
						<FontAwesome  id="cash"   name="usd"/> 
					</div>
					<div className='container'>
						<p className='bra-tiles'>Total Revenue</p>
						<p id='active-total'className='bra-data'>{this.props.sheet.revenue}</p>
					</div>
						
							
					
				</div>
			)
	}
}


							