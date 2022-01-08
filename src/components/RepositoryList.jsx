import { useEffect, useState } from 'react'
import '../styles/repositories.scss'
import { RepositoryItem } from './RepositoryItem'

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    function loadRepository() {
      fetch('https://api.github.com/orgs/rocketseat/repos')
        .then((response) => response.json())
        .then((data) => {
          setRepositories(data)
        })
    }

    loadRepository()
  }, [])

  return (
    <section className="repository-list">
      <div className="container">
        <h1>lista de repositórios</h1>

        {repositories.length == 0 ? (
          <span>loading...</span>
        ) : (
          <ul>
            {repositories.map((repository) => (
              <RepositoryItem key={repository.name} repository={repository} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
