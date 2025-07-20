import React, { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import List from "./components/List/List";
import Details from "./components/Details/Details";
import "./App.css";

interface User {
	id: number;
	name: string;
}

const App: React.FC = () => {
	const [selectedId, setSelectedId] = useState<number | null>(null);
	const [selectedUser, setSelectedUser] = useState<{
		id: number | null;
		name: string;
	} | null>(null);

	const {
		data: users,
		loading,
		error,
	} = useFetch<User[]>(
		"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
	);

	useEffect(() => {
		if (selectedId && users) {
			const user = users.find(u => u.id === selectedId);
			if (user) {
				setSelectedUser({ id: user.id, name: user.name });
			}
		}
	}, [selectedId, users]);

	return (
		<div className='app'>
			{loading && <div>Loading users...</div>}
			{error && <div className='error'>{error}</div>}
			{users && (
				<div className='container'>
					<List
						users={users}
						selectedId={selectedId}
						onSelect={setSelectedId}
					/>
					<Details info={selectedUser} />
				</div>
			)}
		</div>
	);
};

export default App;
