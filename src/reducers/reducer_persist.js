export default function(state = {}, action) {
	switch (action.type) {
		case 'persist/REHYDRATE':
			return {
				...state,
				persistedState: action.payload
			};
	}
	return state;
}
