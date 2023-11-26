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

export async function getHistoryWeather() {
    const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={5fa32f68430e041dc40a21a6694d48bd}}`).catch((err) => {
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



export var history = []

export function handleSearchHistory(item) {
    history.push(item);
    return history;
}

export function getSearchHistory() {
    return history;
}