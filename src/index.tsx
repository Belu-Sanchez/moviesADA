import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { Dashboard, Details, SignUp } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="movie/:id" element={<Details />} /> 
      <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
 
);



