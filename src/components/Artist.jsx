import React from 'react'
import Paper from 'material-ui/lib/paper'
import Base from './Base'
import FontAwesome from'react-fontawesome';



export default class Artist extends Base{

	constructor(props){
		super(props)
	}
	render(){
		var style2 = {
			 height: 50,
  			 width: 50,
  			 margin: 0,
  			 display:'flex',
   			 
		};
		
		

	
	return(
			
			<div className='root'>
				<div  className='small-container'>
					<img id='setrecords' src="//d1wbxby8dwa4u.cloudfront.net/namecheap/setrecords-logo-alt.png"  height="70" width="70" />
				</div>
				<div className='container'>
					<p className='bra-tiles'>Artists Using Setrecords</p>
					<p id='active-artist'className='bra-data'>{this.props.sheet.artist}</p>
				</div>		
			</div>
		)
	}
}