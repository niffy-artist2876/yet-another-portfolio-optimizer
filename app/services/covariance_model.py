from sklearn.covariance import LedoitWolf

def estimate_covariance(returns):
    """
    Shrinkage covariance for stability
    """
    lw = LedoitWolf()
    lw.fit(returns.values)
    return lw.covariance_

