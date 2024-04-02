import './app-header.css';

const AppHeader = (props) => {
	const {workers, increasedWorkersCount} = props;
	return (
		<div className="app-header">
			<h1>Учёт сотрудников в компании ООО "Рога"</h1>
			<h2>Общее число сотрудников: {workers}</h2>
			<h2>Премию получат: {increasedWorkersCount}</h2>
		</div>
	);
};

export default AppHeader;