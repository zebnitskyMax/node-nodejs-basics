// src/fs/copy.js
const fs = require('fs').promises;
const path = require('path');

const copy = async () => {
    // Write your code here 
    const srcDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');

    try {
        // Check if source directory exists
        await fs.access(srcDir);
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        // Check if destination directory already exists
        await fs.access(destDir);
        // If exists, throw error
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code !== 'ENOENT') {
            // If error is not "directory does not exist", propagate
            throw new Error('FS operation failed');
        }
        // Directory does not exist, proceed to copy
    }

    // Read all files in source directory
    const files = await fs.readdir(srcDir);
    // Create the destination directory
    await fs.mkdir(destDir);

    // Copy each file
    for (const file of files) {
        const srcFile = path.join(srcDir, file);
        const destFile = path.join(destDir, file);
        await fs.copyFile(srcFile, destFile);
    }
};

await copy();