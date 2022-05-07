var cart_item = JSON.parse(localStorage.getItem("cart")) || [];

var mens_data = [
    {
        img:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/3B/AC/b8d6d5e5-f748-4ded-8cc0-1991be70c3c4.jpg.webp",
        price : 1402,
        off:30,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/34/BC/fd2fd728-e2b2-4f96-ac2c-94dea44dffef.jpg.webp",
        price:3038,
        off:35,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/A6/D3/72b33adf-369c-48f7-ac6f-6f816838947f.jpg.webp",
        price:3635,
        off:12,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/64/1E/d33d4a36-5465-4ec5-83a0-315b22506cf0.jpg.webp",
        price:1324,
        off:14,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/97/5F/695219d4-6558-460a-89d1-da908f72980f.jpg.webp",
        price:1635,
        off:10,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/33/F9/ce94c896-17e0-40ad-a537-31653c744119.jpg.webp",
        price:1635,
        off:22,
    },
    {
        img:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/64/77/aa388cb2-fcb2-4380-8060-7c36bd2b87ba.jpg.webp",
        price:3083,
        off:16,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/50/10/86d70233-6e7c-471e-8074-5b1308983f9e.jpg.webp",
        price:1324,
        off:25,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/D8/6A/c3b74841-d988-42db-a54f-7dc98cb89c80.jpg.webp",
        price:1635,
        off:13,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/12/B9/6011c01a-2216-4e6d-aab3-8c5bc961de28.jpg.webp",
        price:1282,
        off:20,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/D1/54/425bf9dd-2c04-47e3-9658-ee8a52f3c956.jpg.webp",
        price:2018,
        off:10,
    },
    {
        img:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/3B/AC/b8d6d5e5-f748-4ded-8cc0-1991be70c3c4.jpg.webp",
        price : 1402,
        off:30,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/34/BC/fd2fd728-e2b2-4f96-ac2c-94dea44dffef.jpg.webp",
        price:3038,
        off:35,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/A6/D3/72b33adf-369c-48f7-ac6f-6f816838947f.jpg.webp",
        price:3635,
        off:12,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/64/1E/d33d4a36-5465-4ec5-83a0-315b22506cf0.jpg.webp",
        price:1324,
        off:14,
    },
    {
        img:"https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/97/5F/695219d4-6558-460a-89d1-da908f72980f.jpg.webp",
        price:1635,
        off:10,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/33/F9/ce94c896-17e0-40ad-a537-31653c744119.jpg.webp",
        price:1635,
        off:22,
    },
    {
        img:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/64/77/aa388cb2-fcb2-4380-8060-7c36bd2b87ba.jpg.webp",
        price:3083,
        off:16,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/50/10/86d70233-6e7c-471e-8074-5b1308983f9e.jpg.webp",
        price:1324,
        off:25,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/D8/6A/c3b74841-d988-42db-a54f-7dc98cb89c80.jpg.webp",
        price:1635,
        off:13,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/33/F9/ce94c896-17e0-40ad-a537-31653c744119.jpg.webp",
        price:1635,
        off:22,
    },
    {
        img:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/64/77/aa388cb2-fcb2-4380-8060-7c36bd2b87ba.jpg.webp",
        price:3083,
        off:16,
    },
    {
        img:"https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/50/10/86d70233-6e7c-471e-8074-5b1308983f9e.jpg.webp",
        price:1324,
        off:25,
    },
    {
        img:"https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/D8/6A/c3b74841-d988-42db-a54f-7dc98cb89c80.jpg.webp",
        price:1635,
        off:13,
    },
]

window.addEventListener("load", function () {
    displayData(mens_data);
  });

function displayData(mens_data) {
 document.getElementById("container").innerHTML=null;
mens_data.forEach(function(el){
   
    let mdiv=document.createElement("div");
    mdiv.setAttribute("id","mdiv");

    let discount=document.createElement("p");
    discount.innerText=el.off + "% off";

    let product_img=document.createElement("img");
    product_img.src=el.img;

    var price = document.createElement("h4");
    price.style.fontWeight="bold";
    price.setAttribute("id", "originalPrice");
    price.innerText = "₹"+ el.price;

    let cbtn=document.createElement("button");
    cbtn.setAttribute("id","button")
    cbtn.innerText="Add to Cart";
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
        mens_data.sort(function (a, b) {
          return b.price - a.price;
        });
        displayData(mens_data);
      
    }
      if (selected == "lth") {
        mens_data.sort(function (a, b) {
          return a.price - b.price;
        });
        displayData(mens_data);
      }

      if (selected == "popular") {
        mens_data.sort(function (a, b) {
            return b.off - a.off;
          });
        displayData(mens_data);
      }

}
//navbarsign
document.getElementById("navbarsign").addEventListener("click",navbarsign);
function navbarsign(){
window.location.href="./Register&signin/signin.html"
}