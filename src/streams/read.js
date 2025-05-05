const fs = require('fs').promises;

const read = async () => {
    // Write your code here 
    const readStream = fs.createReadStream('fileToRead.txt', 'utf8');

    readStream.on('error', (err) => {
        console.error('Error reading the file:', err);
    });

    // Pipe the read stream directly into process.stdout
    readStream.pipe(process.stdout);
};

await read();