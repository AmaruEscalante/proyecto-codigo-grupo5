import Class from '../assets/login.module.css';

function Login() {
  return (
    <div class={Class.login_page}>
      <div class="form">

        <form class={Class.form}>
          <input type="text" placeholder="Correo" />
          <input type="password" placeholder="Contraseña" />
          <button>login</button>
          <p class={Class.message}>¿No registrado? <a href="#">Crear una cuenta</a></p>
          
        </form>
      </div>
    </div>
  );
}
export default Login;
