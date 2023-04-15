import { FiSun, FiMoon } from 'react-icons/fi';
import * as S from './style';

function ThemeSwitch({ ...props }) {
  return (
    <S.Label htmlFor="theme-switch">
      <S.ThemeSwitch type="checkbox" id="theme-switch" {...props} />
      <S.Ball />
      <FiSun />
      <FiMoon />
    </S.Label>
  );
}

export { ThemeSwitch };
