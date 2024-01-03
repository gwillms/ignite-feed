import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return(
    <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
            author="Gabriel Willms"
            content="Occaecat exercitation fugiat adipisicing pariatur elit tempor amet commodo ex enim."
            />
          </main>
        </div>
    </div>
  ) 
}