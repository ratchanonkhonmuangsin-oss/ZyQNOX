const items = {};

/* รายการ Vaporeon */
items.Vaporeon = {
  id: "Vaporeon",
  name: "Vaporeon",
  group: "Eevee Evolution",
  category: "อธิบาย",
  description:
    "โปเกมอนธาตุน้ำที่มีรูปร่างคล้ายสัตว์ทะเล สามารถว่ายน้ำได้อย่างคล่องแคล่ว และมีความสามารถในการกลมกลืนกับน้ำจนแทบมองไม่เห็นตัว",
  image: "assets/images/collection/Vaporeon.jpg",
  related: ["Jolteon", "Flareon"],
};

/* รายการ Jolteon */
items.Jolteon = {
  id: "Jolteon",
  name: "Jolteon",
  group: "Eevee Evolution",
  category: "อธิบาย",
  description:
    "โปเกมอนธาตุไฟฟ้าที่มีขนแหลมคล้ายเข็ม สามารถสะสมประจุไฟฟ้าและปล่อยกระแสไฟฟ้าออกมาโจมตีได้อย่างรวดเร็ว",
  image: "assets/images/collection/Jolteon.jpg",
  related: ["Espeon", "Umbreon"],
};

/* รายการ Flareon */
items.Flareon = {
  id: "Flareon",
  name: "Flareon",
  group: "Eevee Evolution",
  category: "อธิบาย",
  description:
    "โปเกมอนธาตุไฟที่มีขนฟูนุ่ม สามารถสะสมความร้อนภายในร่างกายและพ่นเปลวไฟที่มีอุณหภูมิสูงออกมาได้",
  image: "assets/images/collection/Flareon.jpg",
  related: ["Vaporeon", "Leafeon"],
};

/* รายการ Espeon */
items.Espeon = {
  id: "Espeon",
  name: "Espeon",
  group: "Eevee Evolution",
  category: "อธิบาย",
  description:
    "โปเกมอนธาตุพลังจิตที่มีรูปลักษณ์สง่างาม มีอัญมณีบนหน้าผาก สามารถรับรู้การเคลื่อนไหวและคาดการณ์การกระทำของคู่ต่อสู้ได้",
  image: "assets/images/collection/Espeon.jpg",
  related: ["Sylveon", "Glaceon"],
};

/* รายการ Umbreon */
items.Umbreon = {
  id: "Umbreon",
  name: "Umbreon",
  group: "Eevee Evolution",
  category: "อธิบาย",
  description:
    "โปเกมอนธาตุมืดที่มีวงแหวนสีเหลืองบนร่างกาย ซึ่งจะเรืองแสงในความมืด มีความสามารถในการเคลื่อนไหวและต่อสู้ในเวลากลางคืนได้อย่างโดดเด่น",
  image: "assets/images/collection/Umbreon.jpg",
  related: ["Jolteon", "Glaceon"],
};

/* รายการ Leafeon */
items.Leafeon = {
  id: "Leafeon",
  name: "Leafeon",
  group: "Eevee Evolution",
  category: "อธิบาย",
  description:
    "โปเกมอนธาตุพืชที่มีลักษณะคล้ายใบไม้ สามารถสังเคราะห์แสงและใช้พลังจากธรรมชาติในการดำรงชีวิต อีกทั้งยังมีกลิ่นหอมอ่อน ๆ จากร่างกาย",
  image: "assets/images/collection/Leafeon.jpg",
  related: ["Umbreon", "Vaporeon"],
};

/* รายการ Glaceon */
items.Glaceon = {
  id: "Glaceon",
  name: "Glaceon",
  group: "Eevee Evolution",
  category: "อธิบาย",
  description:
    "โปเกมอนธาตุน้ำแข็งที่สามารถควบคุมอุณหภูมิร่างกายและสร้างเกล็ดน้ำแข็งจากอากาศรอบตัว เพื่อใช้ป้องกันตัวและโจมตีศัตรู",
  image: "assets/images/collection/Glaceon.jpg",
  related: ["Flareon", "Espeon"],
};

/* รายการ Sylveon */
items.Sylveon = {
  id: "Sylveon",
  name: "Sylveon",
  group: "objects",
  category: "สิ่งของ",
  description:
    "โปเกมอนธาตุนางฟ้าที่มีริบบิ้นสีสันสวยงาม สามารถใช้ริบบิ้นสัมผัสความรู้สึกของผู้อื่น และส่งพลังแห่งความสงบเพื่อช่วยลดความขัดแย้ง",
  image: "assets/images/collection/Sylveon.jpg",
  related: ["Umbreon", "Leafeon"],
};

/* อ่าน id จาก URL */
const itemId =
  new URLSearchParams(window.location.search).get("id") || "spirited";
const item = Object.hasOwn(items, itemId) ? items[itemId] : null;

/* ฟังก์ชันแสดงข้อมูล */
function showDetail(item) {
  document.title = "Detail | Personal Collection";
  document.querySelectorAll("[data-field]").forEach(function (element) {
    element.textContent = item[element.dataset.field];
  });
  const image = document.querySelector("#detail-image");
  image.src = item.image;
  image.alt = item.name;
}

/* ฟังก์ชันรายการที่เกี่ยวข้อง */
function showRelated(item) {
  item.related.forEach(function (id, index) {
    const related = items[id];
    const suffix = index === 0 ? "" : "-2";
    document.querySelector("#related-link" + suffix).href =
      "detail.html?id=" + id;
    document.querySelector("#related-image" + suffix).src = related.image;
    document.querySelector("#related-name" + suffix).textContent = related.name;
    document.querySelector("#related-caption" + suffix).textContent =
      related.caption;
  });
}

/* เลือกการแสดงผล */
if (item) {
  showDetail(item);
  showRelated(item);
} else {
  document.querySelector("#detail-content").hidden = true;
  document.querySelector("#not-found").hidden = false;
  document.title = "Detail | Personal Collection";
}







