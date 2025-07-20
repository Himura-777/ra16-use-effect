import React from "react";
import { type ListProps } from "./List.types";

const List: React.FC<ListProps> = ({ users, selectedId, onSelect }) => {
	return (
		<div className='list'>
			<h2>Users</h2>
			<ul>
				{users.map(user => (
					<li
						key={user.id}
						className={selectedId === user.id ? "selected" : ""}
						onClick={() => onSelect(user.id)}
					>
						{user.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
