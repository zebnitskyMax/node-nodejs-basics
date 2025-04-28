// src/fs/rename.js
const fs = require('fs').promises;
const path = require('path');

const rename = async () => {
    // Write your code here 
    const srcFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const destFile = path.join(__dirname, 'files', 'properFilename.md');

    try {
        // Check if source file exists
        await fs.access(srcFile);
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        // Check if destination file already exists
        await fs.access(destFile);
        // If exists, throw error
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code !== 'ENOENT') {
            // If error is not "file does not exist", propagate
            throw new Error('FS operation failed');
        }
        // Destination does not exist, proceed to rename
    }

    await fs.rename(srcFile, destFile);
};

await rename();