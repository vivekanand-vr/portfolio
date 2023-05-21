import React from 'react';
import Layout from '@theme/Layout';
import project_styles from './project-styles.css';
import img1 from './Project_images/MVC.png';
import img2 from './Project_images/Lyriks.png'; 
import img3 from './Project_images/SPF.png'


export default function Hello() {
  return (
    <Layout title="Projects" description="Hello React Page">
      <div className="container">
      <br></br>
      
      <h1 className='projects'>RECENT PROJECTS</h1>
        
        <div className='plist'>
        <h2 className='project_title'>1. MVC-CRUD Application</h2>
        <pre>March 2023  <a href="https://github.com/username/project-link">GitHub</a></pre>
        
        <img className='p_images' src={img1}></img>
        <h3 className='desc'>Description:</h3>
        <ul>
        <li>Designed and developed a web application in Java, using Hibernate, Servlets, HTML and JSP to interact with MySQL database and display employee data through HTML-based views.</li>
        <li>Implemented the Model-View-Controller pattern for separating business logic from presentation logic.</li>
        </ul>

        <br></br>

        <h2 className='project_title'>2. Lyriks – Music Player</h2>
        <pre>February 2023  <a href="https://github.com/username/project-link">GitHub</a></pre>
        <img className='p_images' src={img2}></img>
        <h3 className='desc'>Description:</h3>
        <ul>
        <li>Developed a music player using React & implemented key functionalities such as music-player, home page, artist details, song lyrics, & search music, resulting in an enhanced user experience.</li>
        <li>Integrated APIs such as Shazam API for gathering music data, Shazam Core API for artist details and recommendations, and IP Geolocation API to get users location.</li>
        </ul>

        <br></br>

        <h2 className='project_title'>3. Shortest Path Finder</h2>
        <pre>November 2022 <a href="https://github.com/username/project-link">GitHub</a></pre>
        <img className='p_images' src={img3}></img>
        <h3 className='desc'>Description:</h3>
        <ul>
        <li> Developed an application using HTML, CSS, JavaScript & React.</li>
        <li> It uses Dijkstra's algorithm to find the shortest path between nodes in a graph.</li>
        </ul>  

        </div>
      </div>
    </Layout>
  );
}