import React from 'react'

interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export const RepositoryItem: React.FC<RepositoryItemProps> = (props) => {
  return (
    <li className="repository-item">
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>

      <a target="_blank" href={props.repository.html_url}>
        Acessar repositório
      </a>
    </li>
  )
}
