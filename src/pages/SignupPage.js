import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';

const SignupPage = () => (
  <div className="columns is-centered is-vcentered full-height login-container">
    <div className="column is-4 login-component">
      <TextInput inputType="text" placeholder="username" />
      <TextInput inputType="email" placeholder="email" />
      <TextInput inputType="password" placeholder="password" />
      <TextInput inputType="password" placeholder="confirm password" />
      <button type="button" className="button is-link is-rounded my-2 is-small">Signup</button>
      <div>
        <p>
          Already have an account?
          <Link to="/signin" className="button is-dark is-rounded mx-2 is-uppercase is-small">Signin</Link>
        </p>
      </div>
    </div>
  </div>
);

export default SignupPage;
