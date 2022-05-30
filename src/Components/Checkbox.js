import React, { useState } from "react"

export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const [showElement, setShowElement] = useState(false)
  const defaultRef = React.useRef()
  const resolvedRef = ref || defaultRef
  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return (
    <>
      <input
        type="checkbox"
        ref={resolvedRef}
        {...rest}
        data-testid="cbShowHide"
        checked={showElement}
        onChange={(e) => setShowElement(e.target.checked)}
      />
      {showElement && (
        <div classname="box" data-testid="box">
          Testing checkbox
        </div>
      )}
    </>
  )
})
