import React from 'react'
import Base from './Base'

var BarChart = require("react-chartjs").Bar;

export default class BudgetGraph extends Base{
	constructor(props){
		super(props)

	}

	render(){

	
		
			var categories = [
				
				'metrics',
				'marketing',
				'operational',
				'salaries',
			];

			var fml = [];
			for(var i=0;i< categories.length;i++){
				var w = categories[i]
				fml.push(this.props.sheet[w])
				
			}
			var options = {
				scaleShowHorizontalLines: false,
 				scaleGridLines: false,
            	borderWidth: 1,
				percentageInnerCutout : 80
			}


		const data = {
			
			scaleFontColor:"rgba(46, 204, 113, 1)",
			labels:['hosting',
				'metrics',
				'marketing',
				'operational',
				'salaries',
			],
			
			datasets:[
				{
					label: 'Monthly Expenses',
            		backgroundColor:"rgba(46, 204, 113, 1)",
            		borderWidth: 2,
					borderColor: "rgba(46, 204, 113, 1)",
					fillColor:  "rgba(46, 204, 113, 1)",
					strokeColor:"rgba(46, 204, 113, 1)", 
					hoverBackgroundColor: "rgba(46, 204, 113, 1)",
					hoverBorderColor: "rgba(46, 204, 113, 1)",
					scaleGridLineColor: "rgba(46, 204, 113, 1)",
					
					data:[ this.props.sheet.hosting,
						this.props.sheet.metrics,
						this.props.sheet.marketing,
						this.props.sheet.operational,
						this.props.sheet.salaries,
					],
				}
			],


			
		}
			
		return(
			<div className='budget-placer'>
				<BarChart options={options}  className='budget-graph'   redraw data={data}/>
			</div>
			);
	}
}