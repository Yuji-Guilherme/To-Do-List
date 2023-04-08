import { useState, useRef } from 'react';

const useToDoInput = (text, editToDo) => {
  const [readOnlyInput, setReadOnlyInput] = useState(true);
  const inputToDoRef = useRef(text);
  const readOnlyInputTrue = () => {
    setReadOnlyInput(true);
  };
  const readOnlyInputFalse = () => {
    setReadOnlyInput(false);
  };
  const handleEdit = (id) => {
    editToDo(id, inputToDoRef.current.value);
    inputToDoRef.current.blur();
  };
  return {
    inputToDoRef,
    readOnlyInput,
    handleEdit,
    readOnlyInputFalse,
    readOnlyInputTrue
  };
};

export { useToDoInput };
