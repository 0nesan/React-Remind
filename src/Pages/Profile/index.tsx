import Footer from "Components/LayoutComponents/Footer";
import Header from "Components/LayoutComponents/Header";
import PostList from "Components/PostComponents/PostList";

const Profile = () => {
    return (
        <>
            <Header />
            <PostList hasNavigation={false} />
            <Footer />
        </>
    );
};

export default Profile;
