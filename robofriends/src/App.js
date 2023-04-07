import React, { Component } from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import { robots } from "./robots";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        return (
            <div>
                <h2>Robot Friends</h2>
                <Searchbox searchChange = {this.onSearchChange}/>
                <Cardlist robots={filteredRobots} />
            </div>
        );
    }
}

export default App;