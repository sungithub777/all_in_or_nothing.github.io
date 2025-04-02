window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercentage = (scrollPosition / docHeight) * 100;

    var progressBar = document.getElementById('reading-progress');
    if (!progressBar) {
        var progressBarElement = document.createElement('div');
        progressBarElement.id = 'reading-progress';
        progressBarElement.style.position = 'fixed';
        progressBarElement.style.top = '0';
        progressBarElement.style.left = '0';
        progressBarElement.style.height = '5px';
        progressBarElement.style.backgroundColor = '#29b6f6';
        progressBarElement.style.zIndex = '9999';
        document.body.appendChild(progressBarElement);
    }

    var progressBarElement = document.getElementById('reading-progress');
    progressBarElement.style.width = scrollPercentage + '%';
});
