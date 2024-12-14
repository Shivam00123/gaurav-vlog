import dp from "../public/gaurav.jpg";
import youtubethumbnail from "../public/y-thumbnail.jpeg";
import Links from "./components/Links";
import { BsThreeDotsVertical } from "react-icons/bs";
import { sm_links } from "./data/sm-links";

function App() {
  const links = [
    {
      link: sm_links.instagram,
      title: "Instagram",
    },
    {
      link: sm_links.whatsapp,
      title: "WhatsApp",
    },
    {
      link: sm_links.facebook,
      title: "Facebook",
    },
  ];

  const shareData: any = {
    title: "Check this out!",
    text: "Here is a great post you might like.",
    url: "https://yourwebsite.com",
  };

  const handleShare = (url: any) => {
    // For mobile devices that support native sharing
    if (navigator.share) {
      navigator
        .share({
          title: shareData.title,
          text: shareData.text,
          url: url,
        })
        .then(() => console.log("Shared successfully!"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback to opening the URL in a new tab for other platforms
      window.open(url, "_blank");
    }
  };

  return (
    <div className="w-screen min-h-screen bg-blackColor flex items-center justify-center font-title text-textColor tracking-wider">
      <div className="w-full lg:w-2/5 h-full  flex flex-col items-center justify-start gap-10 p-10">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-5">
          <div className="w-32 h-32 overflow-hidden rounded-full">
            <img
              src={dp}
              alt="gaurav-negi"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-bold text-xl">Gaurav Negi Vlogs UK15</h1>
          <p className="text-center font-semibold">
            Welcome to my website! Explore my YouTube vlogs and social media for
            funny moments, travel adventures, and delicious food stories.
          </p>
        </div>
        <div className="w-full h-12 bg-red gap-5 flex items-center justify-center">
          <Links />
        </div>
        <a
          href={sm_links.youtube}
          className="w-full object-contain rounded-md overflow-hidden relative cursor-pointer"
        >
          <img
            src={youtubethumbnail}
            alt="Gaurav Negi Vlogs UK15"
            className="w-full"
          />
          <h1 className="absolute top-5 right-5 font-bold text-lg text-blackColor">
            Youtube
          </h1>
        </a>
        <div className="w-full h-fit flex flex-col gap-10 relative">
          {links?.map((l) => (
            <div className="w-full h-fit relative">
              <a
                target="_blank"
                href={l.link}
                key={l.title}
                className="w-full h-[70px] border-2 border-borderColor rounded-md flex items-center justify-center"
              >
                <h1>{l.title}</h1>
              </a>
              <div
                onClick={() => handleShare(l.link)}
                className="absolute right-2 z-50 top-0 text-dots cursor-pointer w-10 h-full flex items-center justify-center"
              >
                <BsThreeDotsVertical />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
