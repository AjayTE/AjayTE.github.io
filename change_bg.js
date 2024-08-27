document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll('.menu-link');

    links.forEach(link => {
        const originalBackground = document.body.style.backgroundImage || this.URL(/this.images/guatemala.jpg);

        link.addEventListener('mouseenter', function() {
            const backgroundImage = this.getAttribute('data-bg');

            document.body.style.backgroundImage = `url(${backgroundImage})`;
        });
    
        link.addEventListener('mouseleave', function() {
            document.body.style.backgroundImage = `url(${originalBackground})`;
        });
    });
});