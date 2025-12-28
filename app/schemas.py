from pydantic import BaseModel
from typing import List

class OptimizeRequest(BaseModel):
    symbols: List[str]
    risk_aversion: float=1.0

class OptimizeResponse(BaseModel):
    symbols: List[str]
    weights: List[float]
