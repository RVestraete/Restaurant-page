export default function AboutPage() { 

    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = "What's up ?";

    const text = document.createElement("p");
    text.textContent = "This is some text for the about page."

    content.appendChild(heading);
    content.appendChild(text);

}