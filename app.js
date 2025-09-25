const loginForm = document.getElementById("loginForm");
const loginContainer = document.getElementById("login-container");
const appContainer = document.getElementById("app-container");
const errorMsg = document.getElementById("errorMsg");
const logoutBtn = document.getElementById("logoutBtn");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "Epan" && password === "epan314") {
    loginContainer.style.display = "none"; // hide login
    appContainer.style.display = "block"; // show app
    
    document.body.classList.remove("login-active");
    document.body.classList.add("app-active");
  } else {
    errorMsg.textContent = "❌ Username / Password salah!";
  }
});

logoutBtn.addEventListener("click", function () {
  appContainer.style.display = "none"; // hide app
  loginContainer.style.display = "block"; // show login
  loginForm.reset();
});

const Burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

Burger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

const MENU = [
  {
    id: "avocado_toast",
    name: "Avocado Toast",
    price: 25000,
    cat: "makanan",
    img: "images/avocado_toast.jpg",
  },
  {
    id: "berry_pancake",
    name: "Berry Pancake",
    price: 30000,
    cat: "dessert",
    img: "images/berry_pancake.jpg",
  },
  {
    id: "chicken_wrap",
    name: "Chicken Wrap",
    price: 28000,
    cat: "makanan",
    img: "images/chicken_wrap.jpg",
  },
  {
    id: "beef_burger",
    name: "Beef Burger",
    price: 40000,
    cat: "makanan",
    img: "images/beef_burger.jpg",
  },
  {
    id: "caesar_salad",
    name: "Caesar Salad",
    price: 22000,
    cat: "makanan",
    img: "images/caesar_salad.jpg",
  },
  {
    id: "matcha_latte",
    name: "Matcha Latte",
    price: 20000,
    cat: "minuman",
    img: "images/matcha_latte.jpg",
  },
  {
    id: "caramel_macchiato",
    name: "Caramel Macchiato",
    price: 23000,
    cat: "minuman",
    img: "images/caramel_macchiato.jpg",
  },
  {
    id: "iced_latte",
    name: "Iced Latte",
    price: 20000,
    cat: "minuman",
    img: "images/iced_latte.jpg",
  },
  {
    id: "mocha",
    name: "Mocha",
    price: 22000,
    cat: "minuman",
    img: "images/mocha.jpg",
  },
  {
    id: "choco_croissant",
    name: "Choco Croissant",
    price: 18000,
    cat: "dessert",
    img: "images/choco_croissant.jpg",
  },
  {
    id: "salmon_bowl",
    name: "Salmon Bowl",
    price: 42000,
    cat: "makanan",
    img: "images/salmon_bowl.jpg",
  },
  {
    id: "spaghetti",
    name: "Spaghetti Bolognese",
    price: 35000,
    cat: "makanan",
    img: "images/spaghetti.jpg",
  },
  {
    id: "tuna_sandwich",
    name: "Tuna Sandwich",
    price: 24000,
    cat: "makanan",
    img: "images/tuna_sandwich.jpg",
  },
  {
    id: "smashed_potato",
    name: "Smashed Potato",
    price: 20000,
    cat: "makanan",
    img: "images/smashed_potato.jpg",
  },
  {
    id: "truffle_fries",
    name: "Truffle Fries",
    price: 26000,
    cat: "makanan",
    img: "images/truffle_fries.jpg",
  },
  {
    id: "brown_sugar_boba",
    name: "Brown Sugar Boba",
    price: 24000,
    cat: "minuman",
    img: "images/brown_sugar_boba.jpg",
  },
  {
    id: "orange_juice",
    name: "Orange Juice Fresh",
    price: 16000,
    cat: "minuman",
    img: "images/orange_juice.jpg",
  },
  {
    id: "lemonade",
    name: "Lemonade",
    price: 14000,
    cat: "minuman",
    img: "images/lemonade.jpg",
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    price: 28000,
    cat: "dessert",
    img: "images/tiramisu.jpg",
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    price: 30000,
    cat: "dessert",
    img: "images/cheesecake.jpg",
  },
  {
    id: "nasi_goreng_modern",
    name: "Nasi Goreng Modern",
    price: 23000,
    cat: "makanan",
    img: "images/nasi_goreng_modern.jpg",
  },
  {
    id: "soto_kekinian",
    name: "Soto Kekinian",
    price: 20000,
    cat: "makanan",
    img: "images/soto_kekinian.jpg",
  },
  {
    id: "iced_chocolate",
    name: "Iced Chocolate",
    price: 21000,
    cat: "minuman",
    img: "images/iced_chocolate.jpg",
  },
  {
    id: "milk_tea",
    name: "Milk Tea",
    price: 19000,
    cat: "minuman",
    img: "images/milk_tea.jpg",
  },
  {
    id: "es_campur_modern",
    name: "Es Campur Modern",
    price: 18000,
    cat: "dessert",
    img: "images/es_campur_modern.jpg",
  },
  {
    id: "pisang_goreng",
    name: "Pisang Goreng",
    price: 15000,
    cat: "dessert",
    img: "images/pisang.jpg",
  },
  {
    id: "es_krim",
    name: "Es Krim Coklat",
    price: 15000,
    cat: "dessert",
    img: "images/es_krim.jpg",
  },
  {
    id: "donat",
    name: "Donat",
    price: 18000,
    cat: "dessert",
    img: "images/donat.jpg",
  },
  {
    id: "menu26",
    name: "Lasagna",
    price: 35000,
    cat: "makanan",
    img: "images/lasagna.jpg",
  },
  {
    id: "menu27",
    name: "Ramen Pedas",
    price: 32000,
    cat: "makanan",
    img: "images/ramen.jpg",
  },
  {
    id: "menu28",
    name: "Burger Keju",
    price: 28000,
    cat: "makanan",
    img: "images/burger_keju.jpg",
  },
  {
    id: "menu29",
    name: "Hotdog Jumbo",
    price: 26000,
    cat: "makanan",
    img: "images/hotdog.jpg",
  },
  {
    id: "menu30",
    name: "Dimsum Ayam",
    price: 20000,
    cat: "makanan",
    img: "images/dimsum.jpg",
  },
  {
    id: "menu31",
    name: "Kebab Turki",
    price: 27000,
    cat: "makanan",
    img: "images/kebab.jpg",
  },
  {
    id: "menu32",
    name: "Pizza Mini",
    price: 30000,
    cat: "makanan",
    img: "images/pizza_mini.jpg",
  },
  {
    id: "menu33",
    name: "Steak Daging",
    price: 45000,
    cat: "makanan",
    img: "images/steak.jpg",
  },
  {
    id: "menu34",
    name: "Sup Tom Yum",
    price: 35000,
    cat: "makanan",
    img: "images/tom_yum.jpg",
  },
  {
    id: "menu35",
    name: "Nasi Kuning",
    price: 20000,
    cat: "makanan",
    img: "images/nasi_kuning.jpg",
  },
  {
    id: "menu36",
    name: "Rawon",
    price: 18000,
    cat: "makanan",
    img: "images/rawon.jpg",
  },
  {
    id: "menu37",
    name: "Cheesecake Blueberry",
    price: 25000,
    cat: "dessert",
    img: "images/blueberry_cheesecake.jpg",
  },
  {
    id: "menu38",
    name: "Puding Mangga",
    price: 15000,
    cat: "dessert",
    img: "images/puding.jpg",
  },
  {
    id: "menu39",
    name: "Brownies Coklat",
    price: 20000,
    cat: "dessert",
    img: "images/brownies.jpg",
  },
  {
    id: "menu40",
    name: "Cupcake Vanilla",
    price: 16000,
    cat: "dessert",
    img: "images/cupcake.jpg",
  },
  {
    id: "menu41",
    name: "Mochi Ice Cream",
    price: 22000,
    cat: "dessert",
    img: "images/mochi.jpg",
  },
  {
    id: "menu42",
    name: "Milkshake Coklat",
    price: 22000,
    cat: "minuman",
    img: "images/milkshake.jpg",
  },
  {
    id: "menu43",
    name: "Lemon Tea",
    price: 12000,
    cat: "minuman",
    img: "images/lemon_tea.jpg",
  },
  {
    id: "menu44",
    name: "Matcha Frappe",
    price: 25000,
    cat: "minuman",
    img: "images/matcha_frappe.jpg",
  },
  {
    id: "menu45",
    name: "Smoothie Stroberi",
    price: 23000,
    cat: "minuman",
    img: "images/smoothie_stroberi.jpg",
  },
  {
    id: "menu46",
    name: "Kopi Latte Caramel",
    price: 27000,
    cat: "minuman",
    img: "images/latte_caramel.jpg",
  },
  {
    id: "menu47",
    name: "Es Cendol",
    price: 15000,
    cat: "minuman",
    img: "images/es_cendol.jpg",
  },
];

let cart = {};

const $ = (id) => document.getElementById(id);
const rupiah = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n || 0);

function renderMenu() {
  const grid = $("menuGrid");
  grid.innerHTML = "";
  MENU.forEach((item) => {
    const card = document.createElement("div");
    card.className = "menu-card menu-item"; // <-- add menu-item class
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    const name = document.createElement("div");
    name.className = "name";
    name.textContent = item.name;
    const price = document.createElement("div");
    price.className = "price";
    price.textContent = rupiah(item.price);
    const btn = document.createElement("button");
    btn.className = "add";
    btn.textContent = "Tambah";
    btn.addEventListener("click", () => {
      addToCart(item.id);
      playSound("add.mp3"); // <-- play sound when adding to cart
    });
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(btn);
    grid.appendChild(card);
  });
}

function addToCart(id) {
  const menuItem = MENU.find((m) => m.id === id);
  if (!menuItem) return;
  if (!cart[id]) cart[id] = { ...menuItem, qty: 0 };
  cart[id].qty += 1;
  renderCart();
}

function renderCart() {
  const list = $("cartList");
  list.innerHTML = "";
  const keys = Object.keys(cart);
  if (keys.length === 0) {
    list.innerHTML = '<div class="cart-empty">Keranjang kosong</div>';
    updateTotals();
    return;
  }
  keys.forEach((k) => {
    const it = cart[k];
    const row = document.createElement("div");
    row.className = "cart-item";
    const img = document.createElement("img");
    img.src = it.img;
    img.alt = it.name;
    const info = document.createElement("div");
    info.className = "info";
    info.innerHTML = `<div style="font-weight:700">${
      it.name
    }</div><div class="muted">${rupiah(it.price)} x ${it.qty} = ${rupiah(
      it.price * it.qty
    )}</div>`;
    const qty = document.createElement("div");
    qty.className = "qty-controls";
    const dec = document.createElement("button");
    dec.textContent = "-";
    dec.addEventListener("click", () => changeQty(k, -1));
    const num = document.createElement("span");
    num.textContent = it.qty;
    num.style.minWidth = "20px";
    num.style.display = "inline-block";
    num.style.textAlign = "center";
    const inc = document.createElement("button");
    inc.textContent = "+";
    inc.addEventListener("click", () => changeQty(k, 1));
    const rem = document.createElement("button");
    rem.textContent = "Hapus";
    rem.addEventListener("click", () => removeItem(k));
    qty.appendChild(dec);
    qty.appendChild(num);
    qty.appendChild(inc);
    qty.appendChild(rem);
    row.appendChild(img);
    row.appendChild(info);
    row.appendChild(qty);
    list.appendChild(row);
  });
  updateTotals();
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  renderCart();
}

function removeItem(id) {
  if (cart[id]) {
    delete cart[id];
    renderCart();
  }
}

function updateTotals() {
  const items = Object.values(cart);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = Math.round(subtotal * 0.1);
  const service = Math.round(subtotal * 0.05);
  const total = subtotal + tax + service;
  $("subtotal").textContent = rupiah(subtotal);
  $("tax").textContent = rupiah(tax);
  $("service").textContent = rupiah(service);
  $("total").textContent = rupiah(total);
}

$("payBtn").addEventListener("click", () => {
  const items = Object.values(cart);
  if (items.length === 0) {
    alert("Keranjang kosong — tambahkan menu terlebih dahulu.");
    return;
  }
  // Get total as number (remove non-digits)
  const total = parseInt(
    document.getElementById("total").textContent.replace(/\D/g, "")
  );
  const custMoney = parseInt($("custMoney").value || "0");
  const custName = $("custName").value.trim() || "Pelanggan";
  if (custMoney < total) {
    alert("Uang Tidak Cukup");
    return;
  }
  playSound("pay.mp3");
  // Calculate change
  const change = custMoney - total;
  // Show modal with customer name and change
  $(
    "modalMsg"
  ).textContent = `Terimakasih, ${custName}, telah berbelanja di cafe kami. Kembalian Anda: ${rupiah(
    change
  )}`;
  showModal();
});

$("resetBtn").addEventListener("click", () => {
  if (confirm("Reset keranjang?")) {
    cart = {};
    renderCart();
  }
});

$("closeModal").addEventListener("click", () => {
  hideModal();
  // Setelah tutup modal, reset keranjang (opsional)
  cart = {};
  renderCart();
  // Reset customer name and money
  $("custName").value = "";
  $("custMoney").value = "";
});

function showModal() {
  const modal = $("modal");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  // juga ubah teks (yang diminta)
  // (already "Pembayaran Berhasil! Terimakasih..." di HTML)
}

function hideModal() {
  const modal = $("modal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

// Search & filter
$("search").addEventListener("input", () => filterMenu());
$("category").addEventListener("change", () => filterMenu());

function filterMenu() {
  const q = $("search").value.toLowerCase();
  const cat = $("category").value;
  const cards = document.querySelectorAll(".menu-card");
  cards.forEach((card, idx) => {
    const item = MENU[idx];
    const matchQ = item.name.toLowerCase().includes(q);
    const matchCat = cat === "all" || item.cat === cat;
    card.style.display = matchQ && matchCat ? "flex" : "none";
  });
}

// Render list of menu names + filenames (untuk kamu menambahkan gambar)
function renderMenuNames() {
  const ol = $("menuNames");
  if (!ol) return;
  ol.innerHTML = "";
  MENU.forEach((m) => {
    const li = document.createElement("li");
    li.textContent = `${m.name} — (file: ${m.img})`;
    ol.appendChild(li);
  });
}

// init
renderMenu();
renderCart();
renderMenuNames();

// Animasi scroll menu
window.addEventListener("scroll", () => {
  document.querySelectorAll(".menu-item").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
});

function playSound(filename) {
  const audio = new Audio(`sounds/${filename}`);
  audio.play();
}

const payBtn = document.getElementById("payBtn");
payBtn.addEventListener("click", () => {
  const name = document.getElementById("custName").value || "Pelanggan";
  const money = parseFloat(document.getElementById("custMoney").value) || 0;
  const subtotal = parseInt(document.getElementById("subtotal").dataset.value || 0);
  const tax = parseInt(document.getElementById("tax").dataset.value || 0);
  const service = parseInt(document.getElementById("service").dataset.value || 0);
  const total = parseInt(document.getElementById("total").dataset.value || 0);

  if (money < total) {
    alert("⚠️ Uang tidak cukup!");
    return;
  }

  const change = money - total;

  // Isi data struk
  document.getElementById("receiptName").innerText = "Nama Kasir: " + name;
  document.getElementById("receiptSubtotal").innerText = "Subtotal: Rp" + subtotal.toLocaleString();
  document.getElementById("receiptTax").innerText = "Pajak (10%): Rp" + tax.toLocaleString();
  document.getElementById("receiptService").innerText = "Service (5%): Rp" + service.toLocaleString();
  document.getElementById("receiptTotal").innerText = "Total: Rp" + total.toLocaleString();
  document.getElementById("receiptPaid").innerText = "Dibayar: Rp" + money.toLocaleString();
  document.getElementById("receiptChange").innerText = "Kembalian: Rp" + change.toLocaleString();

  // Tampilkan struk di layar
  const receipt = document.getElementById("receipt");
  receipt.style.display = "block";
});
