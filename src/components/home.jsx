import React from 'react';


export default function Home() {
    return (
        <>
            <header className="home-header">
                
                <h1>Welcome to My Portfolio</h1>
                <p>Your one-stop destination to learn more about me and my work.</p>
                <button onClick={() => window.location.href = '/about'}>Info About Me</button>
            </header>
            <main className="home-main">
                <section>
                    <h2>Mission Statement</h2>
                    <p>To innovate and provide reliable solutions that help our clients achieve their goals.</p>
                </section>
            </main>
        </>
    );
}