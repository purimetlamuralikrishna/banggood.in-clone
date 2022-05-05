

document.querySelector('#button').addEventListener('click',logindetails)


async function logindetails(){

    event.preventDefault()
    let login_details = {
        password: document.querySelector('.pinput').value,
        username: document.querySelector('.ninput').value,
    }

    login_details = JSON.stringify(login_details)
       
       let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
           method:'POST',
           body:login_details,
           headers:{
            "Content-Type": "application/json",
           },
       }
       );

       let data = await res.json()
       console.log(data)
       if(data.error === true){
           alert(data.message)
       }
       else{
           window.location.href="../index.html"
       }
}