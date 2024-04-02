import './app-filter.css';

const AppFilter = (props) => {
	const buttonsData = [
		{name: 'all', label: 'Все сотрудники'},
		{name: 'raise', label: 'На повышение'},
		{name: 'salary', label: 'ЗП больше 1000$'},
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