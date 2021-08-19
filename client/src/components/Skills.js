import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const bar = document.querySelector(".skill-level");
    Array.from(bar.children).forEach((br) => {
      Array.from(br.children).forEach((level) => {
        level.children[1].children[0].style.width =
          level.children[1].children[0].attributes[1].value;
      });
    });
  }, []);
  return (
    <div className="skill">
      <div className="compact">
        <h2>My Skills</h2>
        <img src="/images/marker.svg" alt="" />
      </div>
      <p className="offer">
        I am a quick learner and specialize in multitude of skills required for
        Web Application Development and Design
      </p>

      <div className="skill-level">
        <div className="level-flex">
          <div className="level">
            <div className="work">
              <p>HTML5</p>
              <p>90%</p>
            </div>
            <div className="bar">
              <div className="bar-level" data-level="90%"></div>
            </div>
          </div>
          <div className="level">
            <div className="work">
              <p>CSS3</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <div className="bar-level" data-level="80%"></div>
            </div>
          </div>
        </div>

        <div className="level-flex">
          <div className="level">
            <div className="work">
              <p>JavaScript</p>
              <p>90%</p>
            </div>
            <div className="bar">
              <div className="bar-level" data-level="90%"></div>
            </div>
          </div>
          <div className="level">
            <div className="work">
              <p>React</p>
              <p>75%</p>
            </div>
            <div className="bar">
              <div className="bar-level" data-level="75%"></div>
            </div>
          </div>
        </div>

        <div className="level-flex">
          <div className="level">
            <div className="work">
              <p>NodeJs</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <div className="bar-level" data-level="80%"></div>
            </div>
          </div>
          <div className="level">
            <div className="work">
              <p>Flutter</p>
              <p>70%</p>
            </div>
            <div className="bar">
              <div className="bar-level" data-level="70%"></div>
            </div>
          </div>
        </div>

        <div className="level-flex">
          <div className="level">
            <div className="work">
              <p>PHP</p>
              <p>60%</p>
            </div>
            <div className="bar">
              <div className="bar-level" data-level="60%"></div>
            </div>
          </div>
          <div className="level">
            <div className="work">
              <p>React Native</p>
              <p>70%</p>
            </div>
            <div className="bar">
              <div className="bar-level" data-level="70%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
