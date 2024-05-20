import React from 'react';
export default function ContactMe() {
    return (
        <>
            <header>
                <h2>Contact Us</h2>
            </header>
            <main>
               
                <section>
                    
                    <p>Email: info@vikitech.com</p>
                    <p>Phone: (123) 456-7890</p>
                </section>
                <section>
                    <h2>Contact Form</h2>
                    <form action="#" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required /><br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required /><br />
                        <label htmlFor="message">Message:</label><br />
                        <textarea id="message" name="message" rows="4" cols="50" required></textarea><br />
                        <input type="submit" value="Send Message" />
                    </form>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 VikiTech. All rights reserved.</p>
            </footer>
        </>
    );
}