import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFolder } from '../actions/index';
import { bindActionCreators } from 'redux';

class FolderList extends Component {
	renderList() {
		return this.props.folders.map(folder => {
			return (
				<li
					className="note-item font-weight-bold"
					key={folder.id}
					onClick={() => this.props.selectFolder(folder)}
				>
					{folder.name}
				</li>
			);
		});
	}

	render() {
		return (
			<div className="folder col-sm-2">
				<ul>
					{this.renderList()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		folders: state.folders.folderlist
	};
}

function mapDispachToProps(dispatch) {
	return bindActionCreators({ selectFolder }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(FolderList);
