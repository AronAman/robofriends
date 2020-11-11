import React from 'react';

function Scroll(props){
	return (
		<div style={{overflowY:'auto', border:'1px solid black', height:'900px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;