import "reflect-metadata";
import 'style.css'
import 'mobile.css'
import {createRoot} from 'react-dom/client'
import App from './App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App/>)
