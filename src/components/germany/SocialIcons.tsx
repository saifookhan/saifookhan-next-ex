import React from "react";
import Image from "next/image";
import { Card } from "antd";

import youtubeIcon from "../../../public/logos/youtube.svg";
import whatsappIcon from "../../../public/logos/whatsapp.svg";
import facebookIcon from "../../../public/logos/facebook.svg";
import Link from "antd/es/typography/Link";

const gridStyle: React.CSSProperties = {
  width: "20%",
  textAlign: "center",
  padding: "12px",
};
const gridStyleTwo: React.CSSProperties = {
  width: "80%",
  textAlign: "left",
  padding: "12px",
};

const socialChannels = [
  {
    image: whatsappIcon,
    imageAlt: "Study in Germany/EU",
    title: "Study in Germany/EU",
    subTitle: "894 members",
    type: "Whatsapp",
    link: "https://chat.whatsapp.com/BPw4HNTN90IDW5yJWVgfB6",
  },
  {
    image: whatsappIcon,
    imageAlt: "Work Germany/EU",
    title: "Work Germany/EU",
    subTitle: "569 members",
    type: "Whatsapp",
    link: "https://chat.whatsapp.com/J6WeoQ4kSlF4k6WoYcm81w",
  },
  {
    image: whatsappIcon,
    imageAlt: "Live Q&A Sessions Invite",
    title: "Live Q&A Sessions Invite",
    subTitle: "754 members",
    type: "Whatsapp",
    link: "https://chat.whatsapp.com/LYUxWCErPtUG5HdMOdUjky",
  },
  {
    image: whatsappIcon,
    imageAlt: "Study in US/UK/Canada/Australia",
    title: "Study in US/UK/Canada/Australia",
    subTitle: "193 members",
    type: "Whatsapp",
    link: "https://chat.whatsapp.com/Dlud50ZwbAL6bdzhQpxRao",
  },
  {
    image: facebookIcon,
    imageAlt: "Work/Study in EU/Germany - Support Community",
    title: "Work/Study in EU/Germany - Support Community",
    subTitle: "3.8K members",
    type: "Facebook",
    link: "https://www.facebook.com/groups/saifooexplores.community",
  },
  {
    image: youtubeIcon,
    imageAlt: "SaifooExplores - YouTube Channel",
    title: "SaifooExplores - YouTube Channel",
    subTitle: "2.5K subscribers",
    type: "YouTube",
    link: "https://openinyoutube.com/@saifooexplores",
  },
];

function SocialIcons() {
  return (
    <>
      <Card>
        {socialChannels.map((card, counter) => {
          return (
            <>
              <Card.Grid style={gridStyle}>
                <Link href={card.link} target="_blank">
                  <Image
                    className="p-1"
                    priority
                    src={card.image}
                    alt={card.imageAlt}
                    width={50}
                  />
                </Link>
              </Card.Grid>
              <Card.Grid style={gridStyleTwo}>
                <a href={card.link} target="_blank">
                  <p>{card.title}</p>
                  <p>{card.subTitle}</p>
                </a>
              </Card.Grid>
            </>
          );
        })}
        <Card.Grid style={{ width: "100%" }}>Click on icon to open.</Card.Grid>
      </Card>
    </>
  );
}

export default SocialIcons;
