import React, { Component } from 'react';
import ComicBookCharacterList from '../ComicBookCharacterList/ComicBookCharacterList';
import ComicBookCharacterSearch from '../CBSearchContainer/ComicBookCharacterSearch';
import firebase from 'firebase'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';



export default class ComicBookCharacterContainer extends Component {
    constructor(){
        super();
        this.state = {
            query: '',
            results: [],
            isOpen: false,
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
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
                <Navbar color="light" light expand="md" id='navbar-font'>
                <NavbarBrand href="/" id='navbar-brand-title'>Comic Book App</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        {/* <NavLink href="/components/">Components</NavLink> */}
                    </NavItem>
                    <NavItem>
                        <NavLink id='signout-font'onClick={() => firebase.auth().signOut()}>Sign Out</NavLink>
                    </NavItem>
                    {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Options
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                    </Nav>
                </Collapse>
                </Navbar>
                {/* <button onClick={() => firebase.auth().signOut()}>Sign Out!</button> */}
                <h3 id='welcome'>Welcome, {firebase.auth().currentUser.displayName}</h3>
                <ComicBookCharacterSearch value={this.state.value} handleSubmit={this.handleSubmit} onChange={this.onChange}/>
                <ComicBookCharacterList results={this.state.results} />
            </div>
        );
    }
}