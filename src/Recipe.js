import React from 'react'
const Recipe = ({title,image,calories,ingredients}) =>{
	return(
		<div className="container">
			<h1>{title}</h1>
			<ul>
				{ingredients.map((e,index)=>(
					<ol key={index}>{e.text}</ol>
				))}			
			</ul>
			<p>{calories}</p>
			<img src={image}/>
		</div>
	)
}
export default Recipe