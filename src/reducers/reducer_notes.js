import {
	NOTE_SELECTED,
	CONTENT_UPDATE,
	NEW_NOTE,
	REMOVE_NOTE
} from '../lib/notes_constants';

// state here is not app state, only the state this reducer is responsible for...
let nextID = 4;
export default function(
	state = {
		selected: {},
		notelist: [
			{ title: 'Grocery List', id: 1, folderid: 0 },
			{ title: 'Main Points', id: 2, folderid: 1 },
			{ title: 'Agenda', id: 3, folderid: 0 },
			{ title: 'Untitled', id: 4, folderid: 1 }
		]
	},
	action
) {
	switch (action.type) {
		// ------------------------------------ NOTES CASES ------------------------------------- //
		case NOTE_SELECTED:
			return { ...state, selected: action.payload };
		case CONTENT_UPDATE:
			return {
				...state,
				notelist: state.notelist.map(note => {
					if (note.id == state.selected.id) note.title = action.payload;
					return note;
				}),
				selected: { ...state.selected, title: action.payload }
			};
		case NEW_NOTE:
			nextID += 1;
			return {
				...state,
				notelist: [...state.notelist, { title: '', id: nextID }]
			};
		case REMOVE_NOTE:
			let index = state.notelist.findIndex(
				element => element.id == state.selected.id
			);
			state.notelist.splice(index, 1);

			let newSelected;
			if (state.notelist.length == 0) {
				nextID = 1;
				return {
					...state,
					notelist: [...state.notelist, { title: '', id: nextID }],
					selected: { ...state.selected, title: '' }
				};
			} else if (index < state.notelist.length)
				newSelected = state.notelist[index];
			else {
				newSelected = state.notelist[index - 1];
			}

			return {
				...state,
				notelist: [...state.notelist],
				selected: newSelected
			};
	}
	return state;
}
