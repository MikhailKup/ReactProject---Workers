import './app-filter.css';

const AppFilter = (props) => {
	const buttonsData = [
		{name: 'all', label: 'All employees'},
		{name: 'raise', label: 'Up for promotion'},
		{name: 'salary', label: 'Salary > 1000$'},
	];

	const buttons = buttonsData.map(({name, label}) => {
		const active = (props.filter === name) ? true : false;
		const clazz = active ? 'btn btn-light' : 'btn btn-outline-light';
		return (
			<button className={clazz} key={name} onClick={() => props.onFilterSelect(name)}>{label}</button>
		)
	});
	return (
		<div className="btn-group">
			{buttons}
		</div>
	);
};

export default AppFilter;