function getLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

export { getLocalStorage };
