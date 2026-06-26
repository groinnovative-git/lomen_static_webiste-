const fs = require('fs');
let lines = fs.readFileSync('C:\\Users\\Pc\\.gemini\\antigravity-ide\\brain\\a762895d-6911-4069-b5fb-4f058b81c510\\.system_generated\\logs\\transcript_full.jsonl', 'utf8').split('\n');
let maxCss = '';

for (let line of lines) {
    if (line.includes(':root {')) {
        try {
            let obj = JSON.parse(line);
            
            if (obj.type === 'USER_INPUT' && obj.content && obj.content.length > maxCss.length) {
                const reqStart = obj.content.indexOf(':root {');
                const reqEnd = obj.content.indexOf('</USER_REQUEST>');
                if (reqStart > -1 && reqEnd > -1) {
                    maxCss = obj.content.substring(reqStart, reqEnd).trim();
                }
            }
        } catch (e) {}
    }
}

fs.writeFileSync('src/assets/css/custom.css', maxCss);
console.log('Recovered bytes:', maxCss.length);
