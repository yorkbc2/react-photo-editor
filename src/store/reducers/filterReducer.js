const init = {
	"brightness": "100%",
	"sepia": '0%',
	"hue-rotate": "0deg"
}
function rs (newState, prevState) {
	var returnedState = {};
	for (var key in prevState) {
		returnedState[key] = typeof newState[key] != 'undefined'
		 ? newState[key]: prevState[key];
	}
	return returnedState;
}
export default function filterReducer (state=init, action) {
	switch (action.type) {
		case "CHANGE_BRIGHTNESS": {
			return rs({"brightness": action.payload + "%"}, state);
		}
		case "CHANGE_SEPIA": {
			return rs({"sepia": action.payload + "%"}, state)
		}
		case "CHANGE_HUE_ROTATE" : {
			return rs({'hue-rotate': action.payload+"deg"}, state)
		}
		case "GET_STATE":
		default: {
			return state;
		}
	}
}