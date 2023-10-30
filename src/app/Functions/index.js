export async function getWeather(city) {
    const res = await fetch(`http://localhost:3000/api/weather/${city}`).catch((err) => {
        return err;
    }).then((res) => {
        return new Promise((resolve, reject) => {
            if (res.status === 200) {
                resolve(res.json());
            } else {
                reject(res);
            }
        });
    });

    return await res;
}