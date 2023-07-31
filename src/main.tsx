import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/AuthContext.jsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
   <AuthContextProvider>
      <Provider store={store}>
         <App />
      </Provider>
   </AuthContextProvider>
);
