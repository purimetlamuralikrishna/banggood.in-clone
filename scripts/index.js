var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); 
}

//loginsignup
document.getElementById("joinus").addEventListener("click",joinus);
function joinus(){
window.location.href="./Register&signin/register.html"
}
document.getElementById("signin").addEventListener("click",signin);
function signin(){
window.location.href="./Register&signin/signin.html"
}

//navbarsign
document.getElementById("navbarsign").addEventListener("click",navbarsign);
function navbarsign(){
window.location.href="./Register&signin/signin.html"
}
//dataflash
let dataflash=[
{img:"https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/27/40/a6615ef8-bbd9-4449-81ee-f1e26819ec4c.jpg.webp",
price:"23,87$",
offf:"46% off",
},
{img:"https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/30/36/08304cbc-ab96-4423-b57d-ff49649e9967.jpg.webp",
price:"65,88$",
offf:"55% off",
},
{img:"https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/C5/14/132252b2-04a6-46d2-88b0-d11c394540f9.jpg.webp",
price:"33,41$",
offf:"15% off",
},
{img:"https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/3E/8E/8d3c66b4-83f5-42dc-863b-5a65830275c5.jpg.webp",
price:"85,94$",
offf:"55% off",
},
{img:"https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/40/D0/4ad9cdc1-0792-42eb-af59-c035ee52f1c1.jpg.webp",
price:"67,79$",
offf:"62% off",
},
{img:"https://imgaz3.staticbg.com/thumb/grid/oaupload/banggood/images/4B/C7/51465cf3-35e8-446c-a35a-4f978bd779ad.jpg.webp",
price:"190,03$",
offf:"43% off",
},
]

dataflash.map(function(el){
    console.log("str")
    let div=document.createElement("div");
    let div1=document.createElement("div");
    let img=document.createElement("img");
    let h4=document.createElement("h4");
    let p=document.createElement("p");
    img.src=el.img;
    
    h4.innerText=el.price;
    p.innerText=el.offf;
    p.style.color="white";
    p.style.backgroundColor="#ff4733";
    p.style.width="65px"
    p.style.borderRadius="5px"
    div.append(img,h4,p)
    div1.append(div)
    document.getElementById("flashappend").append(div1);
})

let newarrival=[
    {img:"https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/C9/C1/fe30e528-6aac-422e-aff3-6bfc881ea8b6.png.webp",
    price:"19,09$",
    offf:"28,64$",
    },
    {img:"https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/A0/CF/34d398e8-e57b-4c7a-b463-f7d29416e90f.jpg.webp",
    price:"65,88$",
    offf:"76,39$",
    },
    {img:"https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/4F/37/3bb899e9-db6f-486f-b1b0-ddc059b25b2c.jpg.webp",
    price:"33,41$",
    offf:"32,73$",
    },
    {img:"https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/64/1C/2d54e9ac-8398-40ee-93e4-75743295d019.jpg.webp",
    price:"85,94$",
    offf:"66,84$",
    },
    {img:"https://imgaz1.staticbg.com/thumb/grid/oaupload/banggood/images/9C/CE/fb8ec473-2fb6-418e-b68b-d0da47aa51ed.png.webp",
    price:"67,79$",
    offf:"62,79$",
    },
    {img:"https://imgaz.staticbg.com/thumb/grid/oaupload/banggood/images/21/FC/0fa649ca-34f6-41e5-8899-6f5e4fc7c421.jpg.webp",
    price:"190,03$",
    offf:"66,84$",
    },
    ]
    
    newarrival.map(function(el){
        console.log("str")
        let div=document.createElement("div");
        let img=document.createElement("img");
        let h4=document.createElement("h4");
        let p=document.createElement("p");
        img.src=el.img;
       
        h4.innerText=el.price;
        p.innerText=el.offf;
        p.setAttribute("class","text");
        
        div.append(img,h4,p)
        document.getElementById("newarrival").append(div);
    })

    let preorder=[
      
        {img:"https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/A4/A8/50580b39-1e82-446c-91dc-14c7d4bda9fc.jpg.webp",
        price:"715,28$",
        offf:"66,84$",
        },
        {img:"https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/80/83/c8a82b38-48cc-4bf8-809d-85b4aeca8424.jpg.webp",
        price:"114,59$",
        offf:"62,79$",
        },
        {img:"https://imgaz3.staticbg.com/thumb/grid/oaupload/banggood/images/25/5E/47b4191b-ded6-4eb1-ad9c-ac6c1d5c22d4.jpg.webp",
        price:"12,23$",
        offf:"11,84$",
        }, 
      
    ];

    preorder.map(function(el){
      console.log("str")
      let div=document.createElement("div");
      let img=document.createElement("img");
      let h4=document.createElement("h4");
      let p=document.createElement("p");
      img.src=el.img;
     
      h4.innerText=el.price;
      p.innerText=el.offf;
      p.setAttribute("class","text");
     
      div.append(img,h4,p)
      document.getElementById("preop").append(div);
  });



let Recommendations=[
  {
  img:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/9D/9B/12fa5226-9825-4e8c-aac2-016dde53068e.jpg.webp",
  price:"299,82€",
  dis:"Artillery® GeniusPro & Geni...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/A6/21/d5ff9e20-b0e7-d586-98a4-7a1dcaf64075.jpg.webp",
  price:"12,41€",
  dis:"10X 15X 20X 25X Spectacle...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/58/CF/72f73973-140d-4d7b-9630-c305d9926327.jpg.webp",
  price:"94,53€",
  dis:"Wltoys 144001 1/14 2.4G 4W...",
},
{
  img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/C7/76/7b5468a9-5dfa-4e82-afd3-924854404fc4.jpg.webp",
  price:"36,28€",
  dis:"[bluetooth Call] Zeblaze G...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/18/0F/c78eab87-d57e-4fd2-a594-6682c068aba9.jpg.webp",
  price:"400,09€",
  dis:"Artillery® Sidewinder X2 &...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/D4/23/d59c1b22-3336-4f9b-88d1-1fc69dcf4a9f.jpg.webp",
  price:"133,69€",
  dis:"Blackview TAB 8 SC9863A...",
},
{
  img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/38/E4/03761ea6-8ffe-4eee-8b53-1d382ca485b3.jpg.webp",
  price:"28,64€",
  dis:"MUSTOOL MT009 4.4-Inch T...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/3F/6B/96f4f4d4-7f67-4589-a80a-52dabb132e06.jpg.webp",
  price:"38,19€",
  dis:"ELEGIANT C520 BT 5.0 1.3...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/35/6D/3b538ac9-5456-45a0-b98d-d87c8c87923b.jpg.webp",
  price:"79,25€",
  dis:"WPL C24 1/16 2.4G 4WD...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/79/84/81fb6f5b-0749-493d-85ba-a630e3c3d4db.png.webp",
  price:"190,04€",
  dis:"Artillery®Hornet 3D Printe...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/89/B9/5ceeb020-a11d-4d0d-a289-3301de65d7ab.jpg.webp",
  price:"69,70€",
  dis:"MUSTOOL G1200 Digital M...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/CA/A2/293e68f5-3a27-4ee3-a166-bf3d0a89c80b.jpg.webp",
  price:"665,62€",
  dis:"Anycubic® Photon Mono...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/AF/46/8ed8639b-6bb0-42d4-a455-cb5ef1ed2770.jpg.webp",
  price:"28,64€",
  dis:"Zeblaze NEO 1.3 inch Full-R...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/55/B9/56fe86a8-a6a5-4d55-9f33-ff5949a65356.jpg.webp",
  price:"228,24€",
  dis:"DOOGEE S96 Pro Global B...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/F3/F0/4dc41a52-21f2-4e98-95d0-f6b70195aa25.jpg.webp",
  price:"15,27€",
  dis:"DANIU Digital Stainless Ste...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/5A/4D/1ce6c959-0963-4aa5-b558-fad6d5d0f7be.jpg.webp",
  price:"36,28€",
  dis:"[30 Days Standby]Zeblaze G...",
},
{
  img:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/67/E5/22493415-7e69-4c90-a3af-2620beb8070d.jpg.webp",
  price:"339,96€",
  dis:"XMUND XD-T1 Treadmill Wal...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/23/02/9b85d760-1725-4221-9d13-7b0f51de4bfc.jpg.webp",
  price:"21,00€",
  dis:"Stitching Design Holiday S...",
},
{
  img:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/9D/9B/12fa5226-9825-4e8c-aac2-016dde53068e.jpg.webp",
  price:"299,82€",
  dis:"Artillery® GeniusPro & Geni...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/A6/21/d5ff9e20-b0e7-d586-98a4-7a1dcaf64075.jpg.webp",
  price:"12,41€",
  dis:"10X 15X 20X 25X Spectacle...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/58/CF/72f73973-140d-4d7b-9630-c305d9926327.jpg.webp",
  price:"94,53€",
  dis:"Wltoys 144001 1/14 2.4G 4W...",
},
{
  img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/C7/76/7b5468a9-5dfa-4e82-afd3-924854404fc4.jpg.webp",
  price:"36,28€",
  dis:"[bluetooth Call] Zeblaze G...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/18/0F/c78eab87-d57e-4fd2-a594-6682c068aba9.jpg.webp",
  price:"400,09€",
  dis:"Artillery® Sidewinder X2 &...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/D4/23/d59c1b22-3336-4f9b-88d1-1fc69dcf4a9f.jpg.webp",
  price:"133,69€",
  dis:"Blackview TAB 8 SC9863A...",
},
{
  img:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/38/E4/03761ea6-8ffe-4eee-8b53-1d382ca485b3.jpg.webp",
  price:"28,64€",
  dis:"MUSTOOL MT009 4.4-Inch T...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/3F/6B/96f4f4d4-7f67-4589-a80a-52dabb132e06.jpg.webp",
  price:"38,19€",
  dis:"ELEGIANT C520 BT 5.0 1.3...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/35/6D/3b538ac9-5456-45a0-b98d-d87c8c87923b.jpg.webp",
  price:"79,25€",
  dis:"WPL C24 1/16 2.4G 4WD...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/79/84/81fb6f5b-0749-493d-85ba-a630e3c3d4db.png.webp",
  price:"190,04€",
  dis:"Artillery®Hornet 3D Printe...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/89/B9/5ceeb020-a11d-4d0d-a289-3301de65d7ab.jpg.webp",
  price:"69,70€",
  dis:"MUSTOOL G1200 Digital M...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/CA/A2/293e68f5-3a27-4ee3-a166-bf3d0a89c80b.jpg.webp",
  price:"665,62€",
  dis:"Anycubic® Photon Mono...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/AF/46/8ed8639b-6bb0-42d4-a455-cb5ef1ed2770.jpg.webp",
  price:"28,64€",
  dis:"Zeblaze NEO 1.3 inch Full-R...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/55/B9/56fe86a8-a6a5-4d55-9f33-ff5949a65356.jpg.webp",
  price:"228,24€",
  dis:"DOOGEE S96 Pro Global B...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/F3/F0/4dc41a52-21f2-4e98-95d0-f6b70195aa25.jpg.webp",
  price:"15,27€",
  dis:"DANIU Digital Stainless Ste...",
},
{
  img:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/5A/4D/1ce6c959-0963-4aa5-b558-fad6d5d0f7be.jpg.webp",
  price:"36,28€",
  dis:"[30 Days Standby]Zeblaze G...",
},
{
  img:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/67/E5/22493415-7e69-4c90-a3af-2620beb8070d.jpg.webp",
  price:"339,96€",
  dis:"XMUND XD-T1 Treadmill Wal...",
},
{
  img:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/23/02/9b85d760-1725-4221-9d13-7b0f51de4bfc.jpg.webp",
  price:"21,00€",
  dis:"Stitching Design Holiday S...",
},


];

Recommendations.map(function(el){
  console.log("str")
  let div=document.createElement("div");
  div.setAttribute("id","RImg")
  let img=document.createElement("img");
  let h4=document.createElement("h4");
  let p=document.createElement("p");
  img.src=el.img;
  h4.innerText=el.price;
  p.innerText=el.dis;
  p.style.fontSize="13px"
  div.append(img,h4,p)
  document.getElementById("recRecommend").append(div);
});

