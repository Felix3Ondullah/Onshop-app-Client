import {useState, useEffect}from 'react'

function Search() {
  const[productSearch, setProductSearch] = useState()
  useEffect (() => {
  fetch('http://localhost:3005/products')
  .then(response => response.json ())
  .catch(error => console.log(error))
  }, [])


  return (
    <div>Search Products</div>
  )
}

export default Search