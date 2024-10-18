const API_URL = 'https://opendata.resas-portal.go.jp/api/v1/'
const API_KEY = process.env.API_KEY ?? ''

const fetchRESASPopulations = async (prefCode: string) => {
    return await fetch(`${API_URL}/population/composition/perYear?cityCode=-&prefCode=${prefCode}`, {
        headers: {
            "X-API-KEY": API_KEY,
        }
    })
        .then((res) => res.json())
        .catch(() => {
            throw new Error("Failed to fetch populations data");
        });
}

export const onRequestGet = async (context) => {
    try {
        const response = await fetchRESASPopulations(context.query.prefCode)
        context.res.json(response)
    } catch (error) {
        context.res.status(500).json({ error: error.message })
    }
}
