import React from 'react';
import Card from './Card';

function CardList({ robots }) {
	// throw new Error("This sucks!")
	return (
		<div>
			{
				robots.map((robot, i) => {
					return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />;
				})
			}
		</div>
	);
}

export default CardList;