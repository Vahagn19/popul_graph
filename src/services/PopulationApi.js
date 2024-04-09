const baseUrl =
"https://datausa.io/api/data?drilldowns=Nation&measures=Population";


async function getData(fn) {
    try {
      const response = await fetch(baseUrl);
      const result = await response.json();

      fn(result.data.reverse());
    } catch (error) {
      console.log(error.message);
    }
  }

  export default getData