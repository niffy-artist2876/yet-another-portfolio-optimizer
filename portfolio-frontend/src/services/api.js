const API_URL = "http://127.0.0.1:8000";
import axios from "axios";

export async function optimizePortfolio(symbols, riskAversion){
    try{
        const response = await axios.post(`${API_URL}/optimize`, {
            symbols: symbols,
            risk_aversion: riskAversion
        });
        console.log("AXIOS POST CALLED");
        return response.data;
    } catch(error){
        if(error.response){
            throw new Error(error.response.data.detail || "Server error");
        } else if(error.request){
            throw new Error("Backend not reachable"); 
        } else{
            throw new Error("Request setup failed");
        }
    }

}