import { services, glueItems, machPills } from './data/services'
import { useTheme } from './hooks/useTheme'
import MachHeader from './components/MachHeader'
import ServicesTable from './components/ServicesTable'
import GlueSection from './components/GlueSection'

export default function App() {
  const [dark, toggleDark] = useTheme()
  return (
    <div className="app">
      <MachHeader dark={dark} onToggleTheme={toggleDark} machPills={machPills} />
      <main>
        <ServicesTable services={services} />
        <GlueSection glueItems={glueItems} />
      </main>
    </div>
  )
}
