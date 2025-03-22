import "../../Styles/css/StatusPages/loading.min.css";

function LoadingPage() {
    return(
        <div className="loading-main-content">
            <div className="container">
                <div className="loading-icon">
                    <div className="spinner"></div>
                </div>
                <h1>Cargando productos artesanales...</h1>
                <p className="loading-text">Estamos preparando todo con cuidado tradicional</p>
            </div>
        </div>
    );
}

export default LoadingPage;