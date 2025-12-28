# yet-another-portfolio-optimizer
Full stack app for optimizing portfolio allocations using ML-based return estimation and mean-variance optimization

---

## What's this about?
This project implements an end-to-end system that does the following:
- Fetches real-time market data
- Estimates expected asset returns using machine learning
- Models portfolio risk using shrinkage covariance estimation
- Solves a constrained convex optimization problem
- Displays optimal asset allocations via a web app

---

## Tech Stack

### Backend
- Python
- FastAPI
- numpy
- cvxpy
- scikit-learn

### Frontend
- React (Vite)
- Axios
- Framer Motion
- CSS

---

## Architecture
React UI  
↓  
Axios (REST API)  
↓  
FastAPI Backend  
↓  
Market Data API  
↓  
ML Return Estimation  
↓  
Covariance Modeling  
↓  
Portfolio Optimization

---

## Optimization Model

The portfolio is constructed by solving a mean–variance optimization problem:

\[
\max_{\mathbf{w}} \;
\mathbf{w}^\top \boldsymbol{\mu}
-
\lambda \, \mathbf{w}^\top \boldsymbol{\Sigma} \mathbf{w}
\]

subject to a fully invested, long-only portfolio.  
The risk aversion parameter \( \lambda \) controls the trade-off between expected return and risk.

---

## Running the code

### Backend
```bash
uvicorn app.main:app --reload
```

### Frontend
```bash
npm install
npm run dev
```
