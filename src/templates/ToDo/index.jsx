import { useToDo } from '@hooks/useToDo';

import { InputWrapper } from '@components/InputWrapper';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { ToDoContainer } from '@components/ToDoContainer';
import { EditMessage } from '@components/EditMessage';
import { ToDoItem } from '@components/ToDoItem';

function ToDo() {
  const { inputRef, toDos, handleSubmit, removeToDo, editToDo, checkToDo } =
    useToDo();

  return (
    <>
    <InputWrapper>    
      <Input
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
        ref={inputRef}
      />
      <Button onClick={() => handleSubmit()} />
    </InputWrapper>
      <ToDoContainer>
        {toDos.length > 0 && <EditMessage />}
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
