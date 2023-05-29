import React from "react";

export default function About(props) {
  console.log(props);
  const { skills } = props.resumeData;
  console.log(skills);
  return (
    <section className="content-card about" id="about">
      <h1>About me</h1>
      <div className="about-item about-me">
        <p>Descrição</p>
        <p>Sub-Decrição</p>
      </div>
      <div className="col-2">
        <div className="about-item skills">
          <h1>Skills</h1>
          {skills &&
            skills.map((skill) => {
              return <span key={skill.name} className="skill">{ skill.name }</span>;
            })}
        </div>

        <div className="about-item languages">
          <h1>Languages</h1>
          <div className="language">
            <p>english</p>
            <span className="bar">
              <span className="english" />
            </span>
          </div>
          <div className="language">
            <p>french</p>
            <span className="bar">
              <span className="french" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
