import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateContent } from '../actions/index';
import { bindActionCreators } from 'redux';

class NoteArea extends Component {
	render() {
		return (
			<div className="note-area col-sm-5">
				<textarea
					placeholder="Start writing..."
					rows="10"
					cols="50"
					value={this.props.note.title}
					onChange={e => this.props.content(e.target.value)}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		note: state.notes.selected
	};
}

function mapDispachToProps(dispatch) {
	return bindActionCreators({ content: updateContent }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(NoteArea);
