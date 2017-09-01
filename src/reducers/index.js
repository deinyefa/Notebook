import { combineReducers } from 'redux';
import FoldersReducer from './reducer_folders';
import NotesReducer from './reducer_notes';
import ReduxStorePersist from './reducer_persist';

const rootReducer = combineReducers({
	notes: NotesReducer,
	folders: FoldersReducer,
	persist: ReduxStorePersist
});

export default rootReducer;
