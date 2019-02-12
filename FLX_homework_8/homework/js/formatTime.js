function formatTime(times) {
    const days = Math.floor(times / 1440);
    const hours = Math.floor((times - (days * 1440)) / 60);
    const minutes = Math.floor((times % (24 * 60)) % 60);
    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).';
}

formatTime(3601);