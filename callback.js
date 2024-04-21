

function fetchData(callback) {
    setTimeout(() => {
        const data = 'Hello, world!';
        callback(data);
    }, 5000);
}

fetchData((data) => {
    console.log(data); 
});
