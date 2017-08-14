import React from 'react'
import Base from './Base'
import api from '../scripts/api'

import Divider from 'material-ui/lib/divider'

import BRA from './BRA'
import GraphData from './GraphData'

import Budget from './Budget';
import TrelloExport from './TrelloExport';
import JobzMall from './JobzMall';
import Logos from './Logos';

var Carousel = require('nuka-carousel');
var Slider = require('react-slick');





export default class Home extends Base {
	constructor(props) {
		super(props)
		this.state = {
			timer:0
		}

		
	}
	componentDidMount() {
	  //this.test()     
	}
	test(){
			setTimeout(function(){

				document.getElementsByClassName("stack")[0].style.display = 'inline';
				console.log('display to inline')

				
			},3000 );
			

	} 
	
	render() {
		 var settings = {
		      
		  
	      infinite: true,
	      speed: 30000,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      autoplay: true,
	      autoplaySpeed: 1000,
	      fade: true,
	      infinite: true,

	     };
	     
		return (
			<div className='home'>
				<div className='content-container '>
					<div className='bra-users-budget'>
						<BRA />
						<Budget className="Budget"/>
					</div>
					<div className=' trello-logos '>
						<GraphData className="graphData"/>
						<TrelloExport/>
					</div>	
				</div>
			</div>

		)
	}
}


