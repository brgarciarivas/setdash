import React,  {PropTypes} from 'react'
import Base from './Base';
import TrelloTile from './TrelloTile'

const TrelloCardContainer = ({cardName,cardId}) => (



		<div>
			
			<div className=' trello-container '>
				<div className='sprint-tile-title'>
					<p id='sprint-title'>Products in Pipeline</p>
				</div>
				{
					
					cardId.map( (cardId,index) =>{
						
						return React.createElement(TrelloTile,{
							cardId: cardId,
							key: index,
							index: index,
							cardName: cardName,
							data: function(id){
								Trello.get('/cards/'+id+'/checklists').then( data=>{
									return data
								})
							}
							
							
						})
					})
				}
			</div>
		</div>
		
	)

export default TrelloCardContainer ;