import { useEffect, useState } from 'react'
import '../styles/repositories.scss'
import { RepositoryItem } from './RepositoryItem'

type Repository = {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    function loadRepository() {
      fetch('https://api.github.com/orgs/facebook/repos')
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
          <span className="loading-label">loading...</span>
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
