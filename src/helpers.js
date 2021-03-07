export const calculateTemp = (temp) => {
  const kelvin = 273.15;
  const tempCelcius = parseFloat(temp - kelvin, 10).toFixed(2);
  return tempCelcius;
};

export const tempColor = (temp) => {
  if (calculateTemp(temp) > 40) {
    return "hot";
  } else if (calculateTemp(temp) < 5) {
    return "cold";
  } else {
    return "good";
  }
};
