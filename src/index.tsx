import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Details, LastReleases, PopularMovies, SearchMovies, TopRatedMovies } from './pages';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="recently" element={<LastReleases />} />
        <Route path="popular" element={<PopularMovies />} />
        <Route path="topRated" element={<TopRatedMovies />} />
        <Route path="search/movie" element={<SearchMovies />} />
        <Route path="movie/:id" element={<Details />} />
      </Route>
    </Routes>
  </BrowserRouter>

);



