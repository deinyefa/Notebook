import { combineReducers } from 'redux';
import NotesReducer from './reducer_notes';
import ActiveNoteReducer from './reducer_active_note';

const rootReducer = combineReducers({
	notes: NotesReducer,
	activeNote: ActiveNoteReducer
});

export default rootReducer;
