import { Route, Routes } from 'react-router-dom';
import { ToastCalendar, Calendar } from './Pages';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/toast-calendar" element={<ToastCalendar />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
}

export default App;
