import ReactPlayer from "react-player";
import { Link } from "@inertiajs/react";

export default function Show() {
    return (
        <section
            className="mx-auto w-screen h-screen relative watching-page font-poppins bg-form-bg"
            id="stream"
        >
            <div className="pt-28 bg-form-bg">
                <ReactPlayer
                    url="https://youtu.be/mqqft2x_Aa4"
                    controls
                    width={"100%"}
                    height={"800px"}
                />
            </div>

            {/* <!-- Button back to dashboard --> */}
            <div className="absolute top-5 left-5 z-20">
                <Link href={route("prototype.dashboard")}>
                    <img
                        src="/icons/ic_arrow-left.svg"
                        className="transition-all btn-back w-[46px]"
                        alt="stream"
                    />
                </Link>
            </div>

            {/* <!-- Video Title --> */}
            <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                    Details Screen Part Final
                </span>
            </div>
        </section>
    );
}
