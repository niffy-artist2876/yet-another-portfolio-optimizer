import numpy as np
from sklearn.linear_model import LinearRegression


#a simple linear regression model to predict portfolio returns coz it's stable, more interpretable and also a good starting point for scalability because of better debugging
def predict_expected_returns(returns):
    
    X = returns[:-1]
    Y = returns[1:]

    model = LinearRegression()
    model.fit(X, Y)

    #expected returns
    mu_hat = model.predict(X.iloc[-1:].values)[0]
    return mu_hat
