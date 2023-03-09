import { Footer, Header, Main } from './components/layout';
import { Outlet } from 'react-router-dom';



function App() {

  // const { loginWithToken, me } = useMe();

  // useEffect(() => {
  //   loginWithToken();
  // }, []);

  return (
    <>
       <Header />
      <Main >
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default App;
