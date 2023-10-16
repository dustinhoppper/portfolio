document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.example.com/photos')
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('gallery');
            data.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.url;
                gallery.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching photos:', error));
});
