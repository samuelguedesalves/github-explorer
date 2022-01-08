export function RepositoryItem(props) {
  return (
    <li className="repository-item">
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.link}>Acessar repositório</a>
    </li>
  )
}
