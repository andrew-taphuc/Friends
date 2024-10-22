// JavaScript to ensure autoplay and prevent stopping
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-audio');
    
    // Force autoplay
    audio.play();
    
    // Prevent pause/stop
    audio.addEventListener('pause', function() {
        audio.play();
    });
    
    // Restart when ended (backup for loop attribute)
    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play();
    });
    
    // Handle page visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            audio.play();
        }
    });
});

// Prevent keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Prevent space bar and other media keys
    if (e.key === ' ' || e.key === 'MediaPlayPause' || e.key === 'MediaStop') {
        e.preventDefault();
    }
});