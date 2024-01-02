import { Link } from "react-router-dom";

const PostDetail = () => {
    return (
        <>
            <div className="min-h-[90vh] p-5 text-left max-w-[680px] my-0 mx-auto leading-6">
                <div className="pt-6 pb-6 border-t-[1px] border-solid border-[#f2f2f2]">
                    <div className="text-xl font-semibold my-3.5 mx-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="py-2.5 px-0 flex gap-2 text-sm items-center">
                        <div className="w-9 h-9 bg-[#f2f2f2] rounded-full" />
                        <div className="text-[gray]">패스트캠퍼스</div>
                        <div className="text-[gray]">2023.07.08 토요일</div>
                    </div>
                    <div className="flex gap-2 flex-row-reverse text-sm py-2.5 px-0 border-y-[1px] border-solid border-[#f2f2f2] text-[gray]">
                        <div className="cursor-pointer hover:text-black focus:text-black">삭제</div>
                        <div className="hover:text-black focus:text-black">
                            <Link to={`/posts/edit/1`} className="hover:text-black focus:text-black text-[gray]">
                                수정
                            </Link>
                        </div>
                    </div>
                    <div className="py-5 px-0 text-[dimgray] text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget pretium nunc. Duis sed arcu eget leo maximus
                        fermentum vel ut risus. Morbi quis enim consequat, venenatis mauris a, bibendum justo. Vestibulum eros risus,
                        feugiat eget auctor et, lacinia in quam. Pellentesque pellentesque nunc ultricies nulla convallis finibus. Nulla
                        interdum laoreet ex, id euismod arcu. Vestibulum pulvinar sem dolor, in laoreet nunc faucibus eu. Suspendisse
                        convallis vehicula turpis ut dignissim. Sed nec turpis suscipit, ultricies nisi non, ullamcorper diam. Duis non
                        ullamcorper enim. Suspendisse egestas lorem sed enim gravida, sit amet ultricies ligula dignissim. Praesent nec
                        consequat est. Praesent interdum blandit dolor, a dapibus erat gravida ut. Maecenas blandit diam est, ut viverra
                        augue faucibus ut. Curabitur varius vestibulum erat sit amet malesuada.
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostDetail;
