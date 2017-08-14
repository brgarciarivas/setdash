import Base from './Base'
import api from '../scripts/api'
import React from 'react'
import TrelloCardContainer from './TrelloCardContainer'
import _ from 'underscore'

		var authenticationSuccess = function() {

			 	console.log("What it do, What it do my nigga"); 
			};
		var authenticationFailure = function() { 

				console.log("yo shit is schlulmp homie"); 
			};
		var error = function(errorMsg) {
  				console.log(errorMsg);
  				console.log('failed');
			};

		Trello.authorize({
	  		name: "Trello Authenticate",
	  		persit: 'true',
	  		interactive: 'false',
	  		
	  		scope: {
	    		read: true,
	   			
	   		},
	  		expiration: "never",
	 		success: authenticationSuccess,
	  		error: authenticationFailure
		});	

export default class TrelloExport extends Base{
	constructor(props){
		super(props)
		
		this.state = {
			cardName:[],
			cardId:[]
		}
		
	}
	componentWillMount() {
	      this.trelloBoard();
	}

	
	

	
	
	trelloBoard(){
		var sprintBoard = "559af56da9705d011cbc5b86"

		 Trello.get('/boards/'+sprintBoard+'/lists').then((data)=>{
				 var listId = data[0]['id']
				 
				Trello.get('/lists/'+listId+'/cards').then((data)=>{

					var cardName = []
					var cardId = []

					for(var i=0;i<data.length;i++){
						var nameCard = data[i]['name']
						var idCard = data[i]['id']
						cardName.push(nameCard)
						cardId.push(idCard)
					}
					
					this.setState({
						cardId: cardId,
						cardName: cardName
					})
				})
		
			})

		
			
	}
	
	render(){
		
	
		return(
			
			<div className='trello-card-contaienr'>
				
				<TrelloCardContainer
					cardName={this.state.cardName}
					cardId={this.state.cardId}
				/>
			</div>
			)
	}
}
