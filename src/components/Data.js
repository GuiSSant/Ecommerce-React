//MODELO
  /*{
      id: 0,
      discount: 0,
      cover: "./images/agricultura/",
      name: "",
      price: 0,
      cat: "",
      desc: "",
    },*/

const Data = {
  productItems: [
    {
      id: 1,
      discount: 0,
      cover: "./images/agricultura/rocadeira1.png",
      name: "Roçadeira SBC 227D - 25,4 cc",
      price: 2080,
      cat: "equipamentos",
      desc: "Versátil, robusta, leve e potente, o modelo SBC 227D é ideal para a manutenção e acabamento de jardins, gramados, capins e ervas daninhas pouco densas em residenciais e sítios. Conta com um arranque fácil do motor e sistema antivibração que proporcionam trabalho rápido, prático e seguro. A base do guidão giratório, facilita o transporte e armazenamento do equipamento.",
    },
    {
      id: 2,
      discount: 5,
      cover: "./images/agricultura/rocadeira2.png",
      name: "Roçadeira Profissional 2T 52CC VR520H VULCAN",
      price: 825,
      cat: "equipamentos",
      desc: "Roçadeira profissional VR520H da Vulcan é desenvolvida para trabalhos de alta intensidade e desempenho, eficiente para trabalhos diários como corte de grama e manutenção de jardins residenciais.",
    },
    {
      id: 3,
      discount: 20,
      cover: "./images/agricultura/dosador1.png",
      name: "Dosador Universal de Líquidos com Tubo Aplicador",
      price: 50,
      cat: "equipamentos",
      desc: "O acessório Dosador Universal de Líquidos foi desenvolvido para situações que exijam alta precisão na dosagem de produtos químicos em geral, permitindo obter facilmente regulagens precisas de dosagens, na faixa de 2 a 25 ml, por acionamento.",
    },
    {
      id: 4,
      discount: 15,
      cover: "./images/agricultura/pulverizador1.png",
      name: "Pulverizador de Compressão Prévia 4,7L",
      price: 175,
      cat: "equipamentos",
      desc: "Ideal para a aplicação de inseticidas, herbicidas, adubos foliares, conservantes em madeira, detergentes, produtos de limpeza, desengraxantes para automóveis, motos e máquinas em geral, assim como para sanitização de residências, hotéis, restaurantes etc.",
    },
    {
      id: 5,
      discount: 0,
      cover: "./images/agricultura/pulverizador2.png",
      name: "Pulverizador Costal Balance 20L",
      price: 420,
      cat: "equipamentos",
      desc: "O Balance alia as tradicionais qualidades dos Pulverizadores Guarany, com soluções inéditas no design, funcionamento, versatilidade e durabilidade.",
    },

    {
      id: 6,
      discount: 44,
      cover: "./images/agricultura/soprovarredor.png",
      name: "Soprovarredor Costal Motorizado - G59 - 59,2 cc",
      price: 2100,
      cat: "equipamentos",
      desc: "Complementando a linha de motorizados, o equipamento possui em seu DNA a tradicional qualidade da marca Guarany aliada a ergonomia, facilidade no uso e alta capacidade de sopro, representando o melhor custo-benefício para sua necessidade.",
    },



    {
      id: 7,
      discount: 15,
      cover: "./images/agricultura/alface.png",
      name: "Sementes de Alface Veneranda",
      price: 44.55,
      cat: "sementes",
      desc: ["DESTAQUES: Qualidade comercial e maior número de folhas\n\nFOLHAS: Folhas grandes; Crespas; Coloração verde claro; Repicadas\n\nPLANTA: Planta de grande porte; Grande adaptação de cultivo\n\nÉPOCA DE PLANTIO: Cultivo ano todo\n\nCICLO: Todo ano - 60 a 70 dias após a semeadura"],
    },
    {
      id: 8,
      discount: 0,
      cover: "./images/agricultura/tomate.png",
      name: "Sementes de Tomate Afonso",
      price: 20.90,
      cat: "sementes",
      desc: "DESTAQUES: Frutos graúdos e padronizados\n\nPESO: 230-270g\n\nPLANTA: Planta de excelente cobertura foliar; Alto vigor; Pegamento de frutos\n\nÉPOCA DE PLANTIO: Regiões Norte, Nordeste e Centro-Oeste: Cultivo ano todo em temperaturas acima de 15°C; Regiões Sul e Sudeste: Outubro a Janeiro\n\nCICLO: 80 - 90 DAT (dias após transplante)",
    },
    {
      id: 9,
      discount: 0,
      cover: "./images/agricultura/melancia.png",
      name: "Sementes de Melancia Crimson Sweet",
      price: 39.15,
      cat: "sementes",
      desc: "RESISTÊNCIAS: Co (Colletotrichum orbiculare - Antracnose); (Fon Fusarium oxysporum f. sp. niveum - Murcha de fusário) \n\nDESTAQUES: Excelente pegamento de frutos; Padrão de alta aceitação no mercado PESO: 11 - 14 kg \n\nÉPOCA DE PLANTIO: Regiões Norte, Nordeste e Centro-Oeste: Fevereiro a Outubro; Regiões Sul e Sudeste: Agosto a Dezembro \n\nCICLO: 80 - 90 dias",
    },
    {
      id: 10,
      discount: 0,
      cover: "./images/agricultura/abobrinha.png",
      name: "Sementes de Abobrinha Caserta Italiana",
      price: 55.35,
      cat: "sementes",
      desc: "DESTAQUES: Frutos de excelente qualidade; Polpa de coloração creme\n\nPESO: 200 - 250 G\n\nÉPOCA DE PLANTIO: Regiões Norte, Nordeste e Centro Oeste: Cultivo Ano todo; Regiões Sul e Sudeste: Agosto a Dezembro\n\nCICLO: 45 - 50 dias; Produtividade: 800 a 1200 caixas",
    },
    {
      id: 11,
      discount: 10,
      cover: "./images/agricultura/berinjela.png",
      name: "Sementes de Berinjela Embu",
      price: 89.10,
      cat: "sementes",
      desc: "DESTAQUES: Ampla adaptação climática; Boa qualidade dos frutos alongados e bojudos\n\nPESO: 0,2 - 0,25 kg\n\nPLANTA: Grande adaptação climática\n\nÉPOCA DE PLANTIO: Regiões Norte, Nordeste e Centro-Oeste: Agosto a Novembro; Regiões Sul e Sudeste: Cultivo ano todo\n\nCICLO: 120 - 150 dias",
    },
    {
      id: 12,
      discount: 0,
      cover: "./images/agricultura/repolho.png",
      name: "Sementes de Repolho Mini Yakko",
      price: 189,
      cat: "sementes",
      desc: "DESTAQUES: Precocidade e sabor\n\nPESO: 0,7 - 1 kg\n\nPLANTA: Excelente estrutura; Vigor; Cobertura foliar; Cabeça redonda; Cor verde claro\n\nÉPOCA DE PLANTIO: Em todas regiões: Março a Julho e Setembro a Janeiro\n\nCICLO: 60 dias",
    },


    {
      id: 13,
      discount: 0,
      cover: "./images/agricultura/fertilizante1.png",
      name: "Fertilizante Hidrossolúvel Para Horta, Flores E Frutas Vithal - 400g",
      price: 28.50,
      cat: "fertilizantes",
      desc: "Fertilizante ideal para favorecer o desenvolvimento de plantas, flores, hortas e frutíferas fortes e produtivas.",
    },
    {
      id: 14,
      discount: 8,
      cover: "./images/agricultura/fertilizante2.png",
      name: "Fertilizante Haifa Cal Gg Haifa - 25kg",
      price: 135,
      cat: "fertilizantes",
      desc: "Nitrato de Calcio de alta qualidade e pureza, desenvolvido para fornecer as plantas Nitrogênio e Calcio via fertirrigação, hidroponia e aplicação foliar.",
    },
    {
      id: 15,
      discount: 0,
      cover: "./images/agricultura/fertilizante3.png",
      name: "Fertilizante Foliar K 400 Forplant - 2 Kg",
      price: 54.29,
      cat: "fertilizantes",
      desc: "Fertilizante K 400 é indicado para o suprimento de Potássio e micronutrientes durante todo o ciclo das culturas.",
    },
    {
      id: 16,
      discount: 5,
      cover: "./images/agricultura/fertilizante4.png",
      name: "Fertilizante Orgânico Biokashi Biomix - 25kg",
      price: 125.59,
      cat: "fertilizantes",
      desc: "Combinação de húmus com nutrientes na proporção ideal para atender a necessidade do solo e das plantas em sua manutenção. Produto para agricultura orgânica.",
    },



    {
      id: 17,
      discount: 20,
      cover: "./images/agricultura/tubo gotejador.png",
      name: "Tubo Gotejador Streamline X 16080 1.60 L/h 30cm 2500m - Netafim",
      price: 1200,
      cat: "irrigação",
      desc: "Streamline™ X possui uma exclusiva e patenteada superfície com ranhuras que aumenta a proteção do tubo gotejador durante a instalação, uso e recolhimento, reduzindo cortes e vazamentos mesmo em tubos de espessura muita fina. ",
    },
    {
      id: 18,
      discount: 0,
      cover: "./images/agricultura/aspersor.png",
      name: "Aspersor D-net 8550 2.9 + 1.8 680 L/h - Netafim",
      price: 24.28,
      cat: "irrigação",
      desc: "A estrutura resistente e os materiais, de alta qualidade, protegidos contra raios UV tornam este aspersor durável para todas as condições climáticas e resistente a produtos químicos usados em aplicações agrícolas.\n\nIdeal para irrigação inteligente em cultivos de campo aberto, com espaçamento de aspersão de até 12m x 13m.",
    },
    {
      id: 19,
      discount: 0,
      cover: "./images/agricultura/botão gotejador.png",
      name: "Botão Gotejador Pcj Lcnl Cilíndrico 4 L/h - Netafim",
      price: 0.35,
      cat: "irrigação",
      desc: "Gotejador autocompensado, com um recurso opcional de anti-drenagem, projetado para proporcionar 100% de uniformidade na distribuição de água e nutrientes. Além disso, eles são constantemente autolimpantes para evitar o entupimento. ",
    },
    {
      id: 20,
      discount: 0,
      cover: "./images/agricultura/filtro.png",
      name: "Filtro Plástico Tela 1 Tavlit - Netafi",
      price: 30.72,
      cat: "irrigação",
      desc: "Permitem uma melhor proteção filtrante para cada sistema de irrigação. A estrutura simples e segura, fruto de uma cuidadosa tecnologia construtiva, reduz ao mínimo a necessidade de intervenções de manutenção.",
    },


    {
      id: 21,
      discount: 0,
      cover: "./images/agricultura/Polpa Citrica.JPG",
      name: "Polpa citrica",
      price: 90,
      cat: "subprodutos",
      desc: "Polpa Citrica a Granel obtido através de resíduos, em particular do bagaço que sobra da prensagem de laranja",
    },
    {
      id: 22,
      discount: 10,
      cover: "./images/agricultura/Farelo de Soja.JPG",
      name: "Farelo de Soja 50kg",
      price: 140,
      cat: "subprodutos",
      desc: "O farelo de soja é importante na formulação de rações nutritivas. Deriva do processamento de grãos de soja, após a extração do óleo, resultando em um produto rico em proteínas e nutrientes",
    },
    {
      id: 23,
      discount: 0,
      cover: "./images/agricultura/Casca de Soja.png",
      name: "Casca de Soja 20kg",
      price: 36,
      cat: "subprodutos",
      desc: "Excelente fonte de fibra de alta digestibilidade e proteínas",
    },
    {
      id: 24,
      discount: 10,
      cover: "./images/agricultura/DDG milho.png",
      name: "DDG Milho 5kg",
      price: 65,
      cat: "subprodutos",
      desc: "O DDG é o grão seco de destilaria,  subproduto do processamento do milho para obtenção do etanol com proteína e alto nível de fibra digestível",
    },

  
  ],
}
export default Data
