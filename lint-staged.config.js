module.exports = {
  '*.ts{,x}': ['npm run sort:import', 'npm run lint:fix', 'npm run lint:css', 'git add']
}