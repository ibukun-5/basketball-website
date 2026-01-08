// Roster page JavaScript
// Adds animations and hover effects to the roster table

document.addEventListener('DOMContentLoaded', function() {
    // Add animation when roster table scrolls into view
    const rosterContent = document.querySelector('.roster-content');
    
    // Create observer to watch when roster enters viewport
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in and slide up when roster enters view
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1  // Trigger when 10% visible
    });

    // Set initial state (hidden and below)
    if (rosterContent) {
        rosterContent.style.opacity = '0';  // Start invisible
        rosterContent.style.transform = 'translateY(20px)';  // Start 20px down
        rosterContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';  // Smooth animation
        observer.observe(rosterContent);  // Start watching
    }

    // Add hover effects to roster table rows
    // Makes rows smoothly highlight when mouse hovers over them
    const rosterRows = document.querySelectorAll('.roster-table tbody tr');
    rosterRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            // Ensure smooth transition on hover
            this.style.transition = 'all 0.3s ease';
        });
    });
});






