import React from "react"
import "./form.css"
import { useForm } from "react-hook-form";


export default function Form() {
    const { register, handleSubmit } = useForm();

    function handleSignIn(data){
        console.log(data)

    }
    return (
        <div className="container--form">
            <form onSubmit={handleSubmit(handleSignIn)}>
                <label htmlFor="username">Login</label>
                <input
                    {...register("username")}
                    type="text"
                    name="username"
                    id="username" />
                <label htmlFor="password">Password</label>
                <input  
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password" />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
