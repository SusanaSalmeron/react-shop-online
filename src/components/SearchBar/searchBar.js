import './searchBar.css';
import { useState, useEffect } from 'react';
import { getAllProducts } from '../../services/productCatalogService';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { useNavigate } from 'react-router-dom';


export default function SearchBar() {
    const [keyword, setKeyword] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllProducts()
            .then(response => {
                setSuggestions(response)
            })
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        setKeyword(keyword.trim().toLowerCase())
        console.log(keyword)
        navigate(`/search/${keyword}`)
    }

    const handleKeyword = (e) => {
        setKeyword(e)
    }

    return (
        <>
            <SelectSearch
                options={suggestions}
                value={suggestions.value}
                onChange={handleKeyword}
                search
                filterOptions={fuzzySearch}
                placeholder="Search..."
            />
            <button
                className='button'
                type='submit'
                onClick={handleSearch} >
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </>
    )


}