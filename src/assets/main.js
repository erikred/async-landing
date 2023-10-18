const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCdulIs-x_xrRd1ezwJZR9ww&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content');
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0251cd89a8msh86c955b20973eeep1e6eecjsn2219ed3f9fa9',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

/* try {
    const response = await fetch(API, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
} */

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

//Para ejecutar la funcion automaticamtne una vez cargado el archivo
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => 
            `<div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
    </div>`
        ).slice(0,8).join('')}
    `;
    content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();