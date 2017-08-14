import Base from './Base'
import React from 'react'
import Paper from 'material-ui/lib/paper'


export default class JobzMall extends Base{
	constructor(props){
		super(props)
		this.state ={
			daysLeft: 0,
			hrsLeft: 0,
			minsLeft: 0
		}

	}
	componentWillMount() {
	 	this.timer()     
	}
	timer(){
		

		var today = new Date();

		var BigDay = new Date("June,9,2016");

		var msPerDay = 24 * 60 * 60 * 1000 ;

		var timeLeft = (BigDay.getTime() - today.getTime());

		var e_daysLeft = timeLeft / msPerDay;

		var daysLeft = Math.floor(e_daysLeft);

		

	

			this.setState({
				daysLeft: daysLeft,
				
			})	
		}

		

	render(){
		
		

		
		return(

				

			
			<div className='root'>
				<div id='jobzMall-tile' className='small-container'>
					<img width={20} className='flex-fixed' src="//d1wbxby8dwa4u.cloudfront.net/namecheap/jobzmall-logo.png"/>
				</div>
				<div className='container'>
					<p className='bra-tiles'>Days Left for JobzMall</p>
					<p  id='active-jobzMall'className='bra-data'>{this.state.daysLeft}</p>
				</div>		
			</div>			
						
					

				
			)


	}
}