

import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN} from "../constants"


function Form({route, method}) {
    const [username, setUsername ] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const name = method === "login" ? "Login": "Register"

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return <form onSubmit={handleSubmit} className="form-container">
        <h1> {name} </h1>
        <input>
            className="form-input"
            type="text"
        </input>
    </form>
}