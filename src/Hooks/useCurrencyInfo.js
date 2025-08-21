import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          setData(res.rates); // all rates for the given base currency
           console.log("✅ API Response:", res);
          
        } else {
          console.error("API Error:", res["error-type"]);
          setData({});
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
