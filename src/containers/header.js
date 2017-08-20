import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newNote } from '../actions/index';
import { removeNote } from '../actions/index';
import { bindActionCreators } from 'redux';

class Header extends Component {
	render() {
		return (
			<div className="header row">
				<h1 className="col-sm-6"> NoteBook </h1>
				<div className="col-sm-6">
					<button onClick={this.props.newNote}>New Note</button>
					<button onClick={this.props.removeNote}>Delete Note</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		selected: state.notes.selected
	};
}

function mapDispachToProps(dispatch) {
	return bindActionCreators(
		{ newNote: newNote, removeNote: removeNote },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispachToProps)(Header);
