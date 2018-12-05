import React, { Component } from 'react';
import ComicBookCharacterList from '../ComicBookCharacterList/ComicBookCharacterList';
import ComicBookCharacterSearch from '../CBSearchContainer/ComicBookCharacterSearch';


export default class ComicBookCharacterContainer extends Component {
    constructor(){
        super();
        this.state = {
            query: '',
            results: [],
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    onChange = (e) => {
        console.log(e.currentTarget.value)
        this.setState({
            query: e.currentTarget.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state.query)
        const query = this.state.query;
        try {
            const cors_api_host = 'https://cors-anywhere.herokuapp.com';
            const ComicVineAPIKey = 'd299d3d5b4ea77b33accbf7ced3140fabc545199';
            const fetchComicURL = cors_api_host + '/' + `https://comicvine.gamespot.com/api/characters/?api_key=` + ComicVineAPIKey + `&filter=name:${query}` + '&format=json';
            console.log(fetchComicURL);
            const comicInfo = await fetch(fetchComicURL);
            const parsedComicInfo = await comicInfo.json();
            console.log(parsedComicInfo)
            this.setState({
                results: parsedComicInfo.results,
            })
        } catch (err) {
            console.log(err)
            return err
        }
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state.query)
    }
    addQuery = (query) => {
        this.setState({
            results: [...this.state.results, query],
        });
    }
    getResults = async () => {
        const query = this.state.query;
        const results = await fetch 
    }
    render(){
        return (
            <div>
                <ComicBookCharacterSearch value={this.state.value} handleSubmit={this.handleSubmit} onChange={this.onChange}/>
                <ComicBookCharacterList results={this.state.results} />
            </div>
        )
    }
}