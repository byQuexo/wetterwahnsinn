import fs from 'fs';
import path from 'path';

export async function GET(req, { params }) {
    const city = params.city;
    const dir = path.join(process.cwd(), 'src', 'app', 'weatherData', city + '.json');
    const fileContents = fs.readFileSync(dir, 'utf8');
    const weatherData = JSON.parse(fileContents);
    return new Response(JSON.stringify(weatherData), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
}
