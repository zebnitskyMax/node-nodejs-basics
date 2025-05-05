// src/fs/read.js
const fs = require('fs').promises;
const path = require('path');

const read = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        // Check if file exists
        await fs.access(filePath);
    } catch {
        throw new Error('FS operation failed');
    }

    const content = await fs.readFile(filePath, 'utf-8');
    console.log(content);
};

await read();