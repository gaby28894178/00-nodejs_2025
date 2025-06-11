const urlBase=" http://localhost:3001/users"
fetch(urlBase)
.then(res=>res.json())
.then((data)=>{console.log(data)})
.catch((error)=>{console.error(error)})
.finally(()=>{console.log("proceso terminado")})
