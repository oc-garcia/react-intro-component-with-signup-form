import "./signup.css";

const SignUp = () => {
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
        <form>
          <input />
          <input />
          <input />
          <input />
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
