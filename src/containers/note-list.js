import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteList extends Component {
	renderList() {
		return this.props.notes.map(note => {
			return (
				<li className="note-item" key={note.id}>
					{note.title}
				</li>
			);
		});
	}

	render() {
		return (
			<div className="note-list col-md-6">
				<ul>
					{this.renderList()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		notes: state.notes
	};
}

export default connect(mapStateToProps)(NoteList);
