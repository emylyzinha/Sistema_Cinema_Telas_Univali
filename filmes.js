const dadosFilmes = {
    filme1: {
      titulo: "Velozes e Furiosos 5",
      sinopse: "Dom e Brian montam um time para um último golpe no Rio de Janeiro, mas são perseguidos por um agente do governo.",
      horarios: ["Sala 1 - 15:00", "Sala 2 - 18:00", "Sala 4 - 21:00"]
    },
    filme2: {
      titulo: "Kung Fu Panda 3",
      sinopse: "Po reencontra seu pai biológico e precisa treinar os pandas para lutar contra uma ameaça sobrenatural.",
      horarios: ["Sala 2 - 14:00", "Sala 2 - 16:30", "Sala 5 - 19:00"]
    },
    filme3: {
      titulo: "Duro de Matar",
      sinopse: "Um policial enfrenta terroristas sozinho em um prédio de Los Angeles durante o Natal.",
      horarios: ["Sala 3 - 17:00", "Sala 3 - 20:00", "Sala 1 - 23:00"]
    },
    filme4: {
      titulo: "Um Espião e Meio",
      sinopse: "Um contador reencontra um amigo da escola que agora é um agente da CIA e acaba envolvido em uma missão internacional.",
      horarios: ["Sala 4 - 13:30", "Sala 2 - 16:00", "Sala 3 - 18:30"]
    }
  };
  
  function abrirModal(filmeId) {
    const modal = document.getElementById("modal-filme");
    const dados = dadosFilmes[filmeId];
  
    document.getElementById("titulo-filme").innerText = dados.titulo;
    document.getElementById("sinopse-filme").innerText = dados.sinopse;
  
    const horariosHtml = dados.horarios.map(horario =>
      `<button onclick="selecionarSessao('${horario}')">${horario}</button>`
    ).join(" ");
  
    document.getElementById("horarios-filme").innerHTML = horariosHtml;
    modal.style.display = "flex";
  
    sessionStorage.setItem("filmeSelecionado", filmeId);
  }
  
  function selecionarSessao(sessao) {
    sessionStorage.setItem("sessaoSelecionada", sessao);
    window.location.href = "assentos.html";
  }
  
  function fecharModal() {
    document.getElementById("modal-filme").style.display = "none";
  }
  