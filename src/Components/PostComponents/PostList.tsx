import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
    hasNavigation?: boolean;
}

type TabType = "all" | "my";

const PostList = ({ hasNavigation = true }: PostListProps) => {
    const [activeTab, setActiveTab] = useState<TabType>("all");

    return (
        <>
            {hasNavigation && (
                <div className="flex gap-6 my-0 mx-auto max-w-[680px] text-base text-[gray] cursor-pointer pt-12 px-5">
                    <div
                        role="presentation"
                        onClick={() => setActiveTab("all")}
                        className={activeTab === "all" ? "text-black font-semibold" : ""}
                    >
                        전체
                    </div>
                    <div
                        role="presentation"
                        onClick={() => setActiveTab("my")}
                        className={activeTab === "my" ? "text-black font-semibold" : ""}
                    >
                        나의 글
                    </div>
                </div>
            )}
            <div className="min-h-[90vh] p-5 text-center max-w-[680px] my-0 mx-auto leading-6">
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="py-6 border-t-[1px] border-solid border-[#f2f2f2]">
                        <Link to={`/posts/${index}`}>
                            <div className="flex gap-2 text-sm items-center">
                                <div className="w-9 h-9 bg-[#f2f2f2] rounded-full" />
                                <div className="text-[gray]">패스트캠퍼스</div>
                                <div className="text-[gray]">2023.07.08 토요일</div>
                            </div>
                            <div className="text-xl font-semibold my-3.5">게시글 {index}</div>
                            <div className="text-[dimgray] text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget pretium nunc. Duis sed arcu eget leo
                                maximus fermentum vel ut risus. Morbi quis enim consequat, venenatis mauris a, bibendum justo. Vestibulum
                                eros risus, feugiat eget auctor et, lacinia in quam. Pellentesque pellentesque nunc ultricies nulla
                                convallis finibus. Nulla interdum laoreet ex, id euismod arcu. Vestibulum pulvinar sem dolor, in laoreet
                                nunc faucibus eu. Suspendisse convallis vehicula turpis ut dignissim. Sed nec turpis suscipit, ultricies
                                nisi non, ullamcorper diam. Duis non ullamcorper enim. Suspendisse egestas lorem sed enim gravida, sit amet
                                ultricies ligula dignissim. Praesent nec consequat est. Praesent interdum blandit dolor, a dapibus erat
                                gravida ut. Maecenas blandit diam est, ut viverra augue faucibus ut. Curabitur varius vestibulum erat sit
                                amet malesuada.
                            </div>
                            <div className="flex gap-2 flex-row-reverse text-sm text-[gray]">
                                <div className="cursor-pointer hover:text-black focus:text-black">삭제</div>
                                <div className="hover:text-black focus:text-black">수정</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PostList;
