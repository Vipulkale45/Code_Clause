function shorten() {
    const longUrl = document.getElementById("url").value;
    fetch("https://api.shrtco.de/v2/shorten?url=" + longUrl)
      .then(response => response.json())
      .then(data => {
        const shortUrl = data.result.full_short_link;
        document.getElementById("output").innerHTML = `
          <p>Short URL:</p>
          <a href="${shortUrl}" target="_blank">${shortUrl}</a>
        `;
        document.getElementById("output").style.display = "block";
      })
      .catch(error => console.log(error));
  }