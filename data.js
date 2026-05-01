const DATA = {
  universo: {
    nome: "Kháos-Etéreo",
    origem: "Primeiro Suspiro de Ophion",
    descricao: "Dimensão onde o vácuo é um oceano vibrante de éter, poeira viva e correntes magnéticas."
  },
  bestiario: {
    fluidantes: [  // antigas medusas
      { nome: "Aurelia nebularis", desc: "Sino prateado que reflete nebulosas; captura poeira com muco luminescente.", tam: "2-5 m", hab: "Reflexo espectral" },
      { nome: "Cyanea gravitica", desc: "Tentáculos de 300 m que se retorcem em nós espaciais.", tam: "300 m", hab: "Nós gravitacionais" },
      { nome: "Chrysaora etheris", desc: "Nematocistos injetam plasma frio, paralisando pequenos vagalumes do éter.", tam: "8 m", hab: "Injeção de plasma frio" },
      { nome: "Physalia stellaris", desc: "Colônia flutuante com bexiga de gás metálico; tentáculos de 500 m.", tam: "500 m", hab: "Queimadura de casco" },
      { nome: "Pelagia noctis", desc: "Invisível fora do infravermelho; flutua nas zonas escuras entre galáxias.", tam: "3 m", hab: "Invisibilidade IR" },
      { nome: "Stygiomedusa gigantea", desc: "Habita o Limbo; tentáculos em fita por quilômetros.", tam: "2 km", hab: "Tentáculos-fantasma" }
    ],
    bracosDoVazio: [  // cefalópodes
      { nome: "Octopus vacui", desc: "Imita rochas, cristais e pequenas naves; extremamente curioso.", tam: "2 m", hab: "Mimetismo total" },
      { nome: "Enteroctopus megalos", desc: "Braços de 200 m que se agarram a asteroides; embosca com tinta sólida.", tam: "200 m", hab: "Tinta de compressão" },
      { nome: "Hapalochlaena luminis", desc: "Anéis brilham antes de liberar neurotoxina de estase.", tam: "0.5 m", hab: "Neurotoxina de estase" },
      { nome: "Vampyroteuthis infernalis siderea", desc: "Vive no escuro absoluto; filamentos bioluminescentes confundem predadores.", tam: "1.5 m", hab: "Confusão luminescente" },
      { nome: "Architeuthis vacui", desc: "Krako-Éter juvenil; tentáculos com ganchos que perfuram titânio.", tam: "500 m", hab: "Perfuração de liga" },
      { nome: "Sepia officinalis cosmica", desc: "Camuflagem total; tinta é nuvem de micro-lentes gravitacionais.", tam: "3 m", hab: "Lentes gravitacionais" }
    ],
    nadadoresEstelares: [  // cetáceos
      { nome: "Balaena mysticetus etheris", desc: "Filtra plâncton com barbatanas de osso que absorvem radiação. Vive 500 anos.", tam: "1 km", hab: "Absorção de radiação" },
      { nome: "Megaptera novaeangliae siderea", desc: "Canto gravitacional viaja por anos-luz; decodificado como poesia.", tam: "800 m", hab: "Canto gravitacional" },
      { nome: "Balaenoptera musculus vacui", desc: "A maior criatura não-lendária, com 4 km; nadadeiras geram auroras.", tam: "4 km", hab: "Geração de auroras" },
      { nome: "Orcinus orca aetheris", desc: "Caçadora de caçadores; ataca em bandos coordenados.", tam: "50 m", hab: "Táticas de combate" },
      { nome: "Monodon monoceros stellaris", desc: "Dente em espiral é lança de cristal que perfura campos de força.", tam: "40 m", hab: "Perfuração de escudos" },
      { nome: "Physeter macrocephalus cosmica", desc: "Mergulha em gigantes gasosos caçando lulas-colossais.", tam: "600 m", hab: "Mergulho em pressão extrema" }
    ],
    caçadoresDeQuitina: [  // crustáceos
      { nome: "Alpheus bellulus cosmicus", desc: "Estala garras gerando bolhas de cavitação luminosa.", tam: "0.8 m", hab: "Cavitação luminosa" },
      { nome: "Odontodactylus scyllarus etheris", desc: "Punhos atingem temperatura de núcleo estelar.", tam: "1.5 m", hab: "Soco termonuclear" },
      { nome: "Macrocheira kaempferi vacui", desc: "100 m de envergadura; habita cascos de Krako-Anciões.", tam: "100 m", hab: "Escalada em quitina" },
      { nome: "Bathynomus giganteus etheris", desc: "15 m; necrófago que limpa carcaças de baleias.", tam: "15 m", hab: "Limpeza de carcaças" },
      { nome: "Squilla mantis stellaris", desc: "Visão que detecta UV, IR e ondas gravitacionais.", tam: "1 m", hab: "Visão multiespectral" },
      { nome: "Tardigrada vacui", desc: "Sobrevive a qualquer ambiente; criptobiose.", tam: "0.5 mm", hab: "Criptobiose total" }
    ],
    cortantes: [  // tubarões/raias
      { nome: "Carcharodon carcharias cosmicus", desc: "30 m de potência pura; mandíbulas cortam naves de mineração.", tam: "30 m", hab: "Corte de liga" },
      { nome: "Sphyrna zygaena vacui", desc: "Cabeça detecta campos elétricos a 100 km.", tam: "15 m", hab: "Detecção elétrica" },
      { nome: "Rhincodon typus stellaris", desc: "Filtrador pacífico de 500 m; boca é ecossistema flutuante.", tam: "500 m", hab: "Filtragem massiva" },
      { nome: "Galeocerdo cuvier vacui", desc: "Come qualquer coisa – asteroides, lixo, drones.", tam: "25 m", hab: "Metabolismo universal" },
      { nome: "Mobula birostris etheris", desc: "Envergadura de 200 m; chifres direcionam plâncton.", tam: "200 m", hab: "Direcionamento de fluxo" },
      { nome: "Torpedo torpedo stellaris", desc: "Descargas que apagam sistemas de naves inteiras.", tam: "12 m", hab: "Pulso EMP biológico" }
    ],
    vagalumesDoEter: [  // peixes
      { nome: "Argyropelecus vacui", desc: "Corpo achatado que reflete luz para baixo, invisível de cima.", tam: "0.3 m", hab: "Contra-iluminação" },
      { nome: "Melanocetus johnsonii sidereus", desc: "Isca bioluminescente que imita plâncton raro.", tam: "1 m", hab: "Bioluminescência-isca" },
      { nome: "Regalecus glesne etheris", desc: "Serpente prateada de 50 m; ondula em ventos solares.", tam: "50 m", hab: "Nado em vento solar" },
      { nome: "Hippocampus abdominalis stellaris", desc: "Cauda preênsil que agarra galhos de Gravitófitas.", tam: "5 m", hab: "Preensão gravítica" },
      { nome: "Exocoetus volitans vacui", desc: "Salta de asteroide em asteroide com barbatanas solares.", tam: "0.6 m", hab: "Planagem solar" },
      { nome: "Mola mola stellaris", desc: "Disco achatado que se aquece ao sol estelar.", tam: "10 m", hab: "Termorregulação solar" }
    ],
    lendas: [
      { nome: "OPHION", desc: "Criou o universo com seu suspiro. Suas escamas são galáxias.", tam: "Imensurável", hab: "Mitológica" },
      { nome: "LEVIATÃ-NEBULOSA", desc: "Do tamanho de uma nebulosa. Dorme há eras.", tam: "Nebulosa inteira", hab: "Adormecida" },
      { nome: "FÊNIX-ESTELAR", desc: "Morre em supernova e renasce; limpa sistemas de pragas.", tam: "Estelar", hab: "Cíclica" },
      { nome: "TARTARUGA-MUNDO", desc: "Viaja entre galáxias com um oceano sob seu casco de gelo.", tam: "Lua grande", hab: "Migratória" },
      { nome: "KRAKO-ANCIÃO PRIMORDIAL", desc: "O que gestou Echion. Seu sono mantém o Ermo Profundo estável.", tam: "Lua pequena", hab: "Adormecido" }
    ]
  },
  planetas: [
    { nome: "Pyros-IX", sistema: "Helióris", raca: "Carídeos de Plasma", perigo: "Extremo", desc: "Planeta de lava oceânica com Fontes de Cavitação." },
    { nome: "Thalassa Prime", sistema: "Thalassos", raca: "Mantóides Celestes", perigo: "Moderado", desc: "Único planeta com oceanos reais dos Aetherichthyes." },
    { nome: "Aetherion", sistema: "Nério", raca: "Siderálides", perigo: "Alto", desc: "Gigante gasoso com Cidades-Bexiga vivas." },
    { nome: "Melánia", sistema: "Skótos", raca: "Krako-Éteres", perigo: "Extremo", desc: "Mundo-Tinta onde jovens Krako aprendem a cuspir trevas." },
    { nome: "Thrausma", sistema: "Ferros", raca: "Carídeos-Ferreiro", perigo: "Alto", desc: "Aglomerado de asteroides metálicos-forja." },
    { nome: "Kythra-Mater", sistema: "Psykhé", raca: "Enxame Kythra", perigo: "Extremo", desc: "Massa pulsante de quitina viva, mente coletiva." },
    { nome: "Áureon", sistema: "Chrysós", raca: "Midas", perigo: "Corrupção", desc: "Planeta artificial revestido de ouro vivo." },
    { nome: "Terra-Éter", sistema: "Gaia-Exílio", raca: "Humanos", perigo: "Político", desc: "Réplica da Terra, construída após o êxodo humano." }
  ],
  civilizacoes: [
    { nome: "Confederação Prometeica", raca: "Humanos", governo: "República Federativa", tech: "Velas de Dirac", obscuro: "Drenagem Juvenil, tráfico de refugiados" },
    { nome: "Sindicato Midas", raca: "Midas", governo: "Conselho Áureo", tech: "Campos de Estase", obscuro: "Pureza incestuosa, Bebês-Lingote" },
    { nome: "Enxame Kythra", raca: "Kythra", governo: "Mente Única", tech: "Zangões vivos", obscuro: "Assimilação forçada, eugenia" },
    { nome: "Irmandade dos Caçadores de Ecos", raca: "Multi-espécies", governo: "Coro dos Silêncios", tech: "Arpões de Singularidade", obscuro: "Fetos Cantantes" },
    { nome: "Coletivo Ferox", raca: "Ferox", governo: "Conselho de Garra", tech: "Lâminas de Alma", obscuro: "Guerra civil entre clãs" },
    { nome: "Syndicato Fantasma", raca: "Desconhecida", governo: "Acordo Sem Palavras", tech: "Tinta de Memória", obscuro: "Tráfico de anos de vida" }
  ],
  flora: [
    { nome: "Fractalmusgo", tipo: "Lithoflora", desc: "Tapete verde-prateado que cobre asteroides; ri em frequências de rádio.", habitat: "Asteroides" },
    { nome: "Cortina-de-Íris", tipo: "Nebulófita", desc: "Véus translúcidos que ondulam entre estrelas, colorindo nebulosas.", habitat: "Nebulosas" },
    { nome: "Carvalho-Anelar", tipo: "Gravitófita", desc: "Troncos entrelaçados ao redor de asteroides, criando microclimas.", habitat: "Cinturões" },
    { nome: "Lunária-Suspirante", tipo: "Lunária", desc: "Lua oca que expele jatos de gás pelo polo, cantando um suspiro grave.", habitat: "Órbitas" },
    { nome: "Rosa-de-Quartzo", tipo: "Cristaloflora", desc: "Pétalas de cristal que vibram em frequências curativas.", habitat: "Anéis planetários" },
    { nome: "Cogumelo-Oráculo", tipo: "Fungo", desc: "Esporos induzem visões do passado genético.", habitat: "Cavernas" }
  ],
  echion: {
    nome: "ECHION",
    titulo: "O Abismo Comprimido Reforjado",
    altura: "2,10 m",
    corpo: "Másculo e definido, pele pálida perolada com cicatrizes de batalha.",
    voz: "Grossa, ressonante, eco gravitacional.",
    olhos: "6 olhos (2 principais + 4 secundários)",
    habilidades: ["Jatos de plasma", "Redemoinhos gravitacionais", "Sombra sólida", "Estalo de cavitação subluz"],
    missao: "Proteger os últimos de cada raça e guiá-los ao Ermo Profundo."
  }
};

module.exports = { DATA };