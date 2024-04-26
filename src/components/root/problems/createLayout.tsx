import React, { FC } from 'react'

interface Props { }

const CreateLayout: FC<Props> = () => {
  return (
    <>
      <h2 className="text-xl font-bold">Problem 3: Layout</h2>
      <p className="mt-1">
        For this task, your objective is to create and apply a global shared
        layout. The layout should consist of:
      </p>
      <ul className="list-decimal pl-6">
        <li className="mt-1">
          A header displaying
          <strong className="mx-1">&apos;Jedi Software&apos;</strong> that collapses
          when scrolling up and reappears when scrolling stops.
        </li>
        <li className="mt-1">
          A collapsible menu offering redirection to the homepage and
          <span className="text-highlight">
            /find-the-cheese
          </span>
          .
        </li>
      </ul>
    </>
  )
}

export default CreateLayout
