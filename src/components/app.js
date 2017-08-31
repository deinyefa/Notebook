import React from 'react';
import { Component } from 'react';

// Components
import Header from '../containers/header';
import FolderList from '../containers/folder-list';
import NoteList from '../containers/note-list';
import NoteArea from '../containers/note-area';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="row wrapper">
					<FolderList />
					<NoteList />
					<NoteArea />
				</div>
			</div>
		);
	}
}
