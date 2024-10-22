// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('playButton');
    let isPlaying = false;

    playButton.addEventListener('click', function() {
        if (!isPlaying) {
            // Start playing
            audio.play();
            isPlaying = true;
            
            // Change icon to volume icon
            playButton.innerHTML = '<i class="fas fa-volume-up"></i>';
            
            // Prevent stopping
            audio.addEventListener('pause', function() {
                audio.play();
            });
            
            // Restart when ended (backup for loop attribute)
            audio.addEventListener('ended', function() {
                audio.currentTime = 0;
                audio.play();
            });
            
            // Handle page visibility
            document.addEventListener('visibilitychange', function() {
                if (document.visibilityState === 'visible') {
                    audio.play();
                }
            });
        }
    });

    // Prevent keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === ' ' || e.key === 'MediaPlayPause' || e.key === 'MediaStop') {
            e.preventDefault();
        }
    });
});