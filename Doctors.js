import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Познакомьтесь с нашими врачами</span>
        </h3>

        <p className="dt-description">
        Познакомьтесь с нашей исключительной командой врачей-специалистов, посвятивших себя
          предоставление первоклассных медицинских услуг в Health Plus. Доверьтесь своим
          знания и опыт, которые приведут вас к более здоровому и счастливому
          жизнь.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Доктор Кэтрин Мерфи"
          title="Общие хирурги"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Доктор Джейкоб Джонс
          "
          title="Гематологи"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="доктор Дженни Уилсон"
          title="Эндокринологи"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Доктор Альберт Флорес"
          title="Гематологи"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
