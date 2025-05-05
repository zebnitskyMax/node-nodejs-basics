// src/fs/create.js
const fs = require('fs').promises;
const path = require('path');

const create = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        // Attempt to create the file exclusively; fail if it exists
        await fs.writeFile(filePath, content, {
            flag: 'wx'
        });
    } catch (err) {
        // If error is because file exists, throw custom error
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        // Re-throw other errors
        throw err;
    }
};

await create();