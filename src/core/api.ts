class BaseApi {
    private baseUrl: string;
    constructor(url: string) {
        if (!url || url == '') throw new Error('BaseApi: url is required');
        this.baseUrl = url;
    }
    public fetchGet<T>(input: RequestInfo): Promise<TResult<T>> {
        return this.fetch<T>(input);
    }
    public fetchPost<T>(input: RequestInfo, body: any): Promise<TResult<T>> {
        return this.fetch<T>(input, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    }
    public fetchPut<T>(input: RequestInfo, body: any): Promise<TResult<T>> {
        return this.fetch<T>(input, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
    }
    public fetchPatch<T>(input: RequestInfo, body: any): Promise<TResult<T>> {
        return this.fetch<T>(input, {
            method: 'PATCH',
            body: JSON.stringify(body),
        });
    }
    public fetchDelete<T>(input: RequestInfo): Promise<TResult<T>> {
        return this.fetch<T>(input, {
            method: 'DELETE',
        });
    }
    private async fetch<T>(input: RequestInfo, init?: RequestInit): Promise<TResult<T>> {
        input = `${this.baseUrl}${input}`;
        const token = localStorage.getItem('token');
        const res = await fetch(input, {
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
            ...init,
        });
        if (!res.ok) {
            return {
                success: false,
                message: res.statusText?? await res.text(),
            };
        }
        return {
            success: true,
            data: await res.json()
        }
    }
}
// const api = new BaseApi(process.env.CATAILYST ?? '');
const api = new BaseApi("http://localhost:5000");
export default api;