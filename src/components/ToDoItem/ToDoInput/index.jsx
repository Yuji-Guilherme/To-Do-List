import * as S from './style';
import { useToDoInput } from './hook/useToDoInput';

function ToDoInput({ editToDo, id, text, ...rest }) {
  const {
    inputToDoRef,
    readOnlyInput,
    handleEdit,
    readOnlyInputFalse,
    readOnlyInputTrue
  } = useToDoInput(text, editToDo);

  return (
    <S.ToDoInput
      type="text"
      ref={inputToDoRef}
      defaultValue={text}
      readOnly={readOnlyInput}
      onKeyPress={(e) => {
        if (e.key === 'Enter') handleEdit(id);
      }}
      onDoubleClick={() => readOnlyInputFalse()}
      onBlur={() => readOnlyInputTrue()}
      {...rest}
    />
  );
}

export { ToDoInput };
