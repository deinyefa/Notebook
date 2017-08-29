import {
	FOLDER_SELECTED,
	NEW_FOLDER,
	REMOVE_FOLDER,
	FOLDER_OPTIONS
} from '../lib/folder_constants';

let folderlist = [{ name: 'Folder 1', id: 1 }, { name: 'Folder 2', id: 2 }];
let folder_id = 2;

export default function(
	state = {
		selected: { ...folderlist[0] },
		folderlist
	},
	action
) {
	switch (action.type) {
		case FOLDER_SELECTED:
			return { ...state, selected: action.payload };

		case NEW_FOLDER:
			folder_id += 1;
			return {
				...state,
				folderlist: [...state.folderlist, { title: '', id: folder_id }]
			};

		case FOLDER_OPTIONS:
			return {
				...state,
				rightClickedIndex: action.payload.id
			};

		case REMOVE_FOLDER:
			let folderIndex = state.folderlist.findIndex(
				element => element.id == state.rightClickedIndex
			);
			state.folderlist.splice(folderIndex, 1);

			let nextSelected;
			if (state.folderlist.length == 0) {
				folder_id = 1;
				return {
					...state,
					folderlist: [...state.folderlist, { title: '', id: folder_id }],
					selected: { ...state.selected, title: '' }
				};
			} else if (folderIndex < state.folderlist.length) {
				nextSelected = state.folderlist[folderIndex];
			} else {
				nextSelected = state.folderlist[folderIndex - 1];
			}

			return {
				...state,
				folderlist: [...state.folderlist],
				selected: nextSelected
			};
	}
	return state;
}
