import React from "react"
import Article from "./Article"

function ArticleList({posts}) {
    return (
        <main>
            {posts.map((post)=>{
                return(<div key={post.id}>
                    <Article title={post.title} date={post.date} preview={post.preview}/>
                    </div>)
            })}

        </main>
    )
}


export default ArticleList