document.getElementById("checkoutForm").addEventListener("submit",address);

    var addressData=JSON.parse(localStorage.getItem("addressData"))||[];
    function address()
    {
        event.preventDefault();

        var addObj={
            name:document.querySelector("#name").value,
            add:document.querySelector("#address").value,
            pin:document.querySelector("#pincode").value,
        };

        console.log(addObj);
        addressData.push(addObj);

        localStorage.setItem("addressData", JSON.stringify (addressData));
    }