const API_URL = 'https://opendata.resas-portal.go.jp/api/v1/'

const loadEnv = (context) => {
    if (context.secrets.RESAS_API_KEY === undefined) {
        throw new Error("RESAS_API_KEY is not defined")
    }

    return {
        RESAS_API_KEY: context.secrets.RESAS_API_KEY
    }
}

const fetchRESASPopulations = async (apiKey: string, prefCode: string) => {
    return await fetch(`${API_URL}/population/composition/perYear?cityCode=-&prefCode=${prefCode}`, {
        headers: {
            "X-API-KEY": apiKey,
        }
    })
        .then((res) => res.json())
        .catch(() => {
            throw new Error("Failed to fetch populations data");
        });
}

export const onRequestGet = async (context) => {
    try {
        const env = loadEnv(context)
        const response = await fetchRESASPopulations(env.RESAS_API_KEY, context.query.prefCode)
        return new Response(JSON.stringify(response), { status: 200 })
    } catch (error) {
        return new Response(error.message, { status: 500 })
    }
}
