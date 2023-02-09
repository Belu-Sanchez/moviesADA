import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { Dashboard, Details } from './pages';
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
      </Route>
{/* 
      <Route path="users/">
          <Route index element={<Users />} /> 
           <Route path="save" element={<FormUser />} />
          <Route path="save/:id" element={<FormUser />} /> 
         </Route> */}


    </Routes>
  </BrowserRouter>
 
);



