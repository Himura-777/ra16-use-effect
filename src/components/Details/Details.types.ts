export interface UserDetails {
	id: number;
	name: string;
	avatar: string;
	details: {
		city: string;
		company: string;
		position: string;
	};
}

export interface DetailsProps {
	info: {
		id: number | null;
		name: string;
	} | null;
}
