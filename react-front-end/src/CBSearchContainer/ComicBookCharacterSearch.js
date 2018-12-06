import React from 'react';

const  ComicBookCharacterSearch = (props) => {
    return (
        <div>
            <h3 id='search-header'>Comic Book Character Search: </h3>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.onChange} value={props.value} placeholder="Search" />
                <button type="Submit">Search</button>
            </form>
        </div>
    )
}

export default ComicBookCharacterSearch;