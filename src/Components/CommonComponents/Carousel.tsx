import { useState } from "react";

const IMAGE_URL = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1606117331085-5760e3b58520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1667971286579-63a5222780ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
];

const Carousel = () => {
    const [activeImage, setActiveImage] = useState(1);

    return (
        <div>
            <div className="my-0 mx-auto max-w{980px} mt-36px">
                <ul>
                    <input type="radio" name="radio-buttons" checked={activeImage === 1} readOnly />
                    <li>
                        <div>
                            <img alt="scenery 1" src={IMAGE_URL[0]} />
                        </div>
                        <div>
                            <label onClick={() => setActiveImage(3)}>
                                <span>&lsaquo;</span>
                            </label>
                            <label onClick={() => setActiveImage(2)}>
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" checked={activeImage === 2} readOnly />
                    <li>
                        <div>
                            <img alt="scenery 2" src={IMAGE_URL[1]} />
                        </div>
                        <div>
                            <label onClick={() => setActiveImage(1)}>
                                <span>&lsaquo;</span>
                            </label>
                            <label onClick={() => setActiveImage(3)}>
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" checked={activeImage === 3} readOnly />
                    <li>
                        <div>
                            <img alt="scenery 3" src={IMAGE_URL[2]} />
                        </div>
                        <div>
                            <label onClick={() => setActiveImage(2)}>
                                <span>&lsaquo;</span>
                            </label>
                            <label onClick={() => setActiveImage(1)}>
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <div>
                        <label onClick={() => setActiveImage(1)}></label>
                        <label onClick={() => setActiveImage(2)}></label>
                        <label onClick={() => setActiveImage(3)}></label>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Carousel;
