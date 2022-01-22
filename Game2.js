//mppa
var map;
var tileset;
var bg;
var bgg;
var sfondicasa;
var fg;
var fgg;
var platforms;
var ladders;
var background;

var noteX = [5280, 7992, 8976, 405*24, 3276, 5916, 5064, 9288, 4308, 1332,85*24];
var noteY = [9600, 9168, 9792, 382*24, 10608, 11328, 10272, 10392, 6432, 6240,46*24]
var nota;
var noteCollected = 0;

//camera
var cameraXInit;
var cameraYInit;
//gravità
const gravity = 1000;

//player
var player;
var hitbox;
var playerDeath;
var blackScreen;
var playerDirection = 1;
var playerBlock = false;
var cambiando = false
var playerLvl = 0;
var td = 0;
var bruttaCaduta = false;

var canFire = true;
var bullet = null;
var bulletKilling;
const FIRE_COOLDOWN = 10000;
const WEAPON_DMG = 150;

var leftButton;
var rightButton;
var upButton;
var jumpButton;
var attackButton;
var interactButton;
var fireButton;
var megaJumpButton;
var attacked = false;
var climbing = false;
var controlloCaduta = true;

var flautoDMG = 50;

const RESPAWN_X = 124*24;
const RESPAWN_Y = 367*24;
const playerSpeed = 250;
const playerJump = -550;
const ladderSpeed = -250;
const INVINCIBILITY_TIME = 700;
const MEGAJUMP = -600;
var playerHP = 4;
var playerLifes = 3;
var playerDamaged = false; //se è true il player non puo subire
var drowning = false;
var avvelenato = false;
var morto = false;

//topo 2 zampe

const topoHP = 100;
const topoFogneHP = 200;
const topoCattedraleHP = 250;

const topoAttackMinDelay = 1000;
const topoAttackMaxDelay =  1000;

const detectArea = 48*6;

var topo2Zampe;
var topoHitbox;

var topo2ZampeArrayX = [184,223,221,292,319,
                        79,104,183,235,194,194,215,257,344,214,
                        236,201,216,194,172,141,115,53,76,46,78,96,54,100,45,68,94,83,67,83];


var topo2ZampeArrayY = [398,382,402,386,400,
                        448,448,474,474,444,430,430,446,434,444,
                        281,283,300,300,300,300,300,218,218,184,184,170,140,140,110,110,110,82,74,66];


var topo2ZampeStopPatrol = [197, 244, 238, 312,341,
                            98,121,206,247,210,210,229,274,350,232,
                            248,213,232,214,190,164,137,70,105,71,91,113,74,117,63,90,106,94,74,94];


var topo2ZampeLife = [  topoHP,topoHP,topoHP,topoHP,topoHP,
                        topoFogneHP,topoFogneHP,topoFogneHP,topoFogneHP,topoFogneHP,topoFogneHP,topoFogneHP,topoFogneHP,topoFogneHP,topoFogneHP,
                        topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP,topoCattedraleHP]

var t; //identifica il singolo topo
var h; //identifica la singola hitbox

var denti;
var dente;

const topo2ZampeSpeed = 150;
const topoAttackDelay = 1000;

//topoRun

const TOPORUN_SPEED = 300;
var topoRun;
var topoRunTrigger;
var tRTriggerX = [333, 364, 301, 426, 192];
var tRTriggerY = [400,390, 448,314,300];
var tRTriggerH = [50, 15, 35,15,6];
var tRTriggerW = [2,2,2,2, 35];
var tRSpawnX = [400, 410, 243, 349,117];
var tRSpawnY = [380,368, 440, 304, 296];
var tRDirection = [-1, -1, 1, 1, 1];
var tr;

var timer1 = [0,300,500,800,1000,1500,1600]


//animazioni ambientali-----------------------------------
//npc

var currentDialog = null;
var EPressed = false;

var andre;
var camino;
//var bancone;
var streghetta;

//fiaccole fogne
var fiaccole1X = [2133,2733,3885,4917,6033,5517,4701,5373,6333,7221,7845,8445,9189,8973];
var fiaccole1Y = [10611,10611,11019,11235,11235,10947,10515,10179,10563,10611,10347,10323,10251,10827];


//fiaccole città
var fiaccole2X = [5277,7269,9069,9861,2997,1917,3069,3093]
var fiaccole2Y = [9483,9435,9627,9459,9099,9459,9459,8787]

//fiaccole cattedrale

var fiaccole3X = [1500,1500,1908,2340,2340,1500,1893,2397,1917,2364,1965,1572];
var fiaccole3Y = [5427,5091,5091,5667,5091,4275,4275,3939,3219,2499,2499,2499];

var ragniX = [267*24,401*24,387*24,75*24,46*24]
var ragniY = [384*24,386*24, 421*24,234*24,156*24]

var fuochiX = [154*24,192*24]
var fuochiY = [296*24,296*24]

var fuochiSX = [236*24,315*24,346*24, 206*24, 208*24]
var fuochiSY = [366*24,365*24,396*24, 394*24, 394*24]

//hud

var hp;
//__________________________________________________________________________________
//__________________________________________________________________________________
//__________________________________________________________________________________
//__________________________________________________________________________________

var play = {

    preload: function(){

        andre = game.add.sprite(426,270, 'andre', 0);
        andre.scale.x = 0.5;
        andre.scale.y = 0.5;
        andre.animations.add('anim', [0,1,2,3,4,5,6,7,8,9,10,11],10,true);
        andre.animations.play('anim');

        game.physics.arcade.TILE_BIAS = 32;
    },

    create: function(){




        var noteCollected = 0;

        //player
        var playerDirection = 1;
        var playerBlock = false;
        var cambiando = false
        var playerLvl = 0;
        var td = 0;
        var bruttaCaduta = false;

        var canFire = true;
        var bullet = null;

        var attacked = false;
        var climbing = false;
        var controlloCaduta = true;

        var playerHP = 4;
        var playerLifes = 3;
        var playerDamaged = false; //se è true il player non puo subire
        var drowning = false;
        var avvelenato = false;
        var morto = false;

        backgroundMusic = game.add.audio('pepe');
        backgroundMusic.loop = true; // This is what you are looking for
        backgroundMusic.play();

        //bottoni morte
        loading = game.add.image(0,0,'loading');
        loading.visible = false;
        loading.fixedToCamera = true;
        menuB = game.add.image(54,654, game.make.renderTexture(221,54));
        ricominciaB = game.add.image(747,654, game.make.renderTexture(221,54));

        menuB.events.onInputUp.add(function(){
            console.log('vai al menu');
            game.state.start('menu')});
    

        ricominciaB.events.onInputUp.add(function(){
            loading.visible = true;
            loading.bringToTop();
            game.time.events.add(500,function(){
               game.state.start('play') 
            })
        console.log('rigioca');});
        
        menuB.fixedToCamera = true;
        ricominciaB.fixedToCamera = true;
        // menuB.inputEnabled = true;
        // ricominciaB.inputEnabled = true;



        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // per la dimensionde della scermata che cambia in base alla dimensione della finestra

        //render morte
        GOBL = game.add.image(0,0, 'GOBL');
        GOGL = game.add.image(0,0, 'GOGL');
    
        GOBA = game.add.image(0,0, 'GOBA');
        GOGA = game.add.image(0,0, 'GOGA');
    
        GOBO = game.add.image(0,0, 'GOBO');
        GOGO = game.add.image(0,0, 'GOGO');
    
        GOBL.alpha = 0;
        GOBL.fixedToCamera = true;
    
        GOGL.alpha = 0;
        GOGL.fixedToCamera = true;
    
    
        GOBA.alpha = 0;
        GOBA.fixedToCamera = true;
    
        GOGA.alpha = 0;
        GOGA.fixedToCamera = true;
    
    
        GOBO.alpha = 0;
        GOBO.fixedToCamera = true;
    
        GOGO.alpha = 0;
        GOGO.fixedToCamera = true;
    
        mortiBase = [GOBL,GOBA,GOBO];
        mortiGravi = [GOGL,GOGA,GOGO];
    
        morteTween = game.add.tween(GOBL).to( { alpha: 1 }, 1500);
        morteTween.yoyo(true, 3000)
    
        gameOver = game.add.image(0,0,'GO');
        gameOver.alpha = 0;
        gameOver.fixedToCamera = true;
        gameOverTween = game.add.tween(gameOver).to( { alpha: 1 }, 1500);
    
    
    
    
        cielo = game.add.image(0,0, 'cielo');
        sfondo = game.add.image(0,0,'sfondo');
    
        // backgroundMusic = game.add.audio('background_music');
        // backgroundMusic.loop = true; // This is what you are looking for
        // backgroundMusic.play();
    
    
        
    
        //cose--------------------------------------------------------
        cameraXInit = game.camera.x;
        cameraYInit = game.camera.y;
        //mappa-------------------------------------------------------
    
        map = game.add.tilemap('map');
        tileset = map.addTilesetImage('tiless', 'tiles');
    
        bgg = map.createLayer('bgg');
    
        sfondicasa = map.createLayer('sfondicasa');
    
    
    
        fuochiX.forEach(function (fuocoX,index) {
    
            fuoco = game.add.sprite(fuocoX,fuochiY[index], 'fuoco', 0);
            fuoco.scale.x = 0.5;
            fuoco.scale.y = 0.5;
            fuoco.animations.add('anim', [0,1,2,3,4,5,6,7,8,9],13,true);
            fuoco.animations.play('anim');
        
        })
    
        fuochiSX.forEach(function (fuocoSX,index) {
    
            fuocoS = game.add.sprite(fuocoSX,fuochiSY[index], 'fuocoS', 0);
            fuocoS.scale.x = 0.5;
            fuocoS.scale.y = 0.5;
            fuocoS.animations.add('anim', [0,1,2,3,4,5,6,7,8,9],13,true);
            fuocoS.animations.play('anim');
        
        })
    
        bg = map.createLayer('bg');
    
    
    
    
    
        //animazioni npc e affini
    
        camino = game.add.sprite(2208,8976, 'camino', 0);
        camino.scale.x = 0.5;
        camino.scale.y = 0.5;
        camino.animations.add('anim', [0,1,2,3,4,5,6,7,8,9],15,true);
        camino.animations.play('anim');
    
        andre = game.add.sprite(2136,9084, 'andre', 0);
        andre.scale.x = 0.5;
        andre.scale.y = 0.5;
        andre.animations.add('anim', [0,1,2,3,4,5,6,7,8,9,10,11],10,true);
        andre.animations.play('anim');
        game.physics.arcade.enable(andre);
        andre.quest = 0;
        andre.dialoghi = [dialogoCreate('andre00'),dialogoCreate('andreNoArgento'),dialogoCreate('andreSiArgento'),dialogoCreate('andreNoOro'),dialogoCreate('andreSiOro'),dialogoCreate('andreFin')];
    
        baristaBancone = game.add.sprite(2064,9459, 'baristaBancone', 0);
        baristaBancone.scale.x = 0.5;
        baristaBancone.scale.y = 0.5;
        baristaBancone.animations.add('anim', [0,0,0,0,0,0,1,1,0,0,0,0],10,true);
        baristaBancone.animations.add('animAcqua', [2,3,4,5,6,7,8,9,10,11,12,13,14],10,true);
        baristaBancone.animations.play('anim');
        game.physics.arcade.enable(baristaBancone);
    
    
    
        barista = game.add.sprite(10824,8634, 'barista', 0);
        barista.scale.x = -0.5;
        barista.scale.y = 0.5;
        barista.animations.add('anim', [0,1,2,3,4],10,true);
        barista.animations.play('anim');
        barista.quest = 0;
        barista.dialoghi = [dialogoCreate('emilio00'),dialogoCreate('emilio01'),dialogoCreate('emilioDiga'),dialogoCreate('emilioFin'),]
        barista.visible = false;
    
        streghetta = game.add.sprite(2688,8814, 'streghetta', 0);
        streghetta.scale.x = 0.5;
        streghetta.scale.y = 0.5;
        streghetta.animations.add('anim', [0,1,2,3,4,5],10,true);
        streghetta.animations.play('anim');
        game.physics.arcade.enable(streghetta);
        streghetta.quest = 0;
        streghetta.dialoghi = [dialogoCreate('varana01')];
        
    
        papa = game.add.sprite(1320,5637, 'papa', 0);
        papa.scale.x = 0.5;
        papa.scale.y = 0.5;
        papa.animations.add('anim', [0,1,2,3,4,5,6,7],10,true);
        game.physics.arcade.enable(papa);
        papa.animations.play('anim');
        papa.dialoghi = [dialogoCreate('verdoglio00'),dialogoCreate('verdoglio00'),dialogoCreate('verdoglio01')];
        papa.quest = 0;
    
        cascata = game.add.sprite(3024,10224, 'cascata', 0);
        cascata.scale.x = 0.5;
        cascata.scale.y = 0.5;
        cascata.animations.add('anim', [0,1,2,3,4],10,true);
        cascata.animations.play('anim');
    
        sangue = game.add.sprite(5424,11256, 'sangue', 0);
        sangue.scale.x = 0.5;
        sangue.scale.y = 0.5;
        sangue.animations.add('anim', [0,1,2,3,4,5,6,7,8,9,10,11],7,true);
        sangue.animations.play('anim');
    
    
        // ragno = game.add.sprite(5424,11256, 'ragno', 0);
        // ragno.scale.x = 0.5;
        // ragno.scale.y = 0.5;
        // ragno.animations.add('anim', [0,1,2,3,4,5,6,7,8,9,10,11],7,true);
        // ragno.animations.play('anim');
    
    
        lilBoaty = game.add.sprite(67*24,453*24, 'lilBoaty', 0);
        lilBoaty.scale.x = 0.5;
        lilBoaty.scale.y = 0.5;
        lilBoaty.animations.add('anim', [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,0,1,0],10,true);
        
        marchingegnoDialogo = dialogoCreate('marchingegno')
        cosaCredevi = dialogoCreate('cosaCredevi');
    
        //RAGNI
    
        ragniX.forEach(function (ragnoX,index) {
    
            ragno = game.add.sprite(ragnoX,ragniY[index], 'ragno', 0);
            ragno.scale.x = 0.5;
            ragno.scale.y = 0.5;
            ragno.animations.add('anim', [0, 1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0, 0],13,true);
            ragno.animations.play('anim');
        
        })
        //fiaccole
    
        fiaccole1X.forEach(function(fiaccolaX,index){
    
            fiaccola = game.add.sprite(fiaccolaX,fiaccole1Y[index], 'fiaccola', 0);
            fiaccola.scale.x = 0.5;
            fiaccola.scale.y = 0.5;
            fiaccola.animations.add('anim', [0,1,2,3,4,5,6,7,8,9],15,true);
            fiaccola.animations.play('anim');
    
        })
    
        fiaccole2X.forEach(function(fiaccolaX,index){
    
            fiaccola = game.add.sprite(fiaccolaX,fiaccole2Y[index], 'fiaccola', 0);
            fiaccola.scale.x = 0.5;
            fiaccola.scale.y = 0.5;
            fiaccola.animations.add('anim', [20,21,22,23,24,25,26,27,28,29],15,true);
            fiaccola.animations.play('anim');
    
        })
    
        fiaccole3X.forEach(function(fiaccolaX,index){
    
            fiaccola = game.add.sprite(fiaccolaX,fiaccole3Y[index], 'fiaccola', 0);
            fiaccola.scale.x = 0.5;
            fiaccola.scale.y = 0.5;
            fiaccola.animations.add('anim', [30,31,32,33,34,35,36,37,38,39],15,true);
            fiaccola.animations.play('anim');
    
        })
    
    
    
    
            
        
        //topo 2 zampe
        topo2Zampe = game.add.physicsGroup();
    
        
        for(var i = 0; i < topo2ZampeArrayX.length; i++){
    
            t = null;
            
            if(topo2ZampeLife[i] == topoHP)
                t = topo2Zampe.create(topo2ZampeArrayX[i]*24,topo2ZampeArrayY[i]*24, 'topo2Zampe');
    
            else if(topo2ZampeLife[i] == topoFogneHP)
                t = topo2Zampe.create(topo2ZampeArrayX[i]*24,topo2ZampeArrayY[i]*24, 'topo2ZampeFogne');
    
            else if(topo2ZampeLife[i] == topoCattedraleHP)
                t = topo2Zampe.create(topo2ZampeArrayX[i]*24,topo2ZampeArrayY[i]*24, 'topo2ZampeCatteddrale');
        
            else
                console.log('nessuna sprite coincide con topo ' + i);
    
    
            h = game.add.sprite();
    
            t.scale.x = 0.5;
            t.scale.y = 0.5;
            t.anchor.x = 168/252;
            t.y -= t.height;
    
            t.start = topo2ZampeArrayX[i]*24;
            t.stop = topo2ZampeStopPatrol[i]*24;
            t.life = topo2ZampeLife[i];
            //console.log(t.life);
    
            t.detected = false; //da cambiare in false una volta impostato il detect
            t.wait = false;
            t.waited = false;
            t.attacking = false;
            t.stunned = false;
            t.direction = 1;
            t.body.setSize(85,156);
            t.body.offset.setTo(119,0);
            t.body.immovable = true;
    
           
            t.addChild(h);
    
            
            game.physics.arcade.enable(h);
            h.body.offset.setTo(18,0);
            h.body.setSize(t.width/2+5,30);
    
            h.anchor.y = -1.2;
            h.scale.x = -1;
            
    
    
            t.animations.add('idle',[1,2,3,4,5,6,7,8,9,10,11],10);
            t.animations.add('walk',[12,13,14,15,16,17],16);
            t.animations.add('attack',[18,19,20,21,22,23,24,0],10);
            t.animations.add('fall',[27,28,29,30,31,32,33,34],10);
            t.animations.add('stunned',[35,36,37,38,39,40,41,42],10,true);
    
    
            
        }
    
        denti = game.add.physicsGroup();
    
    
        //toporun-------------------------------------------------------------
    
            topoRun = game.add.physicsGroup();
            topoRunTrigger = game.add.physicsGroup();
    
        tRTriggerX.forEach(function (triggerX,index) {
    
    
        
            tRTrigger = topoRunTrigger.create(triggerX*24,tRTriggerY[index]*24)
            tRTrigger.body.setSize(tRTriggerW[index]*24, tRTriggerH[index]*24)
            tRTrigger.y -= tRTrigger.body.height;
    
            tRTrigger.spawnX = tRSpawnX[index]*24;
            tRTrigger.spawnY = tRSpawnY[index]*24;
            tRTrigger.timers = timer1;
            tRTrigger.triggered = false;
            tRTrigger.direction = tRDirection[index];
            
        });
    
    
        
    
        //player-----------------------------------------------------------
        player = game.add.sprite(RESPAWN_X, RESPAWN_Y, 'pifferaio', 0);
        //player = game.add.sprite(1000, 100, 'pifferaio', 0);
        player.scale.x = 0.5;
        player.scale.y = 0.5;
        game.physics.arcade.enable(player);
    
        player.body.collideWorldBounds = true;
        player.body.gravity.y = gravity;
        player.body.setSize(72,144);
        player.body.offset.setTo(84,114);
        player.anchor.x = 120/330; //da aggiustare
        
        //hitbox attacco-----------------------------------------------------
        hitbox = game.add.sprite();
        player.addChild(hitbox);
        game.physics.arcade.enable(hitbox);
        hitbox.body.offset.setTo(18, 0);
        hitbox.body.setSize(28*3,player.height);
    
        // E per le interazioni
        E = game.add.image(player.x + 10,player.y + 7,'E');
        E.scale.x = 0.3;
        E.scale.y = 0.3;
    
    
        //animazioni player------------------------------------------------------------
        player.animations.add('idle0', [0,1,1,2,3],10,true);
        player.animations.add('run0', [4,5,6,7,8,9], 10);
        player.animations.add('attack0', [10,11,11,12,13,14,0], 15);
        player.animations.add('jump0',[21,22,23,24,25,26],9, true);
        player.animations.add('climb0',[17,18,19,20],10);
    
        player.animations.add('drink', [27,27,28,28,29,30,31,32,31,32,31,32,31,32,31], 10)
    
        player.animations.add('change0',[0,0,33,33,34,34,34,35,36,37,38,39,40,41,42,43,44,45,46,47],10);
        
    
    
        player.animations.add('idle1', [47,86,86,87,88],10);
        player.animations.add('run1', [89,90,91,92,93,94], 10);
        player.animations.add('attack1', [95,96,96,97,98,99,47], 15);
        player.animations.add('jump1',[109,110,23,111,112,113],9, true);
        player.animations.add('climb1',[101,102,103,104,],10);
        player.animations.add('change1',[47,47,117,117,118,118,118,119,120,121,122,123,124,125,42,43,44,126,127,128],10);
        player.animations.add('shoot1',[95,105,105,106,107,108,47], 13);
    
        
        player.animations.add('run2', [132,133,134,135,136,137], 10);
        player.animations.add('attack2', [138,139,139,140,141,142,128], 15);
        player.animations.add('jump2',[152,153,23,154,155,156],9, true);
        player.animations.add('climb2',[144,145,146,147],10);
        player.animations.add('shoot2',[138,148,148,149,150,151,128], 13);
        player.animations.add('megaJump', [157,157,158,158,158,159,160,160,160,160,160,160,152,153,23,154,155,156], 10 );
        player.animations.add('idle2', [128,129,129,130,131],10);
        //comandi---------------------------------------------------------------------
    
        leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
        rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        attackButton = game.input.keyboard.addKey(Phaser.Keyboard.J);
        upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
        interactButton = game.input.keyboard.addKey(Phaser.KeyCode.E);
        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.K);
        megaJumpButton = game.input.keyboard.addKey(Phaser.KeyCode.L)
        //scale
    
        ladders = game.add.physicsGroup();
        
        ladder1 = ladders.create(115*24,386*24)
        ladder2 = ladders.create(107*24,372*24)
    
        ladder3 = ladders.create(190*24,430*24);
        ladder4 = ladders.create(341*24,434*24);
    
        ladder5 = ladders.create(262*24,280*24);
        ladder6 = ladders.create(112*24,242*24);
        ladder7 = ladders.create(48*24,218*24);
        ladder8 = ladders.create(74*24,184*24);
        ladder9 = ladders.create(92*24,170*24);
        ladder10 = ladders.create(50*24,140*24);
        ladder11 = ladders.create(110*24,110*24);
        ladder12 = ladders.create(52*24,90*24);
        ladder13 = ladders.create(70*24,48*24);
        ladder14 = ladders.create(80*24,32*24);
    
    
    
        
    
    
        
        ladder1.body.setSize(48,14*24);
        ladder2.body.setSize(48,14*24);
    
        ladder3.body.setSize(48,14*24);
        ladder4.body.setSize(48,14*24);
    
        ladder5.body.setSize(48,20*24);
        ladder6.body.setSize(48,12*24);
        ladder7.body.setSize(48,14*24);
        ladder8.body.setSize(48,14*24);
        ladder9.body.setSize(48,14*24);
        ladder10.body.setSize(48,14*24);
        ladder11.body.setSize(48,14*24);
        ladder12.body.setSize(48,20*24);
        ladder13.body.setSize(48,10*24);
        ladder14.body.setSize(48,16*24);
    
    
        
        note = game.add.physicsGroup();
        //note
        noteX.forEach(function (notaX, index) {
            
            nota = note.create(notaX, noteY[index],'nota');
            nota.scale.x = 0.5;
            nota.scale.y =0.5;
            nota.animations.add('anim',[0,1,2,3,4,5,6,7,8,9],10,true);
            nota.animations.play('anim');
            
        });
        
        //fumo
    
        camino = game.add.sprite(95*24,358*24, 'fumo', 0);
        camino.scale.x = 0.5;
        camino.scale.y = 0.5;
        camino.animations.add('anim', [0,1,2,3],8,true);
        camino.animations.play('anim');
    
        //acqua stagnante
    
        stagnante = game.add.sprite(363*24,457*24, 'stagnante', 0);
        stagnante.scale.x = 0.5;
        stagnante.scale.y = 0.5;
        stagnante.animations.add('anim', [0,1,2,3,4,5,6,7,8,9],10,true);
        stagnante.animations.play('anim');
    
        //leva e piattaforma mobile
    
        levers = game.add.physicsGroup();
        piattaformeMobili = game.add.physicsGroup();
    
        levaFogne = levers.create(315*24, 444*24, 'leva',0);
        levaFogne.scale.x = 0.5;
        levaFogne.scale.y = 0.5;
        levaFogne.pulled = false;
        levaFogne.piattaforma = piattaformeMobili.create(307*24, 446*24, 'piattaforma');
        levaFogne.piattaforma.body.immovable = true;
        levaFogne.piattaforma.moving = false;
        levaFogne.piattaforma.end = 443*24;
        levaFogne.piattaforma.start = 398*24;
        levaFogne.animations.add('anim',[0,1,2,3],10,false);
        
        // levaFogne = game.add.sprite(315*24, 444*24, 'leva',0);
        // levaFogne.scale.x = 0.5;
        // levaFogne.scale.y = 0.5;
    
        // levaDiga = game.add.sprite(436*24, 360*24, 'leva',4);
        // levaDiga.scale.x = 0.5;
        // levaDiga.scale.y = 0.5;
    
    
    
        levaCatt = levers.create(101*24, 296*24, 'leva',8);
        levaCatt.scale.x = 0.5;
        levaCatt.scale.y = 0.5;
        levaCatt.pulled = false;
        levaCatt.piattaforma = piattaformeMobili.create(107*24, 300*24, 'piattaforma');
        levaCatt.piattaforma.body.immovable = true;
        levaCatt.piattaforma.moving = false;
        levaCatt.piattaforma.end = 359*24;
        levaCatt.piattaforma.start = 300*24;
        levaCatt.animations.add('anim',[8,9,10,11],10,false);
    
    
        levaRotta = game.add.sprite(300*24, 396*24, 'leva',0);
        levaRotta.scale.x = 0.5;
        levaRotta.scale.y = 0.5;
        game.physics.arcade.enable(levaRotta)
    
        levaDiga = game.add.sprite(440*24,360*24, 'leva', 4);
        levaDiga.scale.x = 0.5;
        levaDiga.scale.y = 0.5;
        levaDiga.animations.add('anim', [4,5,6,7], 10,false);
        levaDiga.pulled = false;
        game.physics.arcade.enable(levaDiga)
    
        //diga
        diga = game.add.sprite(470*24, 344*24, 'diga', 0);
        diga.scale.x = 0.5;
        diga.scale.y = 0.5;
        diga.animations.add('riempimento', [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32], 7);
        diga.animations.add('anim', [33,34,35,36], 10, true);
    
        //digaFogne
        digaFogne = game.add.sprite(43*24, 447*24, 'digaFogne', 0);
        digaFogne.scale.x = 0.5;
        digaFogne.scale.y = 0.5;
        digaFogne.animations.add('riempimento', [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 7,false);
        digaFogne.animations.add('anim', [18,19,20,21], 10, true);
    
    
        //piattaforme
    
        platforms = map.createLayer('platforms');
    
        platforms.resizeWorld();
        map.setCollisionByExclusion([-1], true,'platforms',);
        game.physics.arcade.enable(platforms);
    
        //aggiungo sopra il player il livello del fg e delle ombre
    
        fg = map.createLayer('fg');
        fgg = map.createLayer('fgg');
    
        
    
        //hud
        //cuori
        
        cuori = game.add.sprite(1024 - 24 - 54/2, 24 + 306/4 -192/4, 'cuori', 0);
    
        cuori.scale.x = 0.5;
        cuori.scale.y = 0.5;
        cuori.fixedToCamera = true;
        
    
        
        hp = game.add.sprite(cuori.x - 306/2 - 12,24, 'HP', 0);
        hp.scale.x = 0.5;
        hp.scale.y = 0.5;
        hp.fixedToCamera = true;
    
        
        hp.animations.add('3/4',[0,1,2,3,4,5,6,7,8],15,false);
        hp.animations.add('2/4',[9,10,11,12,13,14,15,16,17],15,false);
        hp.animations.add('1/4',[18,19,20,21,22,23,24,25,26],15,false);
        hp.animations.add('0/4',[27,28,29,30,31,32,33,34,35],15,false);
    
        //noteHUD
    
        noteHUD = game.add.sprite(24+30+12,24, 'noteHUD', 0);
        noteHUD.scale.x = 0.5;
        noteHUD.scale.y = 0.5;
        noteHUD.fixedToCamera = true;
    
        noteHUD.animations.add('1/4',[0,1,2,3,4,5,6,7,8],15,false);
        noteHUD.animations.add('2/4',[9,10,11,12,13,14,15,16,17],15,false);
        noteHUD.animations.add('3/4',[18,19,20,21,22,23,24,25,26],15,false);
        noteHUD.animations.add('4/4',[27,28,29,30,31,32,33,34,35],15,false);
    
        spartiti = game.add.sprite(24,cuori.y ,'spartiti', 0);
        spartiti.scale.x = 0.5;
        spartiti.scale.y = 0.5;
        spartiti.fixedToCamera = true;
        spartiti.dialoghi = [dialogoCreate('spartito1'),dialogoCreate('spartito3')];
        spartiti.quest = 0;
    
    
    
    
    
        //denti
    
        denteHUD = game.add.image(512 - 180-24,24,'denteHUD');
        denteHUD.scale.x = 0.5;
        denteHUD.scale.y = 0.5;
        denteHUD.fixedToCamera = true;
        dentiText = game.add.bitmapText(denteHUD.x + 123, denteHUD.y + 30, 'arcade', '00', 21);  //farsi dire dall ari le dimensioni corrette
        
        dentiText.fixedToCamera =true;
    
        flautoHUD = game.add.sprite(512 +24,24,'flauto',0);
        flautoHUD.scale.x = 0.5;
        flautoHUD.scale.y = 0.5;
        flautoHUD.fixedToCamera = true;
    
        coolDown = game.add.sprite(flautoHUD.x + flautoHUD.width + 24, flautoHUD.y + 16.5, 'coolDown', 33);
        coolDown.scale.x = 0.5;
        coolDown.scale.y = 0.5;
        coolDown.fixedToCamera = true
        coolDown.animations.add('anim', [1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,33], 3.6);
        coolDown.alpha = 0.3;
    
    
    
        
    
        
    
    
    
        //zone danno da caduta
        zoneDannoCaduta = game.add.physicsGroup();
    
        DCFogne1 = zoneDannoCaduta.create(52*24,454*24);
        DCFogne1.body.setSize(23*24,24);
    
        DCFogne2 = zoneDannoCaduta.create(297*24,445*24);
        DCFogne2.body.setSize(25*24, 3*24);
    
        DCCatt1 = zoneDannoCaduta.create(225*24,358*24);
        DCCatt1.body.setSize(40*24,27*24);
    
        DCCatt2 = zoneDannoCaduta.create(0,299*24);
        DCCatt2.body.setSize(42*24,24*3);
    
        //vasche di schifo
    
        vascheDiSchifo = game.add.physicsGroup();
        vasca1 =vascheDiSchifo.create(127*24,449*24);
        vasca1.body.setSize(20*24,3*24);
    
        vasca2 =vascheDiSchifo.create(363*24,457*24);
        vasca2.body.setSize(24*24,4*24);
    
        //acqua
        acqua = game.add.physicsGroup();
    
        acqua1 = acqua.create(469*24,366*24);
        acqua1.body.setSize(22*24, 12*24);
    
        acqua1 = acqua.create(493*24,355*24);
        acqua1.body.setSize(21*24, 15*24);
        affogando = false
    
    
    
        //morteplayer
    
        blackScreen = game.add.image(-1024,0, 'black')
    
    
        playerDeath = game.add.sprite(-1024,player.y + player.height,'morte',0);
        
        playerDeath.scale.x = 0.5;
        playerDeath.scale.y = 0.5;
        playerDeath.y -= playerDeath.height - 9*3;
        playerDeath.anchor.x = 120/330;
        playerDeath.anchor.x = 186/384;
        playerDeath.scale.x = -0.5;
    
        playerDeath.animations.add('death0',  [0,0,0,0,0,1,2,2,2,3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,20,20],8,false);
        playerDeath.animations.add('death1',  [42,42,43,44,44,44,45,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,62,62,62],8,false);
        playerDeath.animations.add('death2',  [63,63,64,65,65,65,66,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,83,83,83],8,false);
    
        //trigger vittoria
    
        winTrigger = game.add.sprite(61*24,31*24);
        game.physics.arcade.enable(winTrigger);
        winTrigger.body.setSize(40*24,24);
    
        
        win2 = game.add.image(0,0, 'win2');
        win1 = game.add.image(0,0, 'win1');

        win1.fixedToCamera = true;
        win2.fixedToCamera = true;
    
        win1.alpha = 0;
        win2.visible = false;
    
        winTween1 = game.add.tween(win1).to( { alpha: 1 }, 1500);
        winTween1.yoyo(true, 8000);
        //winTween2 = game.add.tween(win2).to( { alpha: 1 }, 1500);
        //roba mondo/camera
        game.camera.follow(player);
        cameraXInit = game.camera.x;
    
        //dialogo iniziale varana
        dialogoIniziale = dialogoCreate('varana00');
        dialogoIniziale.visible = true;
        dialogoIniziale.bringToTop();
        DCFogne1.body.enable = true;
        
    },

    //UPDATE------------------------------------------------
    //UPDATE------------------------------------------------
    //UPDATE------------------------------------------------

    update: function(){

         //roba del mondo-----------------------------------------

    //tween morte
    cielo.x = game.camera.x - game.camera.x/13 - cameraXInit;



    
    E.x = player.x + 10;
    E.y = player.y + 7;
    E.visible = false;

    game.physics.arcade.collide(topoRun, platforms);
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(topoRun, platforms);
    game.physics.arcade.collide(denti, platforms);
    game.physics.arcade.collide(player, piattaformeMobili);
    game.physics.arcade.collide(bullet, platforms, function(){if (bullet.body.velocity.x == 0)bulletKill()});
    game.physics.arcade.collide(note, platforms);


    //piattaforme--------------------------------------------------
    
    piattaformeMobili.forEach(function (piattaforma) {


        if(piattaforma.moving){

            if(!piattaforma.stop && piattaforma.position.y <= piattaforma.start)
            {
                //console.log('inizio');
                piattaforma.body.velocity.y = 0;
                game.time.events.add(500, function(){piattaforma.body.velocity.y = 180;});
            }

            if(!piattaforma.stop && piattaforma.position.y >= piattaforma.end)
            {
                //console.log('fine');
                piattaforma.body.velocity.y = 0;
                game.time.events.add(500, function(){piattaforma.body.velocity.y = -180;});
                
            }
            
        }
        
    })

    
    //camera -----------------------------------------------------------------------
    


    //movimenti ---------------------------------------------------------------------------------
    if(fireButton.isDown && playerLvl>0)
        fire();

    if (leftButton.isDown && !player.animations.name.includes('attack') && !playerBlock && !player.animations.name.includes('shoot') && !player.animations.name.includes('mega'))
    {
        if(dialogoIniziale.visible)
            game.time.events.add(10000,function(){dialogoIniziale.visible = false})

        playerDirection = -1;
        player.scale.x = 0.5 * playerDirection;;
        hitbox.scale.x = -1;
        player.body.velocity.x = -playerSpeed;
        if (player.body.touching.down || player.body.blocked.down)
            player.animations.play('run'+playerLvl);
        
    }
    else if (rightButton.isDown && !player.animations.name.includes('attack')&& !playerBlock && !player.animations.name.includes('shoot') && !player.animations.name.includes('mega'))
    {
        playerDirection = 1;
        player.scale.x = 0.5 * playerDirection;
        hitbox.scale.x = 1;
        player.body.velocity.x = playerSpeed;
        if (player.body.touching.down || player.body.blocked.down)
            player.animations.play('run'+playerLvl);
    }
       
    else if (megaJumpButton.isDown && playerLvl>1)
    {
        
        if(player.body.touching.down || player.body.blocked.down) 
            player.animations.play('megaJump');
        if(player.animations.frame ==160)
        {
             player.body.velocity.y = MEGAJUMP;
             player.body.velocity.x = 200*playerDirection;
        }
        else if (!(player.animations.frame >= 157))
            player.body.acceleration.x = -130*playerDirection

        else if (player.animations.frame >= 157)
            player.body.velocity.x = 0;
        player.animations.currentAnim.onComplete.add(function(){player.animations.play('jump' + playerLvl)})
           
    }
       
    else
    {
        if(!player.animations.name.includes('mega'))
        {
            player.body.velocity.x = 0;
            player.body.acceleration.x = 0;

        }
    
        if(!player.animations.name.includes('attack') && (player.body.touching.down || player.body.blocked.down)&& !playerBlock && !player.animations.name.includes('shoot'))
            player.animations.play('idle'+playerLvl);
    } 
    
    if (attackButton.isDown && !playerBlock)
    {
        player.animations.play('attack'+playerLvl);         
    }
    
    if((player.animations.frame == 0 || player.animations.frame == 47 || player.animations.frame == 128) && !playerBlock && !player.animations.name.includes('shoot'))
    {
        player.animations.play('idle'+playerLvl);
        topoHitted = false;
    }
        


    if (jumpButton.isDown && (player.body.touching.down || player.body.blocked.down) && !playerBlock)
    {
        player.body.velocity.y = playerJump;
    }

    if(!(player.body.touching.down || player.body.blocked.down)&& !climbing && !player.animations.name.includes('attack') && !player.animations.name.includes('shoot') && !player.animations.name.includes('mega'))
        player.animations.play('jump'+playerLvl);

    //faccio sparire i topoRun se si fermano

    topoRun.forEach(function(topo){

        if(topo.body.velocity.x == 0){
            if (topo.stunned == false){
                topo.x += Math.random()*50*(-topo.direction);
                topo.x -= Math.random()*50*(-topo.direction);
                topo.stunned =true;
            }
                


            topo.animations.play('stunned');

            if(topo.x < game.camera.x - 150 || topo.x > (game.camera.x + 1024 + 150))
                topo.destroy();


        }
    })

    //roba topo 2 zampe 

    topo2Zampe.forEach(function(topo){
        if(!topo.stunned)
            topo2ZampeAlive(topo,topo.start, topo.stop);
    });



    //topo2ZampeAlive(topo2Zampe, 20*48, 27*48);


        //controllo y del player per danno da caduta
        bruttaCaduta = false;


        if(player.body.touching.down || player.body.blocked.down){
            if (player.y != td)
               
            if((player.y - td)>44*24){
               // console.log('bruttacaduta')
                bruttaCaduta = true
            }
                
            td = player.y;
        }
    
    
    //interazioni overlap-----------------------------------------------
    climbing = false;
    game.physics.arcade.overlap(player, ladders, laddersUp);
    
    game.physics.arcade.overlap(hitbox, topo2Zampe, meleeHit);

    game.physics.arcade.overlap(player,topoRunTrigger, topoRunCreate);

    game.physics.arcade.overlap(player, topoRun, toporunDamage);

    game.physics.arcade.overlap(player, denti, denteCollect);

    topo2Zampe.forEach(function(topo,index){

    game.physics.arcade.overlap(player, topo.children[0], playerHit);

    game.physics.arcade.overlap(player, levers, leversInteraction);
    
    game.physics.arcade.overlap(player, levaRotta, marchingegno);

    game.physics.arcade.overlap(player, levaDiga, digaFunction);

    game.physics.arcade.overlap(player, zoneDannoCaduta, dannoCaduta);
    //game.physics.arcade.overlap(player,DCCatt2, playerDie)

    game.physics.arcade.overlap(player, vascheDiSchifo, avvelenamento);

    game.physics.arcade.overlap(player, acqua, playerDrowning);
    
    game.physics.arcade.collide(player, note, notaCollect);

    game.physics.arcade.collide(bullet,topo2Zampe, weaponHit)

    game.physics.arcade.overlap(player, winTrigger, win);


    //cielo
    

    //blocco player
    if (playerBlock)
        player.body.velocity.x = 0;


        
    //dialogi npc
    game.physics.arcade.overlap(andre, player, dialoghiAndre);
    game.physics.arcade.overlap(streghetta, player, dialoghiVarana);
    game.physics.arcade.overlap(player,barista,dialoghiBarista);
    game.physics.arcade.overlap(player,baristaBancone,dialoghiBarista);
    game.physics.arcade.overlap(player,papa,dialoghiPapa);

    
    })
    
   
    



    }
}


//FUNZIONI MIE ------------------------------------------------------------------------------
//dialoghi------------------------------------------------
function dialogoCreate(s){
    dialogo = game.add.sprite(23,768-223,s);
    dialogo.fixedToCamera = true;
    dialogo.visible = false;
    return dialogo;
    


}

function dialogoActivate(npc, time) {
    if(npc.dialoghi[npc.quest] != currentDialog)
    {
        
        if (currentDialog != null)
            currentDialog.visible = false;
        
        dialogoStop(npc.dialoghi[npc.quest], time)
        npc.dialoghi[npc.quest].visible = true;
        npc.dialoghi[npc.quest].bringToTop();

    }
    currentDialog = npc.dialoghi[npc.quest];

    
}

function dialogoStop(d, time){

    game.time.events.add(time, function(){
        currentDialog = null;
        d.visible = false;
    })
}

function dialoghiAndre(){

    if(!EPressed)
        E.visible = true;

    
    if(interactButton.isDown && !EPressed )
    {    
        EPressed = true;
        game.time.events.add(2000,function(){EPressed = false});

        if (andre.quest == 5)
            dialogoActivate(andre, 11000);

        if (andre.quest == 1 && dentiText.text < 10)
            dialogoActivate(andre, 9000);

        if (andre.quest == 3 && dentiText.text < 20)
            dialogoActivate(andre, 9000);


        if(((andre.quest == 1 && dentiText.text >= 10) || (andre.quest == 3 && dentiText.text >= 20)) && !cambiando)
        {
            //cambiando = true
            andre.quest ++;
            dialogoActivate(andre, 12000);
            andre.quest++;
            playerBlock = true;
            player.animations.play('idle'+playerLvl);
            game.time.events.add(2000,function(){
                dentiText.text -= 10*(playerLvl+1);
                if (dentiText.text.length < 2)
                    dentiText.text = '0' + dentiText.text;

                player.animations.play('change'+playerLvl);
                playerLvl ++;

                if (playerLvl == 1)
                coolDown.alpha = 1;

                flautoHUD.frame ++;
                player.animations.currentAnim.onComplete.add(function(){
                    playerBlock = false;
                    player.animations.play('idle'+playerLvl);
                    //cambiando = false

                });

            })
        }

        if(andre.quest == 0){

            dialogoActivate(andre, 15000);
            game.time.events.add(2000,function(){andre.quest = 1; })
        }
 
    }


        


}

function dialoghiBarista(p,b) {

    if(!EPressed)
        E.visible = true;


    if(interactButton.isDown && !EPressed )
    {    
        EPressed = true;
        game.time.events.add(2000,function(){EPressed = false});
        if(b.key == 'barista'){

            barista.quest = 2;
            dialogoActivate(barista, 9000)
            playerBlock = true;
            player.animations.play('idle'+playerLvl);
            game.time.events.add(3500,function () {
                
                player.animations.play('drink')
                player.animations.currentAnim.onComplete.add(function () {
                    player.animations.play('idle'+playerLvl);
                    game.camera.fade(0x000000,2000)
                    game.time.events.add(2300,function () {

                        respawn();
                        playerBlock = false;
                        game.camera.flash(0x000000,2000);
                        barista.kill();
                        baristaBancone.animations.play('animAcqua');
                        andre.animations.play('anim');
                        barista.quest = 3;

                        dialogoBere = dialogoCreate('varanaBere');
                        dialogoBere.visible = true;
                        dialogoBere.bringToTop();
                        game.time.events.add(6000,function(){dialogoBere.visible = false})

                    })
                })
            })

        }
            
        
        if (barista.quest < 2){
            dialogoActivate(barista, 10000)
            game.time.events.add(2000,function(){barista.quest = 1; })    
        }

        else
            dialogoActivate(barista, 8000)

    }

    
    
}

function dialoghiVarana() {
    if(!EPressed)
        E.visible = true;


    if(interactButton.isDown && !EPressed )
    {    
        EPressed = true;
        game.time.events.add(2000,function(){EPressed = false});
        dialogoActivate(streghetta, 7000);
    }
}

function dialoghiPapa (){
    if(!EPressed)
        E.visible = true;


    if(interactButton.isDown && !EPressed )
    {  
        if (papa.quest == 2)
            dialogoActivate(papa, 10000); 

        EPressed = true;
        if(papa.quest == 0)
        {
            dialogoActivate(papa, 10000);
            papa.quest++;
        }
        else if(papa.quest == 1 && dentiText.text < 30)
            dialogoActivate(papa, 10000);

        else if(papa.quest == 1 && dentiText.text >= 30)
        {
            papa.quest = 2
            dialogoActivate(papa, 10000)
            dentiText.text -= 30;
            if (dentiText.text.length < 2)
                dentiText.text = '0' + dentiText.text;
            
            nota = note.create(papa.x + 20,papa.y,'nota');
            nota.body.gravity.y = gravity/5;
            
            nota.scale.x = 0.5;
            nota.scale.y =0.5;
            nota.animations.add('anim',[0,1,2,3,4,5,6,7,8,9],10,true);
            nota.animations.play('anim');
            

            

        } 
        
        game.time.events.add(2000,function(){EPressed = false});
        
    
    }
}


//--------------------------

function leversInteraction(player,leva) {
    if (!leva.pulled)
        E.visible = true;
        
    if  (interactButton.isDown && !leva.pulled){
        leva.piattaforma.moving = true;
        leva.pulled = true;
        leva.animations.play('anim');
   
    }
}

function marchingegno()
{
    if(!marchingegnoDialogo.visible)
        E.visible = true;
    if  (interactButton.isDown)
    {
        marchingegnoDialogo.visible = true;
        marchingegnoDialogo.bringToTop();
        game.time.events.add(5000,function () {
            marchingegnoDialogo.visible = false;
        })
    }
}

function digaFunction() {

    if(!levaDiga.pulled)
        E.visible = true;

    if (!levaDiga.pulled && interactButton.isDown)
    {
        playerBlock = true;
        player.animations.play('idle');
        levaDiga.pulled = true;
        levaDiga.animations.play('anim');
        levaDiga.animations.currentAnim.onComplete.add(function () {

            game.camera.resetFX();
            game.camera.fade(0X000000,2000);
            game.time.events.add(2500,function(){
        
                diga.animations.play('riempimento');

                game.camera.unfollow();

                cuori.visible = false;
                hp.visible = false;
                noteHUD.visible = false;;
                spartiti.visible = false
                denteHUD.visible = false;
                dentiText.visible = false;
                flautoHUD.visible = false;
                coolDown.visible = false;


                game.camera.x = 468*24;
                game.camera.y = 343*24;
                game.camera.flash(0x000000,2000);
                diga.animations.currentAnim.onComplete.add(function () {    
                    diga.animations.play('anim');
                    game.camera.fade(0X000000,2000);
                    game.time.events.add(2500,function(){
                        game.camera.x = 36*24;
                        game.camera.y = 429*24;
                        game.camera.flash(0x000000,2000);
                        digaFogne.animations.play('riempimento');
                        DCFogne1.body.enable = false;
                        digaFogne.animations.currentAnim.onComplete.add(function(){

                            
                            game.camera.resetFX();
                            digaFogne.animations.play('anim');
                            lilBoaty.animations.play('anim');
                            game.camera.fade(0X000000,2000);
                            game.time.events.add(2500,function(){

                                cuori.visible = true;
                                hp.visible = true;
                                noteHUD.visible = true;
                                spartiti.visible = true;
                                denteHUD.visible = true;
                                dentiText.visible = true;
                                flautoHUD.visible = true;
                                coolDown.visible = true;

                                game.camera.follow(player);
                                game.camera.flash(0x000000,2000);
                                barista.visible = true;
                                game.physics.arcade.enable(barista);
                                playerBlock = false;
                                //game.camera.resetFX();


                            });

                        });



                    })

                });
            })
            
        });
    }
    
}

function playerDrowning(){
    if (!drowning){
        drowning = true;
        game.camera.fade(0X000000,1000);
        game.time.events.add(1500,function(){

            player.x = 465*24;
            player.y = 351*24;
            game.camera.flash(0x000000,1000);
            cosaCredevi.visible = true;
            cosaCredevi.bringToTop();
            game.time.events.add(4000, function(){
                drowning = false;
                cosaCredevi.visible = false});
            game.camera.resetFX();
        });

    }


    
}

function avvelenamento(){

    if(!avvelenato){
        avvelenato = true;
        playerDamage();
        game.time.events.add(1000,function(){avvelenato = false; })
        
    }
    
}

function playerDamage(){
    
    if (!playerDamaged){

    
        playerDamaged = true;
        game.camera.shake(0.01, 300);
        game.time.events.add(INVINCIBILITY_TIME,function(){playerDamaged = false})
        playerHP -= 1;

        if(playerHP == 3)
            hp.animations.play('3/4');

        else if(playerHP == 2)
            hp.animations.play('2/4');

        else if(playerHP == 1)
            hp.animations.play('1/4');

        else if(playerHP == 0){

            hp.animations.play('0/4')
            playerDie();

        }

    }


}

function dannoCaduta(p, z){

    if(bruttaCaduta && controlloCaduta){
        console.log('morto cadendo');
        controlloCaduta = false;
        game.time.events.add(15000, function(){controlloCaduta = true})
        td = 420 *24;
        bruttaCaduta = false;
        playerBlock = true;
        game.time.events.add(70, function(){

            playerDie();
            playerBlock = false;
        })
        
            
    }


}
function playerDie(){

    playerDeath.x = player.x;
    playerDeath.y = player.y + player.height - playerDeath.height + 27;
    playerDeath.scale.x = 0.5*playerDirection;
    blackScreen.x = game.camera.x;
    blackScreen.y = game.camera.y;
    //blackScreen.visible = true;
    //playerDeath.visible = true;  
    player.kill();
    if (cuori.frame == 0){
        mortiBase[playerLvl].bringToTop();
        morteTween = game.add.tween(mortiBase[playerLvl]).to( { alpha: 1 }, 1500);  
        morteTween.yoyo(true, 3000);
    }

    if (cuori.frame == 1){
        mortiGravi[playerLvl].bringToTop();
        morteTween = game.add.tween(mortiGravi[playerLvl]).to( { alpha: 1 }, 1500);
        morteTween.yoyo(true, 3000);
    }
    if (cuori.frame == 2)
    {
        gameOver.bringToTop();
        morteTween = gameOverTween;
        morto = true;
        game.time.events.add(4000,function(){morteTween.start();});
        

        menuB.inputEnabled = true;
        ricominciaB.inputEnabled = true;

    }
    cuori.frame ++;
    playerDeath.play('death'+playerLvl);
    playerDeath.animations.currentAnim.onComplete.add(function(){
        //game.camera.fade(0X000000,4000);
        GOBL.bringToTop();
        morteTween.start();

            game.time.events.add(4000, function(){
                
                topoRunTrigger.forEach(function(trigger,index){

                    trigger.triggered = false
                });

                i =0
                topo2Zampe.forEach(function(topo){
                    //console.log(index);
                    topo.life = topo2ZampeLife[i];
                    topo.stunned = false;
                    i++;
                })

                    

            
                respawn();

                console.log('frame:  '+cuori.frame);            
                blackScreen.x = -1024;
                playerDeath.x = -1024;
                if(!morto && !morteTween.isRunning)
                    game.camera.flash(0x000000,3000);

                player.animations.play('idle'+playerLvl);

            });
    });

    
    


}


function respawn(){

    

    player.x = RESPAWN_X;
    player.y = RESPAWN_Y;
    playerHP = 4;
    hp.frame = 0;
    player.revive();
        

}


function fire(){
    if (canFire){
        coolDown.frame = 0;
        player.animations.play('shoot'+playerLvl)
        player.animations.currentAnim.onComplete.add(function(){
            canFire = false;
            if(bullet == null)
                bullet = game.add.sprite(player.x + (50*playerDirection), player.y + player.height -40, 'bullet', 0);
            bullet.scale.x = 0.5*playerDirection;
            bullet.scale.y = 0.5;
            game.physics.arcade.enable(bullet);
            bullet.animations.add('anim', [0,1,2,3,4,5,6,7],15,true);
            bullet.animations.add('death', [8,9,10,11,12,13],10);
            bullet.body.gravity.y = 300;
            bullet.body.velocity.x = 350*playerDirection;
            bullet.animations.play('anim');
            player.animations.play('idle'+playerLvl);
            game.time.events.add(5000, function(){bulletKill()});
            coolDown.animations.play('anim');
            coolDown.animations.currentAnim.onComplete.add(function () { canFire = true;})
            //game.time.events.add(FIRE_COOLDOWN, function () { canFire = true;});
            


        });

    }

}

function bulletKill(){
    console.log ('chiamato')
    if(!bulletKilling && bullet != null)
    {
        console.log ('uccidendo')
        bullet.body.enable = false;
        bulletKilling = true
        bullet.animations.play('death');
        bullet.animations.currentAnim.onComplete.add(function(){bullet.destroy(); bullet = null;bulletKilling = false});
    }

    
}

function weaponHit(bullet, e){
    bulletKill()
    e.life -= WEAPON_DMG;
    console.log(e.life);

    e.tint = 0xff0000;
    game.time.events.add(100, function(){e.tint = 0xffffff}, this);

    if (e.life <= 0 && e.stunned == false)
        topoStun(e);

}


function meleeHit(h,e){
    console.log('hitbox')

    if((player.animations.frame == 12 || player.animations.frame == 13 || player.animations.frame == 98  || player.animations.frame == 99 || player.animations.frame == 141 || player.animations.frame == 142) && !topoHitted){

        if (e.life>0){        
            topoHitted = true;

            e.life -= flautoDMG;
            //console.log(e.life);

            e.tint = 0xff0000;
            game.time.events.add(100, function(){e.tint = 0xffffff}, this);
    }

        



        if (e.life <= 0 && e.stunned == false)
            topoStun(e);
    }



}



//quando il trigger dei topoRun viene attivato



function topoRunCreate(p,trigger){

    //console.log(trigger);
    if(!trigger.triggered){
        trigger.triggered = true;
        trigger.timers.forEach(function(timer){
            
           game.time.events.add(timer, function(){

                tr = topoRun.create(trigger.spawnX,trigger.spawnY, 'topoRun')

                tr.scale.x = 0.5*(-trigger.direction);
                tr.scale.x = 0.5*(-trigger.direction);
                tr.scale.y = 0.5;
                tr.y -= topoRun.height;

                tr.body.gravity.y = gravity;
                tr.body.setSize(186,102);
                tr.body.offset.setTo(0,54);
                tr.animations.add('run',[0,1,2,3,4],18,true);
                tr.animations.add('stunned',[5,6,7,8,9,10,11,12],10,true);
                tr.direction = trigger.direction;
                tr.stunned = false;



                tr.body.velocity.x = TOPORUN_SPEED * trigger.direction;
                tr.animations.play('run');

           })

        });
    }
}

function laddersUp(){
    //console.log('scale');
    climbing = true;


    if(upButton.isDown){

        player.body.velocity.y = ladderSpeed;

        if(!player.body.touching.down){

            //console.log(player.animations.name)
            player.animations.play('climb'+playerLvl);
        }

    }
        
}




//funzioni topo2Zampe
function topo2ZampeAlive(sorcio, start, end){

    if(Math.abs(sorcio.body.x - player.body.x) < detectArea && Math.abs(sorcio.body.y - player.body.y) < detectArea)
        sorcio.detected = true;

    sorcio.scale.x = -0.5 * sorcio.direction;
    sorcio.children[0].scale.x = sorcio.direction;

    
    if (sorcio.wait && !sorcio.waited){

        game.time.events.add(topoAttackMinDelay + Math.random()*topoAttackMaxDelay, function(){sorcio.wait = false}, this);
        sorcio.waited = true;
        //console.log('waited');

    }
        

    if(!sorcio.detected || sorcio.wait){


        sorcio.animations.play('walk');

        if(sorcio.body.x < start)
            sorcio.direction =1
    
        if (sorcio.body.x > end)
            sorcio.direction = -1
    

        sorcio.body.velocity.x = topo2ZampeSpeed * sorcio.direction;

    }

    else if(!sorcio.attacking && !sorcio.wait){

        sorcio.attacking = true;
        topoAttack(sorcio);    
    }
    

    if(sorcio.animations.frame == 18)
    {
        if (sorcio.body.x > player.body.x)
            sorcio.direction = -1;

        else
            sorcio.direction = +1;

        
        sorcio.body.velocity.x = -120*sorcio.direction;  

    }

    

    if(sorcio.animations.frame == 21)
        sorcio.body.velocity.x = 120*sorcio.direction;
    

    if(sorcio.animations.frame == 0){

        sorcio.body.velocity.x = 0; 
        sorcio.wait = true; 
        sorcio.waited = false;
        sorcio.detected = true;
    }


}



function topoAttack(sorcio)
{
    
    sorcio.animations.play('attack');
    sorcio.attacking = false;

}


function playerHit(p, sorcioHitbox){   

    //aggiungere dei danni veri
    if((sorcioHitbox.parent.animations.frame == 22 || sorcioHitbox.parent.animations.frame == 23) && !playerDamaged)
    {
        playerDamage();
    }
}

function topoStun(sorcio){
    
    console.log('topo stunnato')
    console.log(sorcio)
    sorcio.animations.play('fall');
    sorcio.stunned = true;
    sorcio.body.velocity.x = 0;

    denteDrop(sorcio);

    sorcio.animations.currentAnim.onComplete.add(function(){sorcio.animations.play('stunned')});

}

function cameraMove (){


}



//denti----------------------------------------------------------------------
function denteDrop(sorcio)
{
    dente = denti.create(sorcio.x,sorcio.y, 'dente');
    dente.body.gravity.y = gravity
    dente.body.bounce = 0.3;
    dente = denti.create(sorcio.x + 10 ,sorcio.y-5, 'dente');
    dente.body.gravity.y = gravity
    dente.body.bounce = 0.3;

    //aggiungere valore denti
}

function denteCollect(player,d){
    
    d.destroy();
    
    dentiText.text ++;

    if (dentiText.text.length < 2)
        dentiText.text = '0' + dentiText.text;

}

function notaCollect(player, n){

    n.destroy();
    noteCollected ++;
    //console.log('note' + noteCollected);

    if(noteCollected == 1 || noteCollected == 5 || noteCollected == 9)
        noteHUD.animations.play('1/4');

    if(noteCollected == 2 || noteCollected == 6 || noteCollected == 10)
        noteHUD.animations.play('2/4');

    if(noteCollected == 3 || noteCollected == 7 || noteCollected == 11)
        noteHUD.animations.play('3/4');

    if(noteCollected === 4){

        noteHUD.animations.play('4/4');
        noteHUD.animations.currentAnim.onComplete.add(function () {
            if(noteCollected===4){
                console.log('spartito');
                noteHUD.frame = 0;
                spartiti.frame  = 1;
                console.log ('4 note');
                dialogoActivate(spartiti,10000);
                spartiti.quest = 1 ;
            }   
        });
    }

    if(noteCollected === 8){

        noteHUD.animations.play('4/4');
        noteHUD.animations.currentAnim.onComplete.add(function () {
            console.log('spartito');
            noteHUD.frame = 0;
            spartiti.frame = 2 ;
        });
    }

    if(noteCollected === 12){

        noteHUD.animations.play('4/4');
        noteHUD.animations.currentAnim.onComplete.add(function () {
            console.log('spartito');
            noteHUD.frame = 0;
            spartiti.frame = 3;
            console.log('12 note');
            dialogoActivate(spartiti,8000);
    });
    }
        

}

function toporunDamage (p, topo){

    if(!topo.stunned)
        playerDamage()
}


function win(){
    
    if(spartiti.frame == 3 ){

        

        game.time.events.add(2500,function(){
            
            winTween1.start();  
            game.time.events.add(2000,function(){
                win2.visible = true;

                game.time.events.add(14000,function(){
                    game.camera.fade(0x000000,2000)
                    game.time.events.add(3000, function(){game.state.start('menu');})
                })
            })



            // winTween1.onComplete.add(function(){
            //     console.log('tween finito')
            //     game.time.events.add(7000,function(){
                    
            //         //winTween2.start();
            //         game.time.events.add(5000,function(){

            //             game.camera.fade(0x000000,5000);
            //             game.time.events.add(5300, function(){game.state.start('menu')});
            //         })
            //     })
            // })

            

        })
    }
    // win1.bringToTop();
    // win2.bringToTop();

}


//RENDER---------------------------------------------------------------------------

function render(){
    game.debug.spriteBounds(player, '#0000ff', false);
    game.debug.body(hitbox, '#ffff00', false);
    game.debug.body(player, '#00ffff', false);

    topo2Zampe.forEach(function (topo,index){

        game.debug.spriteBounds(topo, '#0000ff', false);
        game.debug.body(topo, '#00ffff', false);
        // console.log(topo,index)

        game.debug.body(topo.children[0], '#ffff00', false);


    });

    topoRunTrigger.forEach(function(trigger, index) {
        game.debug.body(trigger, '#ff00bb', false);
    });

    ladders.forEach(function(ladder,index){

        game.debug.body(ladder, '#ffffff', false);
    })

    zoneDannoCaduta.forEach(function(ladder,index){

        game.debug.body(ladder, '#ffff00', false);
    })
}