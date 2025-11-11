import React from 'react'
import { useGlobalContext } from '../context'

function SearchForm() {
 const{setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef();

  const searchCocktail = () =>{
    setSearchTerm(searchValue.current.value)
  }
  React.useEffect(()=>{
    searchValue.current.focus();
  },[])
  return (
    <section className='search-container'>
      <form className='search-form'>
      <div className='form-control'>
        <label htmlFor='name'>Search Your Favourite Cocktail</label>
        <input id='name' type="text" ref={searchValue} onChange={searchCocktail}  />
      </div>
      </form>
    </section>
  )
}

export default SearchForm