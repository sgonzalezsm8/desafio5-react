import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    const email = "usuario@ejemplo.com";

    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h2 className="mb-4 text-center">Perfil del Usuario</h2>
                <div className="d-flex align-items justify-content-center mb-3">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                    <span>{email}</span>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-danger">
                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;