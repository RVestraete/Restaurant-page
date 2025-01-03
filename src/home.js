export default function HomePage() {

    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = "Chipotle yeah";

    const text = document.createElement("p");
    text.textContent = "This is some text for the home page."

    content.appendChild(heading);
    content.appendChild(text);


};