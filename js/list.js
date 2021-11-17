import { API,render } from './utils.js';

const list = (data) => {

    const elements = data

        .map(
            item => 
            `<li>
                <div class="card">
                    <img src="${item.poster}">
                    <div class="short-description">
                        <p><a href="#view-${item.id}">${item.title}</a><br> - ${item.year}</p>
                        <p class="description">${item.description}</p><a class="read-more" href="#view-${item.id}">[...]</a>
                        <div class="edit-buttons">   
                            <a class="edit" href="#edit-${item.id}">Modifica</a>
                            <button class="delete" id="${item.id}">Cancella</button>
                        </div>
                    </div>
                </div>
            </li>`
            )
        .join('');

    const container = document.querySelector('#container');

    render(container, 
        `
        <h2>Elenco schede film:</h2>
        <ul>${elements}</ul>
        `
    );

    const btns = [...document.querySelectorAll('.delete')];

    btns.forEach(btn => {
        btn.addEventListener('click', (event) =>{
            const id = parseInt(event.target.id);
            const filtered = data.filter((movie) => movie.id !== id);
            list(filtered);

            fetch(`${API}/${id}`, {method: "DELETE"})
                .then((response) => response.json())
                .then(() => list(filtered));
        }, {once: true});
    });
};



export {list} 