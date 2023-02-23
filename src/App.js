import { Route, Routes } from 'react-router-dom';
import { ToastCalendar } from './Pages';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/calendar" element={<ToastCalendar />} />
      </Route>
    </Routes>
  );
}

export default App;
