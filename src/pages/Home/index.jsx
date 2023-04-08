import { Wrapper } from '@components/Wrapper';
import { Title } from '@components/Title';
import { ToDo } from '@templates/ToDo';

function Home() {
  return (
    <Wrapper>
      <Title />
      <ToDo />
    </Wrapper>
  );
}

export { Home };
