import { HeaderWrapper } from '@components/HeaderWrapper';
import { Title } from '@components/Title';
import { ThemeSwitch } from '@components/ThemeSwitch';

function Header({ handleTheme }) {
  return (
    <HeaderWrapper>
      <Title />
      <ThemeSwitch onChange={() => handleTheme()} />
    </HeaderWrapper>
  );
}

export { Header };
