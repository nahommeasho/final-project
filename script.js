
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill in both Name and Email fields');
        event.preventDefault();
    } else {
        alert('Form submitted successfully');
    }
});



function toggleReadingInfo() {
    var characterInfo = document.getElementById("character-info");
    if (characterInfo.style.display === "none" || characterInfo.style.display === "") {
        characterInfo.style.display = "block"; 
    } else {
        characterInfo.style.display = "none"; 
    }
}

function toggleCookingInfo() {
    var cookingInfo = document.getElementById("cooking-info");
    if (cookingInfo.style.display === "none" || cookingInfo.style.display === "") {
        cookingInfo.style.display = "block";  
    } else {
        cookingInfo.style.display = "none"; 
    }
}

function toggleMovieInfo() {
    var movieList = document.getElementById("movie-list");
    if (movieList.style.display === "none" || movieList.style.display === "") {
        movieList.style.display = "block";  
    } else {
        movieList.style.display = "none"; 
    }
}
   


document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jobDetails = this.parentElement.nextElementSibling;

            if (jobDetails && jobDetails.style.display === 'none') {
                jobDetails.style.display = 'block'; 
                this.textContent = 'Hide';  
            } else if (jobDetails) {
                jobDetails.style.display = 'none';  
                this.textContent = 'Show';
            }
        });
    });
});
