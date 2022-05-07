var cart_item = JSON.parse(localStorage.getItem("cart")) || [];



var womens_Data = [
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/D8/48/5388d425-4972-4015-951f-3f89f723db39.jpg.webp",
        price : 1402,
        off:16,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/8F/24/9223c1c9-08a1-464c-b035-19de38e25d8e.jpg.webp",
        price:3038,
        off:36,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/23/02/9b85d760-1725-4221-9d13-7b0f51de4bfc.jpg.webp",
        price : 1604,
        off:26,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/5B/20/afb5d920-eae3-4230-94a7-5541770e80b1.jpg.webp",
        price:2638,
        off:50,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/BD/1E/5fcd2c9b-c966-4972-ae4d-caa0a2f4d59d.jpg.webp",
        price : 4199,
        off:45,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/BD/29/02db7d81-35b7-4d9c-a53d-f36bbef3a738.jpg.webp",
        price:2500,
        off:15,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/23/88/4cfc49a5-2d52-4c9d-b416-13c88395b342.jpg.webp",
        price : 1600,
        off:14,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/B0/83/803d8591-0a27-4030-ae4a-45667e4f8da0.jpg.webp",
        price:2349,
        off:10,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/A6/BC/3c4fa0c3-801e-4126-a9ab-a2778b0365e7.jpg.webp",
        price : 2990,
        off:30,
    },
    {
        img:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/FE/22/7ca6aea2-f16a-4454-b739-a4f388883ab1.jpg.webp",
        price:3499,
        off:42,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/D8/48/5388d425-4972-4015-951f-3f89f723db39.jpg.webp",
        price : 1402,
        off:16,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/8F/24/9223c1c9-08a1-464c-b035-19de38e25d8e.jpg.webp",
        price:3038,
        off:36,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/23/02/9b85d760-1725-4221-9d13-7b0f51de4bfc.jpg.webp",
        price : 1604,
        off:26,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/5B/20/afb5d920-eae3-4230-94a7-5541770e80b1.jpg.webp",
        price:2638,
        off:50,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/BD/1E/5fcd2c9b-c966-4972-ae4d-caa0a2f4d59d.jpg.webp",
        price : 4199,
        off:45,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/BD/29/02db7d81-35b7-4d9c-a53d-f36bbef3a738.jpg.webp",
        price:2500,
        off:15,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/23/88/4cfc49a5-2d52-4c9d-b416-13c88395b342.jpg.webp",
        price : 1600,
        off:14,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/B0/83/803d8591-0a27-4030-ae4a-45667e4f8da0.jpg.webp",
        price:2349,
        off:10,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/A6/BC/3c4fa0c3-801e-4126-a9ab-a2778b0365e7.jpg.webp",
        price : 2990,
        off:30,
    },
    {
        img:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/FE/22/7ca6aea2-f16a-4454-b739-a4f388883ab1.jpg.webp",
        price:3499,
        off:42,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/D8/48/5388d425-4972-4015-951f-3f89f723db39.jpg.webp",
        price : 1402,
        off:16,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/8F/24/9223c1c9-08a1-464c-b035-19de38e25d8e.jpg.webp",
        price:3038,
        off:36,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/23/02/9b85d760-1725-4221-9d13-7b0f51de4bfc.jpg.webp",
        price : 1604,
        off:26,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/5B/20/afb5d920-eae3-4230-94a7-5541770e80b1.jpg.webp",
        price:2638,
        off:50,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/BD/1E/5fcd2c9b-c966-4972-ae4d-caa0a2f4d59d.jpg.webp",
        price : 4199,
        off:45,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/BD/29/02db7d81-35b7-4d9c-a53d-f36bbef3a738.jpg.webp",
        price:2500,
        off:15,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/23/88/4cfc49a5-2d52-4c9d-b416-13c88395b342.jpg.webp",
        price : 1600,
        off:14,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/B0/83/803d8591-0a27-4030-ae4a-45667e4f8da0.jpg.webp",
        price:2349,
        off:10,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/A6/BC/3c4fa0c3-801e-4126-a9ab-a2778b0365e7.jpg.webp",
        price : 2990,
        off:30,
    },
    {
        img:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/FE/22/7ca6aea2-f16a-4454-b739-a4f388883ab1.jpg.webp",
        price:3499,
        off:42,
    },
]

window.addEventListener("load", function () {
    displayData(womens_Data);
  });

function displayData(womens_Data) {
 document.getElementById("container").innerHTML=null;
womens_Data.forEach(function(el){
   
    let mdiv=document.createElement("div");
    mdiv.setAttribute("id","mdiv");

    let discount=document.createElement("p");
    discount.innerText=el.off + "% OFF";

    let product_img=document.createElement("img");
    product_img.src=el.img;

    var price = document.createElement("h4");
    price.style.fontWeight="bold";
    price.setAttribute("id", "originalPrice");
    price.innerText = "₹"+ el.price;

    let cbtn=document.createElement("button");
    cbtn.innerText="Add to Cart";
    cbtn.setAttribute("id","button")
    cbtn.addEventListener("click", function(){
        addToCart(el);
    })

    mdiv.append(product_img,price,discount,cbtn);
    document.getElementById("container").append(mdiv);
    
    
    })
}
// add to cart
function addToCart(el) {
    cart_item.push(el);
    localStorage.setItem("cart", JSON.stringify(cart_item));
    // window.location.href = "cart.html";
    alert("Item added to cart"); 
  }

// sorting
function sortByCategory() {
    var selected = document.querySelector("#selection").value;
    console.log(selected);

    if (selected == "htl") {
        womens_Data.sort(function (a, b) {
          return b.price - a.price;
        });
        displayData(womens_Data);
      
    }
      if (selected == "lth") {
        womens_Data.sort(function (a, b) {
          return a.price - b.price;
        });
        displayData(womens_Data);
      }

      if (selected == "popular") {
        womens_Data.sort(function (a, b) {
            return b.off - a.off;
          });
        displayData(womens_Data);
      }

}
//navbarsign
document.getElementById("navbarsign").addEventListener("click",navbarsign);
function navbarsign(){
window.location.href="./Register&signin/signin.html"
}