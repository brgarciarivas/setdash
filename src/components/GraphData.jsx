import React from 'react';
import Base from './Base';
import api from '../scripts/api';
import Graph from './Graph';
import moment from 'moment';

export default class GraphData extends Base{
	constructor(props){
		super(props)
		
		this.state = {
			dates: [],
			smIos: [],
			smAd:  [],
			smWb:  [],
			
			
		}
	}
	componentDidMount(){
		this.smIos()
		this.smWb()
		this.smAd()
		
		
	}

	
	
	smIos(){
		api.get('/mixSmIos').then(res=> {
			
			var smIos = [];
			var data = res['data']['series'];
			var dates = [];
			
			for(var i=0;i<res['data']['series'].length; ){
				var	dias = res["data"]["series"][i];
				var value = res["data"]['values']['Application Opened'][dias];
				dates.push(dias);
				smIos.push(value);
				
				var i = i + 7;

			}
			this.setState({
				smIos: smIos,
				dates: dates
			})
		});
	}

	smAd(){ 
		api.get('/mixSmAd').then(res =>{
			
			var smAd = [];
			for(var i=0;i<res['data']['series'].length;){
			var	dates = res["data"]["series"][i];
			var value = res["data"]['values']['Application Opened'][dates];
			smAd.push(value);
			var i = i + 7;
			}
			this.setState({
				smAd: smAd
			})
		});	
		
	}
	smWb(){
		api.get('/mixSmWb').then(res=>{
			
			
			var smWb = [];
			for(var i=0;i<res['data']['series'].length;){
				var	dates = res["data"]["series"][i];
				var value = res["data"]['values']['Page Load'][dates];
				smWb.push(value);
				var i = i + 7;	
		}
		this.setState({
			smWb: smWb
		})
	  });
	}
	render(){
		

		return(

			<Graph 
			 smIos={this.state.smIos}
			 smAd={this.state.smAd}
			 smWb={this.state.smWb}
			 dates={this.state.dates}/>
			)
	}
}
