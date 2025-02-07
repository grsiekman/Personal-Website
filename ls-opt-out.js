//This is handling local storage opt-out
document.addEventListener('DOMContentLoaded', function() {
    function storageWipe(event) {
        localStorage.removeItem('theme');
        localStorage.removeItem('clickHist');
        //Display a popup that history was cleared.
        alert('Local storage history cleared.');
    }

    document.querySelector('#lsWipe').addEventListener('click', storageWipe, false);
}