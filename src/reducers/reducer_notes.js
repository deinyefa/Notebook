// state here is not app state, only the state this reducer is responsible for...
export default function(
	state = {
		selected: {},
		notelist: [
			{ title: 'Grocery List', id: 1 },
			{ title: 'Main Points', id: 2 },
			{ title: 'Agenda', id: 3 },
			{ title: 'Untitled', id: 4 }
		]
	},
	action
) {
	switch (action.type) {
		case 'NOTE_SELECTED':
			return { ...state, selected: action.payload };
		case 'CONTENT_UPDATE':
			return {
				...state,
				notelist: state.notelist.map(note => {
					if (note.id == state.selected.id) note.title = state.selected.title;
					return note;
				}),
				selected: { ...state.selected, title: action.payload }
			};
	}
	return state;
}
