import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>О нас</span>
        </h3>
        <p className="about-description">
        Добро пожаловать в Health Plus, вашего надежного партнера по доступному и персонализированному медицинскому обслуживанию. Наши опытные врачи предлагают онлайн-консультации и специализированные услуги, уделяя приоритетное внимание вашему благополучию. Присоединяйтесь к нам в этом путешествии к более здоровому состоянию.
        </p>

        <h4 className="about-text-title">Ваши решения</h4>

        <SolutionStep
          title="Выберите специалиста"
          description="Найдите своего идеального специалиста и с легкостью запишитесь в Health Plus. Опытные врачи уделяют приоритетное внимание вашему здоровью, предлагая индивидуальный уход."
        />

        <SolutionStep
          title="Составить расписание"
          description="Выберите дату и время, которые подходят вам лучше всего, и позвольте нашей преданной команде медицинских специалистов позаботиться о вашем благополучии с помощью индивидуального ухода."
        />

        <SolutionStep
          title="Получите свои решения"
          description="Наши опытные врачи и специалисты всегда готовы предоставить квалифицированную консультацию и составить индивидуальный план лечения, помогая вам достичь наилучшего здоровья."
        />
      </div>
    </div>
  );
}

export default About;
