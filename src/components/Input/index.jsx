import { forwardRef } from 'react';
import * as S from './style';

const Input = forwardRef(function Input({ ...props }, ref) {
  return <S.Input type="text" placeholder="type a todo" ref={ref} {...props} />;
});

export { Input };
