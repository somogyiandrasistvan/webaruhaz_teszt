const KUTYAK = [
  { nev: "bodri", kor: 10, fajta: "puli" },
  { nev: "vuksi", kor: 11, fajta: "kuvasz" },
  { nev: "blacki", kor: 3, fajta: "svájcijuhász" },
  { nev: "pergi", kor: 3, fajta: "svájcijuhász" },
];
$(function () {
  const FOOTER = $("footer");
  const HEADER = $("header");
  const NAV = $("nav");
  FOOTER.append("<p>Somogyi András</p>");
  HEADER.append("<h1>adatok listázása</h1>");
  init();
});

function init() {
  const NAV = $("nav");
  const ARTICLE = $("article");
  let txt = osszealit(KUTYAK);
  ARTICLE.append(txt);
  let menu = nav();
  NAV.append(menu);
  mutat(KUTYAK);

}

function osszealit(KUTYAK) {
  let txt = '<div id = "txt" class="container-fluid row">';
  for (let index = 0; index < KUTYAK.length; index++) {
    txt +=
      '<div id=txt2 class="card col-lg-3 col-md-4 col-sm-6"><div class="card-header"><h2>' +
      KUTYAK[index].nev +
      '</h2></div><div class="card-body"><p>Kor: ' +
      KUTYAK[index].kor +
      "</p><p>Fajta: " +
      KUTYAK[index].fajta +
      '</div><div class="card-footer"><button type="button" class="btn btn-outline-secondary" id="mutat' +
      index +
      '">Mutat</button><button class="btn btn-outline-secondary" id="kosarba ' +
      index +
      '">Kosárba</button></div></div>';
  }
  txt += "</div>";
  return txt;
}

function nav() {
  let nav = "";
  nav +=
    "<div id=nav><ul><li><a class='active' href = 'public.html'>Kutyák adatainak megtekintése</a></li><li><a href='index.html'>Admin felüet</a></li></ul></div>";
  return nav;
}

function mutat(KUTYAK) {
  const ASIDE = $("ASIDE");
  for (let index = 0; index < KUTYAK.length; index++) {
    $("#mutat" + index).click(function () {
      let txt = "";
      const NAV = $("nav ul");
      const ARTICLE = $("#txt");
      NAV.remove();
      ARTICLE.remove();
      txt +=
        '<div id=fo><button class="btn btn-primary" id="gomb3" class = "button col-lg-100 col-md-100 col-sm-100">X</button><div id=txt3 class="card" style="height:800px"><button class="btn btn-primary" id="bal" class = "button col-lg-100 col-md-100 col-sm-100"><-</button><div class="card col-lg-9 col-md-9 col-sm-9"><div class="card-header"><h2>' +
        KUTYAK[index].nev +
        '</h2></div><div class="card-body"><p>Kor: ' +
        KUTYAK[index].kor +
        "</p><p>Fajta: " +
        KUTYAK[index].fajta +
        '</div></div><button class="btn btn-primary" id="jobb" class = "button col-lg-100 col-md-100 col-sm-100">-></button></div>';
      ASIDE.append(txt);
      xgomb();
      jobbgomb(txt, ASIDE, index);
      balgomb(txt, ASIDE, index);
    });
  }
}
function xgomb() {
  $("#gomb3").click(function () {
    const FO = $("#fo");
    FO.remove();
    init();
  });
}
function jobbgomb(txt, ASIDE, index) {
  $("#jobb").click(function () {
    index++;
    if (index == 4) {
      index = 0;
    }
    console.log(index);
    const FO = $("#fo");
    FO.remove();
    txt = "";
    txt +=
      '<div id=fo><button class="btn btn-primary" id="gomb3" class = "button col-lg-100 col-md-100 col-sm-100">X</button><div id=txt3 class="card" style="height:800px"><button class="btn btn-primary" id="bal" class = "button col-lg-100 col-md-100 col-sm-100"><-</button><div class="card col-lg-9 col-md-9 col-sm-9"><div class="card-header"><h2>' +
      KUTYAK[index].nev +
      '</h2></div><div class="card-body"><p>Kor: ' +
      KUTYAK[index].kor +
      "</p><p>Fajta: " +
      KUTYAK[index].fajta +
      '</div></div><button class="btn btn-primary" id="jobb" class = "button col-lg-100 col-md-100 col-sm-100">-></button>';
    ASIDE.append(txt);
    jobbgomb(txt, ASIDE, index);
    balgomb(txt, ASIDE, index);
    xgomb();
  });
}

function balgomb(txt, ASIDE, index) {
  $("#bal").click(function () {
    index--;
    if (index == -1) {
      index = 3;
    }
    console.log(index);
    const FO = $("#fo");
    FO.remove();
    txt = "";
    txt +=
      '<div id=fo><button class="btn btn-primary" id="gomb3" class = "button col-lg-100 col-md-100 col-sm-100">X</button><div  id=txt3 class="card" style="height:800px"><button class="btn btn-primary" id="bal" class = "button col-lg-100 col-md-100 col-sm-100"><-</button><div class="card col-lg-9 col-md-9 col-sm-9"><div class="card-header"><h2>' +
      KUTYAK[index].nev +
      '</h2></div><div class="card-body"><p>Kor: ' +
      KUTYAK[index].kor +
      "</p><p>Fajta: " +
      KUTYAK[index].fajta +
      '</div></div><button class="btn btn-primary" id="jobb" class = "button col-lg-100 col-md-100 col-sm-100">-></button>';
    ASIDE.append(txt);
    balgomb(txt, ASIDE, index);
    jobbgomb(txt, ASIDE, index);
    xgomb();
  });
}
