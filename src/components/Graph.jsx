import React from 'react';
import Base from './Base';
import api from '../scripts/api';
import Paper from 'material-ui/lib/paper';
import FontAwesome from'react-fontawesome';


var _ = require('underscore');
var LineChart = require('react-chartjs').Line;

export default class Graph extends Base{
	constructor(props){
		super(props);
	
	}
	
	
	render() {
		var today = [];

		for(var i=0;i<this.props.smWb.length;i++){
			var total = this.props.smWb[i] + this.props.smAd[i] + this.props.smIos[i];
			today.push(total);
		}
		
		var lit = _.map(this.props.dates,function(num){
		return num.substr(5) ;
	});
		var options={
			scaleShowHorizontalLines: false,
 			scaleGridLines: false,
 			
 			pointDot: false,
 			bezierCurve: false,
 			 datasetFill : false,
		}
		
		var data = {
			labels: lit,
 			

 			datasets:[
 				{
					label: "Setmine Android Growth",
					
            		strokeColor: "#2ecc71",
					data: this.props.smAd
				 },
				{
					label: "Setmine Ios Growth",
					
            		strokeColor: " #22a7f0",
					data: this.props.smIos
				},
				{
					label: "Setmine Web Growth",
		
            		strokeColor: "#9b59b6",
					data: this.props.smWb
				},
				{
					label: 'All Setmine Platforms',
					strokeColor:'#313542',
					data: today

				}
			]
		}
		 
		return(
				<div className=' user-graph'>
					
					<div className="graph flex-column">
						<LineChart  redraw data={data} options={options} className='unique-users'/>
						<div className='flex-row platform-container'>
							<div className='platform-background'>
								<li id='android'><span>Setmine Android</span></li>
							</div>
							<div className='platform-background'>
								<li id='ios'><span>Setmine Ios</span></li>
							</div>
							<div className='platform-background'>
								<li id='web'><span>Setmine Web</span></li>
							</div>
							<div className='platform-background'>
								<li id='all'><span>All Setmine Platforms</span></li>
							</div>
						</div>
					</div>
					<div className='graph-header'>
						<h1>Users</h1>
					</div>	
				</div>
			)
	}
}
