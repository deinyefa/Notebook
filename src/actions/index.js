export function selectNote(note) {
	// selectNote is an action creatore, needs to return an action - an object with a type property
	return {
		type: 'NOTE_SELECTED',
		payload: note
	};
}
