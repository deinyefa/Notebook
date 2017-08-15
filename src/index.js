import React from 'react';
import ReactDOM from 'react-dom';

// Components
import NoteList from './component/note-list';

const App = () => {
	return (
		<div className="note-list col-md-6">
			<ul className="">
				<li className="note-item">Note 1</li>
				<li className="note-item">Note 2</li>
				<li className="note-item">Note 3</li>
				<li className="note-item">Note 4</li>
			</ul>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));
