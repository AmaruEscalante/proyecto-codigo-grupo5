import '../assets/login.css';

function Login() {
  return (
    <div class="login-page">
      <div class="form">

        <form class="login-form">
          <input type="text" placeholder="Correo" />
          <input type="password" placeholder="Contraseña" />
          <button>login</button>
          <p class="message">¿No registrado? <a href="#">Crear una cuenta</a></p>
          
        </form>
      </div>
    </div>
  );
}
export default Login;
