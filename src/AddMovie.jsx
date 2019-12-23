import React,{useContext,useState} from 'react';
import { MovieContext } from './MovieContext';
const AddMovie = () => {
    const [movies,setMovies] = useContext(MovieContext)
    const [content, setContent] = useState('')
    const [price, setPrice] = useState('')
    const hendelMovies = (e) =>{
        setContent(e.target.value)
    }
    const hendelPrice = (e) =>{
        setPrice(e.target.value)
    }
    const hendelSubmite = (e) =>{
        e.preventDefault()
        if (content.length>0 && price.length>0) {
            setMovies([...movies,{name:content,price:price,id:Math.random()}])
            setContent('')
            setPrice('')
        }
    }
    return ( 
        <form action="" onSubmit={hendelSubmite}>
            <input type="text" placeholder="Add Movie Name" value={content} onChange={hendelMovies}/>
            <br/>
            <input type="text" placeholder="Add Price" value={price} onChange={hendelPrice}/>
            <br/>
            <button>Add Movie</button>
        </form>
     );
}
 
export default AddMovie;