export async function getWeather(city) {
    const res = await fetch(`https://nice-field-00a914403.4.azurestaticapps.net/api/weather/${city}`).catch((err) => {
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