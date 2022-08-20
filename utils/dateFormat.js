// Reference Boot Camp module 18.2.7
const addDateSuffix = date => {
    let dateStr = date.toString();

    // get last character of date string
    const lastChar = dateStr.charAt(dateStr.length - 1);

    if (lastChar === '1' && dateStr !== '11') {
        dateStr = `${dateStr}`
    }
}

//format a timestamp, accepts the timestamp and an `options` object as parameters
module.exports = (timestamp) => {
    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];
    const dayOfMonth = 
}