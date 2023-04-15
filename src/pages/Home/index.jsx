import { Wrapper } from '@components/Wrapper';
import { Header } from '@templates/Header';
import { ToDo } from '@templates/ToDo';

function Home({ handleTheme }) {
  return (
    <Wrapper>
      <Header handleTheme={handleTheme} />
      <ToDo />
    </Wrapper>
  );
}

export { Home };
