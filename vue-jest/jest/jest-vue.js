const templateRegex = /<template>([\s\S]*)<\/template>/gm;
const scriptRegex = /<script>([\s\S]*)<\/script>/gm;

module.exports = {
  process(src, path) {
    const template = templateRegex.exec(src)[1];
    return `${
      scriptRegex.exec(src)[1]
      .replace('export default', 'exports.__esModule=true; exports.default=')
      .replace(/\`/g,"\\\`")
    };
    exports.default['template']=\`${template}\`;
    `;
  }
}
