import React, { FC } from 'react'

interface Props { }

const RefactorIndexPage: FC<Props> = () => {
  return (
    <>
      <h2 className="text-xl font-bold">Problem 1: Refactoring</h2>
      <p className="mt-1">
        For this task, your objective is to refactor the current page
        following your coding conventions and best practices. Look for
        opportunities to enhance code structure, eliminate redundancy,
        clarify variable names, and simplify complex logic.
      </p>
    </>
  )
}

export default RefactorIndexPage
