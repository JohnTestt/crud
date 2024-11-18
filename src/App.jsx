import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/home/Home";
import { Template } from './partials/template/Template';
import { Header } from './partials/header/Header';
import { Users } from './pages/users/Users';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { ProtectRoute } from './routes/ProtectRoute';
import { Edit } from './pages/edit/Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header><Template title='Home' Component={Home} /></Header>} />
        <Route path='/users' element={<Header><ProtectRoute><Template title='Adm Usuários' Component={Users} /></ProtectRoute></Header>} />
        <Route path='/users/edit/:id' element={<Header><ProtectRoute><Template title='Editar Usuário' Component={Edit} /></ProtectRoute></Header>} />
        <Route path='/users/register' element={<Header><ProtectRoute><Template title='' Component={Register} /></ProtectRoute></Header>} />
        <Route path='/login' element={<Template title='' Component={Login} />} />
      </Routes>
    </Router>
  );
}

export default App;
