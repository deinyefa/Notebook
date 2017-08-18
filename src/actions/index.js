export function selectNote(note) {
	// selectNote is an action creator, needs to return an action - an object with a type property
	return {
		type: 'NOTE_SELECTED',
		payload: note
	};
}

export function updateContent(content) {
	return {
		type: 'CONTENT_UPDATE',
		payload: content
	};
}
