import { TagContainer } from './styles'

type TagProps = {
  children?: string
}

const Tag = ({ children }: TagProps) => {
  return <TagContainer>{children}</TagContainer>
}

export default Tag
