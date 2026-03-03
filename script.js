function createShootingStar(){
  const star = document.createElement("div");
  star.classList.add("shootingStar");

  star.style.top = Math.random()*50 + "%";
  star.style.left = 100 + Math.random()*20 + "%"; // start off screen

  document.getElementById("shootingStars").appendChild(star);

  setTimeout(()=>{
    star.remove();
  }, 1000); // 1 detik sesuai animasi
}

// Muncul tiap 5-8 detik
setInterval(createShootingStar, 5000 + Math.random()*3000);