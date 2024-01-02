import { Route, Routes, Navigate } from "react-router-dom";
import Home from "Pages/Home";
import PostList from "Components/PostComponents/PostList";
import PostDetail from "Components/PostComponents/PostDetail";
import New from "Pages/Posts/New";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<PostList />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/posts/new" element={<New />} />
                {/* <Route path="/posts/edit/:id" element={<PostEdit />} /> */}
                {/* <Route path="/profile" element={<ProfilePage />} /> */}
                {/* <Route path="/login" element={<LoginPage />} /> */}
                {/* <Route path="/signup" element={<SignupPage />} /> */}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </>
    );
};

export default Router;
