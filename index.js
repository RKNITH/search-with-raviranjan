// function searchWiki() {
//     let query = document.getElementById('searchQuery').value;
//     if (!query) return;
//     let urlEn = `https://en.wikipedia.org/api/rest_v1/page/summary/${query}`;
//     let urlHi = `https://hi.wikipedia.org/api/rest_v1/page/summary/${query}`;

//     fetch(urlEn)
//         .then(response => response.json())
//         .then(data => displayResult(data, 'English'));

//     fetch(urlHi)
//         .then(response => response.json())
//         .then(data => displayResult(data, 'Hindi'));
// }

// function displayResult(data, language) {
//     if (data.type === 'standard') {
//         let resultDiv = document.getElementById('results');
//         let content = `<h3> ${data.title}</h3><p>${data.extract}</p>`;
//         resultDiv.innerHTML += content;
//     }
// }

// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
// }





function searchWiki() {
    let query = document.getElementById('searchQuery').value.trim();
    if (!query) return;

    let urlEn = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
    let urlHi = `https://hi.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;

    document.getElementById('results').innerHTML = ''; // Clear previous results

    fetch(urlEn)
        .then(response => response.json())
        .then(data => displayResult(data, 'English'));

    fetch(urlHi)
        .then(response => response.json())
        .then(data => displayResult(data, 'Hindi'));
}

function displayResult(data, language) {
    if (data.title && data.extract) {
        let resultDiv = document.getElementById('results');

        let content = `
            <div class="wiki-result">
                <h3>${data.title} (${language})</h3>
                ${data.thumbnail ? `<img src="${data.thumbnail.source}" alt="${data.title} image">` : ''}
                <p>${data.extract}</p>
                <a href="${data.content_urls.desktop.page}" target="_blank">Read more on Wikipedia</a>
            </div>
        `;

        resultDiv.innerHTML += content;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
