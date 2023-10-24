import fs from 'fs/promises';
import path from 'path';

export async function GET(req, res) {
    const url = new URL(req.url);
    const city = url.searchParams.get("city");
    const key = url.searchParams.get("key");

    city.toLowerCase();
    const sendData = async () => {
        try {
            const filePath = path.join(__dirname, `../../../../../weatherData/${city.toLowerCase()}.json`);
            console.log(filePath); // Log the file path
            const fileData = await fs.readFile(filePath, 'utf8');
            console.log(fileData); // Log the file content
            return JSON.parse(fileData);
        }catch(err){
            console.log(err);
            return err; // Return the error if one occurs
        }
    }

    const data = await sendData();
    if (data instanceof Error) {
        // If sendData returned an error, send a response with the error message
        return Response.json({ error: data.message });
    } else {
        return Response.json(data);
    }
}