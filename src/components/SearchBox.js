import React from 'react';

const SearchBox = ({ searchfield, searchChange }) =>{
	return(
		<div className = 'pa2'>
		<input 
			className = 'input-reset pa3 ba b--green bg-lightest-blue w60'
			type = 'search'
			placeholder = 'Search Robots'
			onChange = {searchChange}
		/>
		</div>
	);
}
export default SearchBox;