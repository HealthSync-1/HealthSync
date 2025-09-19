export type Integrante = {
    nome: string;
    rm: string;
    turma: string;
    img: string; // caminho em /public/img
    github: string;
    linkedin: string;
};


export const integrantes: Integrante[] = [
    { nome: 'Maicon Douglas', rm: '561279', turma: '1TDSPW', img: '/img/Maicon.jpg', github: 'https://github.com/MaiconDouglas-dev', linkedin: 'https://www.linkedin.com/in/maicon-douglas-b244571b5/' },
    { nome: 'Richard Freitas', rm: '566127', turma: '1TDSPW', img: '/img/Richard.jpg', github: 'https://github.com/vlonerickk', linkedin: 'https://linkedin.com/in/richard-freitas' },
    { nome: 'Laura Lopes Cruz', rm: '566376', turma: '1TDSPW', img: '/img/Pedro.png', github: 'https://github.com/ph3103', linkedin: 'https://br.linkedin.com/in/pedro-henrique-285397367' },
];