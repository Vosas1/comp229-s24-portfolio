import React from 'react';
import VictorImage from '../assets/victorImage.JPG';

export default function AboutMe() {
    return (
        <>

<div>
      <h1>About Me</h1>
      
      <img src={VictorImage} alt="Victor" style={{ width: '10%', height: 'auto' }} />
      
    </div>
          
            <main>
                <section>

                    <p>My name is Victor Osaikhuwuomwan, and I studied Software Engineering & Artificial Intelligence.
                        I have developed strong skills in AI and Software Development, allowing me to create innovative
                        solutions and contribute effectively to projects. I am passionate about leveraging technology
                        to solve complex problems and I am committed to continuous learning and growth in my field.
                    </p>
                
                </section>
                <section>
                    <h3>My Mission</h3>
                    <p>To innovate and provide reliable solutions that help our clients achieve their goals.</p>
                </section>
                
            </main>
            <footer>
                <p>&copy; 2024 VikiTech. All rights reserved.</p>
            </footer>
        </>
    );
}