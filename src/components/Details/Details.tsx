import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import { type UserDetails } from "./Details.types";

const Details: React.FC<{
	info: { id: number | null; name: string } | null;
}> = ({ info }) => {
	const [avatarVersion, setAvatarVersion] = useState(0);
	const url = info?.id
		? `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
		: "";

	const { data, loading, error } = useFetch<UserDetails>(url);

	useEffect(() => {
		setAvatarVersion(prev => prev + 1);
	}, [info?.id]);

	if (!info) return <div className='details'>Select a user</div>;

	return (
		<div className='details'>
			<h2>{info.name}</h2>
			{loading && <Loader />}
			{error && <div className='error'>{error}</div>}
			{data && (
				<div className='user-details'>
					<img
						src={`${data.avatar}?v=${avatarVersion}`}
						alt={data.name}
						key={`avatar-${avatarVersion}`}
					/>
					<p>City: {data.details.city}</p>
					<p>Company: {data.details.company}</p>
					<p>Position: {data.details.position}</p>
				</div>
			)}
		</div>
	);
};

export default Details;
