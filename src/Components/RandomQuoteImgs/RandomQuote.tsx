import React, { useEffect, useState } from "react";
import { NewQuoteProps } from "../../types/QuoteType";
import useRandomizer from "./useRandomizer";
import { motion, Variants } from "framer-motion";

const DefaultQuote = {
  content: "",
  id: 0,
  originator: {
    description: "",
    id: 0,
    name: "",
    url: "",
  },
};

type RandomQuoteProps = {
  change: boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const charVariants: Variants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const RandomQuote = ({ change, setChange }: RandomQuoteProps) => {
  const { getRandomQuote } = useRandomizer();
  const [quote, setQuote] = useState<NewQuoteProps>(DefaultQuote);
  const [textChars, setTextChars] = useState<string[]>([]);

  useEffect(() => {
    if (change) {
      getRandomQuote({ setTextChars, setQuote, setChange });
    }
  }, [change]);



  return (
    <>
      <div key={quote.id}>
        <h3 className="text-lg mb-2">{quote.originator.name}</h3>
        <h1 >
          {textChars ? (
            <motion.p
              className="overy font-quote"
              initial="hidden"
              whileInView="reveal"
              transition={{staggerChildren: 0.02}}
            >
              "
              {textChars.map((char, index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.5 }}
                  variants={charVariants}
                  className={`${change ? "textChange" : ""} `}
                >
                  {char}
                </motion.span>
              ))}
              "
            </motion.p>
          ) : (
            ""
          )}
        </h1>
        <section className="flex flex-col items-center">
          <a href={quote.originator.url} target="blank" className="w-full">
            <button className="mt-4 pt-2 pb-2 pr-4 pl-4 bg-white text-zinc-900 w-full hover:bg-zinc-300 hover:text-zinc-50 transition-all duration-300">
              Mais citações dele?
            </button>
          </a>
          {quote.originator.description && (
            <details className="flex">
              <summary className="hover:cursor-pointer text-center mt-4 ">
                Um pouco sobre {quote.originator.name}
              </summary>
              <p className="text-left overflow-y-auto max-h-96 mt-2">
                {quote.originator.description}
              </p>
            </details>
          )}
        </section>
      </div>
    </>
  );
};

export default RandomQuote;
