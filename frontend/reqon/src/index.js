import ReactDOM from 'react-dom/client';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom'; // Importando o Router
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>
);
