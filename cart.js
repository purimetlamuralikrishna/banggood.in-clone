// let cartData=JSON.parse(localStorage.getItem("Cart"));

let cartData=JSON.parse(localStorage.getItem("Cart"));


if(cartData.length>0)
{
    displaydata(cartData);
}

else
{
    let btn=document.createElement('button');
    btn.innerText="Go shopping";
}

function displaydata(cartData)

{console.log(cartData)
   document.getElementById("container1").innerHTML=null;
   
   cartData.map(function (ele,index){
   let box=document.createElement("div");
   box.setAttribute("id","box");
   box.style.boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px";

   let img=document.createElement("img");
   img.src=ele.img;

   let off=document.createElement("p");
   off.innerText=ele.off + "% OFF";

   let price=document.createElement("p");
   price.innerText="₹"+ele.price;

   let btn=document.createElement("button");
   btn.innerText="Remove";
   btn.addEventListener("click",function(){
       removeItem(ele,index);
   });

   box.append(img,price,off,btn);
   document.querySelector("#container1").append(box);
   });

}

    function removeItem(ele,index){
        // console.log(ele,index);
        cartData.splice(index,1);
        console.log(cartData);
        localStorage.setItem("Cart",JSON.stringify(cartData));
        // displaydata(cartData);
        window.location.reload();
    }

    var totalcost=cartData.reduce(function(sum,ele,index,arr){
        return sum + Number(ele.price);
    },0);

    let total=document.getElementById("total_price");
    total.innerText=`Price Total Rs ${totalcost}`;