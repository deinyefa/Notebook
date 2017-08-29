import {
	FOLDER_SELECTED,
	NEW_FOLDER,
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
	}
	return state;
}
