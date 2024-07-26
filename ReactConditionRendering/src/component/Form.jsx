function Form(props) {
  return (
    <form>
      <input type="text" placeholder="Username"></input>
      <input type="password" placeholder="Password"></input>
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm password"></input>
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}
export default Form;
