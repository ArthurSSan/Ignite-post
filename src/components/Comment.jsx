import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0) 

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
           <Avatar hasBorder={false} src="https://github.com/ArthurSSan.png" /> 
           <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Arthur Silveira</strong>
                            <time dateTime='2023-01-31 19:44'>Cerca de 1 hora atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>

                    </header>
                
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                       <ThumbsUp/>
                       Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

           </div>
        </div>
    )
}