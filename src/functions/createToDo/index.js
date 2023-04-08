function createToDo(toDoText) {
  const idUUID = crypto.randomUUID();
  return { text: toDoText, id: idUUID, checked: false };
}

export { createToDo };
