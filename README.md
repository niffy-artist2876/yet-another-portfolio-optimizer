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

## Optimization model
We solve a mean–variance problem (fully invested, long‑only):

$$
\\max_{\\mathbf{w}}\\; \\mathbf{w}^\\top \\boldsymbol{\\mu} - \\lambda\\, \\mathbf{w}^\\top \\boldsymbol{\\Sigma}\\, \\mathbf{w}
$$

Subject to:
- \\(\\mathbf{1}^\\top \\mathbf{w} = 1\\) (fully invested)
- \\(\\mathbf{w} \\ge 0\\) (long only)

Here, \\(\\boldsymbol{\\mu}\\) is the expected return vector, \\(\\boldsymbol{\\Sigma}\\) is the covariance matrix, and \\(\\lambda\\) is the risk‑aversion parameter.

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

