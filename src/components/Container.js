export default function Container() {
  return (
    <div class="container">
      <div class="espaçamento"></div>

      <div class="calculadora">
        <div class="tela" id="tela"></div>
        <div class="botoes">
          <div class="contas">
            <div>&divide;</div>
            <div>&times;</div>
            <div>-</div>
            <div>+</div>
          </div>
          <div class="painel">
            <div class="numeros n7">7</div>
            <div class="numeros n8">8</div>
            <div class="numeros n9">9</div>
            <div class="numeros n4">4</div>
            <div class="numeros n5">5</div>
            <div class="numeros n6">6</div>
            <div class="numeros n1">1</div>
            <div class="numeros n2">2</div>
            <div class="numeros n3">3</div>
            <div class="numeros n0">0</div>
            <div class="numeros n-ponto">.</div>
            <div id="limpar" class="numeros n-c">C</div>
            <div class="igual" id="resultado">
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
