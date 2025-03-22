import "../../Styles/css/StatusPages/unautorized.min.css"

function UnautorizedPage() {

    return(
        <>
        <div className="unautorized-main-content">
            <div class="container">
                <div class="icon">🔒</div>
                <h1>Acceso Restringido</h1>
                <div class="artisan-border"></div>
                <div className="unautorized-text">
                    <p>Lo sentimos, no tienes permiso para acceder a esta sección.</p>
                    <p>Si crees que esto es un error o necesitas acceso, por favor contacta con nuestro equipo de soporte.</p>
                </div>
                <a href="/" class="button">Volver al inicio</a>
            </div>
        </div>
        </>
    );
}

export default UnautorizedPage;