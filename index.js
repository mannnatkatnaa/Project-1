const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";
ratingEls.forEach((ratingEl) =>{
    ratingEls.addeventslistener("click", (event) => {
       removeActive();
        selectedRating = 
         event.target.innerText || event.target.
         parentNode.innerText;
        event.target.classlist.add("active");
       event.target.parentNode.classlist.add
       ("active");
    });
});

btnEl.addeventslistener("click",()=>{
    if(selectedRating !== ""){
       containerEl.innerHTML = `<strong>Thank you!</strong>
       <br>
        <br>
       <strong>Feedback: ${selectedRating}</strong>
       <p>
        We'll use your feedback for further improvements.
       </p>
       </br>
       </br>`
    };
});
function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classlist.remove("Active");
    });
};
