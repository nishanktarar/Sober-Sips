import React, { useEffect, useState } from 'react'
import { useContext } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

function AppProvider({children}) {
    const [cocktails,setCocktails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('a')

    const fetchDrinks = async () =>{
      setLoading(true);
      try {
        const responce = await fetch(`${url}${searchTerm}`)
        const data = await responce.json();
        
        if(data.drinks){
          const newCocktail = data.drinks.map((item) =>{
            const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item;
            return{
              id:idDrink,
              name:strDrink,
              image:strDrinkThumb,
              info:strAlcoholic,
              glass:strGlass
            }
          })
          setCocktails(newCocktail)
          setLoading(false)
        }
        else{
          setCocktails([])
          setLoading(false)
        }
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    useEffect(()=>{
     fetchDrinks()
    },[searchTerm])
  return (
    <AppContext.Provider value={{
      loading,cocktails,setSearchTerm
    }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}
export {AppContext, AppProvider}