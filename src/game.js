import Phaser from 'phaser'
import Boot from './scenes/boot.js'
import MenuScene from './scenes/menuScene.js'
import config from './util/config'

config.scene = [Boot, MenuScene]

new Phaser.Game(config) // eslint-disable-line no-new
