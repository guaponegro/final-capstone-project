import React from 'react';

const Search = (props) => {
    return (
        <div>
            <h2>Search: </h2>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.onChange} value={props.value} placeholder="search" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;