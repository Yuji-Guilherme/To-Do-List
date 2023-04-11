import { Wrapper } from '@components/Wrapper';
import { Title } from '@components/Title';
import { ToDo } from '@templates/ToDo';
import { HeaderWrapper } from '@components/HeaderWrapper';

function Home() {
  return (
    <Wrapper>
      <HeaderWrapper>
      <Title />
      </HeaderWrapper>
      <ToDo />
    </Wrapper>
  );
}

export { Home };
