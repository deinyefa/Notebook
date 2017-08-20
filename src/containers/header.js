import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newNote } from '../actions/index';
import { bindActionCreators } from 'redux';

class Header extends Component {
	onDeleteNote() {
		return console.log('delete selected note');
	}

	render() {
		return (
			<div className="header row">
				<h1 className="col-sm-6"> NoteBook </h1>
				<div className="col-sm-6">
					<button onClick={this.props.newNote}>New Note</button>
					<button onClick={this.onDeleteNote}>Delete Note</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		// newNote: state.notes.notelist
	};
}

function mapDispachToProps(dispatch) {
	return bindActionCreators({ newNote: newNote }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Header);
