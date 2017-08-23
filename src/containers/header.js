import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newNote } from '../actions/index';
import { removeNote } from '../actions/index';
import { bindActionCreators } from 'redux';

class Header extends Component {
	render() {
		return (
			<div className="header row">
				<h2 className="col-sm-12 heading text-center">Notebook</h2>
				<div className="col-md-4">
					<button className="material-icons">list</button>
					<button className="material-icons">dashboard</button>
					<button className="material-icons" onClick={this.props.removeNote}>
						&#xE872;
					</button>
					<button className="material-icons" onClick={this.props.newNote}>
						add
					</button>
				</div>
				<div className="col-md-3">
					<button className="material-icons">lock</button>
					<button className="material-icons">radio_button_checked</button>
					<button className="material-icons">font_download</button>
				</div>
				<div className="col-md-5">
					<button className="material-icons">people</button>
					<button className="material-icons">file_upload</button>
					<input className="material-icons searchbox" placeholder="search" />
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
