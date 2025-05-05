const LoginForm = ({ onLogin }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt);

    const form = evt.target;
    console.log(form.elements);
    const { login, password } = form.elements;

    console.log("Login:", login);
    console.log("Password", password);
    console.log("Login value:", login.value);
    console.log("Password value", password.value);

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
