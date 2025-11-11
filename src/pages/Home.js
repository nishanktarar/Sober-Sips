import React, { useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'
import { useGlobalContext } from '../context'

function Home() {
  const {setSearchTerm } = useGlobalContext()
  useEffect(() =>{
    setSearchTerm('a')
  },[])
  return (
    <main>
    <div className='hero'>
    <div className='hero-form'>
    <div className='text-wrapper'>
      <ul>
        <li><span>Want to make your favourite cocktail</span></li>
        <li><span>Just search cocktail name below and Enjoy</span></li>
      </ul>
    </div>
      <SearchForm />
    </div>
      <div className='hero-img'>
        <img src={require('../images/pexels-denys-gromov-12419192.jpg')} alt='cocktail' />
      </div>
    </div>
      <CocktailList />
    </main>
  )
}

export default Home