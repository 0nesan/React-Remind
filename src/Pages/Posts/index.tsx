import Footer from "Components/LayoutComponents/Footer";
import Header from "Components/LayoutComponents/Header";
import PostList from "Components/PostComponents/PostList";

export default function PostsPage() {
    return (
        <>
            <Header />
            <PostList hasNavigation={false} />
            <Footer />
        </>
    );
}
