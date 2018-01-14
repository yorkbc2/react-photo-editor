const init = {
	"brightness": "100%",
	"sepia": '0%',
	"hue-rotate": "0deg",
	"grayscale": "0%",
	"contrast": "100%"
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
		case "CHANGE_GRAYSCALE": {
			return rs({'grayscale': action.payload+'%'}, state)
		}
		case "CHANGE_CONTRAST": {
			return rs({'contrast': action.payload+"%"}, state)
		}
		case "GET_STATE":
		default: {
			return state;
		}
	}
}