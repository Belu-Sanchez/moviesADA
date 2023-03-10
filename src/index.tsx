import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Details, LastReleases, Login, PopularMovies, SearchMovies, SignUp, TopRatedMovies } from './pages';
import { AuthProvider } from "./contexts/auth";
import { StoreProvider } from "./contexts";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthProvider>
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="recently" element={<LastReleases />} />
            <Route path="popular" element={<PopularMovies />} />
            <Route path="topRated" element={<TopRatedMovies />} />
            <Route path="search/movie" element={<SearchMovies />} />
            <Route path="movie/:id" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </AuthProvider>
);



