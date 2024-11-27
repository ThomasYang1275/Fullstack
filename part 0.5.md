```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser: HTML doc

    Note left of browser: Browser sends the server a GET request for the HTML doc to construct the web page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: CSS file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->>browser: Javascript file

    Note left of browser: HTML doc contains links that causes the browser to send GET requests to the server<br/>The server sends back the files needed to finish construction of the web page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: JSON file

    Note left of browser: The javascript file conatined a link so the browser sent a GET request<br/>The server sends back a JSON file with the raw data needed for the web page
    ```