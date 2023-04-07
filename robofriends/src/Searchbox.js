import React from "react";

const Searchbox = ({searchChange}) => {
    return (
        <input 
            type='search'
            placeholder="search robot"
            onChange={searchChange}    
        />
    );
}

export default Searchbox;