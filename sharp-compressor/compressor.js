
const fs = require('fs');
const sharp = require('sharp');

const inputDir = ' C:\\Users\\scriptconnoiseur\\Desktop\\cnt';//change input directory here

const outputDir = 'C:\\Users\\scriptconnoiseur\\Desktop\\comp';//change output directory here

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading input directory:', err);
        return;
    }
    files.forEach(file => {
        if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
            // Compress
           
            sharp(`${inputDir}/${file}`)
                .toFile(`${outputDir}/${file}`, (err, info) => {
                    if (err) {
                        console.error(`Error processing ${file}:`, err);
                    } else {
                        console.log(`Compressed ${file} to ${info.size} bytes`);
                    }
                });
        }
    });
});

