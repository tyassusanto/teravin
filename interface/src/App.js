import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList/EmployeeList';
import AddEmployee from './components/Table/AddEmployee/AddEmployee';
import DetailEmployee from './components/Table/DetailEmployee/DetailEmployee';
import EditEmployee from './components/Table/EditEmployee/EditEmployee';
import DeleteEmployee from './components/Table/DeleteEmployee/DeleteEmployee';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeList />} />

        <Route path='add' element={<AddEmployee />} />

        <Route path='detail/:id' element={<DetailEmployee />} />

        <Route path='edit/:id' element={<EditEmployee />} />

        <Route path='delete/:id' element={<DeleteEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
