import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Provider from './assets/Comopnents/Context/Cart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider>
        <App />
    </Provider>
    </BrowserRouter>
)
