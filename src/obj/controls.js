/* global Phaser */
import GameScreen from '../util/gamescreen.js'
export default class Controls {
  constructor (scene) {
    this.scene = scene
    this.cursors = scene.input.keyboard.createCursorKeys()
  }

  chechWhatHalf () {
    this.firstHalf = (this.scene.input.pointer1.x < GameScreen.getRelativePositionX(50))
  }

  keyLeft () {
    return Phaser.Input.Keyboard.JustDown(this.cursors.left)
  }

  keyRight () {
    return Phaser.Input.Keyboard.JustDown(this.cursors.right)
  }

  touchedDown () {
    this.chechWhatHalf()
    return this.scene.input.pointer1.justDown
  }
}
