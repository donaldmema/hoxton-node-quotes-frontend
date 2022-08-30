import { Quote } from "../components/Quote";
import { QuoteItem } from "../types";

type Props = { quote: QuoteItem };

export function RandomQuote({ quote }: Props) {
  return <Quote quote={quote} />;
}
