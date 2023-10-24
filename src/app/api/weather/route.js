export async function GET(req, res) {
    const url = new URL(req.url);
    const city = url.searchParams.get("city");
    console.log(city);
    return Response.json({ city });
}