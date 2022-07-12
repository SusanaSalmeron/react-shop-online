import style from './searchBar.module.css';
import { useState, useEffect } from 'react';
import { getAllProducts } from '../../services/productCatalogService';
import SelectSearch from 'react-select-search';


export default function SearchBar() {
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState('')
    const [suggestions, setSuggestions] = useState([])


    useEffect(() => {
        getAllProducts()
            .then(response => {
                setProducts(response)
            })
    }, [])

    const filteredProducts = (value) => products.filter(product => {
        return product.brand?.includes(value.trim().toLowerCase())
    })

    const handleSearch = (e) => {
        e.preventDefault()
        setKeyword(keyword.trim().toLowerCase())
        setSuggestions(filteredProducts(keyword))
    }

    const handleKeyword = (e) => {
        setKeyword(e.target.value)
    }

    //TODO - create dropdown to put the suggestions

    return (
        <>
            <form
                className={style.searchBar}
                onClick={handleSearch}
            >
                <input
                    type="text"
                    name="search-bar"
                    id="search-bar"
                    placeholder='Search...'
                    className={style.input}
                    value={keyword}
                    onChange={handleKeyword}
                />
                <button className={style.button}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>


                <div className={style.show}>
                    {suggestions.map(suggestion => {
                        return <div key={suggestion.id}>
                            {suggestion.brand} - {suggestion.name}
                            {console.log(suggestion)}
                        </div>
                    })}
                </div>
            </form>
        </>
    )


}