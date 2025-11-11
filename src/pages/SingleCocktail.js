import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function SingleCocktail() {
    const {id} = useParams()
    const [cocktail,setCocktail] = useState(null)
    const [loading,setLoading] = useState(false)
  
  useEffect(()=>{
    setLoading(true)
    const fetchCocktail = async() =>{
        try {
            const responce = await fetch(`${url}${id}`)
            const data = await responce.json();
            if(data.drinks){
                const{strDrink:name, 
                    strDrinkThumb:image,
                    strAlcoholic:info,
                    strCategory:category,
                    strGlass:glass,
                    strInstructions:instructions, 
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5
                  } = data.drinks[0];
                  const ingredients = [strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5]
                const newCocktail = {name,image,info,category,glass,instructions,ingredients}
                setCocktail(newCocktail)
                setLoading(false)
            }
            else{
                setLoading(false)
                setCocktail(null)
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    fetchCocktail()
  },[id])

  if(loading){
    return <Loading />
  }
  if(!cocktail){
    return <h2 className='section-title'>No Cocktail to display.</h2>
  }
  const {name,image,info,glass,category,instructions,ingredients} = cocktail;
    return (
    <section className='section cocktail-section'>
       <h2 className='section-title'>{name}</h2>
       <div className='drink'>
       <div className='cocktail-img'>
            <img src={image} alt={name} />
       </div>
        <div className='drink-info'>
            <section className='drink-data'>
                <h3>Category:</h3>
                <span>{category}</span>
            </section>
            <section className='drink-data'>
                <h3>Info:</h3>
                <span>{info}</span>
            </section>
            <section className='drink-data'>
                <h3>Glass:</h3>
                <span>{glass}</span>
            </section>
            <section className='drink-data'>
                <h3>Instructions:</h3>
                <span>{instructions}</span>
            </section>
            <section className='drink-data'>
                <h3>Ingredients:</h3>
                {ingredients.map((item,index) =>{
                    return <span key={index}>{item} </span>
                })}
            </section>
        </div>
       </div>
    </section>
  )
}

export default SingleCocktail