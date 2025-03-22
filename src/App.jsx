import { useState } from 'react'
import { useAuth } from './context/AuthContext';
import NavBar from './components/navbar/navbar'
import './Styles/css/main/App.min.css'

function App() {
  const [count, setCount] = useState(0)
   const { user, token } = useAuth(); // Lee el usuario y token

  return (
    <div className="app-container">
      <main className="main-content">
        <h1>Main in progress...</h1>
        {
          user != null ?
          <div>
            <h1>Bienvenido {user?.name}</h1> 
            </div>
          :
          <div></div>
        }
      </main>
    </div>
  )
}

export default App
