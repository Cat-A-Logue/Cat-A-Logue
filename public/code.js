const image = document.querySelector(".cat-image");
const left_bttn = document.querySelector(".left-button");
const right_bttn = document.querySelector(".right-button");
let index = 0;
let catImages = [];

function display(direction) {
    if(catImages.length > 0){
        index += direction; //jika gambar pertama pergi ke gambar terakhir
       
        if (index < 0){
          index = catImages.length -1; // jika sudah mencapai gambar paling kiri, kita set index ke gambar terakhir
        } if (index >= catImages.length){
          index = 0; // jika index melebihi panjang array, atau singkatnya gambar terakhir, kita set ke gambar pertama
        }

     image.src = catImages[index].image_url;
     document.querySelector("#breed").innerHTML = "<b>Breed: </b>" + catImages[index].breed || "Breed Unknown";
     document.querySelector("#origin").innerHTML = "<b>Origin: </b>" + catImages[index].origin || "Origin Unknown";
     document.querySelector("#life-span").innerHTML = "<b>Lifespan: </b>" + catImages[index].life_span || "Lifespan Time Unknown";
     document.querySelector("#characteristic").innerHTML = "<b>Characteristic: </b>" + catImages[index].characteristic || "No characteristic available";
     document.querySelector("#description").innerHTML = "<b>Description: </b>" + catImages[index].description || "No description available"; 
     console.log("Menampilkan gambar:", catImages[index].image_url);
    } else {
     console.log("Tidak ada gambar dalam catImages");
    }
} 
//Event Listener untuk tombol kiri dan kanan
left_bttn.addEventListener('click',  () => display(-1));
right_bttn.addEventListener('click', () => display(1));

fetch("http://localhost:4000/api/cats") //fetch url dari http nya
    .then(response => response.json())
    //mengambil data dari database 
    .then(data => {
        catImages = data;
        if (catImages.length > 0){
        image.src = catImages[index].image_url;
        document.querySelector("#breed").innerHTML = "<b>Breed: </b>" + catImages[index].breed || "Breed Unknown";
        document.querySelector("#origin").innerHTML = "<b>Origin: </b>" + catImages[index].origin || "Origin Unknown";
        document.querySelector("#life-span").innerHTML = "<b>Lifespan: </b>" + catImages[index].life_span || "Lifespan Time Unknown";
        document.querySelector("#characteristic").innerHTML = "<b>Characteristic: </b>" + catImages[index].characteristic || "No characteristic available";
        document.querySelector("#description").innerHTML = "<b>Description: </b>" + catImages[index].description || "No description available"; 
        console.log("Gambar berhasil dimuat:", catImages[0].image_url); //supaya konsistensi ke console nya
        } else {
        console.error('Data kosong atau tidak ditemukan');
        }
})
.catch(error => console.log(error));