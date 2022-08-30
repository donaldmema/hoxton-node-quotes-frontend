import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AllQuotes } from "./pages/AllQuotes";
import { RandomQuote } from "./pages/RandomQuote";
import { QuoteItem } from "./types";

function App() {
  const [quotes, setQuotes] = useState<QuoteItem[]>();
  const [randomQuote, setRandomQuote] = useState<QuoteItem>();

  useEffect(() => {
    fetch("http://localhost:3333/quotes")
      .then((res) => res.json())
      .then((quotesFromServer) => {
        setQuotes(quotesFromServer);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/quotes/random")
      .then((res) => res.json())
      .then((quoteFromServer) => {
        setRandomQuote(quoteFromServer);
      });
  }, []);

  if (!quotes) {
    return <div>Loading...</div>;
  }

  if (!randomQuote) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes quotes={quotes} />} />
        <Route
          path="/random-quote"
          element={<RandomQuote quote={randomQuote} />}
        />
      </Routes>
    </div>
  );
}

export default App;
