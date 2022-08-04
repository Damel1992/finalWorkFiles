import React, {useState} from 'react';

function useAuth(props) {
    let [res, setRes] = useState(null); 
    let [error, setError] = useState('');

    return {
        res,
        error,
        auth: (login, pass) => {
            if(login === "admin" && pass === "123"){
                setRes({
                    login,
                    id: new Date().getTime()
                })
                setError('')
            }else{
                setError("Неверный логин или пароль");
                setRes(null)
            }
        }
    }
}

export default useAuth;