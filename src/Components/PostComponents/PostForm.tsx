const PostForm = () => {
    return (
        <form action="/post" method="POST" className="my-0 mx-auto max-w-[680px] p-5 mt-5">
            <div className="block font-medium mb-2.5 bt-5 mt-5 w-full">
                <label className="block font-medium mb-2.5 mt-5 " htmlFor="title">
                    제목
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    className="h-6 p-2.5 text-base rounded border-solid border-[1px] border-[lightgray] w-[96%] max-w-[680px] box-content"
                />
            </div>
            <div className="block font-medium mb-2.5 bt-5 mt-5 w-full">
                <label className="block font-medium mb-2.5 mt-5 " htmlFor="summary">
                    요약
                </label>
                <input
                    type="text"
                    name="summary"
                    id="summary"
                    required
                    className="h-6 p-2.5 text-base rounded border-solid border-[1px] border-[lightgray] w-[96%] max-w-[680px] box-content"
                />
            </div>
            <div className="block font-medium mb-2.5 bt-5 mt-5 w-full">
                <label className="block font-medium mb-2.5 mt-5 " htmlFor="content">
                    내용
                </label>
                <textarea
                    name="content"
                    id="content"
                    required
                    className="min-h-[400px] p-2.5 text-base leading-6 rounded border-[1px] border-solid border-[lightgray] w-[96%] max-w-[680px] box-content"
                />
            </div>
            <div className="block font-medium mb-2.5 bt-5 mt-5 w-full">
                <input
                    type="submit"
                    value="제출"
                    className="h-12 p-2.5 my-0 mx-auto text-base rounded border-solid border-[1px] bg-[#2563eb] w-full max-w-[680px] text-white cursor-pointer float-right hover:bg-[#1945a4] focus:bg-[#1945a4]"
                />
            </div>
        </form>
    );
};

export default PostForm;
