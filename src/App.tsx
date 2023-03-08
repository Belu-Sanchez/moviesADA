import { Footer, Header, Main } from './components/layout';
import { Outlet } from 'react-router-dom';
import { useMe } from './hooks';
import { useEffect } from 'react';
import { AuthProvider } from "./contexts/auth";
import { StoreProvider } from "./contexts";

function App() {
  const { loginWithToken, me } = useMe();

  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <>
      <AuthProvider>
        <StoreProvider>
          {me && <Header />}
          <Main >
            <Outlet />
          </Main>
          <Footer />
        </StoreProvider>
      </AuthProvider>
    </>
  );
}

export default App;
