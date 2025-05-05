const {
    Transform
} = require('stream');

class ReverseTransform extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        // Convert chunk to string, reverse it, then push
        const reversed = chunk.toString().split('').reverse().join('');
        this.push(reversed);
        callback();
    }
}
const transform = async () => {
    // Write your code here 
    const reverseTransform = new ReverseTransform();

    process.stdin.on('error', (err) => {
        console.error('Error reading from stdin:', err);
    });

    // Pipe stdin through the transform stream into stdout
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();