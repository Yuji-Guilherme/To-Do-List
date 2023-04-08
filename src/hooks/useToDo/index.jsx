import { useState, useRef } from 'react';
import { createToDo, setLocalStorage, getLocalStorage } from '@functions/';

const useToDo = () => {
  const [toDos, setToDos] = useState(getLocalStorage('toDos') || []);
  const inputRef = useRef('');

  const addToDo = (text) => {
    if (text.trim() === '') return;
    const toDo = createToDo(text);
    setToDos((oldToDos) => [...oldToDos, toDo]);
    setLocalStorage('toDos', [...toDos, toDo]);
  };

  const removeToDo = (id) => {
    const toDosNoRemoved = toDos.filter((toDo) => toDo.id !== id);
    setToDos(toDosNoRemoved);
    setLocalStorage('toDos', toDosNoRemoved);
  };

  const editToDo = (id, newText) => {
    const toDosWithToDoEdited = toDos.map((toDo) => {
      if (toDo.id === id) return { ...toDo, text: newText };
      return toDo;
    });
    setToDos(toDosWithToDoEdited);
    setLocalStorage('toDos', toDosWithToDoEdited);
  };

  const checkToDo = (id) => {
    const toDosWithToDoCheckChanged = toDos.map((toDo) => {
      if (toDo.id === id) return { ...toDo, checked: !toDo.checked };
      return toDo;
    });
    setToDos(toDosWithToDoCheckChanged);
    setLocalStorage('toDos', toDosWithToDoCheckChanged);
  };

  const inputClear = () => {
    inputRef.current.value = '';
  };

  const inputFocus = () => {
    inputRef.current.focus();
  };

  const handleSubmit = () => {
    addToDo(inputRef.current.value);
    inputClear();
    inputFocus();
  };

  return {
    inputRef,
    toDos,
    handleSubmit,
    removeToDo,
    editToDo,
    checkToDo
  };
};

export { useToDo };
