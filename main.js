var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game');


console.log('main')
game.state.add('boot', boot);
game.state.add('load', loading);
game.state.add('menu',menu);
game.state.add('play',play);



game.state.start('boot');

