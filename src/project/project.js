import React, { Component } from "react";

import { CardList } from "./Card-list";

import { SearchBox } from "../project/Search-Box";

import '../App.css';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monster: [],
            searchField: '',
        }

    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resp) => resp.json())
            .then(user => this.setState({ monster: user }, console.log('vicky', user)))
    }

    onSearchChange = (e) => {
        let value = e.target.value;
        this.setState({ searchField: value })
    }

    render() {
        const { monster, searchField } = this.state;
        const filteredMonster = monster.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList monster={filteredMonster} />
            </div>
        )
    }
}
export default Project;