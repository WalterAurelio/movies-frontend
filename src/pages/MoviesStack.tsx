import { Route, Routes } from "react-router-dom"
import MovieDetails from "./MovieDetails"

function MoviesStack() {
  return (
    <Routes>
      <Route index element={<h1>Hola, soy Index</h1>} />
      <Route path=":id" element={<MovieDetails />} />
      <Route path="within" element={<h1>Element within</h1>} />
    </Routes>
  )
}
export default MoviesStack