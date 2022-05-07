

let cartData=JSON.parse(localStorage.getItem("cart"))||[];


if(cartData.length>0)
{console.log("str")
    displaydata(cartData);
}

else
{console.log("str")
    let btn=document.createElement('button');
    btn.innerText="Go shopping";
}

function displaydata(cartData)
{
   document.getElementById("container1").innerHTML="";
   
   cartData.map(function (ele,index){
   let box=document.createElement("div");
   box.style.boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px";

   let img=document.createElement("img");
   img.src=ele.img;

//    let name=document.createElement("p");
//    name.innerText=ele.name;

   let price=document.createElement("p");
   price.innerText="Rs."+ele.price;

   let btn=document.createElement("button");
   btn.innerText="Remove";
   btn.addEventListener("click",function(){
       removeItem(ele,index);
   });

   box.append(img,price,btn);
   document.querySelector("#container1").append(box);
   });

}

    function removeItem(ele,index){
        // console.log(ele,index);
        cartData.splice(index,1);
        console.log(cartData);
        localStorage.setItem("cart",JSON.stringify(cartData));
        // displaydata(cartData);
        alert("Item Removed")
        window.location.reload();
    }

    let total=cartData.reduce(function(sum,ele){
        return sum + Number(ele.price);
    },0);

    let total_price=document.getElementById("total_price");
    total_price.innerText=`Price Total Rs  ${total}`;