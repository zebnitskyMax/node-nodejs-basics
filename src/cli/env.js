const parseEnv = () => {
    // Write your code here 
    const envVars = process.env;
    const rssVars = [];

    for (const key in envVars) {
        if (key.startsWith('RSS_')) {
            const name = key.substring(4); // Remove 'RSS_' prefix
            const value = envVars[key];
            rssVars.push(`RSS_${name}=${value}`);
        }
    }

    if (rssVars.length > 0) {
        console.log(rssVars.join('; '));
    } else {
        console.log('No RSS_ environment variables found.');
    }
};

parseEnv();