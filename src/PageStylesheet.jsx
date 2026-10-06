import { useEffect } from 'react'

function PageStylesheet({ css }) {
  useEffect(() => {
    const stylesheet = document.createElement('style')
    stylesheet.textContent = css
    document.head.append(stylesheet)

    return () => stylesheet.remove()
  }, [css])

  return null
}

export default PageStylesheet
