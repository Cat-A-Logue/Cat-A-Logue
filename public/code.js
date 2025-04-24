//menyatakan terlebih dahulu beberapa variabel yang dibutuhkan
const image = document.querySelector(".cat-image");
const left_bttn = document.querySelector(".left-button");
const fav_bttn = document.querySelector(".favourite-button");
const right_bttn = document.querySelector(".right-button");
let index = 0;

//variabel untuk menyimpan data kucing dan favourite
let catImages = [];
const sub_id = "tempUser123";

//Event Listener untuk tombol kiri, kanan, dan favourite
left_bttn.addEventListener('click',  () => display(-1));
right_bttn.addEventListener('click', () => display(1)); 
fav_bttn.addEventListener('click', () => giveFavourite());

async function display(direction) {
    if(catImages.length > 0){
        index += direction; //jika gambar pertama pergi ke gambar terakhir
       
        if (index < 0){
          index = catImages.length -1; // jika sudah mencapai gambar paling kiri, kita set index ke gambar terakhir
        } if (index >= catImages.length){
          index = 0; // jika index melebihi panjang array, atau singkatnya gambar terakhir, kita set ke gambar pertama
        }

     const cat_id = catImages[index].id;
     image.src = catImages[index].image_url;
     document.querySelector("#breed").innerHTML = "<b>Breed: </b>" + catImages[index].breed || "Breed Unknown";
     document.querySelector("#origin").innerHTML = "<b>Origin: </b>" + catImages[index].origin || "Origin Unknown";
     document.querySelector("#life-span").innerHTML = "<b>Lifespan: </b>" + catImages[index].life_span || "Lifespan Time Unknown";
     document.querySelector("#characteristic").innerHTML = "<b>Characteristic: </b>" + catImages[index].characteristic || "No characteristic available";
     document.querySelector("#description").innerHTML = "<b>Description: </b>" + catImages[index].description || "No description available"; 
     
     updateFavouriteCount(catImages[index].id);
     const alreadyFavourited = await isFavourited(cat_id)
     showIconColor(alreadyFavourited);
     console.log("Showing an image:", catImages[index].image_url);
    } else {
     console.log("There are no images to fetch");
    }
} 

// Fungsi untuk Cek apakah kucing sekarang sudah difavoritkan 
async function isFavourited(cat_id) {
  const res = await fetch("http://localhost:4000/api/favourites");
  const data = await res.json();
  return data.some(fav => fav.cat_id === cat_id && fav.sub_id === sub_id);
}

// Fungsi untuk mengupdate jumlah favorit untuk kucing yang tampil di screeen
async function updateFavouriteCount(cat_id) {
  const res = await fetch("http://localhost:4000/api/favourites");
  const data = await res.json();  // retrieve data mengenai favourites
  const filtered = data.filter(fav => fav.cat_id === cat_id); // memfilter datanya agar sama dengan cat yang ditampilkan sekarang
  const count = filtered.length; //Length dari filtered supaya bisa menghitung data khusus untuk kucing berapa

  document.querySelector("#favourite").innerHTML = `<b>Favourite Count:</b> ${count}`;
}

//function khusus yang dipanggil saat memencet fav_button 
//button ini akan memberikan  favourite jika function alreadyFavourited return false 
//dan akan remove favourite jika return true 
async function giveFavourite() {
  const cat_id = catImages[index].id;
  const alreadyFavourited = await isFavourited(cat_id);

  if (!alreadyFavourited) {
    // POST jika belum ada
    await fetch("http://localhost:4000/api/favourites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({  cat_id: catImages[index].id, sub_id: sub_id, image_url: catImages[index].image_url })
    });
    console.log("Favourite added");
  } else {
    // DELETE jika sudah ada
    await fetch(`http://localhost:4000/api/favourites/${cat_id}/${sub_id}`, {
      method: "DELETE"
    });
    console.log("Favourite removed");
  }

  // Rubah favouriteCount sehabis diberi/diremove favourite
  updateFavouriteCount(catImages[index].id);

  const updatedStatus = await isFavourited(cat_id);
  showIconColor(updatedStatus);
};

 async function showIconColor (favouriteStatus){
  const icon = document.querySelector('.material-icons');

  if (favouriteStatus) {
    icon.style.color = "#f51b1b"; // merah kalau sudah difavoritkan
  } else {
    icon.style.color = "#895129"; // coklat kalau belum
  }
}

//fetch url untuk getAllCats supaya nanti masuk semua data ke array catImages
fetch("http://localhost:4000/api/cats") 
    .then(response => response.json())
    //mengambil data dari database 
    .then(async data => {
        catImages = data; //memasukkan data-data kucing ke catImages
        if (catImages.length > 0){
        image.src = catImages[index].image_url;
        //serangkaian hal yang dipengaruhi oleh catImages
        document.querySelector("#breed").innerHTML = "<b>Breed: </b>" + catImages[index].breed || "Breed Unknown";
        document.querySelector("#origin").innerHTML = "<b>Origin: </b>" + catImages[index].origin || "Origin Unknown";
        document.querySelector("#life-span").innerHTML = "<b>Lifespan: </b>" + catImages[index].life_span || "Lifespan Time Unknown";
        document.querySelector("#characteristic").innerHTML = "<b>Characteristic: </b>" + catImages[index].characteristic || "No characteristic available";
        document.querySelector("#description").innerHTML = "<b>Description: </b>" + catImages[index].description || "No description available"; 

        //mengupdate hitungan berapa yang favourite sebuah kucing.
        updateFavouriteCount(catImages[index].id);
        //menampilkan warna icon favourite button jika semisal user sudah memfavourite kucing 
        //sehingga saat nanti di reload, memang masih terdisplay sebagai warna icon yang sesuai
        const updatedStatus = await isFavourited(catImages[index].id);
        showIconColor(updatedStatus);
        console.log("Image succesfully showed:", catImages[0].image_url); 
        } else {
        console.error('Data is empty or null');
        }
})
.catch(error => console.log(error));