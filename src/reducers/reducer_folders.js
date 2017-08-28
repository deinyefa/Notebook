import { FOLDER_SELECTED } from '../lib/folder_constants';

let folderlist = [{ name: 'Folder 1', id: 1 }, { name: 'Folder 2', id: 2 }];

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
	}
	return state;
}
