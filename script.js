const cars = [
    { id: 1, name: "Tesla Model S", brand: "Tesla", img: "https://motorillustrated.com/wp-content/uploads/2022/01/Tesla-Model-S.jpg" },
    { id: 2, name: "Ford Mustang", brand: "Ford", img: "https://cdn.prod.website-files.com/5cb511ab6cf2f5f84249299a/5f365584a22efe0d8e2c7189_Mustang-Mach-E-vs-mustang-gt-grill.jpg" },
    { id: 3, name: "Chevrolet Camaro", brand: "Chevrolet", img: "https://www.autocar.co.nz/wp-content/uploads/2023/03/2024-chevrolet-camaro-zl1-collectors-edition-pkg-001-e1679523550382.jpg" },
    { id: 4, name: "BMW M3", brand: "BMW", img: "https://applescoop.org/image/wallpapers/mac/bmw-m3-black-headlights-hd-dark-01-11-2024-1730444945-hd-wallpaper.jpg" },
    { id: 5, name: "Audi A6", brand: "Audi", img: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/caradvice/private/kbohnynxvv8pjd5frtbu" },
    { id: 6, name: "Porsche 911", brand: "Porsche", img: "https://thedriven.io/wp-content/uploads/2022/03/EX22V17IX0003_wf04.jpg" },
    { id: 7, name: "Mercedes-Benz C-Class", brand: "Mercedes-Benz", img: "https://s1.cdn.autoevolution.com/images/news/gallery/2018-mercedes-benz-s-class-is-officially-teased_2.jpg" },
    { id: 8, name: "Lamborghini Aventador", brand: "Lamborghini", img: "https://www.motortrend.com/uploads/2023/03/032-2024-lamborghini-revuelto.jpg" }
];

var bgImg = document.querySelector('#bg-img')
var h1 = document.querySelector('#cars h1')
var h3 = document.querySelector('#cars h3')
var btn = document.querySelector('#cars button')


btn.addEventListener('click', function () {
    let randomNum = Math.floor(Math.random() * cars.length)

    h1.innerHTML = cars[randomNum].brand
    h3.innerHTML = cars[randomNum].name
    bgImg.style.backgroundImage = `url(${cars[randomNum].img})`;

})