const TOKEN = 'Bearer 1264|sAzNN5ILqUOzGFmIbX3F1LiZI7kLFCZNzxc4dyML'; 

const pazadas = fetch('http://rest.stacenka.lt/api/skelbimai', {
    method: 'GET',
    headers: {
        'Autorization': TOKEN,
        'Content-Type': 'application/json'
    }
});

pazadas
.then(paimamDuomenis)
.then(istransliuojamDuomenis);

function paimamDuomenis(response) {
    return response.json();
}

function istransliuojamDuomenis(data) {
    data.forEach(irasas => generateElement(irasas));
}

function generateElement(irasas) {
    const el = document.createElement('p');
    el.innerHTML = irasas.body;
    document.body.append(el);
}
