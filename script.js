document.getElementById('download-btn').addEventListener('click', function(event) {
    event.preventDefault();

    var link = document.createElement('a');
    link.href = 'path/to/your/cv.pdf';
    link.download = 'file.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
});
