import React from 'react';
import { Component } from 'react';

// Components
import Header from './header.js';
import NoteList from '../containers/note-list';
import NoteArea from '../containers/note-area';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<NoteList />
				<NoteArea />
			</div>
		);
	}
}
