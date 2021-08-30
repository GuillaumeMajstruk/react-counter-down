const prefixWithAZero = (value) => {
    return Math.floor(value / 10) > 0 ? value.toString() : "0" + value.toString();
}

export const convertDate = (dateString) => {
    const now = Date.now();
    const dateStringAsTimestamp = Date.parse(dateString);

    const diff = dateStringAsTimestamp - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24) / (60 * 60 * 1000)));
    const minutes = Math.floor((diff % (1000 * 60 * 60 * 24) % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diff % (1000 * 60 * 60 * 24) % (60 * 60 * 1000) % (60 * 1000)) / 1000);

    return {
        days: prefixWithAZero(days),
        hours: prefixWithAZero(hours),
        minutes: prefixWithAZero(minutes),
        seconds: prefixWithAZero(seconds)
    };
}