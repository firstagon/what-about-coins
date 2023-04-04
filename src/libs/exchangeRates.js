// API for getting exchange rate
// https://app.freecurrencyapi.com/dashboard
// kiwolo9689@dogemn.com
// qwerty123

const keyFreeCuency = "yLdK4qTriFFxzHfv11k5QK9NreVs4iKNNNQy10Nq";

const getRUB = async () => {
  let data = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${keyFreeCuency}`)
    .then((resp) => resp)
    .then((data) => {
      const reader = data.body.getReader();

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
      // console.log(getResult.data.RUB);
      return getResult.data.RUB;
    })
    .catch((err) => console.log(err));

  return data
};

export default getRUB;
