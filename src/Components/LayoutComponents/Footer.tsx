import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-bgGray min-h-10 py-5 px-10 text-sm text-center flex items-center justify-center gap-5">
            <Link to="/posts/new" className="no-underline text-gray-500 hover:text-black focus:text-block">
                글쓰기
            </Link>
            <Link to="/posts" className="no-underline text-gray-500 hover:text-black focus:text-block">
                게시글
            </Link>
            <Link to="/profile" className="no-underline text-gray-500 hover:text-black focus:text-block">
                프로필
            </Link>
        </footer>
    );
};

export default Footer;
