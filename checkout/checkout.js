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
        alert('Details Added Successfully');
    }


    let cartData=JSON.parse(localStorage.getItem("cart"))||[];

    let total=cartData.reduce(function(sum,ele){
        return sum + Number(ele.price);
    },0);

    let total_price=document.getElementById("total_price");
    total_price.innerText=`Your Cart Total  ₹ ${total}`;
    total_price.setAttribute('id','totalPrice');
    total_price.style.textAlign='center';