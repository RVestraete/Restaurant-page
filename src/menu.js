export default function MenuPage() {

    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = "The big menu";

    const text = document.createElement("p");
    text.textContent = "This is some text for the menu page."

    content.appendChild(heading);
    content.appendChild(text);


}