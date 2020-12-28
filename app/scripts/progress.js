const aboutDiv = document.querySelector(".about-wrapper");
const bars = document.querySelectorAll('.progress');

const scrollFunction = function () {
    if (window.scrollY >= 200) {

     const interval = setInterval(() => {
        bars.forEach(function(bar){
          let getWidth = parseFloat(bar.dataset.progress);

          for(let i = 0; i < getWidth; i++) {
            bar.style.width = i + "%";
          }
          clearInterval(interval);
        });
      }, 500);



      aboutDiv.setAttribute("style", "transform: translateY(0px); opacity: 1;");
    } else {
      bars.forEach((bar) =>{
        bar.style.width = "0%";
      });
      aboutDiv.setAttribute("style", "transform: translateY(500px); opacity: 0;");
    }
};

window.addEventListener("scroll", scrollFunction);