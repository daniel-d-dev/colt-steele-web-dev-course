# TV Show Search App
https://daniel-d-dev.github.io/colt-steele-web-dev-course/tv-show-search-app/

This app allows users to search for TV shows using a title. By leveraging the TVMaze API, this app retrieves and displays show images, names, and descriptions. The user can search for any TV show title, and the app will provide a list of matching results, along with their respective images and descriptions.

# Technologies Used
* HTML: Structures the page and elements such as the search form and results container.
* CSS: Provides styling for the app, including layout, hover effects, and transitions.
* JavaScript (Axios): Handles API requests and logic to display the search results. Axios is used for making HTTP requests to fetch TV show data from the TVMaze API.
* TVMaze API: Used for fetching TV show information, including names, images, and descriptions.

# Improvements from Original Codealong
* Initially, if the API returned no shows, the app didn’t display any message. This has been improved by adding a “No results found” message for better UX.
* In the original codealong, new images were appended to the page without clearing the old ones. This caused the page to become cluttered after multiple searches. The new version clears previous search results before appending new ones.
* The original code lacked error handling when the API request failed. Now, if there's an issue with the request, an error message is shown to the user.
* The original code only displayed images of TV shows. Now, it includes a description that can be toggled on and off when clicking on a show.
* The images of TV shows scale slightly when hovered over, providing a more interactive experience.
