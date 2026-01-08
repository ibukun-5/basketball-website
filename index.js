// Homepage JavaScript
// This file adds interactivity and animations to the homepage

// Wait for the page to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links (links that start with #)
    // This makes clicking links scroll smoothly instead of jumping
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Loop through each anchor link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();  // Prevent default jump behavior
            const targetId = this.getAttribute('href');  // Get the target section ID
            const targetSection = document.querySelector(targetId);  // Find the target element
            
            // If target exists, scroll to it smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'  // Smooth scroll animation
                });
            }
        });
    });

    // Add animation on scroll for navigation cards
    // Cards fade in and slide up when they come into view
    const navCards = document.querySelectorAll('.nav-card');
    
    // Options for the Intersection Observer (watches when elements enter viewport)
    const observerOptions = {
        threshold: 0.1,  // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px'  // Trigger 50px before element enters view
    };

    // Create observer to watch when cards enter the viewport
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // When card becomes visible, animate it in
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';  // Make visible
                entry.target.style.transform = 'translateY(0)';  // Move to normal position
            }
        });
    }, observerOptions);

    // Set initial state (hidden and moved down) for each card
    navCards.forEach(card => {
        card.style.opacity = '0';  // Start invisible
        card.style.transform = 'translateY(20px)';  // Start 20px below
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';  // Smooth animation
        observer.observe(card);  // Start watching this card
    });
});







