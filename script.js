let participantes = [
    {
        nome: "Mayk Brito",
        email: "mayk@gmail.com",
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 0),
    },
    {
        nome: "Diego Fernandes",
        email: "diego@gmail.com",
        dataInscricao: new Date(2024, 2, 1, 19, 20),
        dataCheckIn: new Date(2024, 2, 1, 20, 20),
    },
    {
        nome: "Carlos Silva",
        email: "carlos@gmail.com",
        dataInscricao: new Date(2024, 2, 10, 12, 0),
        dataCheckIn: new Date(2024, 2, 10, 13, 0),
    },
    {
        nome: "Ana Souza",
        email: "ana@gmail.com",
        dataInscricao: new Date(2024, 2, 5, 9, 0),
        dataCheckIn: new Date(2024, 2, 5, 10, 0),
    },
    {
        nome: "Luiza Santos",
        email: "luiza@gmail.com",
        dataInscricao: new Date(2024, 2, 3, 14, 0),
        dataCheckIn: new Date(2024, 2, 4, 9, 30),
    },
    {
        nome: "Roberto Oliveira",
        email: "roberto@gmail.com",
        dataInscricao: new Date(2024, 2, 12, 10, 0),
        dataCheckIn: new Date(2024, 2, 12, 11, 0),
    },
    {
        nome: "Aline Silva",
        email: "aline@gmail.com",
        dataInscricao: new Date(2024, 2, 17, 15, 0),
        dataCheckIn: new Date(2024, 2, 17, 16, 0),
    },
    {
        nome: "Mariana Oliveira",
        email: "mariana@gmail.com",
        dataInscricao: new Date(2024, 2, 19, 10, 0),
        dataCheckIn: new Date(2024, 2, 19, 11, 30),
    },
    {
        nome: "Felipe Castro",
        email: "felipe@gmail.com",
        dataInscricao: new Date(2024, 2, 8, 14, 0),
        dataCheckIn: new Date(2024, 2, 8, 15, 0),
    },
    {
        nome: "Juliana Lima",
        email: "juliana@gmail.com",
        dataInscricao: new Date(2024, 2, 15, 18, 0),
        dataCheckIn: new Date(2024, 2, 16, 10, 0),
    }
];

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now())
        .to(participante.dataInscricao);

    const dataCheckIn = dayjs(Date.now())
        .to(participante.dataCheckIn);

    return `
    <tr>
        <td>
            <strong>
                ${participante.nome}
            </strong>
            <br>
            <small>
                ${participante.email}
            </small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
    `;
}

const atualizarLista = (participantes) => {
    let output = "";

    // estrutura de repetição - loop
    for(let participante of participantes) {
        output = output + criarNovoParticipante(participante)
    }

    // substituir informação do HTML
    document
    .querySelector('tbody')
    .innerHTML = output;
}

atualizarLista(participantes);

const adicionarParticipante = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);


    const participante = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        dataInscricao: new Date(),
        dataCheckIn: null
    }

    participantes = [participante, ... participantes];
    atualizarLista(participantes)
}