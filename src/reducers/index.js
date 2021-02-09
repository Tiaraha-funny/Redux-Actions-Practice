import { combineReducers } from "redux";

// incomplete  function that checks an action prop type to detemine a counter number
function currentCount(state = 0, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default: {
      return state;
    }
  }
}

// incomplete  function that should check an action prop type to return an array of user

function currentCity(state = "", action) {
  switch (action.type) {
    case "SET_CURRENT_CITY":
      return action.value;
    default:
      return state;
  }
}

function searchText(state = "", action) {
  switch (action.type) {
    case "SET_SEARCH_TEXT": {
      return action.value;
    }
    default:
      return state;
  }
}

function currentTemp(state = 0, action) {
  switch (action.type) {
    case "SET_CURRENT_TEMP":
      return action.value;
    default:
      return state;
  }
}

function displayModal(state = false, action) {
  switch (action.type) {
    case "SET_DISPLAY_MODAL":
      return action.value;
    default:
      return state;
  }
}

function imageUrl(state = "", action) {
  switch (action.type) {
    case "SET_IMAGE_URL":
      return action.value;
    default:
      return state;
  }
}

function currentUserSort(state = "first_name", action) {
  switch (action.type) {
    case "SET_CURRENT_USER_SORT":
      return action.value;
    default:
      return state;
  }
}

function imageScale(state = 1, action) {
  switch (action.type) {
    case "SET_IMAGE_SCALE":
      return { ...state };
    default:
      return state;
  }
}

function users(state = [], action) {
  console.log(state);
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.value];
    case "REMOVE_USER":
    return state.slice(0, state.length - 2);
    default:
      return state;
  }
}

// complete  function that should check action prop type ""SET_SPECIAL_TEXT" to determine state value
function specialText(state = "", action) {
  switch (action.type) {
    case "SET_SPECIAL_TEXT":
      return action.value;
    default:
      return state;
  }
}

export default combineReducers({
  currentCount,
  currentCity,
  searchText,
  currentTemp,
  displayModal,
  imageUrl,
  currentUserSort,
  imageScale,
  users,
  specialText,
});
