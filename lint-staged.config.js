module.exports = {
  '*.ts{,x}': [
    'npm run sort:import',
    'npm run fmt',
    'npm run lint:ts',
    'npm run lint:css',
    'git add'
  ]
}
