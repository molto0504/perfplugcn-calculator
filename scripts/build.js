const fsExtra = require('fs-extra');
const fs = require('fs');
const path = require('path');

const baseDir = path.dirname(__dirname)

const dir = {
  build: path.join(baseDir, 'build'),
  src: path.join(baseDir, 'src'),
  public: path.join(baseDir, 'public'),
}

const pluginPath = path.join(dir.src, 'plugin.html');
const tmplPath = path.join(dir.public, 'perfplugcn.html');
const outputPath = path.join(dir.build, 'perfplugcn.html');

const main = ()=> {
  fs.rmSync(dir.build, { recursive: true, force: true });
  fs.mkdirSync(dir.build, { recursive: true });
  fsExtra.copySync(dir.public, dir.build, { recursive: true });
  const plugin = fs.readFileSync(pluginPath).toString()
  const tmpl = fs.readFileSync(tmplPath).toString()
  const output = tmpl.replace(/{{ PLUGIN }}/g, plugin);
  fs.writeFileSync(outputPath, output)
}

main()
