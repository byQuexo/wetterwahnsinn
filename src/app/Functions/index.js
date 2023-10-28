export async function getWeather(city) {
    const res = await fetch(`http://localhost:3000/api/weather/${city}`).catch((err) => {
        return err;
    }).then((res) => {
        return res.json();
    });

    return await res;
}