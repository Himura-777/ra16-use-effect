export interface User {
	id: number;
	name: string;
}

export interface ListProps {
	users: User[];
	selectedId: number | null;
	onSelect: (id: number) => void;
}
