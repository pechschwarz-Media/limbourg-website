export default async function getBlogSitemap() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}wp/v2/posts?_fields=lang,link,translations&per_page=100`
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch pages: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}
