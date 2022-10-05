let axios = require('axios');
require('dotenv').config();

function getNewsRequest(keyword) {
    var options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: { q: keyword.tweet.replace(/ /g, ''), lang: 'en', page: keyword.page, page_size: keyword.limit },
        headers: {
            'x-rapidapi-key': 'Naz0GSp3slmshIeZbeNoW3yDZ98kp1PbbOZjsnQYXO3tfZwhvp',
            'x-rapidapi-host': 'free-news.p.rapidapi.com'
        }
    };

    return axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}


module.exports = { getNewsRequest }