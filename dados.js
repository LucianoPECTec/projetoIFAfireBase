/* =========================================================
   Monitoramento Escolar — URE São José do Rio Preto
   Arquivo: dados.js  |  Escopo: ESCOLAS REGULARES
   ========================================================= */
"use strict";

// Configurações globais do painel
const CONFIG = {
  semanasConcluidas: 37, // Semana atual do levantamento
  semanaFinal: 42,       // Semana de fechamento da projeção
  ifaURE: 83.3,          // IFA de referência da Diretoria/URE
  urlSincronizacao: ""   // Fica vazio, pois agora o Firebase cuida da sincronização
};

// Configuração das plataformas para exibição e geração de gráficos
const PLATAFORMAS = {
  tarefa: { nome: "Tarefa SP", campo: "tarefa", campoNota: "notaTarefa", formato: "percentual", casas: 2 },
  redacao: { nome: "Redação SP", campo: "redacao", formato: "percentual", casas: 2 },
  leia: { nome: "Leia SP", campo: "leia", formato: "percentual", casas: 2 },
  speak: { nome: "SPeak", campo: "speak", formato: "percentual", casas: 2 },
  alura: { nome: "Alura", campo: "alura", formato: "percentual", casas: 2 },
  matific: { nome: "Matific", campo: "matific", formato: "percentual", casas: 2 },
  khan: { nome: "Khan Academy", campo: "khan", formato: "percentual", casas: 2 }
};

// Base de dados das escolas (Substitua pelos dados reais da URE)
// Dica: presenca é em fração (ex: 0.885 = 88,5%), notaFinal é inteiro/decimal (ex: 9.2).
const ESCOLAS = [
  {
    codigo: "900001",
    nome: "EE Professor Aureliano Mendonça",
    supervisor: "Rosangela Pirota",
    presenca: 0.885, 
    ifa: 85.0,
    notaFinal: 9.2,
    posicao: 1,
    posicaoMedia: 1.5,
    top3: 5,
    top5: 8,
    top10: 10,
    tarefa: 0.95,
    notaTarefa: 9.5,
    redacao: 0.80,
    leia: 0.90,
    speak: 0.75,
    alura: 0.60,
    matific: 0.85,
    khan: 0.70
  },
  {
    codigo: "900002",
    nome: "EE Nair Santos Cunha",
    supervisor: "Rosangela Pirota",
    presenca: 0.821,
    ifa: 85.0,
    notaFinal: 8.5,
    posicao: 2,
    posicaoMedia: 3.2,
    top3: 2,
    top5: 6,
    top10: 9,
    tarefa: 0.88,
    notaTarefa: 8.8,
    redacao: 0.75,
    leia: 0.80,
    speak: 0.60,
    alura: 0.50,
    matific: 0.70,
    khan: 0.65
  },
  {
    codigo: "900003",
    nome: "EE Voluntário de 32",
    supervisor: "Regina",
    presenca: 0.795,
    ifa: 85.0,
    notaFinal: 7.8,
    posicao: 3,
    posicaoMedia: 5.0,
    top3: 0,
    top5: 2,
    top10: 8,
    tarefa: 0.75,
    notaTarefa: 7.5,
    redacao: 0.65,
    leia: 0.70,
    speak: 0.55,
    alura: null, // Utilize null quando a escola não tiver dados na plataforma (aparecerá "Sem dado")
    matific: 0.60,
    khan: 0.50
  },
  {
    codigo: "900004",
    nome: "EE Alberto Andaló",
    supervisor: "Telma",
    presenca: 0.845,
    ifa: 85.0,
    notaFinal: 8.9,
    posicao: 4,
    posicaoMedia: 4.1,
    top3: 1,
    top5: 5,
    top10: 10,
    tarefa: 0.90,
    notaTarefa: 9.0,
    redacao: 0.78,
    leia: 0.82,
    speak: 0.65,
    alura: 0.55,
    matific: 0.75,
    khan: 0.68
  }
];

// Lançamentos Iniciais. Deixe vazio "{}", pois o Firebase agora buscará e salvará esses lançamentos no banco de dados.
const LANCAMENTOS_SEMANAIS = {};
