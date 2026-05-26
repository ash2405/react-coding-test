import { Files } from "./Files/index.tsx"
import { NastedChecks } from "./NastedChecks/index.tsx"
import { OTP } from "./OTP"
import { PageSet } from "./PageSet.tsx"
import { Search } from "./Search/index.tsx"
import { Test } from "./Test"

function App() {
  return (
    // <Test />
    // <PageSet />
    // <Search />
    // <Files />
    // <OTP />
    <div className="grid place-content-center w-[100vw]">

    <NastedChecks />
    </div>
  )
}

export default App