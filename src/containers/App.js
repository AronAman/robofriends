import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import './SEGA.woff';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}
	searchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(data => {
				this.setState({ robots: data });
			});
	}
	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase()) || robot.email.toLowerCase().includes(searchField.toLowerCase());
		});
		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.searchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		)
	}
}

export default App;