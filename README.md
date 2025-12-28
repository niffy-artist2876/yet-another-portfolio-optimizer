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
- Framer Motion
- CSS

---

## Architecture
React UI  
↓  
Axios (REST API)  
↓  
FastAPI backend  
↓  
Market data API  
↓  
ML return estimation  
↓  
Covariance modeling  
↓  
Portfolio optimization

---

## Optimization Model

The portfolio construction problem is formulated using classical mean–variance theory.

We seek portfolio weights \( \mathbf{w} \in \mathbb{R}^n \) that maximize expected return while penalizing risk:

\[
\max_{\mathbf{w}} \quad
\mathbf{w}^\top \boldsymbol{\mu}
-
\lambda \, \mathbf{w}^\top \boldsymbol{\Sigma} \mathbf{w}
\]

Subject to the constraints:

\[
\sum_{i=1}^{n} w_i = 1
\quad \text{(fully invested portfolio)}
\]

\[
w_i \ge 0 \quad \forall i
\quad \text{(long-only constraint)}
\]

where:
- \( \boldsymbol{\mu} \) is the vector of expected asset returns
- \( \boldsymbol{\Sigma} \) is the return covariance matrix
- \( \lambda \ge 0 \) is the risk-aversion parameter controlling the trade-off between return and risk

This formulation yields a convex quadratic optimization problem, which can be solved efficiently using standard convex solvers.

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

