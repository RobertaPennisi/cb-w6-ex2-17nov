import { API,render } from './utils.js';

const view = (id = 0) => {

    fetch(`${API}/${id}`)
        .then(response => response.json())
        .then(movie => {
            const container = document.querySelector('#container');
            render(container, 
                `
                <article>
                    <img src="${movie.poster}">
                    <div class="long-description">
                        <h2>${movie.title}</h2>
                        <p>${movie.year}</p>
                        <p>${movie.description}</p>
                        
                        <a href="#" id="back">Torna alla Homepage</a>
                    </div>
                </article>
                `)
        });

};

export {view}