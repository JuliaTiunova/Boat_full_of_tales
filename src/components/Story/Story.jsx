import {
  beginning,
  beginningPlus,
  expoHero,
  expoHeroess,
  helpers,
  moodOf,
  mountainPlaceDragon,
  namesDragon,
  namesElf,
  namesKnightWizard,
  namesMermaid,
  namesPrincessWitch,
  placesAll,
  placesForest,
  placesPlusMountain,
  protagonistsAll,
  waterPlace,
} from "../../arrays/arrays";
import { river, tree, oldManRiver } from "../../constants/constants";
import BoatRiverSpeach from "../../functions/BoatRiverSpeach";
import HelperAcrossRiver from "../../functions/HelperAcrossRiver";
import HelperTree from "../../functions/HelperTree";
import InPlaceDragon from "../../functions/InPlaceDragon";
import InPlaceHeroic from "../../functions/InPlaceHeroic";

import InPlacePart2 from "../../functions/InPlacePart2";
import TakeHelper from "../../functions/TakeHelper";

import styles from "./Story.module.css";

const findRandomIndex = (length) => {
  let index;
  do {
    index = Math.trunc(Math.random() * 10);
  } while (index < 0 || index >= length);

  return index;
};

const findRandomElement = (arr) => {
  const index = findRandomIndex(arr.length);
  const element = arr[index];
  return element;
};

const Story = (props) => {
  const beginningIndex = findRandomIndex(beginning.length);

  let protagonist = props.protagonist;
  let place = props.place;
  let name = props.name;
  let mood = props.mood;
  // let power = props.power;
  let helper = props.helper;

  let beginningPlusStory = "";
  let protagonists = "";
  let beginningEndChain = "";
  let part2 = "";
  let part2_1 = "";
  let part2_2 = "";
  let part2_3 = "";
  let part3 = "";
  let part3_1 = "";
  let part3_2 = "";
  let part4 = "";
  let part4_1 = "";
  let part4_2 = "";
  let part4_3 = "";

  if (mood === "") {
    mood = findRandomElement(moodOf);
  }

  if (place === "") {
    place = findRandomElement(placesAll);
  }

  if (protagonist === "") {
    protagonist = findRandomElement(protagonistsAll);
  }

  if (helper === "") {
    helper = findRandomElement(helpers);
  }

  if (beginningIndex <= 3) {
    beginningPlusStory = findRandomElement(beginningPlus);
  } else {
    beginningPlusStory = "";
  }

  if (protagonist === "лицар" || protagonist === "чарівник") {
    if (name === "") {
      name = findRandomElement(namesKnightWizard);
    }
    beginningEndChain = `${findRandomElement(
      expoHero
    )} ${protagonist} на ім'я ${name}.`;
  } else if (protagonist === "принцеса" || protagonist === "чарівниця") {
    if (name === "") {
      name = findRandomElement(namesPrincessWitch);
    }
    beginningEndChain = `${findRandomElement(
      expoHeroess
    )} ${protagonist} на ім'я ${name}.`;
  } else {
    if (protagonist === "русалка") {
      protagonists = "русалки";
    } else if (protagonist === "дракон") {
      protagonists = "дракони";
    } else if (protagonist === "ельф") {
      protagonists = "ельфи";
      // } else if (protagonist === "єдиноріг") {
      //   protagonists = "єдинороги";
    }
    beginningEndChain = `існували ${protagonists}.`;
  }

  // for part2

  if (!protagonists) {
    if (protagonist === "лицар" || protagonist === "чарівник") {
      if (mood === "повчальна" || mood === "моторошна") {
        part2 += `Він був дуже добрим, але ще дитиною його віддали на службу до злого короля.
         Почув одного дня король, що десь ${InPlacePart2(place)} `;

        part2 += `є чудодійне джерело, вода якого дарує вічну молодість. І задумав злий король жити вічно. Тож відправився ${protagonist} у далеку подорож і взяв він з собою тільки ${TakeHelper(
          helper,
          protagonist
        )}`;
      }

      if (mood === "героїчна") {
        part2 += `Він мав надзвичайну силу і прості люди боялися його, тож ${protagonist} ${name}, почувши, що один король хоче взяти його на службу, відправився в далеку подорож. Жив король ${InPlaceHeroic(
          place
        )}`;

        part2 += `і щоб подорож його була легшою, ${name} взяв з собою ${TakeHelper(
          helper,
          protagonist
        )}`;
      }

      // for part3

      if (mood === "повчальна" || mood === "моторошна" || mood === "героїчна") {
        part3 += `Першого ж дня зустрів ${name} на своєму шляху ${tree}. Він хотів було `;
        if (helper !== "кінь") {
          part3 += `пройти `;
        } else {
          part3 += `проїхати `;
        }
        part3 += `повз, але раптом дерево заговорило:`;
        part3_1 += `- Ти напевно сильний та сміливий ${protagonist}, якщо ідеш цією дорогою. Благаю, допоможи мені позбутися цих ворон. `;
        part3_2 += `${name}, не довго думаючи, ${HelperTree(
          helper,
          protagonist
        )}`;

        part3_2 += `і всі ворони, як одна, полетіли в небо. `;

        // for part 4

        part4 += `Наступного дня ${protagonist} побачив перед собою ${river}. ${oldManRiver}. `;

        part4_1 += `${name} спробував розбудити діда, але той навіть не поворухнувся. Сів ${protagonist} на берег та й задумався, раптом чує - човен до нього промовляє: `;
        part4_2 += `${BoatRiverSpeach(protagonist)}`;
        part4_3 += `${name} послухав своє добре серце і вирішив допомогти. `;
        if (protagonist === "чарівник") {
          part4_3 += `Змахнув руками, прошепотів закляття перед старим`;
        } else if (protagonist === "лицар") {
          part4_3 += `Взяв старого на руки `;
        }
        part4_3 += `і так переніс його на берег. Тоді забрав у діда весла, ${HelperAcrossRiver(
          helper,
          name
        )}`;
        part4_3 += `і поплив собі геть. `;
      }

      // for part 5
    }

    if (protagonist === "принцеса" || protagonist === "чарівниця") {
      if (mood === "повчальна" || mood === "моторошна") {
        part2 += `Вона мала яскраве руде волосся, що, нажаль, було неприпустимим для її народу.
         Та одного разу її батьки почули про чарівне джерело, яке може виконати будь-яке бажання. Але знайти це джерело можна було тільки ${InPlacePart2(
           place
         )}. `;

        part2 += `Тож зібралась ${protagonist} у далеку подорож і взяла з собою лише ${TakeHelper(
          helper,
          protagonist
        )}`;
      }

      if (mood === "героїчна") {
        part2 += `Вона мала надзвичайну силу, тому прості люди, і навіть власні батьки її боялися.`;

        part2_3 += `Та ось почула якось ${protagonist}, що живе ${InPlaceHeroic(
          place
        )} `;

        part2_3 += `одна королева, яка нічого не боїться. ${name} взяла ${TakeHelper(
          helper,
          protagonist
        )}`;

        part2_3 += `і вирушила на пошуки королеви, шукати поради. `;
      }

      if (mood === "повчальна" || mood === "моторошна" || mood === "героїчна") {
        if (helper === !"кінь") {
          part3 += `Їхала `;
        } else {
          part3 += `Йшла `;
        }
        part3 += `${protagonist} три дні і три ночі, коли побачила на своєму шляху ${river}. ${oldManRiver}. `;
      }
    }
  }

  if (protagonists) {
    if (!name && protagonist === "дракон") {
      name = findRandomElement(namesDragon);
    }

    if (!name && protagonist === "ельф") {
      name = findRandomElement(namesElf);
    }

    if (!name && protagonist === "русалка") {
      name = findRandomElement(namesMermaid);
    }

    part2 += "Вони жили ";

    if (place === "чарівний ліс" && protagonist !== "русалка") {
      part2 += `у густих-густих лісах, ${findRandomElement(placesForest)}. `;
    }

    if (place === "гори") {
      part2 += "високо в горах, ";
    }

    if (protagonist === "ельф") {
      if (mood === "моторошна" || mood === "повчальна" || mood === "героїчна") {
        if (place === "гори") {
          part2 += `${findRandomElement(placesPlusMountain)}. `;
        }
        if (place === "море/океан...") {
          part2 += `в чарівному королівстві під водою і там будували собі високі палаци. `;
        }
        if (place === "місто") {
          part2 += `у великих містах. `;
        }
      }
    }

    if (protagonist === "русалка") {
      if (mood === "моторошна" || mood === "повчальна" || mood === "героїчна") {
        if (place === "чарівний ліс") {
          part2 += `в озері захованому в хащах густого-густого лісу, хоча не раз їх бачили на болотах. `;
        } else if (place === "море/океан...") {
          part2 += `на дні глибокого моря. Там вони будували високі коралові палаци `;
          if (mood === "моторошна") {
            part2 += `в яких ніхто ніколи не жив. Вежі здіймалися з глибин, немов покинуті скульптури, і стояли собі серед води порожні і самотні.`;
          }
        } else if (place === "гори") {
          part2_1 = findRandomElement(waterPlace);
          if (waterPlace === "глибокого озера") {
            part2_2 = "озерн";
          } else {
            part2_2 = "річков";
          }
          part2 += `на дні ${part2_1} і їм було дуже-дуже холодно. Коли наставала зима, їхня луска тверділа, мов лід і русалки опускалися на ${part2_2}е дно, невзмозі поворухнути хвостами. Там вони лежали всю зиму, мов кришталеві скульптури`;

          if (mood === "моторошна") {
            part2 += ` i ніхто, крім потопельників, не міг побачити їх`;
          }

          part2 += `. А наприкінці весни, коли лід танув, русалки підіймалися на поверхню, бентежили незворушні води і співали. З їхніх вуст зривався холодний подих і над ${part2_2}им плесом стелився туман. `;

          // if (power === "вміння літати") {
          //   part2 += ` і вона все життя мріяла літати.`;
          // }
        } else if (place === "місто") {
          part2 += `колись в морі, в своїх коралових палацах, де золота луска їхня виблискувала в фосфорному світлі. Та врешті їх спіймали в тенета жорстокі люди, бо ж русалки були чарівні і вміли виконувати бажання. Тепер вони жили у великих містах, заточені в  акваріуми і щоб не померти з голоду виконували забаганки багатих людей.`;
        }
        part2_3 += `Одну з тих русалок звали ${name} і найбільше за все вона мріяла `;
        if (place !== "місто") {
          part2_3 += `побачити світ. `;
        } else {
          part2_3 += `про порятунок. `;
        }
      }
    }

    if (protagonist === "дракон") {
      if (mood === "моторошна" || mood === "повчальна" || mood === "героїчна") {
        if (place === "гори") {
          part2 += `${findRandomElement(
            mountainPlaceDragon
          )}. Коли їм снилися погані сни, їхні пазурі впивалися в каміння, а з їхніх пащ виривалося жовте полум'я. `;

          if (mood === "моторошна") {
            part2 += `Воно освітлювало дно урвища, де лежали обгризені черепи та кості давно вже забутих людей. `;
          }
        }
        if (place === "море/океан...") {
          part2 += `на водах океану. Обплутані водоростями та оброслі мохом - їх часто плутали з плавучими островами. `;
        }
        if (place === "місто") {
          part2 += `колись у високих горах і полювали на гномів, але врешті люди винищили усіх, крім одного. Звали його ${name}. `;
        }

        if (place !== "місто") {
          part2 += `Одного з них звали ${name} `;
        } else {
          part2 += ``;
        }

        part2 += `і більше за все він любив золото та коштовне каміння. `;

        part3 += `Тож відправився ${protagonist} ${name} одного дня на пошуки нових скарбів. `;
      }
      if (mood === "моторошна" || mood === "повчальна") {
        part3_1 += `Летів ${name} три дні і три ночі коли побачив попереду ${InPlaceDragon(
          place,
          protagonist
        )}`;
        part3_1 += `Підлетів ближче і виявилось, `;
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        {protagonist} {name}
      </h1>
      <p className={styles.text}>
        {beginning[beginningIndex]} {beginningPlusStory} {beginningEndChain}{" "}
        {part2} <br /> {part2_3} <br /> {part3} <br /> {part3_1} <br />{" "}
        {part3_2} <br />
        <br /> {part4} <br /> {part4_1} <br />
        {part4_2} <br /> {part4_3}
      </p>
    </div>
  );
};

export default Story;
