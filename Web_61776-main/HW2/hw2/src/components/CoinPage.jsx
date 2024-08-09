import { LinearProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";

// Define your styles using the makeStyles hook from MUI
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  header: {
    marginBottom: "20px",
  },
  content: {
    width: "100%",
    maxWidth: "800px",
  },
}));

const CoinPage = () => {
  const classes = useStyles();
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin");
        setCoinData(response.data);
      } catch (error) {
        console.error("Error fetching the coin data:", error);
      }
    };

    fetchCoinData();
  }, []);

  if (!coinData) return <LinearProgress />;

  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.header}>
        {coinData.name}
      </Typography>
      <div className={classes.content}>
        <Typography variant="body1">
          Symbol: {coinData.symbol.toUpperCase()}
        </Typography>
        <Typography variant="body1">
          Current Price: ${coinData.market_data.current_price.usd}
        </Typography>
        <Typography variant="body1">
          Market Cap: ${coinData.market_data.market_cap.usd.toLocaleString()}
        </Typography>
        <Typography variant="body1">
          24h High: ${coinData.market_data.high_24h.usd}
        </Typography>
        <Typography variant="body1">
          24h Low: ${coinData.market_data.low_24h.usd}
        </Typography>
        {/* Add more data as needed */}
      </div>
    </div>
  );
};

export default CoinPage;
