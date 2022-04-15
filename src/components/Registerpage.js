import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Homepage from './Homepage';

function Registerpage() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [mobile, setMobile] = useState("");
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset, trigger , watch} = useForm();

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        console.log(firstname);
    }
    const handleLastname = (e) => {
        setLastname(e.target.value);
        console.log(lastname);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        console.log(confirm);
    }
    const handleMobile = (e) => {
        setMobile(e.target.value);
        console.log(mobile);
    }

    const onSubmit = () => {

        if (firstname || lastname || email || password || confirm || mobile) {
            localStorage.setItem("firstname", JSON.stringify(firstname));
            localStorage.setItem("lastname", JSON.stringify(lastname));
            localStorage.setItem("email", JSON.stringify(email));
            localStorage.setItem("password",password);
            localStorage.setItem("confirm", confirm);
            localStorage.setItem("mobile", JSON.stringify(mobile));
            console.log("data stored in localStorage");

            navigate("/");
        } else {
            alert("login failed");
        }
        reset();
    }

    return (
        <>
            <div className="container">
                <Homepage />
                <div className="form main">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Register page</h2>
                        <div class="mb-3">
                            <label class="form-label">Firstname:</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="enter firstname"
                                {...register("firstname", { required: "firstname is required" })}
                                onKeyUp={() => {
                                    trigger("firstname");
                                }}
                                onChange={handleFirstname}
                            />
                            {errors.firstname && (
                                <small className="text-danger">{errors.firstname.message}</small>
                            )}
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Lastname:</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="enter Lastname"
                                {...register("lastname", { required: "lastname is required" })}
                                onKeyUp={() => {
                                    trigger("lastname");
                                }}
                                onChange={handleLastname}
                            />
                            {errors.lastname && (
                                <small className="text-danger">{errors.lastname.message}</small>
                            )}
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email:</label>
                            <input
                                type="email"
                                class="form-control"
                                placeholder="enter email"
                                {...register("email", { required: "email is required" })}
                                onKeyUp={() => {
                                    trigger("email");
                                }}
                                onChange={handleEmail}
                            />
                            {errors.email && (
                                <small className="text-danger">{errors.email.message}</small>
                            )}
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Password:</label>
                            <input type="password"
                                class="form-control"
                                placeholder="enter password"
                                {...register("password", {
                                    required: "password is required",
                                    pattern: {
                                        value:"^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$",
                                        // value: "^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})",
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
                        <div class="mb-3">
                            <label class="form-label">Confirm Password:</label>
                            <input type="password"
                                class="form-control"
                                placeholder="enter confirm password"
                                {...register("confirm", {
                                    required: "confirm password is required",
                                    pattern: {
                                        
                                        value: "^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$",
                                        message: "confirm password is incorrect."
                                    },
                                    validate: (val: string ) => {
                                        if( watch('password') != val){
                                        return "your password do not match";
                                    }},
                                    minLength: {
                                        value: 8,
                                        message: "password length  must be minimum 8 characters."
                                    }
                                })}
                                onKeyUp={() => {
                                    trigger("confirm");
                                }}
                                onChange={handleConfirm}
                            />
                            {errors.confirm && (
                                <small className="text-danger">{errors.confirm.message}</small>
                            )}
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Mobile:</label>
                            <input
                                type="tel"
                                class="form-control"
                                placeholder="enter mobile number"
                                {...register("mobile", {
                                    required: "mobile is required",
                                    pattern: { value: "[0-9]{3}-[0-9]{2}-[0-9]{3}" }
                                })}
                                onKeyUp={() => {
                                    trigger("mobile");
                                }}
                                onChange={handleMobile}
                            />
                            {errors.mobile && (
                                <small className="text-danger">{errors.mobile.message}</small>
                            )}
                        </div>

                        <button type="submit" class="btn btn-danger">
                            {" "}
                            Register
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Registerpage;