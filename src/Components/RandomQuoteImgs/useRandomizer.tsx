import { NewQuoteProps } from "../../types/QuoteType";

type getRandomQuoteProps = {
  setQuote: React.Dispatch<React.SetStateAction<NewQuoteProps>>;
  setTextChars: React.Dispatch<React.SetStateAction<string[]>>;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const useRandomizer = () => {
  function getRandomQuote({
    setQuote,
    setTextChars,
    setChange,
  }: getRandomQuoteProps) {
    const urlQuote =
      "https://quotes15.p.rapidapi.com/quotes/random/?language_code=pt";
    const optionsQuote = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9ce38d5506msha9bb72635962569p17087ejsnfd8281b24426",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
      },
    };

    async function fetchUp() {
      try {
        const response = await fetch(urlQuote, optionsQuote);
        const result: NewQuoteProps = await response.json();
        setQuote(result);
        const characters: string[] = [];
        const regex = /[\s\S]/gu;
        let match;
        while ((match = regex.exec(result.content)) !== null) {
          characters.push(match[0]);
        }
        setTextChars(characters);
      } catch (erro) {
        console.error(erro);
      } finally {
        setChange(false);
      }
    }

    fetchUp();
  }

  return {
    getRandomQuote,
  };
};

export default useRandomizer;
