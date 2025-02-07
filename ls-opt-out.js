//This is handling local storage opt-out
document.addEventListener('DOMContentLoaded', function() {
    function storageWipe(event) {
        if(localStorage.getItem('theme') || localStorage.getItem('clickHist')) {
            localStorage.removeItem('theme');
            localStorage.removeItem('clickHist');
            // Display a popup that history was cleared.
            alert('Local storage history cleared.');
        } else {
            alert('No theme or click history data in Local Storage.');
        }
    }

    document.querySelector('#lsWipe').addEventListener('click', storageWipe, false);
});