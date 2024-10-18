const API_URL = 'https://opendata.resas-portal.go.jp/api/v1/'
const API_KEY = process.env.API_KEY ?? ''

const fetchRESASPrefectures = async () => {
    return await fetch(`${API_URL}/prefectures`, {
        headers: {
            "X-API-KEY": API_KEY,
        }
    })
        .then((res) => res.json())
        .catch(() => {
            throw new Error("Failed to prefectures data");
        });
}

export const onRequestGet = async (context) => {
    try {
        const response = await fetchRESASPrefectures()
        context.res.json(response)
    } catch (error) {
        context.res.status(500).json({ error: error.message })
    }
}
