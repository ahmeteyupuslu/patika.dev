const menu = [
  {
    id: 1,
    title: "Ederson",
    category: "Goalkeeper",
    age: 29,
    desc  : "Ederson Santana de Moraes (born 17 August 1993), known as Ederson, is a Brazilian professional footballer who plays as a goalkeeper for Premier League club Manchester City and the Brazil national team. He is best known for his skill and control of the ball with his feet and his precise ball distribution abilities.",
    shirtnumber: "#31",
    img:
      "https://img.a.transfermarkt.technology/portrait/big/238223-1661978747.jpg",
    
  },
  {
    id: 2,
    title: "Grealish",
    category: "Forward",
    shirtnumber: "#10",
    img:
      "https://img.a.transfermarkt.technology/portrait/big/203460-1676499047.jpg?lm=1",
    desc: `Jack Grealish is an English professional footballer, born on September 10, 1995. He primarily plays as an attacking midfielder or winger for Manchester City in the English Premier League. Grealish is recognized for his exceptional dribbling skills, close ball control, and creativity in the final third.`
  },
  {
    id: 3,
    title: "Rúben Dias",
    category: "Defender",
    shirtnumber: "#3",
    img:
      "https://img.a.transfermarkt.technology/portrait/big/258004-1684921271.jpg",
    desc: `Rúben dos Santos Gato Alves Dias (born 14 May 1997) is a Portuguese professional footballer who plays as a centre-back for Premier League club Manchester City and the Portugal national team. Considered one of the best defenders in the world, he is known for his defensive prowess, leadership, and aerial ability.`,
  },
  {id: 4,
    title: "John Stones",
    category: "Defender",
    shirtnumber: "#5",
    img:
      "https://img.a.transfermarkt.technology/portrait/big/186590-1684764261.jpg?lm=1",
    desc:"John Stones (born 28 May 1994) is an English professional footballer who plays as a centre-back or defensive midfielder for Premier League club Manchester City and the England national team."
  },
  {id:5,
    title: "Manuel Akanji",
    category: "Defender",
    shirtnumber: "#25",
    img:
      "https://img.a.transfermarkt.technology/portrait/big/284730-1684165752.jpg?lm=1",
    desc:"Manuel Obafemi Akanji (born 19 July 1995) is a Swiss professional footballer who plays as a defender for Premier League club Manchester City and the Switzerland national team."
  },
  {id:6,
    title: "Nathan Aké",
    category: "Defender",
    shirtnumber: "#6",
    img:
      "https://img.a.transfermarkt.technology/portrait/big/177476-1666733797.jpg?lm=1",
    desc:"Nathan Benjamin Aké (born 18 February 1995) is a Dutch professional footballer who plays as a centre-back or left-back for Premier League club Manchester City and the Netherlands national team."
  },
  {id:7 ,
    title:"Rodri",
    category: "Midfielder",
    shirtnumber: "#16",
    img:
      "https://img.a.transfermarkt.technology/portrait/big/357565-1682587890.jpg?lm=1",
    desc:"Rodrigo Hernández Cascante (born 22 June 1996), known as Rodri or Rodrigo, is a Spanish professional footballer who plays as a defensive midfielder for Premier League club Manchester City and the Spain national team. After stints with Villarreal and Atlético Madrid in La Liga, Rodri joined Premier League club Manchester City in 2019."
  },
  {id:8,
    title:"Bernardo Silva",
    category: "Midfielder",
    shirtnumber: "#20",
    img:
      "https://img.a.transfermarkt.technology/portrait/big/241641-1684311533.jpg?lm=1",
    desc:"Bernardo Mota Veiga de Carvalho e Silva (born 10 August 1994) is a Portuguese professional footballer who plays as an attacking midfielder or winger for Premier League club Manchester City and the Portugal national team. Silva is known for his creativity, dribbling, stamina, versatility, and work-rate. "
  },
  {id:9,
    title:"Kevin De Bruyne",
    category: "Midfielder",
    shirtnumber: "#17",
    img:
      "https://img.a.transfermarkt.technology/portrait/big/88755-1684245748.jpg?lm=1",
    desc:"Kevin De Bruyne (born 28 June 1991) is a Belgian professional footballer who plays as a midfielder for Premier League club Manchester City and captains the Belgium national team. He is widely regarded as one of the best players of his generation as well as one of the best midfielders in the world."
  },
  {id: 10,
    title: "İlkay Gündoğan",
    category: "Midfielder",
    shirtnumber: "#8",
    img:
      "https://img.a.transfermarkt.technology/portrait/big/53622-1666733465.jpg?lm=1",
    desc:"Ilkay Gündoğan is a professional football (soccer) player from Germany. He was born on October 24, 1990, in Gelsenkirchen, Germany. Gündoğan is known for his exceptional skills as a midfielder, combining technical ability with tactical intelligence."
  },
  {id: 11,
    title: "Erling Haaland",
    category: "Forward",
    shirtnumber: "#9",
    img:
      "https://img.a.transfermarkt.technology/portrait/big/418560-1656179352.jpg?lm=1",
    desc:"Erling Haaland is a Norwegian professional footballer, born on July 21, 2000. He plays as a striker for Borussia Dortmund in the German Bundesliga. Haaland is widely regarded as one of the most promising young talents in world football, known for his incredible speed, strength, and clinical finishing ability."
  },
];


const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="shirtnumber">${item.shirtnumber}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
