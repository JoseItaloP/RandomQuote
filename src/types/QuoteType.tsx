export type NewQuoteProps = {
  content: string,
    id: number,
    originator: {
      description?: string,
      id: number,
      name: string,
      url: string
    }
}