const API_URL = 'https://opendata.resas-portal.go.jp/api/v1'

interface Env {
    RESAS_API_KEY: string
}


const fetchRESASPrefectures = async (apiKey: string) => {
    return await fetch(`${API_URL}/prefectures`, {
        headers: {
            "X-API-KEY": apiKey,
        }
    })
        .then((res) => res.json())
        .catch(() => {
            throw new Error("Failed to prefectures data");
        });
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const response = await fetchRESASPrefectures(context.env.RESAS_API_KEY)
        return new Response(JSON.stringify(response), { status: 200 })
    } catch (error: unknown) {
        return new Response(JSON.stringify({ message: (error as Error).message }), { status: 500 })
    }
}
