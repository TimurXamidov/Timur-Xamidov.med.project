import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Что мы делаем</span>
        </h3>
        <p className="info-description">
        Мы делаем здравоохранение таким, чтобы вам было удобно, предлагая широкий спектр медицинских услуг по требованию, адаптированных к вашим потребностям. Наша платформа позволяет вам связаться с опытными онлайн-врачами, которые предоставляют квалифицированные медицинские консультации, выдают онлайн-рецепты и предлагают быстрое пополнение запасов лекарств, когда они вам нужны.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Неотложная помощь"
          description="Наша служба неотложной помощи призвана стать вашей надежной поддержкой в ​​критических ситуациях. Будь то внезапное заболевание, травма или какая-либо медицинская проблема, требующая немедленного внимания, наша команда преданных своему делу медицинских работников доступна круглосуточно и без выходных, чтобы обеспечить быструю и эффективную помощь."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Сердечное заболевание"
          description="Наша команда опытных кардиологов и медицинских экспертов использует самые современные технологии для оценки состояния вашей сердечно-сосудистой системы и разработки индивидуальных планов лечения. От комплексных обследований до продвинутых вмешательств — мы стремимся помочь вам сохранить здоровое сердце и вести полноценную жизнь."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Стоматологическая помощь"
          description="Улыбайтесь с уверенностью, ведь наши услуги по стоматологической помощи удовлетворят все ваши потребности в уходе за полостью рта. Наши квалифицированные стоматологи предоставляют широкий спектр процедур: от плановых осмотров и чисток до косметических процедур и восстановительных процедур."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
