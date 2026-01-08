// Schedule page JavaScript
// Handles filtering and animations for the schedule table

document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons (All Games, Home Games, Away Games)
    const filterButtons = document.querySelectorAll('.filter-btn');
    // Get all rows in the schedule table
    const scheduleRows = document.querySelectorAll('.schedule-table tbody tr');

    // Filter functionality - show/hide games based on filter selection
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            this.classList.add('active');
            
            // Get the filter type (all, home, or away)
            const filter = this.getAttribute('data-filter');
            
            // Loop through each row and show/hide based on filter
            scheduleRows.forEach(row => {
                if (filter === 'all') {
                    // Show all rows
                    row.classList.remove('hidden');
                    fadeInRow(row);
                } else if (filter === 'home' && row.getAttribute('data-type') === 'home') {
                    // Show only home games
                    row.classList.remove('hidden');
                    fadeInRow(row);
                } else if (filter === 'away' && row.getAttribute('data-type') === 'away') {
                    // Show only away games
                    row.classList.remove('hidden');
                    fadeInRow(row);
                } else {
                    // Hide rows that don't match filter
                    fadeOutRow(row);
                }
            });
        });
    });

    // Function to fade in a row (when showing it)
    function fadeInRow(row) {
        row.style.opacity = '0';  // Start invisible
        row.style.transition = 'opacity 0.3s ease';  // Smooth fade
        setTimeout(() => {
            row.style.opacity = '1';  // Fade to visible
        }, 10);
    }

    // Function to fade out a row (when hiding it)
    function fadeOutRow(row) {
        row.style.opacity = '1';  // Start visible
        row.style.transition = 'opacity 0.3s ease';  // Smooth fade
        setTimeout(() => {
            row.style.opacity = '0';  // Fade to invisible
            setTimeout(() => {
                row.classList.add('hidden');  // Hide completely after fade
            }, 300);  // Wait for fade animation to complete
        }, 10);
    }

    // Add animation when schedule table scrolls into view
    const tableObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in and slide up when table enters view
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1  // Trigger when 10% visible
    });

    // Set initial state for schedule content (hidden and below)
    const scheduleContent = document.querySelector('.schedule-content');
    if (scheduleContent) {
        scheduleContent.style.opacity = '0';
        scheduleContent.style.transform = 'translateY(20px)';
        scheduleContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        tableObserver.observe(scheduleContent);  // Start watching
    }
});







