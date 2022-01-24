var boot = {

    preload: function (){
        
        console.log('boot');
        game.load.spritesheet('andre','assets/animazioni/andre.png',342,456);
        game.load.image('tiles', 'assets/tiles.png');
        game.load.tilemap('map', 'assets/mappa.json', null, Phaser.Tilemap.TILED_JSON);
    },
    
    create: function(){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // per la dimensionde della scermata che cambia in base alla dimensione della finestra
        game.state.start('load')


    }
}


var click = false;


var loading ={
    preload: function(){
        
        console.log('ciao');
        andre = game.add.sprite(426,270, 'andre', 0);
        andre.scale.x = 0.5;
        andre.scale.y = 0.5;
        andre.animations.add('anim', [0,1,2,3,4,5,6,7,8,9,10,11],10,true);
        andre.animations.play('anim');

        game.load.audio('pepe','assets/pepe.mp3')
        game.load.image('autori','assets/render/autori.jpg');
        game.load.image('crediti','assets/render/crediti.jpg');

        game.load.image('copertina','assets/render/copertina.jpg');

        game.load.image('storia1','assets/render/storia/storia1.jpg');
        game.load.image('storia2','assets/render/storia/storia2.jpg');
        game.load.image('storia3','assets/render/storia/storia3.jpg');
        game.load.image('storia4','assets/render/storia/storia4.jpg');
        game.load.image('storia5','assets/render/storia/storia5.jpg');
        game.load.image('storia6','assets/render/storia/storia6.jpg');
        game.load.image('storia7','assets/render/storia/storia7.jpg');      
        
        game.load.image('GOBL','assets/render/gameOver/GOBL.jpg');
        game.load.image('GOGL','assets/render/gameOver/GOGL.jpg');
    
        game.load.image('GOBA','assets/render/gameOver/GOBA.jpg');
        game.load.image('GOGA','assets/render/gameOver/GOGA.jpg');
    
        game.load.image('GOBO','assets/render/gameOver/GOBO.jpg');
        game.load.image('GOGO','assets/render/gameOver/GOGO.jpg');
    
        game.load.image('GO','assets/render/gameOver/GO.jpg');
    
    
        game.load.image('win1','assets/render/vittoria1.jpg');
        game.load.image('win2','assets/render/vittoria2.jpg');
        
    
    
    
    
        //game.load.audio('background_music',);
        //arma
        game.load.spritesheet('bullet','assets/animazioni/bullet.png',60,60);
        //dialoghi----------------------------------------------
        //andre
        game.load.image('andre00', 'assets/dialoghi/andre00.png');
        game.load.image('andreNoArgento', 'assets/dialoghi/andreNoArgento.png');
        game.load.image('andreSiArgento', 'assets/dialoghi/andreSiArgento.png');
        game.load.image('andreNoOro', 'assets/dialoghi/andreNoOro.png');
        game.load.image('andreSiOro', 'assets/dialoghi/andreSiOro.png');
        game.load.image('andreFin', 'assets/dialoghi/andreFin.png');
        
    
    
        //varana
        game.load.image('varana00', 'assets/dialoghi/varana00.png');
        game.load.image('varana01', 'assets/dialoghi/varana01.png');
        game.load.image('varanaBere', 'assets/dialoghi/varanaBere.png');
    
        //barista
        game.load.image('emilio00', 'assets/dialoghi/emilio00.png');
        game.load.image('emilio01', 'assets/dialoghi/emilio01.png');
        game.load.image('emilioDiga', 'assets/dialoghi/emilioDiga.png');
    
        //spartiti
        game.load.image('spartito1', 'assets/dialoghi/spartito1.png');
        game.load.image('spartito3', 'assets/dialoghi/spartito3.png');
    
        //
        game.load.image('emilioFin', 'assets/dialoghi/emilioFin.png');
    
        //verdoglio
        game.load.image('verdoglio00', 'assets/dialoghi/verdoglio00.png');
        game.load.image('verdoglio01', 'assets/dialoghi/verdoglio01.png');
    
        //mondo
        game.load.image('marchingegno', 'assets/dialoghi/marchingegno.png');
        game.load.image('cosaCredevi', 'assets/dialoghi/diga.png');
    
    
        game.load.spritesheet('pifferaio','assets/player.png',330,258);
        game.load.spritesheet('morte','assets/animazioni/morte2.png',384,1200);
        game.load.image('black', 'assets/black.jpg');
        game.load.image('E','assets/sprite_statiche/E.png')
        game.load.image('loading','assets/sprite_statiche/loading.png')
        game.load.image('sfondo','assets/sprite_statiche/sfondo.png');
        game.load.image('cielo','assets/sprite_statiche/cielo.png');
    
    
        game.load.spritesheet('topo2Zampe','assets/topostand-normale.png',252,156);
        game.load.spritesheet('topo2ZampeFogne','assets/topostand-fogne.png',252,156);
        game.load.spritesheet('topo2ZampeCatteddrale','assets/topostand-cattedrale.png',270,156);
        game.load.spritesheet('topoRun','assets/toporun2.png',234,156)
        game.load.image('dente', 'assets/sprite_statiche/dente.png');
        game.load.image('dente', 'assets/sprite_statiche/denteHud.png');
    
        //animazioni npc e loro oggetti
    
        game.load.spritesheet('andre','assets/animazioni/andre.png',342,456);
        game.load.spritesheet('camino','assets/animazioni/camino.png',384, 672);
        game.load.spritesheet('fumo','assets/animazioni/fumo.png',96,192);
        game.load.spritesheet('baristaBancone','assets/animazioni/baristaBancone.png',720, 282);
        game.load.spritesheet('barista','assets/animazioni/barista.png',162,204);
    
        game.load.spritesheet('streghetta','assets/animazioni/streghetta.png',138, 228);
        game.load.spritesheet('papa','assets/animazioni/pope.png',348,342);
    
    
        game.load.spritesheet('cascata','assets/animazioni/cascata.png',1056,1248);
        game.load.spritesheet('stagnante','assets/animazioni/stagnante.png',1151,192);
        game.load.spritesheet('sangue','assets/animazioni/sangue.png',240, 240);
        game.load.spritesheet('fiaccola','assets/animazioni/fiaccole.png',66, 186);
        game.load.spritesheet('ragno','assets/animazioni/ragno.png',96,192);
        game.load.spritesheet('lilBoaty','assets/animazioni/lilBoaty.png',294,144);
        game.load.spritesheet('fuocoS','assets/animazioni/fireS.png',96,96);
        game.load.spritesheet('fuoco','assets/animazioni/fire.png',288,192);

        game.load.spritesheet('matte','assets/animazioni/matte.png',240,288);
        game.load.spritesheet('david1','assets/animazioni/david1.png',240,288);
        game.load.image('abisso', 'assets/dialoghi/abisso.png');
    
    
        //interazioni
        game.load.image('piattaforma', 'assets/sprite_statiche/piattaformaMobile.png', );
        game.load.spritesheet('leva','assets/animazioni/lever.png',240,192);
    
        game.load.spritesheet('diga', 'assets/animazioni/diga.png', 2160, 1536);
        game.load.spritesheet('digaFogne', 'assets/animazioni/digaFogne.png', 1680, 432);
    
    
    
    
        //roba hud
        game.load.spritesheet('HP','assets/animazioni/HP.png',306,306);
        game.load.spritesheet('cuori','assets/animazioni/cuori.png',54,192);
    
        game.load.image('denteHUD', 'assets/sprite_statiche/denteHUD.png');
        game.load.spritesheet('flauto','assets/animazioni/pifferi.png',162,162);
    
        game.load.spritesheet('nota','assets/animazioni/nota.png',66,72);
    
        game.load.spritesheet('noteHUD','assets/animazioni/noteHUD.png',306,306);
        game.load.spritesheet('spartiti','assets/animazioni/spartiti.png',60,204);
    
        game.load.spritesheet('coolDown','assets/animazioni/coolDown.png',258,96);
        
    
    
    
        //font
    
        game.load.bitmapFont('arcade', 'assets/font/arcade.png', 'assets/font/arcade.xml');
    
    
    
    
        map = game.add.tilemap('map');
        tileset = map.addTilesetImage('tiless', 'tiles');

        tbgg = map.createLayer('bgg');
        tsfondicasa = map.createLayer('sfondicasa');
        tbg = map.createLayer('bg');;
        tplatforms = map.createLayer('platforms');;
        tfg = map.createLayer('fg');
        tfgg = map.createLayer('fgg');
    
        // game.stage.scale.pageAlignHorizontally = true;
        // game.stage.scale.pageAlignVeritcally = true;

    },

    create: function(){
        console.log('load finto');
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // per la dimensionde della scermata che cambia in base alla dimensione della finestra

        game.state.start('menu')
    }
}

var menu = {

    create : function(){
        game.sound.stopAll();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.add.image(0,0,'loading');

        // storia7 = game.add(0,0,'storia7')
        // storia6 = game.add(0,0,'storia6')
        // storia5 = game.add(0,0,'storia5')
        // storia4 = game.add(0,0,'storia4')
        // storia3 = game.add(0,0,'storia3')
        // storia2 = game.add(0,0,'storia2')
        // storia1 = game.add(0,0,'storia1')
        storia =[game.add.image(0,0,'storia7'),game.add.image(0,0,'storia6'),game.add.image(0,0,'storia5'),game.add.image(0,0,'storia4'),game.add.image(0,0,'storia3'),game.add.image(0,0,'storia2'),game.add.image(0,0,'storia1')]
        i = 6;
        storiaTween = game.add.tween(storia[i]).to( { alpha: 0 }, 1500);
        
        copertina = game.add.image(0,0,'copertina');


        gioca = game.add.image(123, 334, game.make.renderTexture(194, 48));
        gioca.inputEnabled = true;

        autoriB = game.add.image(45, 399, game.make.renderTexture(194, 48));
        autoriB.inputEnabled = true;

        creditiB = game.add.image(116, 466, game.make.renderTexture(194, 48));
        creditiB.inputEnabled = true;



        autori = game.add.image(0,0,'autori');
        autori.scale.x = 0.25;
        autori.scale.y = 0.25;
        autori.visible = false;

        crediti = game.add.image(0,0,'crediti');
        crediti.visible = false;

        menuB = game.add.image(60,80, game.make.renderTexture(232,54));

        

        gioca.events.onInputUp.add(function (){
            autoriB.inputEnabled = false;
            creditiB.inputEnabled = false;
            gioca.inputEnabled = false;
            game.camera.fade(0x000000,2000)
            game.time.events.add(2300,function(){
                copertina.visible = false;
                

                game.camera.flash(0x000000,2000);
                game.time.events.add(2300,function(){
                    avanti.inputEnabled = true;  
                });
                
            });
        });


        autoriB.events.onInputUp.add(function (){
            autori.visible = true;
            autoriB.inputEnabled = false;
            creditiB.inputEnabled = false;
            gioca.inputEnabled = false;
            menuB.inputEnabled = true;

        });


        creditiB.events.onInputUp.add(function (){

            crediti.visible = true;
            autoriB.inputEnabled = false;
            creditiB.inputEnabled = false;
            gioca.inputEnabled = false;
            menuB.inputEnabled = true;
        });  


        menuB.events.onInputUp.add(function (){

            menuB.inputEnabled = false;
            autoriB.inputEnabled = true;
            creditiB.inputEnabled = true;
            gioca.inputEnabled = true;
            autori.visible = false;
            crediti.visible = false;
        });

       
        avanti = game.add.image(0,0, game.make.renderTexture(1024,768));

        avanti.events.onInputUp.add(function (){
            if(i>=0){

                storiaTween.start();
                i--;
                storiaTween = game.add.tween(storia[i]).to( { alpha: 0 }, 1500);
                if (i==0)
                game.time.events.add(5000,function(){game.state.start('play');})

            }

                
                        
        });

        
    },

    

    update : function(){




        

    }
}