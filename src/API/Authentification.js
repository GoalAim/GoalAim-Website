// import axios from "axios";

async function handleLogin({username, password, setIsError}){

    // TODO: Connect login when backend is fixed

    // await axios.post(`http://${process.env.REACT_APP_IP}:${process.env.REACT_APP_PORT}/authentification/login`, {
	// 	headers: {
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Content-Type': 'application/json',
	// 		'Custom-Parameter': 'value',
	// 	},
	// 	username: username,
	// 	password: password
	// })
    // .then(response => {
    //     if (response.status === 200) {
    //         console.log("Wouhouuu");
    //         // save("Token", response.headers.authorization);
    //         return;
    //     }
    // })
    // .catch((error) => {
    //     console.log(error);
    //     setIsError(true);
    //     throw Error;
    // });

    setIsError(true);
}

export {handleLogin};