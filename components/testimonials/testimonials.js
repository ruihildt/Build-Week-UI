class TabLink {
    constructor(linkElement) {
        this.linkElement = linkElement;
        // Get the custom data attribute from the link
        this.data = linkElement.dataset.tab;
        // Get the associated textItem element
        this.testimonialItem = document.querySelector(`.testimonials-text[data-tab="${this.data}"]`);

        // Create a new instance of the TabText class with the text item element
        this.testimonialText = new TabText(this.testimonialItem);

        // Event listener on this instance, invoking select method on click
        this.linkElement.addEventListener('click', () => this.select());
    }

    select() {
        // Get all links in an array-like object
        const testimonialsLinks = document.querySelectorAll('.testimonials-link');

        // Remove '.testimonials-link-selected' on these
        Array.from(testimonialsLinks).forEach(link => link.classList.remove('testimonials-link-selected'));

        // Add a class named "testimonials-link-selected" to this link
        this.linkElement.classList.add('testimonials-link-selected');

        // Invoke select() on the textElement associated
        this.testimonialText.select();
    }
}

class TabText {
    constructor(element) {
        this.element = element;
    }

    select() {
        // Select all 'testimonials-text'
        const texts = document.querySelectorAll('.testimonials-text');

        // Clear the class "testimonials-text-selected" from all elements
        Array.from(texts).forEach(text => text.classList.remove('testimonials-text-selected'));

        // Add the same class to this specific element
        this.element.classList.add('testimonials-text-selected');
    }
}

links = document.querySelectorAll('.testimonials-link') .forEach(testimonialLink => new TabLink(testimonialLink));