import { useNavigate } from 'react-router-dom'
import "../../Styles/css/StatusPages/notFound.min.css"

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    
    <div className="notfound-main-content">
      <div className="notfound-container">
        <div className="notfound-icon">🧭</div>
        <h1 className="notfound-title">Ruta no encontrada</h1>
        <div className="artisan-border"></div>
        <p className="notfound-text">
          Parece que te has aventurado por caminos que aún no existen en nuestro mapa.
          Los productos tradicionales que buscas podrían estar en otra ruta...
        </p>
        <button 
          onClick={() => navigate('/')}
          className="button notfound-button"
        >
          Volver al camino seguro
        </button>
      </div>
    </div>
  )
}

export default PageNotFound