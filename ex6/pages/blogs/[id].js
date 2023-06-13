import { useRouter } from "next/router";

const Blog = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <h2>Blog Information</h2>
            <p>Student: {id}</p>
        </div>
    );
};

export default Blog;