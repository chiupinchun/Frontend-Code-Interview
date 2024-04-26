import React, { FC } from 'react'

interface Props { }

const FindTheCheesePage: FC<Props> = () => {
  return (
    <>
      <h2 className="text-xl font-bold">Problem 2: Maze</h2>
      <article className='pt-1 space-y-4'>
        <p>
          For this task, your objective is to implement a page where a mouse
          traverses a maze to find cheese.
        </p>
        <p>
          During server-side rendering, you need to hit the
          <span className="text-highlight">
            /api/maze
          </span>
          endpoint to fetch the maze map array and display all the maps along
          with their respective start buttons on the screen. When the user
          clicks the start button, the mouse on that map will begin to solve
          the maze using Depth-First Search (DFS), with each step taking 100
          ms.
        </p>
        <p>
          Meanwhile, the start button will disappear, replaced by a reset
          button. Clicking the reset button will stop the mouse&apos;s movement,
          reset the map to its initial state, and the reset button will be
          replaced by the start button again.
        </p>
        <p>
          <a
            className="underline font-bold text-amber-500 cursor-pointer hover:text-amber-400 mr-1"
            href="https://youtube.com/shorts/uA744cMSNK8?si=U80OGTvH3rGV17zu"
            target="_blank"
          >
            Click
          </a>
          to watch a demonstration of the expected behavior.
        </p>
      </article>
      <p className='mt-4'>Note that:</p>

      <ul className="list-decimal pl-6 pt-1 space-y-1">
        <li>
          Put this page at the route
          <span className="text-highlight">
            /find-the-cheese
          </span>
          , and title it
          <strong className="mx-1">&apos;Find the cheese&apos;.</strong>
        </li>
        <li>
          Add description, &quot;Click &apos;Start&apos; to see how the mouse find the
          cheese by using DFS!&quot;, below page title
        </li>
        <li>
          The color of the walls is
          <span className="text-highlight">
            green-800
          </span>
        </li>
        <li>
          The color of the path is
          <span className="text-highlight">
            lime-50
          </span>
        </li>
        <li>
          The icon of the mouse is
          <span className="text-highlight">
            LuRat
          </span>
          with color
          <span className="text-highlight">
            neutral-500
          </span>
        </li>
        <li>
          The icon of the cheese is
          <span className="text-highlight">
            FaCheese
          </span>
          with color
          <span className="text-highlight">
            amber-400
          </span>
        </li>
        <li>
          Highlight current path with color
          <span className="text-highlight">
            amber-200
          </span>
        </li>
        <li>
          The button has a background color of amber-500, and a hover
          background color of amber-400.
        </li>
        <li>
          <span className="text-highlight">
            /api/maze
          </span>
          simulates an endpoint on another server, so you need to use axios
          to fetch the data.
        </li>
      </ul>
    </>
  )
}

export default FindTheCheesePage
