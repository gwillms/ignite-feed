import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/gwillms.png'/>
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Willms</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>

                <time title='04 de janeiro às 10:20' dateTime='2024-01-04 10:20:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#"></a> jane.design/doctorcare</p>
                <p><a href="#"></a> #novoprojeto #nlw #rocketseat</p>
            </div>
        </article>
    );
}