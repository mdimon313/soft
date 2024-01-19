import getAllPosts from "@/lib/getAllPosts"
import Container from "../components/Container";
import Link from "next/link";
import style from './post.module.css'

export default async function allPosts() {
    const posts = await getAllPosts();
    return (
        <section>
            <Container>
                <h1>All Posts</h1>
                <div>
                    <ul className={style.post}>
                        {posts.map(post => (<Link className={style.link} key={post.id} href={`/posts/${post.id}`}><li>{post.title}</li></Link>))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}