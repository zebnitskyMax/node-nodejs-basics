const fs = require('fs').promises;

const write = async () => {
    // Write your code here 
    const writeStream = fs.createWriteStream('fileToWrite.txt', 'utf8');

    process.stdin.on('error', (err) => {
        console.error('Error reading from stdin:', err);
    });

    writeStream.on('error', (err) => {
        console.error('Error writing to file:', err);
    });

    // Pipe stdin into the write stream
    process.stdin.pipe(writeStream);
};

await write();