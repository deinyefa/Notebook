import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNote } from '../actions/index';
import { bindActionCreators } from 'redux';

class NoteList extends Component {
	renderList() {
		return this.props.notes.map(note => {
			return (
				<li
					className="note-item"
					key={note.id}
					onClick={() => this.props.selectNote(note)}
				>
					{note.title}
				</li>
			);
		});
	}

	render() {
		return (
			<div className="note-list col-sm-6">
				<ul>
					{this.renderList()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// what is returned will show up as props inside BookList
	return {
		notes: state.notes.notelist
	};
}

// what is returned will also show up as props on BookList
function mapDispachToProps(dispatch) {
	// when selectNote is called, the result should be passed to all the reducers
	return bindActionCreators({ selectNote: selectNote }, dispatch);
}

// transform BookList from component to container - it needs to know about the new dispach method, selectNote so we make it available as a prop
export default connect(mapStateToProps, mapDispachToProps)(NoteList);
