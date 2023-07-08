/* global Phaser */
import Rocket from '../obj/rocket.js'
import Camera from '../obj/camera.js'
import Panelfinal from '../obj/panelfinal.js'
import Coins from '../groups/coins.js'
import defineCollisions from '../helpers/collisions.js'
import defineAnimations from '../helpers/animations.js'
import config from '../util/config'

export default class MainScene extends Phaser.Scene {
  constructor () {
    super({ key: 'MainScene' })
  }

  create () {
    // this.matter.world.setBounds(0, 0, config.width, config.height)

    defineAnimations(this)

    this.rocket = new Rocket(this, config.width / 2, config.height - 200)

    this.camera = new Camera(this, config.width, config.height, this.rocket.sprite)

    this.panelfinal = new Panelfinal(this, config.width / 2, config.height / 2 - 1500)

    this.coins = new Coins(this)

    this.tick = 0

    defineCollisions(this)
  }

  update () {
    this.tick++
    if (this.tick > 40) {
      this.coins.addCoin(this, Phaser.Math.Between(150, 600), this.rocket.sprite.body.position.y - 1000)
      this.tick = 0
      console.log(this.coins.children.entries.length)
    }

    this.camera.update()

    this.rocket.update(this)
  }
}
