import React, {useState} from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateInput = (e) => {
    e.preventDefault();
    
    //Validacion de campos vacios
    /*if(!email.trim() || !password.trim() || confirmPassword.trim()) {
      setError('Todos los campos son obligatorios!');
      setSuccess(false);
      return;        
    }*/

    //Validacion de longitud de password
    if(password.trim().length < 6){
      setError('El password debe tener al menos 6 caracteres!');
      setSuccess(false);
      return;        
    }

    //Validacion de coincidencia de passwords
    if (password.trim() !== confirmPassword.trim()) {
      setError('Las passwords no coinciden!');
      setSuccess(false);
      return;
    } 

    //Si todas las validaciones pasan
    setError('');
    setSuccess(true);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    
  };

  return (
    <div className="container my-4">
      <h2 className="text-start">Registro</h2>
      <form onSubmit={validateInput} className="text-start">
        {error ? <p className="error">{error}</p>: null}
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
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirma Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirma tu password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;