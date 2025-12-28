import { useState } from "react";
import { optimizePortfolio } from "../services/api";
import { motion, AnimatePresence } from "framer-motion";
import "./OptimizeForm.css";

function OptimizeForm() {
  const [symbols, setSymbols] = useState("");
  const [risk, setRisk] = useState(1);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const symbolList = symbols.split(",").map(s => s.trim());
      const data = await optimizePortfolio(symbolList, risk);
      setResult(data);
    } catch (err) {
      setError(err.message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1>Portfolio Optimizer</h1>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Stock Symbols</label>
          <input
            type="text"
            placeholder="AAPL, MSFT"
            value={symbols}
            onChange={(e) => setSymbols(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label>Risk Aversion</label>
          <input
            type="number"
            step="0.1"
            value={risk}
            onChange={(e) => setRisk(e.target.value)}
          />
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {loading ? "Optimizing…" : "Optimize"}
        </motion.button>
      </form>

      {/* Error Animation */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="error"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Animation */}
      <AnimatePresence>
        {result && (
          <motion.div
            className="results"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <h3>Optimal Allocation</h3>
            <ul>
              {result.symbols.map((sym, i) => (
                <li key={sym}>
                  <span>{sym}</span>
                  <span>{(result.weights[i] * 100).toFixed(2)}%</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default OptimizeForm;
