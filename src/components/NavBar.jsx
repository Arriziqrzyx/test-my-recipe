import { useState } from "react"

export default function Component({ search }) {
  const [input, setInput] = useState('')
  const submitSearch = (e) => {
    e.preventDefault()
    search(input)
    setInput('')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-warning border-bottom border-body px-2" >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h3 data-testid="my-recipe" className="m-0">My Recipe</h3>
        <form data-testid="form-search" className="d-flex" role="search" onSubmit={submitSearch}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className="form-control me-2" type="search" placeholder="Recipe Name" aria-label="Search" />
          <button className="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}