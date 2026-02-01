// David Budak, AI 7/2022
// Alen Gavrilović AI 13/2022

window.onscroll = function() {

    const btn = document.getElementById("btnTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } 

    else {
        btn.style.display = "none";
    }
};


document.getElementById("btnTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    }); 
});