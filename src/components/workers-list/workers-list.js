import WorkersListItem from '../workers-list-item/workers-list-item';

import './workers-list.css';

const WorkersList = ({data, onDelete, onToggleIncrease, onToggleRaise}) => {
	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		return (
			<WorkersListItem key={id} {...itemProps}
			onDelete={() => onDelete(id)}
			onToggleIncrease={() => onToggleIncrease(id)}
			onToggleRaise={() => onToggleRaise(id)}
			/>
		)
	});
	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
};

export default WorkersList;