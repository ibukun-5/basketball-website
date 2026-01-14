// Bio page JavaScript
// Adds animations and interactivity to the bio page

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation for bio sections when they scroll into view
    // Each section animates in sequence (staggered effect)
    const bioSections = document.querySelectorAll('.bio-section');
    
    // Options for Intersection Observer
    const observerOptions = {
        threshold: 0.1,  // Trigger when 10% visible
        rootMargin: '0px 0px -50px 0px'  // Trigger 50px before entering view
    };

    // Create observer to watch when sections enter viewport
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Delay each section's animation by 100ms * its index
                // Creates a cascading effect
                setTimeout(() => {
                    entry.target.style.opacity = '1';  // Fade in
                    entry.target.style.transform = 'translateY(0)';  // Slide up
                }, index * 100);
            }
        });
    }, observerOptions);

    // Set initial state for each bio section (hidden and below)
    bioSections.forEach(section => {
        section.style.opacity = '0';  // Start invisible
        section.style.transform = 'translateY(20px)';  // Start 20px down
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';  // Smooth animation
        observer.observe(section);  // Start watching this section
    });

    // Add hover effect enhancement for value items (Excellence, Teamwork, etc.)
    const valueItems = document.querySelectorAll('.value-item');
    valueItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Ensure smooth transition on hover
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Gallery item animations - fade in and slide up when scrolling into view
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryObserverOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const galleryObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, galleryObserverOptions);

    // Set initial state for gallery items
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        galleryObserver.observe(item);
    });
});







