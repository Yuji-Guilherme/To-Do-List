import { CheckBox } from './CheckBox';
import { ToDoInput } from './ToDoInput';
import { RemoveBtn } from './RemoveBtn';

import * as S from './style';

function ToDoItem({
  text,
  id,
  checked,
  removeToDo,
  editToDo,
  checkToDo,
  ...rest
}) {
  return (
    <S.ToDoItem className={checked && 'checked'} {...rest} id={id}>
      <CheckBox checked={checked} id={id} onChange={() => checkToDo(id)} />
      <ToDoInput text={text} id={id} editToDo={editToDo} />
      <RemoveBtn onClick={() => removeToDo(id)} />
    </S.ToDoItem>
  );
}

export { ToDoItem };
