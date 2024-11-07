const proxyURL = "PROXY_URL";

fetch(proxyURL, {
	method: "POST",
	body: window.location.href,
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
