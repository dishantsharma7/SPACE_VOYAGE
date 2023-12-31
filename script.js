document.querySelector('button.btn.btn-primary').addEventListener('click', getFetch);

async function getFetch() {
    const inputdate = document.querySelector('input').value; // Get the selected date
    
    // Construct the URL with the selected date
    const url = `https://api.nasa.gov/planetary/apod?api_key=yiBPBXYK7Ahvjrl7E3qCXSWcp8Dku2QTgf3M6IGv&date=${inputdate}`;
    
    const button = document.querySelector('button.btn.btn-primary');
    button.disabled = true; // Disable the button during fetching
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        const imageElement = document.querySelector('img');
        imageElement.src = data.hdurl || 'fallback-image.jpg'; // Use a fallback image
      
        // Show the hidden elements
        const elementsContainer = document.getElementById('element-container');
        elementsContainer.style.display = 'block';

        document.getElementById('explaination').innerText = data.explanation;
        document.querySelector('h2').innerText = data.title;
        document.querySelector('h4').innerText = data.date;
        document.getElementById('copyright').innerText = data.date + ' ';
    } catch (err) {
        console.error(`Error: ${err.message}`);
    } finally {
        button.disabled = false; // Re-enable the button after fetching
    }
}

