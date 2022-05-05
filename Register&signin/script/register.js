

document.querySelector('#submit').addEventListener('click',regdetails)


async function regdetails(){
    event.preventDefault()

    let c1 = document.getElementsByClassName('checkbox')
    if(c1[0].checked === false || c1[1].checked===false){
        alert('Click on Terms & Policies')
        return
    }

    let reg_details = {
        name: document.querySelector('.ninput').value,
        email : document.querySelector('.einput').value,
        password : document.querySelector('.pinput').value,
        username:  document.querySelector('.ninput').value,
        mobile: `${Math.floor(Math.random()*99999999999)}`,
        description: "A Transformation in education!",
    }
    
    reg_details = JSON.stringify(reg_details)

    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",
    {
        method : "POST",
        body: reg_details,
        headers: {
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
        alert('Registration successful')
        window.location.href = "signin.html"
    }
}