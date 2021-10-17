import Coin from '../obj/coin.js'

/* global Phaser */

export default class Coins extends Phaser.GameObjects.Group {
  constructor (scene) {
    super(scene)

    this.createCallback = this.habemusCoin
  }

  habemusCoin () {
    this.playAnimation('coinFlip')
  }

  addCoin (scene, x, y) {
    const coin = new Coin(scene, x, y)
    this.add(coin)
  }
}
