const textToJson = (text) => {
  if (!text) {
    return null;
  }
  const res = {};
  const lines = text.split('\n');
  const filteredLines = lines.filter((line) => line !== '');
  if (filteredLines.length < 5) {
    return null;
  }
  res.cnp = filteredLines[0].split(' ')[1];
  res.nume = filteredLines[2].split(' ')[0];
  res.prenume = filteredLines[4].split(' ')[0];
  return res;
};

module.exports = textToJson;
