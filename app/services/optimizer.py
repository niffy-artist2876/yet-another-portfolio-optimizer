#math engine
import cvxpy as cp
import numpy as np

def optimize_portfolio(mu, sigma, risk_aversion=1.0):
    n = len(mu)
    w = cp.Variable(n)
    obj = cp.Maximize(mu@w - risk_aversion*cp.quad_form(w, sigma))

    constraints = [cp.sum(w)==1, w>=0]
    problem = cp.Problem(obj, constraints)
    problem.solve()

    return w.value.tolist()