import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newNote, removeNote, toggleFolderList } from '../actions/index';
import { bindActionCreators } from 'redux';

class Header extends Component {
	render() {
		return (
			<div className="header row">
				<h2 className="col-sm-12 heading text-center">Notebook</h2>
				<div className="col-md-4">
					<i
						className="material-icons view_list"
						onClick={this.props.toggleFolderList}
					>
						view_list
					</i>
					<i className="material-icons">view_module</i>
					<i className="material-icons" onClick={this.props.removeNote}>
						&#xE872;
					</i>
					<i className="material-icons" onClick={this.props.newNote}>
						note_add
					</i>
				</div>
				<div className="col-md-3">
					<i className="material-icons">lock</i>
					<i className="material-icons">check_circle</i>
					<i className="material-icons text-icon">font_download</i>
				</div>
				<div className="col-md-5">
					<i className="material-icons">people</i>
					<i className="material-icons">file_upload</i>
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
		{ newNote, removeNote, toggleFolderList },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispachToProps)(Header);
