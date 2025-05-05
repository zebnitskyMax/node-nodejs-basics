const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2); // Skip node and script path
    const argsMap = {};

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith('--')) {
            const propName = arg.slice(2);
            const value = args[i + 1];
            if (value && !value.startsWith('--')) {
                argsMap[propName] = value;
                i++; // Skip the value in next iteration
            } else {
                // Handle case where no value is provided after --prop
                argsMap[propName] = '';
            }
        }
    }

    // Print in desired format
    for (const [key, value] of Object.entries(argsMap)) {
        console.log(`${key} is ${value}`);
    }
};

parseArgs();