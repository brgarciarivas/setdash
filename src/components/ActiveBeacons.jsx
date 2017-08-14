import React from 'react'
import Base from './Base'


export default class ActiveBeacons extends Base {
	constructor(props){
		super(props)
		this.autoBind()
	}
			
	render(){
	

	
		return(
			
			<div className='root'>
				<div id='beacons-tile'className='small-container'>
					<img className='flex-fixed ibeacon' src="//d1wbxby8dwa4u.cloudfront.net/namecheap/ibeacon-logo.svg"/>
				</div>
				<div className='container'>
					<p className='bra-tiles'>Total Active Beacons</p>
					<p id='active-beacons' className='bra-data'>{this.props.sheet.beacons}</p>
				</div>
			</div>
		)
	}
}

