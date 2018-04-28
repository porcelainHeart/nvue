#! /usr/bin/env node

let path = require('path')
let fs = require('fs')
let mkdirp = require('mkdirp')
let argv = require('yargs')
  .option('t', {
    alias : 'tmp',
    default: '',
    describe: 'template name',
    type: 'string'
  })
  .usage('Usage: nvue [filename] [option]')
  .example('nvue table -t t')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2018')
  .argv

const handleError = err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
}

const writeFile = (file, contents) => {
  return new Promise((resolve, reject) => {
    let fileDirectory = path.parse(file).dir;
    mkdirp(fileDirectory, (err) => {
      if (err) {
        reject(err)
      } else {
        fs.writeFile(file, contents, err => {
          if (err) {
            reject(err)
          } else {
            resolve(true)
          }
        })
      }
    })
  })
}

const tmp = {
  t: 'element-form-table.vue',
  table: 'element-form-table.vue',
}
if (argv._.length < 1) {
  console.error('Usage: missing fliename')
  process.exit(1)
}

let param = argv.t || argv._[1]
//
// templates
//

let vueFile = fs.readFileSync(path.join(__dirname, 'templates', tmp[param] || 'tmp.vue')).toString()

let newVueFile = argv._[0]

if (!newVueFile.match('^[\.\/]')) {
  newVueFile = path.join('.', newVueFile)
}

let filePath = path.parse(newVueFile)
let fileName = filePath.name
let baseName = filePath.base

let vueFileContent = vueFile.replace(/__NAME__/g, fileName)

writeFile(newVueFile + '.vue', vueFileContent).then(_ => {
  console.log('Created ', baseName + '.vue')
  process.exit(0)
}).catch(err => {
  handleError(err)
})