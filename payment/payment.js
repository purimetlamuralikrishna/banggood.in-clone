document.getElementById("paymentForm").addEventListener("submit",myfun);
    
function myfun(){
        event.preventDefault();

        let card=document.getElementById("card").value;
        let cvv=document.getElementById("cvv").value;
        let exp=document.getElementById("exp").value;
        let otp=document.getElementById("otp").value;
       
        // document.getElementById("#container").append(card,cvv,exp,otp);

        if(card.length!=16  || cvv.length!=3)
        {
            alert("Check the Card And CVV Number you entered");
        }
        else if(otp==111111 || otp==222222 || otp==333333 || otp==444444 || otp==555555 || otp==666666)
        {
            alert("Order Placed Successful");

            setTimeout(function(){
                alert('Your order is Accepted')
              },0000)
          
              setTimeout(function(){
                alert('Your order is Being Packed')
              },3000)
          
              setTimeout(function(){
                alert('Your order is in Transit')
              },6000)
          
              setTimeout(function(){
                alert('Your order is out for Delivery')
              },9000)
          
              setTimeout(function(){
                alert('Your order is Delivered')
              },11000)
        }
        else{
            alert("Wrong otp");
        }
    }