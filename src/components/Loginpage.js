import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Homepage from './Homepage';

function Loginpage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm();

    const handleChange = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }

    const onSubmit = (e) => {

        let mail = localStorage.getItem("email");
        console.log("mail",mail);
        let pass = localStorage.getItem("password").replace(/"/g,"");
        console.log("pass",pass);

        if (email === mail || password === pass) {

            navigate("/final");
        } else {
            alert("login failed");
        }
        reset();
    }

    return (
        <div className="container">
            <Homepage />
            <div className="form main">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login page</h2>
                    <div class="mb-3">
                        <label class="form-label">email:</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="enter email"
                            {...register("email", { required: "email is required" })}
                            onKeyUp={() => {
                                trigger("email");
                            }}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <small className="text-danger">{errors.email.message}</small>
                        )}
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Password:</label>
                        <input type="password"
                            class="form-control"
                            placeholder="enter email"
                            {...register("password", {
                                required: "password is required",
                                pattern: {
                                    value:"^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$",
                                    // value: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})",
                                    message: "password is incorrect."
                                },
                                minLength: {
                                    value: 8,
                                    message: "password length  must be minimum 8 characters."
                                }
                            })}
                            onKeyUp={() => {
                                trigger("password");
                            }}
                            onChange={handlePasswordChange}
                        />
                        {errors.password && (
                            <small className="text-danger">{errors.password.message}</small>
                        )}
                    </div>

                    <button type="submit" class="btn btn-danger">
                        {" "}
                        Login
                    </button>
                    <Link to="/register"><button class="btn btn-dark">New User</button></Link>
                </form>
            </div>
        </div>
    );
}

export default Loginpage;