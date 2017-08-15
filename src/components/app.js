import React from 'react';
import { Component } from 'react';

// Components
import NoteList from '../containers/note-list';

export default class App extends Component {
	render() {
		return (
			<div>
				<NoteList />
			</div>
		);
	}
}
