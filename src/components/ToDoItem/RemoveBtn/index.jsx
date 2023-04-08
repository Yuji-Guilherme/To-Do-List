import { FiTrash2 } from 'react-icons/fi';
import * as S from './style';

function RemoveBtn({ ...props }) {
  return (
    <S.RemoveBtn {...props}>
      <FiTrash2 />
    </S.RemoveBtn>
  );
}

export { RemoveBtn };
