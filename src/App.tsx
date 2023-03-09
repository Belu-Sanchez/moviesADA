import { Footer, Header, Main } from './components/layout';
import { Outlet } from 'react-router-dom';
import { useMe } from './hooks';
import { useEffect } from 'react';


function App() {

  const { loginWithToken, me } = useMe();

  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <>
      {me && <Header />}
      <Main >
        <Outlet />
      </Main>
      <Footer />

    </>
  );
}

export default App;
