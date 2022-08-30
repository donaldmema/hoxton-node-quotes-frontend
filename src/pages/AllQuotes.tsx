import { Quote } from "../components/Quote";
import { QuoteItem } from "../types";

type Props = {
  quotes: QuoteItem[];
};

export function AllQuotes({ quotes }: Props) {
  return (
    <>
      <h1>Quotes</h1>
      <div>
        {quotes.map((quote) => (
          <Quote key={quote.id} quote={quote} />
        ))}
      </div>
    </>
  );
}
