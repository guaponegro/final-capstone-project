import React from 'react';

const  ComicBookCharacterSearch = (props) => {
    return (
        <div>
            <h2>Comic Book Character Search: </h2>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.onChange} value={props.value} placeholder="Search" />
                <button type="Submit">Search</button>
            </form>
        </div>
    )
}

export default ComicBookCharacterSearch;