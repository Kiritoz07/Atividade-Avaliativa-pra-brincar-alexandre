// Cria a div container que centraliza o conteúdo
const container = document.createElement('div');
container.id = 'container';

const titulo_principal = document.createElement('h1');
titulo_principal.id = 'titulo_principal';
titulo_principal.textContent = 'Bem-vindo à Clinica ABCD';

const paragrafo = document.createElement('p');
paragrafo.id = 'texto_principal';
paragrafo.textContent = 'Por favor preencha o formulário abaixo para agendar sua consulta.';


const paragrafo2 = document.createElement('p');
paragrafo2.className = 'segundo_paragrafo';
paragrafo2.textContent = 'Nome: Idade: Telefone: E-mail: Data da Consulta: Horário da Consulta:';


const paragrafo3 = document.createElement('p');
paragrafo3.className = 'terceiro_paragrafo';
paragrafo3.textContent = 'Agradecemos por escolher a Clinica ABCD. Estamos ansiosos para atendê-lo!';

document.body.appendChild(container);
container.appendChild(titulo_principal);
container.appendChild(paragrafo);
container.appendChild(paragrafo2);
container.appendChild(paragrafo3);
