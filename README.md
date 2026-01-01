# yet-another-portfolio-optimizer
Full‑stack app for optimizing portfolio allocations using ML‑based return estimation and mean–variance optimization.

---

## What's this about?
This project implements an end-to-end system that:
- Fetches market data
- Estimates expected asset returns using machine learning
- Models portfolio risk using shrinkage covariance estimation
- Solves a constrained mean–variance optimization problem
- Displays optimal allocations in a web UI

---

## Tech stack

### Backend
- Python
- FastAPI
- numpy
- cvxpy
- scikit-learn

### Frontend
- React (Vite)
- Axios
- CSS

---

## Architecture
React UI  
↓  
Axios (REST API)  
↓  
FastAPI backend  
↓  
Market data API (yfinance)

↓  
ML return estimation  
↓  
Covariance modeling  
↓  
Portfolio optimization

---

### Optimization Model

The portfolio construction problem follows classical mean–variance theory.

We solve the following optimization problem:

Maximize:

    wᵀ μ − λ wᵀ Σ w

Subject to:

    ∑ wᵢ = 1        (fully invested portfolio)
    wᵢ ≥ 0 ∀ i      (long-only constraint)

Where:
- μ is the vector of expected asset returns  
- Σ is the return covariance matrix  
- λ ≥ 0 controls the trade-off between return and risk  

This formulation results in a convex quadratic optimization problem.


---

## Running the code

### Backend
Run the FastAPI app locally with reload:

```bash
uvicorn app.main:app --reload
```

### Frontend
Install dependencies and start the Vite dev server:

```bash
npm install
npm run dev
```

---

