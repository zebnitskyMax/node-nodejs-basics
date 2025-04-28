// src/fs/delete.js
const fs = require('fs').promises;
const path = require('path');

const remove = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        // Check if file exists
        await fs.access(filePath);
    } catch {
        throw new Error('FS operation failed');
    }

    await fs.unlink(filePath);
};

await remove();