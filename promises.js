

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                const data = 'Hello, world!';
                resolve(data);

            } else {
                reject('or nah');
            }

        }, 3000);
    });
}

fetchData()
    .then((data) => {
        console.log(data); 
    })
    .catch((error) => {
        console.error(error);
    });
