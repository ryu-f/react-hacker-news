import path from 'path'

export interface Constants {
  SCREEN_SHOT_DIR: string
  NETWORK: string
}

export const CONSTANTS: Constants = {
  SCREEN_SHOT_DIR: path.resolve('__tests__/e2e/__snapshots__'),
  NETWORK: 'networkidle2'
}
