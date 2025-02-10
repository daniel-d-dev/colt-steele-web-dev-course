// Selecting the form element and the container for search results
const form = document.querySelector("#searchForm");
const resultsContainer = document.querySelector("#results");

// Appending the results container to the body
document.body.appendChild(resultsContainer);

// Event listener for the form submission
form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission

    const searchTerm = form.elements.query.value.trim(); // Retrieves and trims the search input
    resultsContainer.innerHTML = ""; // Clears any previous search results

    if (searchTerm) { // Ensures the search field is not empty
        try {
            // Makes an API request to TVMaze using Axios
            const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
            makeImages(res.data); // Passes the retrieved data to the makeImages function
        } catch (error) {
            // Handles any errors that occur during the API request
            console.error("Error fetching data:", error);
            resultsContainer.innerHTML = "<p>⚠️ Failed to load data. Please try again.</p>";
        }
    }
    form.elements.query.value = ""; // Clears the search input field after submission
});

// Function to display images and show details
const makeImages = (shows) => {
    if (shows.length === 0) {
        // Displays a message if no shows are found
        resultsContainer.innerHTML = "<p>❌ No results found. Try another search!</p>";
        return;
    }

    // Iterates over the shows array and creates a div for each show
    for (let result of shows) {
        if (result.show.image) { // Only processes shows with images

            // Creating a div element for each show
            const showDiv = document.createElement("div");
            showDiv.style.margin = "10px";
            showDiv.style.display = "inline-block";
            showDiv.style.textAlign = "center";
            showDiv.style.cursor = "pointer";

            // Creating an image element for each show
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            img.alt = `${result.show.name} Poster`;
            img.style.borderRadius = "8px";
            img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            img.style.width = "200px";
            img.style.transition = "transform 0.2s";

            // Adding the show title
            const title = document.createElement("p");
            title.textContent = result.show.name;
            title.style.fontWeight = "bold";
            title.style.margin = "5px 0";

            // Creating a hidden description box
            const description = document.createElement("div");
            description.innerHTML = result.show.summary || "No description available.";
            description.style.display = "none";
            description.style.backgroundColor = "#f9f9f9";
            description.style.padding = "10px";
            description.style.borderRadius = "8px";
            description.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            description.style.marginTop = "5px";
            description.style.textAlign = "left";
            description.style.width = "200px";
            description.style.fontSize = "0.9em";

            // Hover effect on image
            img.addEventListener("mouseover", () => {
                img.style.transform = "scale(1.05)";
            });
            img.addEventListener("mouseout", () => {
                img.style.transform = "scale(1)";
            });

            // Toggle description on click
            showDiv.addEventListener("click", () => {
                description.style.display = description.style.display === "none" ? "block" : "none";
            });

            // Appending all elements to the show container
            showDiv.appendChild(img);
            showDiv.appendChild(title);
            showDiv.appendChild(description);

            // Adds the show container to the main results section
            resultsContainer.appendChild(showDiv);
        }
    }
};
