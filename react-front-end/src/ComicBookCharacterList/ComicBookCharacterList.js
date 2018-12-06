import React from 'react';

const Comics = (props) => {
    const comics = props.results.map((result, i) => {
        return (
            <div key={result.id} id='results-data'>
                <h3 id='results-1'>Real Name:</h3> 
                <h4 id='results-2'>{result.real_name}</h4>
                <h3 id='results-1'>Known Aliases: </h3>
                <h4 id='results-2'>{result.aliases}</h4>
                <h3 id='results-1'>First Appeared In:</h3>
                <h4 id='results-2'><td id='results-3' dangerouslySetInnerHTML={{__html: result.first_appeared_in_issue.name}} /></h4>
                <h3 id='results-1'>Issue #:</h3>
                <h4 id='results-2'><td id='results-3' dangerouslySetInnerHTML={{__html: result.first_appeared_in_issue.issue_number}} /></h4>
                <h3 id='results-1'>Issue Id:</h3>
                <h4 id='results-2'><td id='results-3' dangerouslySetInnerHTML={{__html: result.first_appeared_in_issue.id}} /></h4>
                <h3 id='results-1'>Character Description:</h3> 
                <h4 id='results-2'><td id='results-3' dangerouslySetInnerHTML={{__html: result.description}} /></h4>
            </div>
        )
    })
    return (
        <div>
            <h3 id='results-header'>Comic Book Character Results</h3>
            {comics[0]}
        </div>
    )
}

export default Comics;