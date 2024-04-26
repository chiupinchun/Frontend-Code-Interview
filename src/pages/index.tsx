import CreateLayout from "./(root)/(components)/(problems)/createLayout";
import FindTheCheesePage from "./(root)/(components)/(problems)/findTheCheesePage";
import RefactorIndexPage from "./(root)/(components)/(problems)/refactorIndexPage";

const problems = [
  RefactorIndexPage,
  FindTheCheesePage,
  CreateLayout
]

export default function Home() {
  return (
    <main className="bg-amber-50 p-4 min-h-screen">
      <div className="p-4 max-w-[720px] mx-auto bg-white rounded shadow">
        <h1 className="font-bold text-4xl text-center">
          Frontend Engineer Assessment
        </h1>
        <p className="mt-6">
          Welcome to our frontend engineer assessment! This test is designed to
          evaluate your frontend development skills and related knowledge.
        </p>
        <p className="mt-4">
          Please read each question carefully and imagine them as typical work
          tasks. Respond in the same manner you would during your regular work.
        </p>
        <p className="mt-4">
          You can create any folders, ts/tsx/css files you need at any position
          that you think is appropriate.
        </p>
        <p className="mt-4">Here&apos;s the requirements for the assessment:</p>
        <ul className="list-decimal pl-6 pt-1 space-y-1">
          <li>
            <strong>NEVER</strong> change anything in the directories named in
            the pattern
            <span className="text-highlight">
              **/api/**
            </span>
          </li>
          <li>Style with tailwindcss and css file.</li>
          <li>
            Use
            <span className="text-highlight">
              axios
            </span>
            to fetch data
          </li>
          <li>
            Implement Responsive Web Design (RWD) with a breakpoint at 768px (md
            in tailwindcss default breakpoints)
          </li>
          <li>
            <p>
              Submit the URL of your answer repository by
              <strong className="mx-1">
                23:59 on the 5th day after receiving the questions,
              </strong>
              and cease answering (pushing commits). For example: if you receive
              the questions on Mar 1st, you should submit the answer by 23:59 on
              Mar 5th.
            </p>
          </li>
        </ul>
        <p className="mt-4">Good luck! Let&apos;s get started.</p>

        {problems.map((Problem, index) => (
          <div key={index} className="mt-6 border-t pt-6">
            <Problem />
          </div>
        ))}
      </div>
    </main>
  );
}
