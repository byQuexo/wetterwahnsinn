//import fs from 'fs/promises';
//import path from 'path';
//const __dirname = path.resolve();

export async function GET(request) {
    request.GET = request.query;
    return new Response(`Hello ${city}!`);
}


// const { city } = req.query;
//     const sendData = async () => {

//         try {
//             const filePath = path.join(__dirname, `./weatherData/${city.toLowerCase()}.json`);
//             console.log(filePath);
//             const fileData = await fs.readFile(filePath, 'utf8');
//             console.log(fileData);
//             return JSON.parse(fileData);
//         }catch(err){
//             console.log(err);
//             return err; 
//         }
//     }

//     const data = await sendData();
//     if (data instanceof Error) {
//         return Response.json({ error: data.message });
//     } else {
//         return Response.json(data);
//     }