// API
// https://www.coindesk.com/api/
// https://docs.coincap.io/#intro

const options = {
  method: "GET",
  headers: {
    "Accept-Encoding": "gzip",
    Authorization: "Bearer 1f46921d-a89c-435e-9d6e-35d4cd950089",
  },
};

const fetchCoin = async (typeOfCoin) => {
  if (!typeOfCoin) {
    console.log("need to setup the coin");
    return;
  }

  let data = await fetch(`https://api.coincap.io/v2/assets/${typeOfCoin}`, options)
    // .then((response) => console.log(response.body))
    .then((res) => {
      const reader = res.body.getReader();

      return new ReadableStream({
        start(controller) {
          function push() {
            reader.read().then(({ done, value }) => {
              if (done) {
                // console.log("done stream", done);
                controller.close();
                return;
              }
              controller.enqueue(value);
              // console.log(done, value);
              push();
            });
          }
          push();
        },
      });
    })
    .then((stream) => new Response(stream, { headers: { "Content-type": "text/html" } }).text())
    .then((result) => {
      const getResult = JSON.parse(result);
      // console.log(getResult.data)
      return getResult.data;
    })
    .catch((err) => console.error(err));

  return data;
};

const getCoin = async function(type) {
  const coin = await fetchCoin(type);
  console.log(coin)
  return coin;
};

// getCoin('bitcoin');

export { getCoin, fetchCoin };
