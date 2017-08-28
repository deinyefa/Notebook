import { combineReducers } from 'redux';
import FoldersReducer from './reducer_folders';
import NotesReducer from './reducer_notes';

const rootReducer = combineReducers({
	notes: NotesReducer,
	folders: FoldersReducer
});

export default rootReducer;
