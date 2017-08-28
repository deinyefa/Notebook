import {
	NOTE_SELECTED,
	CONTENT_UPDATE,
	NEW_NOTE,
	REMOVE_NOTE
} from '../lib/notes_constants';
import { FOLDER_SELECTED } from '../lib/folder_constants';

// ------------------------------------ NOTES ACTIONS ------------------------------------- //
export function selectNote(note) {
	// selectNote is an action creator, needs to return an action - an object with a type property
	return {
		type: NOTE_SELECTED,
		payload: note
	};
}
export function updateContent(content) {
	return {
		type: CONTENT_UPDATE,
		payload: content
	};
}
export function newNote() {
	return {
		type: NEW_NOTE
	};
}
export function removeNote() {
	return {
		type: REMOVE_NOTE
	};
}

// ------------------------------------ FOLDERS ACTIONS ------------------------------------- //
export function selectFolder(folder) {
	return {
		type: FOLDER_SELECTED,
		payload: folder
	};
}
