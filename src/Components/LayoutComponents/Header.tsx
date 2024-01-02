import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-between min-h-10 border-b border-solid border-bgGray py-2.5 px-10 box-content items-center">
            <Link to="/" className="text-black font-semibold text-lg mx-2.5">
                React Blog
            </Link>

            <div>
                <Link to="/posts/new" className="mx-2.5 text-gray-500 hover:text-black focus:text-black">
                    글쓰기
                </Link>
                <Link to="/posts" className="mx-2.5 text-gray-500 hover:text-black focus:text-black">
                    게시글
                </Link>
                <Link to="/profile" className="mx-2.5 text-gray-500 hover:text-black focus:text-black">
                    프로필
                </Link>
            </div>
        </header>
    );
};

export default Header;
