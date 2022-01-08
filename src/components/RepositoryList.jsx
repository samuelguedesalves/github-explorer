import '../styles/repositories.scss'
import { RepositoryItem } from './RepositoryItem'

const repository = {
  name: 'Unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform',
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <div className="container">
        <h1>lista de repositórios</h1>

        <ul>
          <RepositoryItem repository={repository} />
          <RepositoryItem repository={repository} />
          <RepositoryItem repository={repository} />
        </ul>
      </div>
    </section>
  )
}
