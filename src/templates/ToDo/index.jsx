import { useToDo } from '@hooks/useToDo';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { ToDoContainer } from '@components/ToDoContainer';
import { ToDoItem } from '@components/ToDoItem';

function ToDo() {
  const { inputRef, toDos, handleSubmit, removeToDo, editToDo, checkToDo } =
    useToDo();

  return (
    <>
      <Input
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
        ref={inputRef}
      />
      <Button onClick={() => handleSubmit()} />
      <ToDoContainer>
        {toDos.map((toDo) => (
          <ToDoItem
            checked={toDo.checked}
            text={toDo.text}
            id={toDo.id}
            key={toDo.id}
            removeToDo={removeToDo}
            editToDo={editToDo}
            checkToDo={checkToDo}
          />
        ))}
      </ToDoContainer>
    </>
  );
}

export { ToDo };
