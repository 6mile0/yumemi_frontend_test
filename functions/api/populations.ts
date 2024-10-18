import { PagesFunction } from '@cloudflare/workers-types';

const API_URL = 'https://opendata.resas-portal.go.jp/api/v1/'

interface Env {
    RESAS_API_KEY: string
}

const fetchRESASPopulations = async (apiKey: string, prefCode: string | null) => {
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

export const onRequestGet: PagesFunction<Env>  = async (context) => {
    const prefCode = new URL(decodeURIComponent(context.request.url)).searchParams.get('prefCode');
    try {
        const response = await fetchRESASPopulations(context.env.RESAS_API_KEY, prefCode)
        return new Response(JSON.stringify(response), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ message: (error as Error).message }), { status: 500 })
    }
}
