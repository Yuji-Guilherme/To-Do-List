import Base from './Base';
import Colors from './Colors';
import Reset from './Reset';

function GlobalStyle() {
  return (
    <>
      <Reset />
      <Base />
      <Colors />
    </>
  );
}

export default GlobalStyle;
