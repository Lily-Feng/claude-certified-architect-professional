import {readFileSync,writeFileSync,mkdirSync,copyFileSync,rmSync} from 'node:fs';
const data=Object.fromEntries(['questions','domains','lessons','sources','objectives'].map(key=>[key,JSON.parse(readFileSync(`content/${key}.json`))]));
writeFileSync('assets/data.js','window.ATLAS = '+JSON.stringify(data).replace(/</g,'\\u003c')+';\n');
rmSync('dist',{recursive:true,force:true});mkdirSync('dist/assets',{recursive:true});copyFileSync('index.html','dist/index.html');
for(const name of ['site.css','app.js','core.js','data.js','favicon.svg'])copyFileSync('assets/'+name,'dist/assets/'+name);
writeFileSync('dist/.nojekyll','');
console.log(`Built ${data.questions.length} questions, ${data.lessons.length} study chapters, ${Object.keys(data.sources).length} references.`);
