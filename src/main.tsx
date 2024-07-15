import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Redux/store.ts'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
   <Auth0Provider
    domain="dev-0d8ipbosrdbd86rr.us.auth0.com"
    clientId="TLzvOCYaw3YOdaeCOyWbGONfxbshTaXf"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
  </Provider>,
)
