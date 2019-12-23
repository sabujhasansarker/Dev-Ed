import React,{useEffect,useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {
	const App_Id = '288cb5a4'
	const App_Key = '6d65fb3b16ca47db09f1ecde4402c604'
	const [recipes,setRecipes] = useState([])
	const [search,setSearch] = useState('')
	const [quary,setQuary] = useState('chicken')
	useEffect(()=>{
		getRecipes()
	},[quary])
	const getRecipes = async() =>{
		const response = await fetch(`https://api.edamam.com/search?q=${quary}&app_id=${App_Id}&app_key=${App_Key}`)
		const data = await response.json()
		setRecipes(data.hits)
		console.log(data.hits)
	}
	const searchHendelar = (e) =>{
		setSearch(e.target.value)
	}
	const hendelSumbite = (e) =>{
		e.preventDefault()
		setQuary(search)
	}
  return (
    <div className="App">
      <form onSubmit={hendelSumbite}>
			<input type="text" onChange={searchHendelar} value={search}/>
		  <button>Search</button>
	  </form>
		  <div className="flax">
		  {recipes.map((e,index)=>(
		  <Recipe 
			  title={e.recipe.label} 
			  image={e.recipe.image} 
			  calories={e.recipe.calories} 
			  ingredients={e.recipe.ingredients}
			  key={index}/>
		  ))}
		</div>
    </div>
  );
}

export default App;
