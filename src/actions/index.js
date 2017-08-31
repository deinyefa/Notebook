import {
	NOTE_SELECTED,
	CONTENT_UPDATE,
	NEW_NOTE,
	REMOVE_NOTE
} from '../lib/notes_constants';
import {
	FOLDER_SELECTED,
	FOLDER_OPTIONS,
	NEW_FOLDER,
	REMOVE_FOLDER,
	FOLDER_TO_RENAME,
	RENAME_FOLDER,
	TOGGLE_FOLDER_LIST
} from '../lib/folder_constants';

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
export function folderOptions(folder) {
	return {
		type: FOLDER_OPTIONS,
		payload: folder
	};
}
export function newFolder() {
	return {
		type: NEW_FOLDER
	};
}
export function removeFolder() {
	return {
		type: REMOVE_FOLDER
	};
}
export function renameFolder(folder) {
	return {
		type: RENAME_FOLDER,
		payload: folder
	};
}
export function folderToRename(folder) {
	return {
		type: FOLDER_TO_RENAME,
		payload: folder
	};
}
export function toggleFolderList() {
	return {
		type: TOGGLE_FOLDER_LIST
	};
}
