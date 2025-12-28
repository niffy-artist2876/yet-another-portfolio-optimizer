from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import OptimizeRequest, OptimizeResponse
from app.services.data_loader import fetch_returns
from app.services.return_model import predict_expected_returns
from app.services.covariance_model import estimate_covariance
from app.services.optimizer import optimize_portfolio

app = FastAPI(title = "ML Portfolio Optimizer")

app.add_middleware(
    CORSMiddleware,
    allow_origins = [
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.post("/optimize", response_model = OptimizeResponse)
def optimize(request: OptimizeRequest):

    returns = fetch_returns(request.symbols)
    
    mu_hat = predict_expected_returns(returns)
    sigma_hat = estimate_covariance(returns)

    weights = optimize_portfolio(mu_hat, sigma_hat, request.risk_aversion)

    return {
        "symbols": request.symbols,
        "weights": weights
    }

