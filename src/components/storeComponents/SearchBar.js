import React, {useState, useEffect } from 'react'

const SearchBar = ({setFilter}) => {

    const [visible,setVisible] = useState(false)
    const visiStyle = () => {
        if(visible) {
            return {
                "visibility": "visible",
                "opacity": "1"
            }
        }
        return {
            "visibility": "hidden",
            "opacity": "0"
        }
    }
    const [inputValue, setInputValue] = useState('')
    useEffect(() => {
        setFilter(inputValue)
    },[inputValue,setFilter])

    const handleClick = () => {
        setTimeout(() => {
            setVisible(false)
            setInputValue('')
        }, 500)
    }

    return (
        <div className="searchBar">
            <input type="text" value={ inputValue } style={ visiStyle() } onChange={ e => setInputValue(e.currentTarget.value) } />
            {inputValue !== '' && (<button className='clear' onClick={handleClick}><i className="material-icons">close</i></button>)}
            <button onClick={ () => setVisible(!visible) }><i className="material-icons">search</i></button>
        </div>
    )
}

export default SearchBar
