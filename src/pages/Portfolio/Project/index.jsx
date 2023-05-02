import { useParams } from 'react-router-dom'
import { projects } from './../projects'

const Project = () => {
  const { id } = useParams()
  const project = projects.find((project) => project.id === parseInt(id))
  const { title } = project

  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

export default Project
