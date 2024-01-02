import Footer from "Components/LayoutComponents/Footer";
import Header from "Components/LayoutComponents/Header";
import PostList from "Components/PostComponents/PostList";

export const Home = () => {
    return (
        <>
            <Header />
            <PostList />
            <Footer />
        </>
    );
};

export default Home;
