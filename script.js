function toggleDetails() {
    const details = document.getElementById('codeQuasarDetails');
    const showMore = document.getElementById('showMore');
    
    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        showMore.textContent = 'Show More...';
    } else {
        details.classList.add('expanded');
        showMore.textContent = 'Show Less...';
    }
}
