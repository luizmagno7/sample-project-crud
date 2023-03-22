import { lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserContext from '../contexts/userContext';

const Home = lazy(() => import('./Home'));
const Users = lazy(() => import('./Users'));

function App() {
  const [ userList, setUserList ] = useState([]);  

  return (
    <UserContext.Provider value={ { userList, setUserList } }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />

        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;