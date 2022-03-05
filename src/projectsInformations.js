// import maskGroup from "./components/images/mask_group.png";
import trybeTunesImg from './components/images/trybeTunes.png';
import illustration from './components/images/illustration.png';
import coverImage from './components/images/cover_image.png';
import trybeShopping from './components/images/trybe_shopping.png';

const projects = [
  {
    title: "Rocket.Q",
    info: "O Rocket.Q é uma aplicação de interação através de perguntas, sendo possível criar uma sala para internautas anônimos fazerem perguntas e o criador da sala em posse de uma senha gerenciar essas perguntas e marcar como lidas.",
    image: illustration,
    languages: ["JavaScript","CSS", "NodeJS"],
    repository: "https://github.com/ronald-assis/new_rocketQ",
  },
  {
    title: "Trybe Tunes",
    info: " TrybeTunes é uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.",
    image: trybeTunesImg,
    languages: ["React", "JavaScript", "CSS"],
    repository: "https://github.com/ronald-assis/trybetunes",
  },
  {
    title: "Book synopsis",
    info: "Um projeto onde Login e acesso de Usuário já registrado, ao fazer o login o app faz uma requisição API que retorna uma listagem de livros, e ao cliclar no livro escolhido mostra os detalhes e a sinopse.",
    image: coverImage,
    languages: ["React", "CSS"],
    repository: "https://github.com/ronald-assis/Challenge-books-front-end",
  },
  {
    title: "Shopping Card",
    info: "Nesse projeto terá um carrinho de compras totalmente dinâmico! Através de requisições HTTP. Aqui usarei a API do Mercado Livre para buscar produtos à venda.",
    image: trybeShopping,
    languages: ["JavaScript", "HTML", "CSS"],
    repository: "https://github.com/ronald-assis/shopping-cart",
  },
];

export default projects;
