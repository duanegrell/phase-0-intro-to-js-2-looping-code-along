
const message = []

function writeCards (names, event) {
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message;
}
writeCards (message);


function countDown (integer) {
    let count = integer;
    while (count > -1) {
        console.log(count--);
    }
}
