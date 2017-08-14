import React, {Proptypes} from 'react'

const TrelloTile = ({cardId,cardName,key,data,index}) =>{
	
	
	var title = cardName[index]
	// console.log(cardId)
	// Trello.get('/cards/'+cardId+'/checklists').then( data =>
	//       return 	data.map(function(data){
	// 		console.log(data['name'] +'sdf')
	// 		return data['name']
	// 	})


		
	// 	 )

	// console.log(checkList)

	
	return(
			
				<div className='trello-tile'>
					<p className='trello-title' >{title}</p>				
				</div>	
			
		);
}

export default TrelloTile;