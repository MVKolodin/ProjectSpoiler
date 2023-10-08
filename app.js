document.addEventListener('DOMContentLoaded', function () {
    const spoilerButton = document.getElementById('myBtn');
    const spoilerBlock = document.getElementById('spoiler');

    function toggleSpoiler() {
        spoilerBlock.classList.toggle('closed');
    }

    spoilerButton.addEventListener('click', function () {
        toggleSpoiler();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !spoilerBlock.classList.contains('closed')) {
            toggleSpoiler();
        }
    });
});