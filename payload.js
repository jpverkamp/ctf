fetch("https://8cc8faad5b425d.lhr.life/script.js")
  .then((response) => response.json()) // Parse JSON from the response
  .then((data) => {
    console.log(data); // Use the data
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
