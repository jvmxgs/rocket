import config from './config'

export default class GameScreen {
  constructor () {
    this.width = config.width
    this.height = config.height
  }

  getRelativePositionX (xPercent) {
    return this.width * (xPercent / 100)
  }

  getRelativePositionY (yPercent) {
    return this.height * (yPercent / 100)
  }
}
