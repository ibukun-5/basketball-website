// Shop page JavaScript
// Handles add to cart functionality and product card animations

document.addEventListener('DOMContentLoaded', function() {
    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    // Add click event to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the product card containing this button
            const productCard = this.closest('.product-card');
            // Get product name and price from the card
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Visual feedback - change button to show item was added
            const originalText = this.textContent;  // Save original text
            this.textContent = 'Added!';  // Change to "Added!"
            this.style.backgroundColor = '#4CAF50';  // Change to green
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.textContent = originalText;  // Restore original text
                this.style.backgroundColor = '';  // Restore original color
            }, 2000);
            
            // In a real application, this would add the item to a shopping cart
            // For now, just log to console
            console.log(`Added ${productName} (${productPrice}) to cart`);
        });
    });

    // Add animation when product cards scroll into view
    // Cards fade in and slide up in sequence (staggered effect)
    const productCards = document.querySelectorAll('.product-card');
    
    // Create observer to watch when cards enter viewport
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Delay each card's animation by 100ms * its index
                // Creates a cascading effect
                setTimeout(() => {
                    entry.target.style.opacity = '1';  // Fade in
                    entry.target.style.transform = 'translateY(0)';  // Slide up
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1  // Trigger when 10% visible
    });

    // Set initial state for each product card (hidden and below)
    productCards.forEach(card => {
        card.style.opacity = '0';  // Start invisible
        card.style.transform = 'translateY(20px)';  // Start 20px down
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';  // Smooth animation
        observer.observe(card);  // Start watching this card
    });
});






