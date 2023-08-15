setInterval(() => {
  const options = {
    hostname: "<glitch_linki>",
    path: "/",
    method: "GET",
    headers: {
      "Content-Type": "text/plain",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0",
    },
  };
  http.get("<glitch_linki>",options, (res) => {
    //working
  });
}, 3000);
