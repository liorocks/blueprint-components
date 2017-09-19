const loaders = require('loaders');
const path = require('path');
const styles = require('./styleguide/styleguide.styles')
const sections = require('./styleguide/styleguide.sections')

module.exports = {
  title: 'Blueprint Components',
  styleguideDir: 'build',
  assetsDir: './styleguide/assets',
  template: './styleguide/index.html',
  skipComponentsWithoutExample: true,
  highlightTheme: 'material',
  showUsage: true,
  showCode: false,
  require: [
    path.join(__dirname, './node_modules/@blueprintjs/core/dist/blueprint.css'),
    path.resolve(__dirname, 'styleguide/styleguide.setup.js'),  
    path.join(__dirname, './styleguide/style.css'),
  ],
  theme: {
    // sidebarWidth: 230,
    color: {
      baseBackground: '#f5f8fa',
      sidebarBackground: '#137cbd',
      base: '#50596c',
      type: '#137cbd',
      link: '#137cbd',
      linkHover: '#137cbd',
      border: '#dbdcdd'
    }
  },
  styles: styles,
  sections: sections,
  webpackConfig: {
    module: {
      loaders: loaders.all
    }
  },
  getComponentPathLine: function (componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import ${`{ ${name} }`} from 'blueprint-components';`;
  }
};
