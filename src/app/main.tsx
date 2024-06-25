import ReactDOM from 'react-dom/client'

import '@/styles/index.scss'
import App from './App'
import {StrictMode} from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
