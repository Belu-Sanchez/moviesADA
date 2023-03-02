import { useMe } from '../../../hooks';
import { NavBar } from '../Nav';

const Header = () => {
  
  const { me } = useMe();

  return (
    <>
      {me && <header>
        <NavBar />
      </header>}
    </>
  );
};

export { Header };