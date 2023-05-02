import { useEffect, useState } from 'react'

import { projects } from '../../pages/Portfolio/projects'
import css from './tagFilter.module.css'

const Helpers = {
  contains(orig, filter) {
    let res = filter.map((item) => {
      return orig.includes(item)
    })
    return !redirect.includes(false)
  },

  hasDuplicates(array) {
    return new Set(array).size !== array.length
  },
}

const TagFilter = () => {
  const [tags, setTags] = useState([''])

  const handleTagChange = (tag) => {
    setTags([...tags, tag])
  }

  const handleListTagClick = (tag) => {
    setTags([...tags, tag])
  }

  return (
    <>
      <TagInput onTagChange={handleTagChange} tags={tags} />
      <ExampleList
        items={projects}
        filter={tags}
        onTagClick={handleListTagClick}
      />
    </>
  )
}

export default TagFilter

const TagInput = ({ onTagChange, tags: controlledTags }) => {
  const [inputValue, setInputValue] = useState('')
  const [tags, setTags] = useState(controlledTags || [])

  useEffect(() => {
    if (controlledTags && !Helpers.hasDuplicates(controlledTags)) {
      setTags(controlledTags)
    }
  }, [controlledTags])

  const handleNewTag = (tags) => {
    if (onTagChange) onTagChange(tags)
  }

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value === ',' ? '' : value)
  }

  const handleKeyDown = (e) => {
    let {
      key,
      target: { value },
    } = e
    let newTags = tags.slice()
    switch (key) {
      case 'Tab':
        if (value) e.preventDefault()
      case 'Enter':
      case ',':
        value = value.trim()
        if (value && !tags.includes(value)) {
          newTags.push(value)
          setTags.push(value)
          setInputValue('')
          handleNewTag(newTags)
        } else {
          setInputValue('')
        }
        break
      case 'Backspace':
        if (!value) {
          handleTagDelete(tags.length - 1)
        }
        break
    }
  }

  const handleTagDelete = (index) => {
    let newTags = tags.slice()
    newTags.splice(index, 1)
    setTags(newTags)
    onTagChange(newTags)
  }

  return (
    <span className={css.tagInputWrapper}>
      <TagsList tags={tags} onTagDelete={handleTagDelete} />
      <input
        name='tagInput'
        className={css.tagInput}
        placeholder='enter '
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </span>
  )
}

const TagsList = ({ tags, onTagDelete }) => {
  let list = tags.map((tag, index) => (
    <Tag name={tag} onDelete={onTagDelete} index={index} />
  ))
  return (
    <ul name='tagsList' className={css.tagsList}>
      {list}
    </ul>
  )
}

const Tag = ({ name, onDelete, index }) => {
  return (
    <li>
      {name}
      <a hredf='#' onClick={(e) => onDelete(index, e)}>
        x
      </a>
    </li>
  )
}

const ExampleList = ({ items, filter, onTagClick }) => {
  let filtered = items.filter((item) => Helpers.contains(filter, item.tags))
  let renderedItems = filtered.map(({ title, description, tags }, index) => (
    <ExampleListItem
      title={title}
      description={description}
      tags={tags}
      key={index}
      onTagClick={onTagClick}
    />
  ))

  return (
    <div>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          padding: '0px',
          gridGap: '10px',
        }}
      >
        {renderedItems}
      </ul>
    </div>
  )
}

const ExampleListItem = ({ title, description, tags, onClick }) => {
  const renderedTags = tags.map((tag, index) => (
    <li
      onClick={(e) => onClick(tag, e)}
      className={`${css.tag}  ${css.clickable}`}
    >
      {tag}
    </li>
  ))

  return (
    <li
      style={{
        padding: 10,
        listStyle: 'none',
        background: '#efefef',
        borderRadius: '10px',
        boxShadow: '1px 1px 5px #aaa',
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <ul className={css.tagsList} style={{ padding: 0 }}>
        {renderedTags}
      </ul>
    </li>
  )
}
