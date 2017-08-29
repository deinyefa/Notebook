import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	selectFolder,
	newFolder,
	folderOptions,
	removeFolder
} from '../actions/index';
import { bindActionCreators } from 'redux';

class FolderList extends Component {
	handleChange(e) {
		if (e.target.value == 'renameFolder') {
			console.log(e.target.value + ' was selected');
		} else if (e.target.value == 'removeFolder') {
			return this.props.removeFolder();
		} else if (e.target.value == 'newFolder') {
			return this.props.newFolder();
		}
	}

	renderList() {
		return this.props.folders.map(folder => {
			return (
				<li
					className="note-item pl-3 font-weight-bold"
					key={folder.id}
					onClick={() => this.props.selectFolder(folder)}
					onContextMenu={e => {
						e.preventDefault();
						return this.props.folderOptions(folder);
					}}
				>
					{folder.id == this.props.rightClickedIndex
						? <select onChange={this.handleChange.bind(this)}>
								<option value="renameFolder">Rename Folder</option>
								<option value="removeFolder">Delete Folder</option>
								<option value="newFolder">New Folder</option>
							</select>
						: ''}
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
				<div>
					<i className="material-icons" onClick={this.props.newFolder}>
						create_new_folder
					</i>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		folders: state.folders.folderlist,
		rightClickedIndex: state.folders.rightClickedIndex
	};
}

function mapDispachToProps(dispatch) {
	return bindActionCreators(
		{ selectFolder, newFolder, folderOptions, removeFolder },
		dispatch
	);
}

export default connect(mapStateToProps, mapDispachToProps)(FolderList);
