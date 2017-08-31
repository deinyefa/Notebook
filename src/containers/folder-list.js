import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	selectFolder,
	folderOptions,
	newFolder,
	removeFolder,
	folderToRename,
	renameFolder
} from '../actions/index';
import { bindActionCreators } from 'redux';

class FolderList extends Component {
	handleChange(folder, e) {
		if (e.target.value == 'renameFolder') {
			this.props.folderToRename(folder);
		} else if (e.target.value == 'removeFolder') {
			this.props.removeFolder();
		} else if (e.target.value == 'newFolder') {
			this.props.newFolder();
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('form submitted');
	}

	valueChange(e) {
		e.preventDefault();
		this.props.renameFolder(e.target.value);
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
						this.props.folderOptions(folder);
					}}
				>
					{folder.id == this.props.rightClickedIndex
						? <select onChange={this.handleChange.bind(this, folder)}>
								<option />
								<option value="renameFolder">Rename Folder</option>
								<option value="removeFolder">Delete Folder</option>
								<option value="newFolder">New Folder</option>
							</select>
						: ''}
					{folder.id == this.props.indexToRename
						? <form onSubmit={this.handleSubmit}>
								<input
									type="text"
									value={folder.name}
									onChange={this.valueChange.bind(this)}
								/>
								<input
									type="submit"
									style={{
										position: 'absolute',
										left: '-9999px',
										width: '1px',
										height: '1px'
									}}
									tabIndex="-1"
								/>
							</form>
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
				<div className="new_folder fixed-bottom">
					<i className="material-icons" onClick={this.props.newFolder}>
						add
					</i>
					<p>New Folder</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		folders: state.folders.folderlist,
		rightClickedIndex: state.folders.rightClickedIndex,
		indexToRename: state.folders.indexToRename
	};
}

function mapDispachToProps(dispatch) {
	return bindActionCreators(
		{
			selectFolder,
			newFolder,
			folderOptions,
			removeFolder,
			folderToRename,
			renameFolder
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispachToProps)(FolderList);
