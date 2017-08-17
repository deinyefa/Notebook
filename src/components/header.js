import React from 'react';

const Header = () => {
	return (
		<div className="header row">
			<h1 className="col-sm-6"> NoteBook </h1>
			<div className="col-sm-6">
				<button>New Note</button>
				<button>Delete Note</button>
			</div>
		</div>
	);
};

export default Header;
