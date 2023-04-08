function setLocalStorage(name, itemset) {
  localStorage.setItem(name, JSON.stringify(itemset));
}

export { setLocalStorage };
