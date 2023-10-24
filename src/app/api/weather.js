export async function GET(request) {
    request.respondWith(new Response('Hello world!', { status: 200 }));
}