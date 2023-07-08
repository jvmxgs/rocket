/* global Phaser */

import GameScreen from '../util/gamescreen.js'

export default class Coin extends Phaser.Physics.Matter.Sprite {
  constructor (scene, x, y) {
    super(scene.matter.world, x, y, 'coin', 0, { isSensor: true })
    scene.add.existing(this)
    this.scene = scene

    this.setIgnoreGravity(true)
      .setVelocity(0, 10)
      .setFrictionAir(0)

    this.body.label = 'coin'
  }

  dissapear (x, y) {
    this.body.destroy()
    this.setScrollFactor(0)
      .setPosition(this.body.position.x, 900)

    this.scene.tweens.add({
      targets: this,
      duration: 600,
      ease: 'Sine.easeInOut',
      x: GameScreen.getRelativePositionX(95),
      y: GameScreen.getRelativePositionY(2),
      onComplete: () => {
        this.scene.registry.events.emit('coinCollected')
        this.destroy()
      }
    })
  }
}
