

let url = `https://fakestoreapi.com/products/category/electronics`

async function append(){
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    appending(data)
}

append()
function appending(data){

    data.forEach(el => {
        let img = document.createElement('img')
        img.src = el.image

        document.querySelector('#container').append(img)
    });

}