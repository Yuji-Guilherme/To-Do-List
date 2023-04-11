import * as S from './style';

function CheckBox({ id, ...props }) {
  return (
    <>
    <S.Label htmlFor={`${id}-checkbox`}> 
    <S.CheckBox type="checkbox" id={`${id}-checkbox`} {...props} />
    </S.Label>
    </>
  )
}

export { CheckBox };
