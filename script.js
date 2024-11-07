function generateWordCloud() {
  const text = document.getElementById("input-text").value;
  const wordsArray = text.split(/\s+/).map(word => [word, Math.random() * 10 + 1]);

  WordCloud(document.getElementById("word-cloud"), {
    list: wordsArray,
    gridSize: Math.round(16 * document.getElementById("word-cloud").offsetWidth / 1024),
    weightFactor: 10,
    fontFamily: "Times, serif",
    color: "random-dark",
    backgroundColor: "#f0f0f0",
  });
}
