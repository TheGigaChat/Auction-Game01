import React, { useEffect } from "react";

function Description({ containerNum, setEnd }) {
  const descriptions = [
    "Владелец склада отказался платить за товар который был предназначен для его ларька в парке аттракционов, после чего всё содержимое было выставлено на продажу.",
    "Чемодан с вещами был потерян в аэропорту и после чего, как его владелец не нашёлся, чемодан с вещами был выставлен на аукцион.",
    "Магазин с музыкальными инструментами подал о банкротстве и решил выставить на аукцион часть своих товаров.",
    "Большой спортзал пришлось закрыть из-за финансовых трудностей, а половину собственности оставили на хранение на склад. Через пол года его выставили на аукцион из-за неоплаты хранения.",
    "После пожара во время ремонтных работ много вещей сгорело, некоторые что не пострадали были выставлены на аукцион для покрытия расходов за ущерб.",
    "После того как дети вырости, семья решила выставить все детские вещи на аукцион, а вырученные средства пожертвовать на благотворительность.",
    "Один богатый писатель был поклонником антиквариата, после того как он покал в больницу, своей дочери он сказал продать всё на одном из аукционов.",
    "Семья решила сделать подарки друг другу на Новый год, но не учла пожелания друг друга, поэтому подарки пришлось выставить на аукцион.",
    "После последнего выживания в природной среде, мужчина очень серьёзно заболел и попал в больницу, в последствии чего его жена выставила все его вещи на аукцион.",
    "Офисная IT компания переезжая в другую страну решила продать часть своих вещей на аукционе из-за слишком дорогой цены при перевозке.",
    "После ремонта на даче, владельцы решили продать старую мебель на аукционе.",
    "Любитель скоростей решил продать свои драгоценные вещи, а за вырученные средста открыть собственный бизнес.",
    "Из-за высокой конкуренции и убытков, владелец медицинского магазина был вынужден закрыть его, а часть товаров продать на аукционе.",
    "Молодая пара решила поселиться в свой новый дом, однако незадолго до новоселья разошлась, поэтому все совместно купленные вещи были выставлены на аукцион.",
    "В популярном заведении питания установили новое оборудование, поэтому старое было выставлено на аукцион.",
  ];

  useEffect(() => {
    const p = document.getElementById("description_rus");
    p.innerText = descriptions[containerNum - 1];
    const num = document.getElementById("containerNum");
    num.innerText = `Num ${containerNum}`;
    if (containerNum === 16) {
      setEnd(true);
    }
  }, [containerNum]);

  return (
    <section
      style={{
        height: 800,
        width: 1000,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      className="description"
    >
      <p id="containerNum">Num {containerNum}</p>
      <p id="description_rus">{descriptions[containerNum - 1]}</p>
    </section>
  );
}

export default Description;
