import './app-header.css';

const AppHeader = (props) => {
	const {workers, increasedWorkersCount} = props;
	return (
		<div className="app-header">
			<h1>Employee accounting in "Horns and Hooves" LLC</h1>
			<h2>Total number of employees: {workers}</h2>
			<h2>The prize will be received: {increasedWorkersCount}</h2>
		</div>
	);
};

export default AppHeader;