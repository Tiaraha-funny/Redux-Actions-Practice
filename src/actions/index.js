// function that returns an action type and a text value
export function increase(){
  return {
    type: "INCREASE",
  }
}

export function decrease() {
  return {
    type: "DECREASE",
  }
}

export function setCurrentCity(city){
  return {
    type: "SET_CURRENT_CITY",
    value: city
  }
}

export function setSearchText(text){
  return {
    type: "SET_SEARCH_TEXT",
    value: text
  }
}

export function setCurrentTemp(temp){
  return {
    type: "SET_CURRENT_TEMP",
    value: temp
  }
}

export function setdisplayModal(text){
  return {
    type: "SET_DISPLAY_MODAL",
    value: text
  }
}

export function setImageUrl(url){
  return {
    type: "SET_IMAGE_URL",
    value: url
  }
}

export function setCurrentUserSort(user){
  return {
    type: "SET_CURRENT_USER_SORT",
    value: user
  }
}

export function setImageScale(image){
  return {
    type: "SET_IMAGE_SCALE",
    value: image
  }
}

export function setUsers(users){
  return {
    type: "SET_USERS",
    value: users
  }
}

export function setSpecialText(text){
  return {
    type: "SET_SPECIAL_TEXT",
    value: text
  }
}

export function addUser(user) {
  return {
    type: "ADD_USER",
    value: user
  }
}

export function removeUser() {
  return {
    type: "REMOVE_USER",
  }
}