import { Formik } from "formik";
import { TextField, Button } from "@mui/material";
import app_config from "../../config";
import Swal from "sweetalert2";

const Signup = () => {
  const url = app_config.api_url;

  const signupform = {
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const signupSubmit = (values) => {
    // 1. address
    // 2. method
    // 3. data
    // 4. data format

    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Registered Successfully!!",
        });
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="row">
            <div className="col-md">
              <div className="img-back"></div>
            </div>
            <div className="col-md">
              <div
                className="card-body 
              my-card-body"
              >
                <p className="h3">Welcome..!</p>
                <p className="text-muted">TO ART & CRAFT</p>
                <hr />
                <Formik initialValues={signupform} onSubmit={signupSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <label for="fullname" class="mt-3">
                        Full Name
                      </label>
                      <TextField
                        id="fullname"
                        type="text"
                        class="form-control"
                        placeholder="Full Name"
                        onChange={handleChange}
                        values={values.fullname}
                        autoComplete="off"
                      />

                      <label for="email" class="mt-3">
                        E-mail
                      </label>
                      <TextField
                        id="email"
                        type="text"
                        class="form-control"
                        placeholder="Your e-mail"
                        onChange={handleChange}
                        values={values.email}
                        autoComplete="off"
                      />

                      <label for="password" class="mt-3">
                        Password
                      </label>
                      <TextField
                        id="password"
                        type="password"
                        class="form-control"
                        placeholder="Create Password"
                        onChange={handleChange}
                        values={values.password}
                      />

                      <label for="confirmpassword" class="mt-3">
                        Confirm Password
                      </label>
                      <TextField
                        id="confirmpassword"
                        type="password"
                        class="form-control"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        values={values.confirmpassword}
                      />
                      <Button
                        color="primary"
                        variant="contained"
                        className="mt-3 wt-50"
                        type="submit"
                      >
                        Register
                      </Button>
                      <a
                        href="/login"
                        className="text-muted"
                        style={{ display: "block" }}
                      >
                        Already have an account?
                      </a>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
