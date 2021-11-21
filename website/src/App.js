import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {terms} from './terms';

import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

class App extends Component {
    constructor(){
        super()
        this.state = {
            terms: terms,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredTerms = this.state.terms.filter(terms => {
            return terms.term.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div id = "glossary" className = 'tc section2'>
                    <h1 class = "glossary">Search Financial Terms</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <section className = "containerTerms">
                        <CardList terms={filteredTerms}/>
                    </section>
            </div>
        );
    }
}

export default App;