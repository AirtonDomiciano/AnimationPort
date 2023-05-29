import React from "react";
export default function Header(props) {
  const { socialLinks } = props.resumeData;
  return (
    <header className="header">
      <img
        className="header-img"
        src="images/my.jpg"
        alt=""
      />

      <h1>Airton Domiciano </h1>
      <h2>Frontend Developer</h2>
      <div className="socials">
        {socialLinks &&
          socialLinks.map((item) => {
            return (
              <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
                <i className={item.className} />
              </a>
            );
          })}
      </div>
      <a href="" className="cta">
        DownIoad CV
      </a>
    </header>
  );
}
