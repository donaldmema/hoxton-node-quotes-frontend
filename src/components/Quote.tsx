import { QuoteItem } from "../types";

type Props = {
  quote: QuoteItem;
};

export function Quote({ quote }: Props) {
  return (
    <div className="quote-card">
      <p>{quote.text}</p>
      <p>— {quote.author}</p>
    </div>
  );
}
