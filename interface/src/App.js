import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailEmployee from './components/DetailEmployee/DetailEmployee';
import EmployeeList from './components/EmployeeList/EmployeeList';
import AddEmployee from './components/AddEmployee/AddEmployee';
import EditEmployee from './components/EditEmployee/EditEmployee';
import DeleteEmployee from './components/DeleteEmployee/DeleteEmployee';
// import AddForm from './components/AddForm/Addform';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeList />} />

        <Route path='add' element={<AddEmployee />} />

        <Route path='detail' element={<DetailEmployee />} />

        <Route path='edit' element={<EditEmployee />} />

        <Route path='delete' element={<DeleteEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
