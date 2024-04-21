<h1>Project Using NASA APIs</h1>

<p>Use Vite + React and Tailwind CSS for the front end. For the backend, I used Node and Express. The application will consume data from NASA's public APIs available at
NASA API portal. This website was deployed using Render. All the UI are mobile responsive. You can visit the website using https://nasa-apis.onrender.com his link.</p>
<br/>

<p>Users can register to the system and must log in to refer to the content. I use JSON web token to authenticate users and bcrypt to the hashing passwords. To manage user sessions in the backend I use cookies. In the front end use Redux to manage user sessions. Used MongoDB as database.</p>

![landingpage](https://github.com/DhananjayaLakshan/NASA_APIs/blob/main/frontend/src/images/4.png)
![landingpage](https://github.com/DhananjayaLakshan/NASA_APIs/blob/main/frontend/src/images/5.png)

<br/>
<p>Users can update their profile details such as username, email, and password. Users can delete their profiles as well.</p>

![landingpage](https://github.com/DhananjayaLakshan/NASA_APIs/blob/main/frontend/src/images/6.png)

<br/>
<p>In the home page there is a short description of the NASA APIs used to build this website and page links are provided in the description.</p>

![landingpage](https://github.com/DhananjayaLakshan/NASA_APIs/blob/main/frontend/src/images/1.png)

<br/>
<h3>Astronomy Picture of the Day (APOD) Viewer</h3>
<p>This React component is designed to fetch and display NASA's Astronomy Picture of the Day based on a user-selected date. It utilizes the APOD API and leverages the axios library for HTTP requests. The page dynamically displays high-quality astronomical images accompanied by detailed explanations, titles, and copyrights. Features include a date picker for navigating different APOD entries. This component offers a captivating educational tool for space enthusiasts looking to explore the cosmos through NASA's visual archives.</p>

![landingpage](https://github.com/DhananjayaLakshan/NASA_APIs/blob/main/frontend/src/images/2.png)

<br/>
<h3>Mars Rover Photos Explorer</h3>
<p>This React component offers an interactive experience for exploring photos captured by various cameras on NASA's Mars Curiosity Rover. Utilizing NASA's Mars Rover Photos API, the component dynamically fetches images based on selected camera inputs and displays them using custom Cards components. Users can select from a list of cameras, each with its distinct capabilities, to view Mars as captured on the 1000th sol (Mars day) of the Curiosity Rover's mission. This component is perfect for users who are enthusiastic about Mars exploration and want to see detailed Martian landscapes and features.</p>

![landingpage](https://github.com/DhananjayaLakshan/NASA_APIs/blob/main/frontend/src/images/3.png)
