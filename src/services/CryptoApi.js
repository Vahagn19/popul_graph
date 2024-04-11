const baseUrl = "https://api.coindesk.com/v1/bpi/currentprice.json"

const newArray = (obj) => {
  const result = [];
  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
};

async function getCurrency(fn) {
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw Error("Cannot get data");
      }
      const result = await response.json();
      const data = newArray(result.bpi);
      fn(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  export default getCurrency