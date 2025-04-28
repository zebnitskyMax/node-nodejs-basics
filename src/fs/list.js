// src/fs/list.js
const fs = require('fs').promises;
const path = require('path');

const list = async () => {
    // Write your code here 
    const dirPath = path.join(__dirname, 'files');

    try {
        // Check if directory exists
        await fs.access(dirPath);
    } catch {
        throw new Error('FS operation failed');
    }

    const files = await fs.readdir(dirPath);
    console.log(files);
};

await list();