import React from 'react';

const Comics = (props) => {
    const comics = props.results.map((result, i) => {
        return (
            <div key={result.id}>
                <h3>Real Name:</h3> 
                <h4>{result.real_name}</h4>
                <h3>Known Aliases: </h3>
                <h4>{result.aliases}</h4>
                <h3>First Appeared In:</h3>
                <h4><td dangerouslySetInnerHTML={{__html: result.first_appeared_in_issue.name}} /></h4>
                <h3>Issue #:</h3>
                <h4><td dangerouslySetInnerHTML={{__html: result.first_appeared_in_issue.issue_number}} /></h4>
                <h3>Issue Id:</h3>
                <h4><td dangerouslySetInnerHTML={{__html: result.first_appeared_in_issue.id}} /></h4>
                <h3>Character Description:</h3> 
                <h4><td dangerouslySetInnerHTML={{__html: result.description}} /></h4>
            </div>
        )
    })
    return (
        <div>
            <h1>Comic Book Character Results</h1>
            {comics[0]}
        </div>
    )
}

export default Comics;