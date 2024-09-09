import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateInput = (e) => {
        e.preventDefault();

        //Validacion de longitud de password
        if(password.trim().length < 6){
            setError('La Password debe tener al menos 6 caracteres!');
            setSuccess(false);
            return;    
        }

        //Validacion ok
        setError('');
        setSuccess(true);
        setEmail('');
        setPassword('');
    };


    return (
        <div className="container my-4">
            <h2 className="text-start">Login</h2>
            <form onSubmit={validateInput} className="text-start">
                {error ? <p className="error">{error}</p> : null}
                {success ? <p className="success">¡Registro exitoso!</p> : null}
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Ingresa tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="Ingresa tu password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>                
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default LoginPage;