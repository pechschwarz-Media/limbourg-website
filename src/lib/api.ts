type ApiOptions = RequestInit & { withHeaders?: false };
type ApiOptionsWithHeaders = RequestInit & { withHeaders: true };

export async function api<TResponse>(url: RequestInfo, config?: ApiOptions): Promise<TResponse>;
export async function api<TResponse>(
    url: RequestInfo,
    config: ApiOptionsWithHeaders,
): Promise<{ data: TResponse; headers: Headers }>;

export async function api<TResponse>(url: RequestInfo, config?: ApiOptions | ApiOptionsWithHeaders): Promise<any> {
    const basePath = process.env.NEXT_PUBLIC_API_URL;

    if (!basePath) {
        throw new Error(
            'Die Umgebungsvariable NEXT_PUBLIC_API_URL ist nicht gesetzt. Bitte stelle sicher, dass die API-URL korrekt konfiguriert ist.',
        );
    }

    const res = await fetch(basePath + url, config);
    const json = await res.json();

    if (config?.withHeaders) {
        return { data: json, headers: res.headers };
    }

    return json;
}
