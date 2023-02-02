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
          <div>
            <input
              className={errors.required ? "input-error" : "input-ok"}
              placeholder="First Name"
              {...register("firstName", { required: "First Name cannot be empty" })}
            />
            <span>{errors.firstName?.message}</span>
          </div>
          <div>
            <input placeholder="Last Name" {...register("lastName", { required: "Last Name cannot be empty" })} />
            <span>{errors.lastName?.message}</span>
          </div>
          <div>
            <input
              placeholder="Email Address"
              {...register("email", {
                required: "Email cannot be empty",
                pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, message: "Looks like this is not an email" },
              })}
            />
            <span>{errors.email?.message}</span>
          </div>
          <div>
            <input
              placeholder="Password"
              {...register("password", {
                required: "Password cannot be empty",
                minLength: { value: 6, message: "Password must have at least 6 characters" },
              })}
              type="password"
            />
            <span>{errors.password?.message}</span>
          </div>
          <button onClick={console.log(errors)}>CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button you are agreeing to our <span>Terms and Services</span>
          </p>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
