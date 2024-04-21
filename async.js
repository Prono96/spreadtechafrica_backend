async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Hello, Africa tech!';
            resolve(data);
        }, 3000);
    });
} 

async function main() {
    try {
        const data = await fetchData();
        console.log(data); // Output: Hello, world!
    } catch (error) {
        console.error(error);
    }
}

main();