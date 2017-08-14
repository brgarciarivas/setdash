
	<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/1.5.jpg" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/1.jpg" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/3-7-11.png" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/4-7-14-2013" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/6-7-19-2013" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/7-7-20-2013" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/6-7-19-2013.png" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/4-7-14-2013.png" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/iosHOME.jpg" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/IMG_2531.jpg" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/blacky.jpg" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/1779962_830464990313750_233280116_n.png" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/Screen+Shot+2015-05-11+at+9.23.50+PM.png" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/setmine-logo-letters.png" />












					import React from 'react'
import Base from './Base'
import api from '../scripts/api'

import Divider from 'material-ui/lib/divider'

import BRA from './BRA'
import GraphData from './GraphData'

import Budget from './Budget';
import TrelloExport from './TrelloExport';
import JobzMall from './JobzMall';

var Slider = require('react-slick');








export default class Home extends Base {
	constructor(props) {
		super(props)
		
	}
	



	render() {

	 var settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      adaptiveHeight: true,
      arrows: true,
      autoplay: true,
      fade: true

     
    };

		return (
			
				<Slider className='slider' {...settings} >

					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/1.5.jpg" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/1.jpg" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/3-7-11-2013.png" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/4-7-14-2013.png" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/6-7-19-2013.png" />
					<img src="//d1wbxby8dwa4u.cloudfront.net/namecheap/7-7-20-2013.png" />
					
					
				</Slider >	
			
		)
	}
}


