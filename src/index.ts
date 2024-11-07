import { Hono } from "hono";

const app = new Hono();

app.post("/", async (c) => {
	const text = await c.req.text();
	const url = c.env.SLACK_WEBHOOK_URL;
	if (!url) {
		c.status(500);
		return c.body("SLACK_WEBHOOK_URL is not set");
	}
	return fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			text: text,
			unfurl_links: true,
		}),
	});
});

app.post("/error", async (c) => {
	return c.text(await c.req.text());
});

export default app;
