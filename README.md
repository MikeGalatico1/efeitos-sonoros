<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Rádio Grêmio Estudantil</title>

    <link rel="preconnect" href="https://fonts.googleapis.com"&gt;
    <link rel="preconnect" href="https://fonts.gstatic.com&quot; crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap&quot; rel="stylesheet">

    <link rel="icon" type="image/png" href="images/efeitos_sonoros.png">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/estilos.css">
   
</head>
<body>

    <h1>Efeitos Sonoros</h1>
    <h2>Rádio Grêmio Estudantil </h2>

    <section class="teclado">
        <button class="tecla tecla_aplausos"><img src="images/aplausos.svg" alt="Aplausos"></button>
        <button class="tecla tecla_vaia"><img src="images/vaia.svg" alt="Vaia"></button>
        <button class="tecla tecla_risada"><img src="images/risada.svg" alt="Risada"></button>

        <button class="tecla tecla_errado"><img src="images/errado.svg" alt="Errado"></button>
        <button class="tecla tecla_grilo"><img src="images/grilo.svg" alt="Grilo"></button>
        <button class="tecla tecla_tambores"><img src="images/tambores.svg" alt="Tambores"></button>

        <button class="tecla tecla_trombeta"><img src="images/trombeta.svg" alt="Trombeta"></button>
        <button class="tecla tecla_dinheiro"><img src="images/dinheiro.svg" alt="Dinheiro"></button>
        <button class="tecla tecla_vitoria"><img src="images/vitoria.svg" alt="Vitória"></button>
    </section>

    <audio src="sounds/aplausos.wav" id="som_tecla_aplausos"></audio>
    <audio src="sounds/vaia.wav" id="som_tecla_vaia"></audio>
    <audio src="sounds/risadas.wav" id="som_tecla_risada"></audio>
    <audio src="sounds/errado.wav" id="som_tecla_errado"></audio>
    <audio src="sounds/grilo.wav" id="som_tecla_grilo"></audio>
    <audio src="sounds/tambores.wav" id="som_tecla_tambores"></audio>
    <audio src="sounds/trombeta.wav" id="som_tecla_trombeta"></audio>
    <audio src="sounds/dinheiro.wav" id="som_tecla_dinheiro"></audio>
    <audio src="sounds/vitoria.wav" id="som_tecla_vitoria"></audio>

   <script src="main.js"></script>

</body>
</html>

:root {
  --cinza: #aaa;
  --vermelha: #e93d50;
  --vermelha-escura: #af303f;
  --branca: #fff;
  --luz: #ff5c77
}

body {
  align-items: center;
  background: linear-gradient(45deg, #ff5c77 0%,#00b7c1 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
}

h1 {
  color: var(--branca);
  margin-bottom: 20px;
  font-size: 2rem;
}

h2 {
  color: var(--branca);
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.teclado {
  background: linear-gradient(to bottom, #eeeeee 0%,#cccccc 100%);
  box-shadow: 6px 8px 0 6px #666, 10px 10px 10px #000;
  border-radius: 30px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
}

.tecla {
  background-color: var(--branca);
  border-radius: 30px;
  box-shadow: 3px 3px 0 var(--cinza);
  color: var(--vermelha);
  cursor: pointer;
  height: 120px;
  font-size: 1.75em;
  font-weight: bold;
  line-height: 120px;
  text-align: center;
  width: 120px;
}

.tecla.ativa,
.tecla:active {
  background-color: var(--vermelha);
  border: 4px solid  var(--vermelha);
  box-shadow: 3px 3px 0 var(--vermelha-escura) inset;
  color: var(--branca);
  outline: none;
}

.tecla.focus,
.tecla:focus {
  outline: none;
  box-shadow: 1px 1px 10px var(--luz);
}

.tecla.ativa:focus,
.tecla:active:focus {
  box-shadow: 3px 3px 0 var(--vermelha-escura) inset, 1px 1px 10px var(--luz);
}
