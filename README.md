[//]: # (readme a ser aprimorado no futuro)

# ⭐greengreens.js🌳
remake do primeiro nível do jogo Kirby's Dream Land em JavaScript

base do código retirada [da demo de Zero Day Arcade](https://github.com/ZeroDayArcade/HTML5_Platformer)

🛑 **IMPORTANTE: suportado apenas por computadores com telas de 1920x1080** 🛑

### 🧾 sumário
- [sobre o jogo](#sobre)
- [tecnologias utilizadas](#tec)
- [como jogar](#controles)
- [como executar o projeto](#exe)
- [funcionalidades](#func)
- [melhorias futuras](#melhorias)
- [créditos](#creditos)

<a name="sobre"/>

## 💫 sobre o jogo

greengreens.js é um remake de Green Greens, nível 1 do jogo de plataforma Kirby's Dream Land para o Game Boy, escolhido como primeiro projeto de jogo em JavaScript por me permitir agregar conhecimentos novos e assustadores por meio de um jogo com qual eu sou familiar, além de ser um jogo aparentemente simples e fácil de replicar, ou pelo menos eu achei que seria.

o jogador controla Kirby em um espaço bidimensional por diferentes telas rolantes da fase, que inicia em uma planície até o jogador adentrar-se em um bosque, evitando e atacando inimigos no caminho até encontrar e derrotar o chefe. além de simplesmente caminhar e pular, Kirby pode sugar ar, que ele pode usar para inalar inimigos e objetos, podendo os engolir ou cuspir como projéteis, ou se inflar para voar, podendo assoprar vento como um projétil, cancelando assim o voo. ele também pode se agachar para evitar certos ataques.

Kirby possui seis pontos de vida, que ele perde esbarrando em inimigos ou seus ataques, e pode recuperar por meio de certos itens encontrados durante o nível. se ele perder toda a sua vida, ou cair em um típico buraco sem fundo, isso conta como um Game Over. também há um sistema de pontuação típico da época, mas é apenas cosmético.

ao percurso da fase, Kirby deve enfrentar o minichefe Poppy Bros. Sr (três pontos de vida), que joga bombas que o jogador deve usar para atacá-lo de volta, e o chefe final Whispy Woods (seis pontos de vida), uma árvore que ataca usando maçãs que podem ser usadas por Kirby como projéteis e sopros de vento que devem ser evitados, assim como seu nariz pontudo que também causa dano. ao derrotá-lo e coletar a estrela que deixa, o usuário ganha o jogo.

<a name="tec"/>

## 🖥️ tecnologias utilizadas

tríade básica de desenvolvimento web (HTML/CSS/JavaScript); outras tecnologias, como bibliotecas ou frameworks, poderão ser incluídas quando necessário, e provavelmente serão.

<a name="controles"/>

## 🕹️ como jogar

![image](https://github.com/user-attachments/assets/48a8407b-b6d6-4034-bbe4-2ddb951fee29)

o jogo é controlado exclusivamente pelo teclado.

- **A/D** - caminhar para a esquerda/direita
- **W** - flutuar/passar por portas
- **S** - se agachar/engolir/cair por plataformas semissólidas

- **L** - pular
- **K** - inalar/cuspir

- **espaço** - pausar/start

<a name="exe"/>

## 📁 como executar o projeto

1. clicar em Code ---> Download ZIP ---> baixar o arquivo ZIP
2. extrair os arquivos em uma pasta
3. abrir o arquivo "index.html"

<a name="func"/>

## 🚀 funcionalidades

- telas rolantes horizontais ou verticais
- cinco telas diferentes (com rolagens diferentes)
- colisão 2D
- plataformas semissólidas
- objetos (Kirby, inimigos, projéteis, minichefe, chefe, caixas (objetos que agem como sólidos mas podem ser inalados/destruídos), partículas) que podem acompanhar a rolagem da tela
- mecanismo de inalamento
- pontos de vida de Kirby e chefes (e inimigos/objetos normais?)
- placar de pontos
- trilha e efeitos sonoros

<a name="melhorias"/>

## 🚧 melhorias futuras

- criar todos os sistemas de funcionamento do jogo
- fazer o download e a edição correta dos assets necessários de Kirby's Dream Land

<a name="creditos"/>

## 👤 créditos

[07-mvieira](https://www.github.com/07-mvieira/) - autora

[ZeroDayArcade](https://github.com/ZeroDayArcade) - autores do código que formou a base desse jogo

Kirby e Kirby's Dream Land são propriedades de Nintendo e HAL Laboratories; esse projeto não possui nenhuma afiliação com seus donos originais e todos os seus componentes foram utilizados exclusivamente para fins pessoais e de estudo.
