import Container from "@/app/components/Container";
import getPosts from "@/lib/getPost"

export default async function singlePosts({ params }) {
    const { id } = params;
    const post = await getPosts(id);
    console.log(post);
    return (
        <Container>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </Container>
    )
}