import { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import WorkersAddForm from '../workers-add-form/workers-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'Denzel Washington', salary: 800, increase: false, raise: false, id:1},
				{name: 'Will Smith', salary: 1000, increase: false, raise: false, id:2},
				{name: 'Dwayne Johnson', salary: 1400, increase: false, raise: false, id:3},
			],
			term: '',
			filter: 'all',
		}
		this.maxId = 4;
	}
	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(elem => elem.id !== id)
			}
		})
	};
	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			raise: false,
			id: this.maxId++
		};
		this.setState(({data}) => {
			const newArr = (newItem.name.length > 3 && newItem.salary !== '') ? [...data, newItem] : [...data];
			return {
				data: newArr
			}
		})
	};

	onToggleIncrease = (id) => {
		this.setState(({data}) => ({
			data: data.map(elem => {
				if (elem.id === id) {
					return {...elem, increase: !elem.increase};
				}
				return elem;
			})
		}))
	};
	onToggleRaise = (id) => {
		this.setState(({data}) => ({
			data: data.map(elem => {
				if (elem.id === id) {
					return {...elem, raise: !elem.raise};
				}
				return elem;
			})
		}))
	};

	searchWorker = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		})
	};
	onUpdateSearch = (term) => {
		this.setState({
			term: term
		})
	};

	filterWorkers = (items, filter) => {
		switch (filter) {
			case 'raise':
				return items.filter(item => item.raise);
			case 'salary':
				return items.filter(item => item.salary > 1000);
			default:
				return items;
		}
	}

	onFilterSelect = (filter) => {
		this.setState(({filter}));
	}

	//? ---------------------------------------------------
	onSalaryChange = (name, salary) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.name === name) {
					return {...item, salary}
				}
				return item;
			})
		}));
	};

	render() {
		const {data, term, filter} = this.state;
		const workers = this.state.data.length;
		const increasedWorkersCount = this.state.data.filter(elem => elem.increase).length;
		const visibleData = this.filterWorkers(this.searchWorker(data, term), filter);
		return (
			<div className="app">
				<AppHeader
				workers={workers}
				increasedWorkersCount={increasedWorkersCount}
				/>
	
				<div className="search-panel">
					<SearchPanel 
					onUpdateSearch={this.onUpdateSearch}
					/>
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
				</div>
	
				<WorkersList data={visibleData}
				onDelete={this.deleteItem}
				onToggleIncrease={this.onToggleIncrease}
				onToggleRaise={this.onToggleRaise}
				onSalaryChange={this.onSalaryChange}
				/>
	
				<WorkersAddForm onAdd={this.addItem}/>
			</div>
		);
	}
};

export default App;