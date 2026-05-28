import { Chip } from "./Chip/index.tsx"
import { Files } from "./Files/index.tsx"
import { NastedChecks } from "./NastedChecks/index.tsx"
import { OTP } from "./OTP"
import { PageSet } from "./PageSet.tsx"
import { Search } from "./Search/index.tsx"
import { Test } from "./Test"
import { Todo } from "./Todo/index.tsx"

function App() {
  return (
    // <Test />
    // <PageSet />
    // <Search />
    // <Files />
    <div className="grid place-content-center w-[100vw]">
       {/* <OTP /> */}

    {/* <NastedChecks /> */}
    {/* <Chip /> */}
    <Todo />
    </div>
  )
}

export default App