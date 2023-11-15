import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../appRoutes';
import '../css/App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <AppRoutes />
    </div>
  </BrowserRouter>

);

export default App;
