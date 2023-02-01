import "./signup.css";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main className="page-container">
      <section className="card-container">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time.
          <br></br>Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
      </section>
      <section className="card-container">
        <h2>
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="First Name" {...register("firstName")} />
          <input placeholder="Last Name" {...register("lastName")} />
          <input placeholder="Email Address" {...register("email")} />
          <input placeholder="Password" {...register("password")} type="password" />
          <button>CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button you are agreeing to our <span>Terms and Services</span>
          </p>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
