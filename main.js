var family = ["Rajiv Joshi","Meghna Joshi","Saisha Joshi","Shreyan Joshi"];
gallery = ["https://st.depositphotos.com/1724125/2693/v/950/depositphotos_26930203-stock-illustration-cartoon-dad.jpg","https://www.pngkit.com/png/full/169-1699467_cartoon-mom-png-cartoon-pictures-of-mom.png","https://www.clipartmax.com/png/middle/221-2216870_brothers-and-sisters-cartoon.png","https://webstockreview.net/images/brother-clipart-cartoon-2.jpg"];
var i = 0;
function next_slide() {
document.getElementById("album").src=gallery[i];
document.getElementById("name").innerHTML=family[i]
i++;
} 
