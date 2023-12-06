# news-app

News app is a web application developed using React/Typescript, Redux-Toolkit and a Django API server that connects to the NewsAPI. It enables users to explore news articles for the past 7 days, covering topics including "apple," "meta," "netflix," "google," "twitter," and "tesla".

![app screenshots](/resources/cover.jpg)

## Features

 1. View News Articles by Topics

    Users can select specific topics, including "apple," "meta," "netflix," "google," "twitter," and "tesla," to view news articles related to those topics.

 2. Language Change (English/Arabic)
   
    The app provides the option to switch between English and Arabic languages. Users can choose their preferred language to view news articles.

 3. RTL Support for Arabic Language

    For users selecting the Arabic language, the app supports Right-to-Left (RTL) layout to enhance the reading experience.

 4. Dark Mode/Light Mode Switch

    Users can toggle between dark mode and light mode, providing flexibility in the app's appearance to suit individual preferences.


## Getting Started

Follow the below steps to run the application locally.

 1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) & [Docker](https://docs.docker.com/get-docker/)
   
 2. Clone the repository
    ```bash
    git clone https://github.com/sajithaliyanage/news-app.git
    ```
 3. Run application
    ```bash
    cd news-app
    docker-compose -f docker-compose.yaml up --build 
    ```
 4. Open browser `http://localhost:3000`


## Performance Optimization

 1. Componentization

    The app is structured with smaller components, each having a single responsibility. This modular approach improves code maintainability and readability.

 2. Code Splitting with Lazy Loading

    The app utilizes code splitting with lazy loading to load only the necessary components when needed. This enhances the app's initial load time and reduces the overall bundle size.

 3. Endpoint Pagination Support

    The app supports pagination at the endpoint level, allowing users to fetch and view news articles in smaller chunks, improving data retrieval efficiency.

 4. Image Lazy Loading

    Images within the app are implemented with lazy loading, ensuring that images are loaded only when they come into the user's viewport. This helps reduce initial page load times and improves overall performance.
