import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteArea extends Component {
	render() {
		return (
			<div className="note-area col-sm-6">
				<textarea placeholder="Start writing..." rows="10" cols="50" />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		note: state.activeNote
	};
}

export default connect(mapStateToProps)(NoteArea);
