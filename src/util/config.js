import Phaser from 'phaser'

export default {
  width: 720,
  height: 1280,
  type: Phaser.AUTO,
  parent: 'rocketGame',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  backgroundColor: '#000000',
  physics: {
    default: 'matter',
    matter: {
      gravity: { y: 9.8 },
      setBounds: {
        left: true,
        right: true,
        top: false,
        bottom: false
      },
      debug: true
    }
  }
}
