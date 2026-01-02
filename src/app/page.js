import Image from 'next/image'
import TaskList from './taskList';
import Runescape from './runescape';
import MainArea from './mainArea';


export default function Home() {
  return (
    <div>
    <h1>GAMER!~</h1>
    <MainArea />
    {/* <Runescape /> */}
    <TaskList />
    </div>
  )
}
