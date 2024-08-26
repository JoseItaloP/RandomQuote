import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center gap-8">
      <h1 className="text-9xl text-white">Erro 404</h1>
      <Link to="/" className="mt-1 pt-2 pb-2 pr-4 pl-4 bg-white text-zinc-900 hover:bg-zinc-300 hover:text-zinc-50 transition-all duration-300">Voltar para pagina inicial</Link>
    </div>
  )
}

export default ErrorPage
