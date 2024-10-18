// pages/api/joke.js

import https from 'https';

const baseURL = "https://v2.jokeapi.dev";
const categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
const params = [
    "blacklistFlags=nsfw,religious,racist",
    "idRange=0-100"
];

export default function handler(req, res) {
    if (req.method === 'GET') {
        https.get(`${baseURL}/joke/${categories.join(",")}?${params.join("&")}`, apiRes => {
            let data = '';

            apiRes.on('data', chunk => {
                data += chunk;
            });

            apiRes.on('end', () => {
                let randomJoke = JSON.parse(data);
                res.status(200).json(randomJoke);
            });
        }).on('error', err => {
            res.status(500).json({ error: err.message });
        });
    } else {
        res.status(405).end(); // Método no permitido
    }
}