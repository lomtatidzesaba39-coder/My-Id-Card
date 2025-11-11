// პირადი ინფორმაცია
let name = "საბა";
let surname = "ლომთათიძე";
let age = 14;
let favoriteColor = "ლურჯი";
let school = "ქ. თბილისის 132 საჯარო სკოლა";
let city = "თბილისი";
let hobbies = "პროგრამირება";
let favoriteSong = "shape of my heart";
let favoriteMovie = "minecraft";
let funFact = "მიყვარს სატვირთო მანქანის მართვა";
let likesVideoGames = true;

// ელემენტების განახლება გვერდზე
document.getElementById("name").textContent = name;
document.getElementById("surename").textContent = surname;
document.getElementById("age").textContent = age;
document.getElementById("favColor").textContent = favoriteColor;
document.getElementById("school").textContent = school;
document.getElementById("city").textContent = city;
document.getElementById("hobbies").textContent = hobbies;
document.getElementById("favSong").textContent = favoriteSong;
document.getElementById("favMovie").textContent = favoriteMovie;
document.getElementById("funFact").textContent = funFact;
document.getElementById("likesGames").textContent = likesVideoGames ? "დიახ" : "არა";
