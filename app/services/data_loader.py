import yfinance as yf
import numpy as np

def fetch_returns(symbols, period="1y"):
    data = yf.download(symbols, period = period, progress=False)

    if data.empty:
        raise ValueError("No data returned from finance API")

    if "Adj Close" in data.columns:
        prices = data["Adj Close"]
    elif "Close" in data.columns:
        prices = data["Close"]
    else:
        raise ValueError(f"Unexpected data columns: {data.columns}")

    returns = np.log(prices/prices.shift(1)).dropna()
    if returns.empty:
        raise ValueError("Not enough data to compute returns")
    return returns

