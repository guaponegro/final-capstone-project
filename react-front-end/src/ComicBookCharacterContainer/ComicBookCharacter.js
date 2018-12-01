import React, { Component } from 'react';
import ComicBookCharacterList from '../ComicBookCharacterList/ComicBookCharacterList';
import SearchContainer from '../SearchContainer/Search';

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
            const fetchURL = cors_api_host + '/' + `https://comicvine.gamespot.com/api/characters/?api_key=` + ComicVineAPIKey + `&filter=name:${query}` + '&format=json';
            console.log(fetchURL);
            const comicInfo = await fetch(fetchURL);
            const parsedComicInfo = await comicInfo.json();
            console.log(parsedComicInfo)
            // console.log(parsedComicInfo.results[0])
            // const findGif = await fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=eL3jgNbh8QBIbriwoMEHw3JyYZVPryH5`);
            // const findGifJSON = await findGif.json();
            // console.log(findGifJSON.data)
            this.setState({results: parsedComicInfo.results})
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
        this.setState({results: [...this.state.results, query]});
    }
    getResults = async () => {
        const query = this.state.query;
        const results = await fetch
    }
    render(){
        return (
            <div>
                <SearchContainer value={this.state.value} handleSubmit={this.handleSubmit} onChange={this.onChange}/>
                <ComicBookCharacterList results={this.state.results}/>
            </div>
        )
    }
}