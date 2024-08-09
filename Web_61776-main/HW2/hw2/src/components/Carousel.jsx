import React, { useEffect, useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"; // Import the carousel CSS

const Carousel = () => {
  const currency = "USD";
  const symbol = "$";
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets`, {
          params: {
            vs_currency: currency,
            order: "gecko_desc",
            per_page: 10,
            page: 1,
            sparkline: false,
            price_change_percentage: "24h"
          }
        }
      );
      setTrending(data);
    } catch (error) {
      console.error("Error fetching trending coins: ", error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <div key={coin.id} className="flex flex-col items-center justify-center text-black">
        <img
          src={coin?.image}
          alt={coin.name}
          className="h-20 mb-2"
        />
        <span className="uppercase">
          {coin?.symbol.toUpperCase()}
          &nbsp;
          <span className={`font-semibold ${profit ? "text-green-500" : "text-red-500"}`}>
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span className="text-lg font-semibold">
          {symbol} {coin?.current_price.toFixed(2)}
        </span>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2, // Show 2 items on small screens
    },
    512: {
      items: 4, // Show 4 items on medium screens
    },
    1024: {
      items: 5, // Show 5 items on large screens
    },
  };

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlay
          autoPlayInterval={1500}
          animationDuration={1000}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
        />
      </div>
    </div>
  );
};

export default Carousel;
