import Img7 from "@/assets/images/crypto-influencers-video.jpg.webp";
import Img8 from "@/assets/images/fund.jpeg";
import Img9 from "@/assets/images/web3.jpg";
import Img10 from "@/assets/images/discord.jpeg";
import Img11 from "@/assets/images/investor.png";
import Img12 from "@/assets/images/pr.jpg";
import Img13 from "@/assets/images/social.webp";
import Img14 from "@/assets/images/crypto.jpg";
import Button from "@/components/Button";
import Comp from "@/components/Comp";

export default function Blog() {
  const details = [
    {
      title: "Fundraising Service",
      subtitle: "Fundraising services for your crypto startup",
      text: "Fundraising for early stage Web3 projects. Our comprehensive options are designed to deliver on specific aspects of your product development needs. This includes our onchain and offchain raise models where we partner with platforms, launchpada, venture capitals, Investors groups and kols",
      position: "left",
      img: Img8,
      gradient: "linear-gradient(to right, blue, orange)",
    },
    {
      title: "Web3 Marketing Strategy",
      subtitle: "Full-stack digital marketing services",
      text: "Lets make marketing strategy effortless. Our holistic strategy cover everything from product/exposure marketing, targeted investors/buyer reachouts, infrastructure. We will work with our amazing marketing team to achieve your goals.",
      position: "right",
      img: Img9,
      gradient: "linear-gradient(to right, green, purple)",
    },
    {
      title: "Build Discord and Telegram communities",
      subtitle: "Community Management",
      text: "Product advisory/community development. After the raise, we are still here for the long journey ahead. We will provide expert advise on maintaining a successful launched, develop and grow your community from scratch and encorage the building of a fiercely loyal space.",
      position: "left",
      img: Img10,
      gradient: "linear-gradient(to right, red, blue)",
    },
    {
      title: "Win investors with crypto pitch decks",
      subtitle: "Investor Strategy",
      text: "Let us help you create today's best crypto pitch deck for your crypto project. While you are a builder and expert in your domain area, we, on the other hand, contribute by crafting a compelling startup narrative based on a decade's experience in creating winning pitch decks. Our work involves market research, design, branding, business models, technology diagrams, litepapers, investor updates, and more. We can also help you develop a comprehensive go-to-market strategy for your project.",
      position: "right",
      img: Img11,
      gradient: "linear-gradient(to right, black, green)",
    },
    {
      title: "Impactful PR and content marketing",
      subtitle: "PR & Content Marketing",
      text: "Generate buzz around your project, new feature launches, and your marketing campaigns with smart and high-impact press releases and content marketing strategies. Benefit from our partnerships with leading crypto native and mainstream publications and capabilities to write powerful content across your blog, Medium, Mirror.xyz, and more. Our search engine optimization (SEO) processes also maximize the long-term, inbound search results discovery of your Web3 project.",
      position: "left",
      img: Img12,
      gradient: "linear-gradient(to right, red, brown)",
    },
    {
      title: "Engage across social media platforms",
      subtitle: "Social Media Management",
      text: "As networks grow and new ones emerge, we develop comprehensive social media marketing strategies for your project. Creating engaging content in your brand's unique voice and consistently keeping conversations active across platforms, we do what's needed to keep your project top-of-mind and in the news. Rely on us to keep tabs on trends, tap into memes, and build community trust with authentic and timely content. Activate X (formerly Twitter), YouTube, Farcaster, and more platforms today.",
      position: "right",
      img: Img13,
      gradient: "linear-gradient(to right, black, green)",
    },
    {
      title: "Grow with crypto native ad campaigns",
      subtitle: "Ads & Promotions",
      text: "We simplify how you can get the word out in the crypto space. We balance and adapt a mix of native crypto platforms with traditional marketing avenues to ensure your brand is seen by the right audience on time. We use a variety of tools and programmatic advertising techniques to ensure conversion rate optimization. The blockchain marketing ecosystem is constantly growing, and we work with you to benefit from every platform's global reach and impact.",
      position: "left",
      img: Img14,
      gradient: "linear-gradient(to right, gray, blue)",
    },
    {
      title: "KOL and influencer marketing for reach",
      subtitle: "Crypto Influencers & Videos",
      text: "Building credibility and educating users or potential investors about your crypto project offerings also benefits when you associate with ideal crypto influencers. We work with an array of creators across the globe to increase your customer base. Finding the key opinion leaders (KOL) for your project's unique needs requires systematic and ongoing strategies to get the highest ROI on your investment. We also produce videos and any content necessary to maximize the effectiveness of every campaign.",
      position: "right",
      img: Img7,
      gradient: "linear-gradient(to right, blue, yellow, red)",
    },
  ];

  return (
    <div
      id="blog"
      className="py-20 padding bg-purple-100 space-y-12 lg:space-y-16"
    >
      {details.map((data, key) => (
        <Comp
          key={key}
          img={data.img}
          position={data.position}
          title={data.title}
          subtitle={data.subtitle}
          text={data.text}
          gradient={data.gradient}
        />
      ))}
      <div className="py-10 center ">
        <Button text="Book a call" />
      </div>
    </div>
  );
}
