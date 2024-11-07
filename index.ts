const webhookUrl = "_SLACK_WEBHOOK_URL_";

const payload = {
	text: window.location.href,
	unfurl_links: true,
};

fetch(webhookUrl, {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify(payload),
})
	.then((response) => {
		if (response.ok) {
			alert("URL has been shared to Slack successfully!");
		} else {
			alert(`Failed to share URL to Slack: ${response.statusText}`);
		}
	})
	.catch((error) => {
		alert(`Error: ${error.message}`);
	});
