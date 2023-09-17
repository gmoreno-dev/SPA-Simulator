
        // Pegar o elemento canvas
        var canvas = document.getElementById("canvas");

        // Pegar o contexto 2D do canvas
        var ctx = canvas.getContext("2d");

        // Definir uma escala para a largura e a altura dos círculos
        var scaleX = canvas.width / 400; // dividir a largura do canvas pela largura original do jogo
        var scaleY = canvas.height / 600; // dividir a altura do canvas pela altura original do jogo

        // Escalar o contexto 2D de acordo com a escala
        ctx.scale(scaleX, scaleY);

        // Ajustar as dimensões do canvas para as dimensões reais da tela
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;


        // Variáveis globais
    var score = "100"; // pontuação do jogador
    var speed = 0; // velocidade dos objetos que caem
    var objects = []; // array que guarda os objetos que caem
    var player = { // objeto que representa o jogador
        x: canvas.width / 2, // posição x inicial (centro da tela)
        y: canvas.height - 50, // posição y inicial (fundo da tela)
        radius: 25, // raio do círculo que representa o jogador
        color: "green", // cor do jogador
        moveLeft: false, // se o jogador está se movendo para a esquerda
        moveRight: false, // se o jogador está se movendo para a direita
        direction: "right" // direção que o jogador está olhando ("left" ou "right")
    };

    var walkIndex = 0; // índice da imagem atual do personagem andando

        // Carregar a imagem do personagem parado para a esquerda - img1
        var img1 = new Image();
        img1.src = './Img/personagem_paradoE.png';

        // Carregar a imagem do personagem parado para a direita - img2
        var img2 = new Image();
        img2.src = './Img/personagem_parado.png';

        // Carregar a imagem do personagem andando para a direita - img3
        var img3 = new Image();
        img3.src = './Img/personagem_andando.png';

        // Carregar a imagem do personagem andando para a direita - img4
        var img4 = new Image();
        img4.src = './Img/personagem_andando2.png';

        // Carregar a imagem do personagem andando para a esquerda - img5
        var img5 = new Image();
        img5.src = './Img/personagem_andandoE.png';

        // Carregar a imagem do personagem andando para a esquerda - img6
        var img6 = new Image();
        img6.src = './Img/personagem_andando2E.png';

        //SONS
        const audioScore = document.getElementById('score1');
        const audioScore2 = document.getElementById('score2');
        const music = document.getElementById('music');

        audioScore.volume = 0.8;
        audioScore2.volume = 0.8;
        music.loop = true;
        music.volume = 0.4;

        //Botao START
        var botaoStart = document.querySelector ('.button'); // seleciona o botão com a classe button-start
        botaoStart.addEventListener ('click', function () { // adiciona um evento de clique ao botão
            speed = 6;
            botaoStart.style.opacity = 0;
            music.play();
        });

        // Função que muda o índice da imagem atual do personagem andando
        function changeWalkIndex() {
            // Se o índice é igual a 1
            if (walkIndex == 1) {
            // Voltar ao índice 0
            walkIndex = 0;
            } else {
            // Aumentar o índice em 1
            walkIndex++;
            }
        }

        var shaking = false;
        // Função que faz o canvas tremer
        function shakeCanvas() {
            // Se a tela está tremendo
            if (shaking) {
            // Gerar valores aleatórios entre -5 e 5 para x e y
            var x = Math.floor(Math.random() * 11) - 5;
            var y = Math.floor(Math.random() * 11) - 5;
        
            // Mover o canvas na direção e distância especificadas
            canvas.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            }
        }
  
  
        // Carregar a primeira imagem do item - img7
        var img7 = new Image ();
        img7.src = './Img/itens/book.png'; 

        // Carregar a segunda imagem do item - img8
        var img8 = new Image ();
        img8.src = './Img/itens/gym.png'; 

        // Carregar a terceira imagem do item - img9
        var img9 = new Image ();
        img9.src = './Img/itens/heart.png'; 

        // Carregar a quarta imagem do item - img10
        var img10 = new Image ();
        img10.src = './Img/itens/idea.png'; 

        // Carregar a quinta imagem do item - img11
        var img11 = new Image ();
        img11.src = './Img/itens/job.png'; 

        // Carregar a sexta imagem do item - img12
        var img12 = new Image ();
        img12.src = './Img/itens/money.png'; 

        var images = [img7, img8, img9, img10, img11, img12]; // array que guarda as imagens dos itens

        // Carregar a imagem de chao - img13
        var img13 = new Image ();
        img13.src = './Img/chao.png'; 

        // Carregar a imagem do céu em pixel art - img14
        var img14 = new Image ();
        img14.onload = function () {
        // Desenhar a imagem do céu em pixel art no canvas
        ctx.drawImage (img14, 0, 0, canvas.width, canvas.height);
        };
        img14.src = './Img/ceu.png'; 

        // Carregar a imagem do céu em pixel art - img14
        var img15 = new Image ();
        img15.onload = function () {
        // Desenhar a imagem do céu em pixel art no canvas
        ctx.drawImage (img15, 0, 0, canvas.width, canvas.height);
        };
        img15.src = './Img/ceu2.png'; 


        // Função que desenha o fundo no canvas
        function drawBackground() {
            // Desenhar a imagem do céu em pixel art com as dimensões do canvas
            if (score > 50){
            ctx.drawImage (img14, 0, 0, canvas.width, canvas.height);
            } else if (score <= 50){
            ctx.drawImage (img15, 0, 0, canvas.width, canvas.height);
            }
        }
  
        // Função que cria um novo objeto que cai
        function createObject() {
            if (speed >= 1){
            // Escolher uma posição x aleatória entre 0 e a largura do canvas
            var x = Math.random() * canvas.width;
        
            // Escolher uma imagem aleatória entre as seis imagens dos itens
            var image = images[Math.floor(Math.random() * 6)];
        
            // Criar um objeto com as propriedades x, y, radius e image
            var object = {
            x: x,
            y: -50,
            radius: 25,
            image: image
            };
        
            // Adicionar o objeto ao array de objetos
            objects.push(object);
        }
        };

        
        // Chamar a função que faz a tela tremer a cada 50 milissegundos
        setInterval(shakeCanvas, 50);



        // Função que desenha um círculo no canvas
        function drawCircle(x, y, radius, color) {
            // Iniciar um novo caminho
            ctx.beginPath();

            // Desenhar um arco com as coordenadas x, y, raio, ângulo inicial e ângulo final
            ctx.arc(x, y, radius, 0, Math.PI * 2);

            // Preencher o círculo com a cor especificada
            ctx.fillStyle = color;
            ctx.fill();

            // Fechar o caminho
            ctx.closePath();
        }

        var direction = "rightP"; // variável que guarda a direção do personagem

        // Função que desenha o jogador no canvas
        function drawPlayer() {
            // Se o jogador está se movendo para a esquerda ou para a direita
            if (player.moveLeft || player.moveRight) {
            // Usar uma condição switch para verificar o valor do índice da imagem atual do personagem andando
            switch (walkIndex) {
                case 0:
                // Se a direção é esquerda, desenhar a imagem do personagem olhando para a esquerda
                if (direction == "left" && speed >= 1) {
                    ctx.drawImage(img5, player.x - player.radius, player.y - player.radius, player.radius * 2, player.radius * 2);
                } else {
                    // Se a direção é direita, desenhar a imagem do personagem olhando para a direita
                    ctx.drawImage(img3, player.x - player.radius, player.y - player.radius, player.radius * 2, player.radius * 2);
                }
                break;
                case 1:
                // Se a direção é esquerda, desenhar a imagem do personagem olhando para a esquerda
                if (direction == "left" && speed >= 1) {
                    ctx.drawImage(img6, player.x - player.radius, player.y - player.radius, player.radius * 2, player.radius * 2);
                } else {
                    // Se a direção é direita, desenhar a imagem do personagem olhando para a direita
                    ctx.drawImage(img4, player.x - player.radius, player.y - player.radius, player.radius * 2, player.radius * 2);
                }
                break;
            }
            } else {
            // Se a direção é esquerda, desenhar a imagem do personagem parado para a esquerda
            if (direction == "leftP" && speed >= 1) {
                ctx.drawImage(img1, player.x - player.radius, player.y - player.radius, player.radius * 2, player.radius * 2);
            } else if(direction == "rightP" && speed >= 1) {
                // Se a direção é direita, desenhar a imagem do personagem parado para a direita
                ctx.drawImage(img2, player.x - player.radius, player.y - player.radius, player.radius * 2, player.radius * 2);
            }
            }
        }

        // Função que desenha os objetos que caem no canvas
        function drawObjects() {
            // Para cada objeto no array de objetos
            for (var i = 0; i < objects.length; i++) {
            // Pegar o objeto atual
            var object = objects[i];
        
            // Desenhar a imagem do objeto com as propriedades do objeto
            ctx.drawImage(object.image, object.x - object.radius, object.y - object.radius, object.radius * 2, object.radius * 2);
            }
        }
  

        // Função que desenha a pontuação do jogador no canvas
        function drawScore() {
            // Definir a fonte e a cor do texto
            ctx.font = "30px Handjet";
            ctx.fillStyle = "white";

            // Desenhar o texto com a pontuação no canto superior esquerdo do canvas
            ctx.fillText("Controle: " + score + "%", 10, 40);
        }

        // Função que atualiza a posição e a velocidade dos objetos que caem
        function updateObjects() {
            // Para cada objeto no array de objetos
            for (var i = 0; i < objects.length; i++) {
                // Pegar o objeto atual
                var object = objects[i];

                // Aumentar a posição y do objeto de acordo com a velocidade
                object.y += speed;

                // Se o objeto sair da tela pelo fundo
                if (object.y > canvas.height + object.radius) {
                    // Remover o objeto do array de objetos
                    objects.splice(i, 1);
                    // Diminuir a pontuação do jogador em 1 ponto
                    if (score > 0 && score > 50){
                    score -= 1;
                    } else if ( score > 0 && score <= 50) {
                        score -= 2;
                    }

                    audioScore2.play();
                    // Aumentar a velocidade dos objetos em 0.2\
                    if (speed < 22){
                    speed += 0.4;
                    }
                    
                }

                // Se o objeto colidir com o jogador
                if (Math.sqrt((object.x - player.x) ** 2 + (object.y - player.y) ** 2) < object.radius + player.radius) {
                    // Remover o objeto do array de objetos
                    objects.splice(i, 1);
                    speed += 0.2;
                    
                    audioScore.currentTime = 0;
                    audioScore.play();
                }
                
                if(score <= 80){
                    shaking = true;
                } else {
                    shaking = false;
                }

            }
        }

        // Função que atualiza a posição e a direção do jogador de acordo com os movimentos do mouse ou do teclado
        function updatePlayer() {
            // Se o jogador está se movendo para a esquerda e não está na borda esquerda da tela
            if (player.moveLeft && player.x > player.radius && score > 50 && speed >= 1) {
              // Diminuir a posição x do jogador em 5 pixels
              player.x -= 4;
              // Mudar a direção para esquerda
            }
          
            // Se o jogador está se movendo para a direita e não está na borda direita da tela
            if (player.moveRight && player.x < canvas.width - player.radius && score > 50 && speed >= 1) {
              // Aumentar a posição x do jogador em 5 pixels
              player.x += 4;
              // Mudar a direção para direita
            } else if(player.moveLeft && player.x > player.radius && score <= 50 && speed >= 1){
                // Diminuir a posição x do jogador em 5 pixels
              player.x -= 2.5;
              // Mudar a direção para esquerda
            } else if (player.moveRight && player.x < canvas.width - player.radius && score <= 50 && speed >= 1) {
                // Aumentar a posição x do jogador em 5 pixels
                player.x += 2.5;
                // Mudar a direção para direita
            }
        }

        // Chamar a função que muda o índice da imagem atual do personagem andando a cada 500 milissegundos
        setInterval(changeWalkIndex, 100);
  
        // Função que limpa o canvas e desenha tudo de novo
        function draw() {
            
            // Limpar o canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            drawBackground();

            // Desenhar o fundo
            ctx.drawImage (img13, 0, canvas.height -60, canvas.width, 100,);
            
            // Desenhar os objetos que caem
            drawObjects();
        
            // Desenhar o jogador
            drawPlayer();
        
            // Desenhar a pontuação
            drawScore();

            checkScore();
        }
  

        // Função que atualiza tudo no jogo
        function update() {
            // Atualizar os objetos que caem
            updateObjects();

            // Atualizar o jogador
            updatePlayer();
        }
        
        // Função que executa o loop principal do jogo
        function loop() {
            // Desenhar tudo no canvas
            draw();

            // Atualizar tudo no jogo
            update();

            // Executar a função loop novamente usando requestAnimationFrame (60 vezes por segundo)
            requestAnimationFrame(loop);
        }

        //Finalizar o jogo
        // Função que verifica se o score é zero
        function checkScore() {
            // Se o score for zero
            if (score <= 0) {
            // Limpa toda a área do canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Mostra uma mensagem de fim de jogo
            ctx.font = "45px Handjet";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);

            speed = 0;
            score = 0;
            }
        }

    // Pegar os elementos HTML dos botões
    var leftButton = document.getElementById("left-button");
    var rightButton = document.getElementById("right-button");

    // Função genérica que lida com os eventos de touchstart e touchend dos botões
    function touchHandler(event) {
    // Pegar o id do botão que disparou o evento
    var buttonId = event.target.id;

    // Se o evento é touchstart
    if (event.type == "touchstart") {
        // Se o botão é left-button
        if (buttonId == "left-button" && score > 60) {
        // Fazer o jogador se mover para a esquerda
        player.moveLeft = true;
        player.moveRight = false;
        direction = "left";
        } else if (buttonId == "left-button" && score <= 60) {
            // Fazer o jogador se mover para a direita
            player.moveLeft = false;
            player.moveRight = true;
            direction = "right";
        }

        // Se o botão é right-button
        if (buttonId == "right-button" && score > 60) {
        // Fazer o jogador se mover para a direita
        player.moveLeft = false;
        player.moveRight = true;
        direction = "right";
        } else if (buttonId == "right-button" && score <= 60) {
            // Fazer o jogador se mover para a esquerda
            player.moveLeft = true;
            player.moveRight = false;
            direction = "left";
        }
    }

    // Se o evento é touchend
    if (event.type == "touchend" && buttonId == "right-button" && score > 60) {
        // Parar o movimento do jogador
        player.moveLeft = false;
        player.moveRight = false;
        direction = "rightP";

    } else if (event.type == "touchend" && buttonId == "right-button" && score <= 60) {
        // Parar o movimento do jogador
        player.moveLeft = false;
        player.moveRight = false;
        direction = "leftP";
    }

    if (event.type == "touchend" && buttonId == "left-button" && score > 60) {
        // Parar o movimento do jogador
        player.moveLeft = false;
        player.moveRight = false;
        direction = "leftP";
    } else if (event.type == "touchend" && buttonId == "left-button" && score <= 60) {
        // Parar o movimento do jogador
        player.moveLeft = false;
        player.moveRight = false;
        direction = "rightP";
    }
    }

    // Adicionar os eventos de touchstart e touchend aos botões
    leftButton.addEventListener("touchstart", touchHandler);
    leftButton.addEventListener("touchend", touchHandler);
    rightButton.addEventListener("touchstart", touchHandler);
    rightButton.addEventListener("touchend", touchHandler);

    // Função que detecta quando o jogador pressiona uma tecla
    function keyDownHandler(event) {
    // Se a tecla é a seta para a esquerda
    if (event.keyCode == 65 && score > 60) {
        // Fazer o jogador se mover para a esquerda
        player.moveLeft = true;
        player.moveRight = false;
        direction = "left";
    } else if (event.keyCode == 65 && score <= 60) {
        // Fazer o jogador se mover para a direita
        player.moveLeft = false;
        player.moveRight = true;
        direction = "right";
    }

    // Se a tecla é a seta para a direita
    if (event.keyCode == 68 && score > 60) {
        // Fazer o jogador se mover para a direita
        player.moveLeft = false;
        player.moveRight = true;
        direction = "right";
    } else if (event.keyCode == 68 && score <= 60) {
        // Fazer o jogador se mover para a direita
        player.moveLeft = true;
        player.moveRight = false;
        direction = "left";
    }
    }

    // Função que detecta quando o jogador solta uma tecla
    function keyUpHandler(event) {
    // Se a tecla é a seta para a esquerda ou para a direita
    if (event.keyCode == 65 && score > 60) {
        // Parar o movimento do jogador
        player.moveLeft = false;
        player.moveRight = false;
        direction = "leftP";
    } else if (event.keyCode == 65 && score <= 60) {
        // Parar o movimento do jogador
        player.moveLeft = false;
        player.moveRight = false;
        direction = "rightP";
    } 
    if (event.keyCode == 68 && score > 60) {
        // Parar o movimento do jogador
        player.moveLeft = false;
        player.moveRight = false;
        direction = "rightP";
    } else if (event.keyCode == 68 && score <= 60) {
        // Parar o movimento do jogador
        player.moveLeft = false;
        player.moveRight = false;
        direction = "leftP";
    }
    }

    // Adicionar os eventos de keydown e keyup ao documento
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    // Criar um objeto que cai a cada segundo usando setInterval
    setInterval(createObject, 1000);
    // Iniciar o loop principal do jogo usando requestAnimationFrame
    loop();