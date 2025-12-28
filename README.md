# yet-another-portfolio-optimizer
Full stack app for optimizing portfolio allocations using ML-based return estimation and mean-variance optimization

---

##What's this about?
This project implements an end-to-end system thatdoes the following:
- Fetches real-time market data
- Estimates expected asset returns using machine learning
- Models portfolio risk using shrinkage covariance estimation
- Solves a constrained convex optimization problem
- Displays optimal asset allocations via a web app

---

##Tech Stack

###Backend
- Python
- FastAPI
- numpy
- cvxpy
- scikit-learn

###Frontend
- React (Vite)
- Axios
- Framer Motion
- CSS

---

##Architecture
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

##Optimization Model
The optimization problem is formulated as:
\[
\max_w \; \mu^T w - \lambda w^T \Sigma w
\]

Subject to:
- Fully invested portfolio
- No short selling

---

##Running the code

###Backend
```
uvicorn app.main:app --reload
```

###Frontend
```
npm install
npm run dev
```
