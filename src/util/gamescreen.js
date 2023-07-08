import config from './config'

export default class GameScreen {
  static getRelativePositionX (xPercent) {
    return config.width * (xPercent / 100)
  }

  static getRelativePositionY (yPercent) {
    return config.height * (yPercent / 100)
  }
}
