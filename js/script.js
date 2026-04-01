const productData = {
    "midnight-blue": {
        name: "Midnight Blue",
        series: "Aurora Series",
        price: "Rp 275.000",
        priceValue: 275000,
        description:
            "Tas rajutan premium dengan detail pattern handmade. Proses pengerjaan membutuhkan ketelitian tinggi dan cocok untuk daily look yang tetap elegan.",
        colors: ["Midnight Blue", "Forest Green", "Khaki"],
        styleTags: ["simple", "elegan", "daily", "office"],
        images: [
            "linear-gradient(135deg, #4a0e72, #8b2fa0)",
            "linear-gradient(135deg, #5a1e82, #9c3fb0)",
            "linear-gradient(135deg, #3a0e62, #7a1f90)"
        ],
        specs: [
            "Dimensi: 25cm x 18cm x 8cm",
            "Material: 100% Benang Katun Premium",
            "Dilengkapi tali panjang yang dapat dilepas",
            "Tersedia dalam warna Natural, Forest Green, dan Khaki"
        ]
    },
    "crimson": {
        name: "Crimson",
        series: "Serenity Series",
        price: "Rp 275.000",
        priceValue: 275000,
        description:
            "Koleksi premium tas rajutan dengan siluet elegan dan spacious. Cocok untuk daily office look dengan sentuhan feminin.",
        colors: ["Crimson", "Dusty Pink", "Black"],
        styleTags: ["elegan", "feminin", "office", "daily"],
        images: [
            "linear-gradient(135deg, #c41e3a, #8b1a1a)",
            "linear-gradient(135deg, #d43e5a, #9b2a2a)",
            "linear-gradient(135deg, #b40e2a, #7b0a1a)"
        ],
        specs: [
            "Dimensi: 35cm x 25cm x 12cm",
            "Material: Benang Premium Blend (Katun dan Sutra)",
            "Dilengkapi furing berbahan sutra dengan saku tersembunyi",
            "Handle dengan finishing premium",
            "Tersedia dalam warna Dusty Pink, Crimson, dan Black"
        ]
    },
    "dusty-pink": {
        name: "Dusty Pink",
        series: "Serenity Series",
        price: "Rp 275.000",
        priceValue: 275000,
        description:
            "Koleksi premium dengan siluet elegan dan ringan untuk penggunaan harian. Tampilan anggun dan tetap fungsional.",
        colors: ["Dusty Pink", "Crimson", "Black"],
        styleTags: ["feminin", "elegan", "daily", "office"],
        images: [
            "linear-gradient(135deg, #f5d5d1, #e8b4ac)",
            "linear-gradient(135deg, #c41e3a, #8b1a1a)",
            "linear-gradient(135deg, #1a1a1a, #3a3a3a)"
        ],
        specs: [
            "Dimensi: 35cm x 25cm x 12cm",
            "Material: Benang Premium Blend (Katun dan Sutra)",
            "Dilengkapi furing berbahan sutra dengan saku tersembunyi",
            "Handle dengan finishing premium",
            "Tersedia dalam warna Dusty Pink, Crimson, dan Black"
        ]
    },
    "forest-green": {
        name: "Forest Green",
        series: "Botanica Series",
        price: "Rp 375.000",
        priceValue: 375000,
        description:
            "Terinspirasi dari keindahan alam, Botanica memadukan crochet dengan sentuhan daun dan bunga 3D handmade.",
        colors: ["Forest Green", "Sage Green", "Terracotta"],
        styleTags: ["alam", "natural", "unik", "premium"],
        images: [
            "linear-gradient(135deg, #2d5a3d, #1a4d2e)",
            "linear-gradient(135deg, #4a7f5d, #2d6a4d)",
            "linear-gradient(135deg, #a68469, #8b7355)"
        ],
        specs: [
            "Dimensi: 30cm x 22cm x 9cm",
            "Material: Benang Katun Organik Premium",
            "Dilengkapi handle kayu dan tali panjang berbahan katun",
            "Tersedia dalam warna Sage Green, Ecru, dan Terracotta"
        ]
    },
    "harmoni": {
        name: "Natural",
        series: "Harmoni Series",
        price: "Rp 275.000",
        priceValue: 275000,
        description:
            "Desain simpel namun elegan dengan teknik rajut rapat. Cocok untuk aktivitas harian dan tampilan natural.",
        colors: ["Natural", "Forest Green", "Red"],
        styleTags: ["simple", "minimalis", "natural", "daily"],
        images: [
            "linear-gradient(135deg, #d4a574, #a68469)",
            "linear-gradient(135deg, #2d5a3d, #1a4d2e)",
            "linear-gradient(135deg, #c41e3a, #8b1a1a)"
        ],
        specs: [
            "Dimensi: 25cm x 18cm x 8cm",
            "Material: 100% Benang Katun Premium",
            "Dilengkapi tali panjang yang dapat dilepas",
            "Tersedia dalam warna Natural, Forest Green, Red, dan Khaki"
        ]
    },
    "bohemian": {
        name: "Dusty Green",
        series: "Bohemian Series",
        price: "Rp 350.000",
        priceValue: 350000,
        description:
            "Tas rajutan dengan sentuhan bohemian untuk gaya yang adventurous. Warna dan teksturnya eye-catching.",
        colors: ["Dusty Green", "Off-White", "Ocean Blue"],
        styleTags: ["bohemian", "casual", "adventurous", "unik"],
        images: [
            "linear-gradient(135deg, #4a7f5d, #2d5a3d)",
            "linear-gradient(135deg, #e8e3dc, #d5cac0)",
            "linear-gradient(135deg, #2b5a7a, #1a3a5a)"
        ],
        specs: [
            "Dimensi: 32cm x 28cm x 10cm",
            "Material: Benang Katun Premium dan Tali Rajut Natural",
            "Dilengkapi aksen mengkilat",
            "Tersedia dalam warna Terracotta, Off-White, dan Ocean Blue"
        ]
    }
};

const modal = document.getElementById("productModal");
const closeBtn = document.querySelector(".close");
const viewButtons = document.querySelectorAll(".view-button");
const productCards = document.querySelectorAll(".product-card");

let currentProductId = null;
let currentImageIndex = 0;
let selectedColor = null;
let autoplayInterval = null;

viewButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        const productId = button.closest(".product-card").dataset.product;
        openModal(productId);
    });
});

productCards.forEach((card) => {
    card.addEventListener("click", () => {
        const productId = card.dataset.product;
        openModal(productId);
    });
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.querySelector(".modal-content").addEventListener("click", (e) => {
    e.stopPropagation();
});

function setupImageSlider(productId) {
    const product = productData[productId];
    if (!product) return;

    const modalImage = document.querySelector(".modal-image");

    const slider = document.createElement("div");
    slider.className = "image-slider-container";
    slider.innerHTML = `
        <div class="slider-main" id="sliderMain"></div>
        <div class="slider-controls">
            <button class="slider-btn prev" id="prevBtn" aria-label="Slide sebelumnya">&lt;</button>
            <div class="slider-indicators" id="sliderIndicators"></div>
            <button class="slider-btn next" id="nextBtn" aria-label="Slide berikutnya">&gt;</button>
        </div>
    `;

    modalImage.innerHTML = "";
    modalImage.appendChild(slider);

    const indicators = document.getElementById("sliderIndicators");
    product.images.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `indicator ${index === 0 ? "active" : ""}`;
        dot.setAttribute("aria-label", `Lihat gambar ${index + 1}`);
        dot.addEventListener("click", () => goToSlide(index));
        indicators.appendChild(dot);
    });

    document.getElementById("prevBtn").addEventListener("click", previousSlide);
    document.getElementById("nextBtn").addEventListener("click", nextSlide);

    updateSlider();
}

function setupColorSelector(productId) {
    const product = productData[productId];
    if (!product) return;

    const colorSelector = document.getElementById("colorSelector");
    colorSelector.innerHTML = '<p class="color-label">Pilih Warna:</p>';

    product.colors.forEach((color, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `color-button ${index === 0 ? "active" : ""}`;
        btn.textContent = color;
        btn.addEventListener("click", () => selectColor(color, btn));
        colorSelector.appendChild(btn);
    });

    selectedColor = product.colors[0];
}

function selectColor(color, buttonEl) {
    selectedColor = color;
    document.querySelectorAll(".color-button").forEach((btn) => {
        btn.classList.remove("active");
    });
    buttonEl.classList.add("active");
}

function updateSlider() {
    const product = productData[currentProductId];
    if (!product) return;

    const sliderMain = document.getElementById("sliderMain");
    if (!sliderMain) return;

    sliderMain.style.background = product.images[currentImageIndex];

    document.querySelectorAll(".indicator").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentImageIndex);
    });
}

function nextSlide() {
    const product = productData[currentProductId];
    if (!product) return;

    currentImageIndex = (currentImageIndex + 1) % product.images.length;
    updateSlider();
    resetAutoplay();
}

function previousSlide() {
    const product = productData[currentProductId];
    if (!product) return;

    currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
    updateSlider();
    resetAutoplay();
}

function goToSlide(index) {
    currentImageIndex = index;
    updateSlider();
    resetAutoplay();
}

function startAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
        const product = productData[currentProductId];
        if (!product) return;
        currentImageIndex = (currentImageIndex + 1) % product.images.length;
        updateSlider();
    }, 5000);
}

function resetAutoplay() {
    startAutoplay();
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    clearInterval(autoplayInterval);
}

function generateWhatsAppMessage() {
    const product = productData[currentProductId];
    if (!product) return "";

    const message = `Halo, saya tertarik dengan produk ACHIYO!\nnama series : ${product.series}\nwarna : ${selectedColor}\nharga : ${product.price}\nbiaya pengiriman : menyesuaikan\nnoted : (diisi oleh customer)\n\nMohon bantuannya.\nTerimakasih`;

    return encodeURIComponent(message);
}

function handleBuyClick() {
    const phoneNumber = "6285176770503";
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
}

function openModal(productId) {
    const product = productData[productId];
    if (!product) return;

    currentProductId = productId;
    currentImageIndex = 0;
    selectedColor = product.colors[0];

    document.getElementById("modalTitle").textContent = product.name;
    document.getElementById("modalSeries").textContent = product.series;
    document.getElementById("modalPrice").textContent = product.price;
    document.getElementById("modalDescription").textContent = product.description;

    const specsList = document.getElementById("modalSpecs");
    specsList.innerHTML = "";
    product.specs.forEach((spec) => {
        const li = document.createElement("li");
        li.textContent = spec;
        specsList.appendChild(li);
    });

    setupImageSlider(productId);
    setupColorSelector(productId);

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    startAutoplay();
}

const buyButton = document.getElementById("buyButton");
if (buyButton) {
    buyButton.style.cursor = "pointer";
    buyButton.addEventListener("click", handleBuyClick);
    buyButton.textContent = "Beli Sekarang via WhatsApp";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }

    if (modal.style.display === "block") {
        if (e.key === "ArrowRight") {
            nextSlide();
        }
        if (e.key === "ArrowLeft") {
            previousSlide();
        }
    }
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll(".product-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
});

document.querySelectorAll(".testimonial-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
});

function formatPrice(value) {
    return `Rp ${value.toLocaleString("id-ID")}`;
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[!?.,]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function detectBudget(text) {
    const numericTokens = text.match(/\d+[\d\.]*/g);
    if (!numericTokens) return null;

    const raw = numericTokens[0].replace(/\./g, "");
    const value = Number(raw);
    if (!Number.isFinite(value)) return null;

    if (value < 1000) return value * 1000;
    return value;
}

function parsePrice(priceText) {
    return Number(priceText.replace(/[^\d]/g, ""));
}

function getProductLabel(product) {
    return `${product.series} - ${product.name}`;
}

function getAllProductsArray() {
    return Object.values(productData);
}

function findProductByText(text) {
    const normalized = normalizeText(text);
    const matches = Object.entries(productData).map(([id, product]) => {
        const productTokens = [
            id,
            product.series,
            product.name,
            ...product.colors,
            ...product.styleTags,
            ...product.series.toLowerCase().split(" "),
            ...product.name.toLowerCase().split(" ")
        ].map((token) => token.toLowerCase());

        let score = 0;
        productTokens.forEach((token) => {
            if (token.length > 2 && normalized.includes(token)) {
                score += 1;
            }
        });

        if (normalized.includes(id.toLowerCase())) score += 2;
        if (normalized.includes(product.series.toLowerCase())) score += 2;
        if (normalized.includes(product.name.toLowerCase())) score += 2;

        return { id, product, score };
    });

    matches.sort((a, b) => b.score - a.score);
    if (matches[0] && matches[0].score >= 2) {
        return { id: matches[0].id, product: matches[0].product };
    }

    return null;
}

function applyMicioTone(replyText, userText) {
    const q = normalizeText(userText || "");
    let opener = "Oke bestie, Micio bantu pilihkan yang paling pas ya.";

    if (q.includes("halo") || q.includes("hai") || q.includes("hi")) {
        opener = "Hai cantik, Micio standby. Kamu tanya, aku bantu beresin pilihannya.";
    } else if (
        q.includes("rekomendasi") ||
        q.includes("cocok") ||
        q.includes("anak muda") ||
        q.includes("budget")
    ) {
        opener = "Sip, dengerin Micio ya. Ini opsi yang paling on point buat kamu.";
    } else if (q.includes("custom")) {
        opener = "Noted queen, kita atur custom-nya biar sesuai maumu.";
    } else if (q.includes("harga") || q.includes("material") || q.includes("dimensi") || q.includes("warna")) {
        opener = "Siap, ini detailnya. Biar jelas dan langsung kepakai buat ambil keputusan.";
    }

    return `${opener}\n${replyText}`;
}

function listValuesByField(fieldName) {
    const values = new Set();
    Object.values(productData).forEach((product) => {
        (product[fieldName] || []).forEach((value) => values.add(value));
    });
    return Array.from(values);
}

function getCheapestProduct() {
    const products = getAllProductsArray();
    return products.reduce((min, product) => (product.priceValue < min.priceValue ? product : min), products[0]);
}

function getMostExpensiveProduct() {
    const products = getAllProductsArray();
    return products.reduce((max, product) => (product.priceValue > max.priceValue ? product : max), products[0]);
}

function getRecommendations(text) {
    const normalized = normalizeText(text);
    const budget = detectBudget(normalized);

    const styleHints = [
        { keys: ["office", "kantor", "formal", "rapi"], match: ["Serenity Series", "Harmoni Series"] },
        { keys: ["natural", "alam", "eco", "organik"], match: ["Botanica Series", "Harmoni Series"] },
        { keys: ["bohemian", "casual", "adventurous", "bebas"], match: ["Bohemian Series"] },
        { keys: ["elegan", "feminin", "anggun"], match: ["Serenity Series", "Aurora Series"] },
        { keys: ["simple", "minimalis", "harian", "daily"], match: ["Harmoni Series", "Aurora Series"] },
        { keys: ["anak muda", "muda", "kekinian", "trendy", "gaul", "hits", "estetik", "stylish"], match: ["Bohemian Series", "Serenity Series", "Aurora Series"] }
    ];

    const scored = Object.entries(productData).map(([id, product]) => {
        let score = 0;
        const reasons = [];

        if (budget) {
            if (product.priceValue <= budget) {
                score += 3;
                reasons.push(`sesuai budget ${formatPrice(budget)}`);
            } else {
                score -= 1;
            }
        }

        styleHints.forEach((hint) => {
            if (hint.keys.some((key) => normalized.includes(key)) && hint.match.includes(product.series)) {
                score += 2;
                reasons.push("sesuai style yang kamu cari");
            }
        });

        const colorMatch = product.colors.find((color) => normalized.includes(color.toLowerCase()));
        if (colorMatch) {
            score += 2;
            reasons.push(`tersedia warna ${colorMatch}`);
        }

        if (normalized.includes("premium") && product.priceValue >= 300000) {
            score += 1;
            reasons.push("punya detail premium");
        }

        if (normalized.includes("anak muda") || normalized.includes("kekinian") || normalized.includes("trendy")) {
            if (["Bohemian Series", "Serenity Series", "Aurora Series"].includes(product.series)) {
                score += 3;
                reasons.push("favorit gaya anak muda");
            }
        }

        return { id, product, score, reasons };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 2);
}

function productInfoResponse(product) {
    return [
        `${getProductLabel(product)}`,
        `Harga: ${product.price}`,
        `Warna: ${product.colors.join(", ")}`,
        `Detail: ${product.description}`,
        `Spesifikasi utama: ${product.specs.slice(0, 2).join(" | ")}`
    ].join("\n");
}

function productSpecByKeywordResponse(keyword) {
    const normalizedKeyword = normalizeText(keyword);
    const matched = Object.values(productData).filter((product) => {
        const joined = [product.series, product.name, ...product.colors, ...product.styleTags].join(" ").toLowerCase();
        return joined.includes(normalizedKeyword);
    });

    if (matched.length === 0) {
        return null;
    }

    return matched
        .map((product) => {
            return `${getProductLabel(product)}\nHarga: ${product.price}\nWarna: ${product.colors.join(", ")}\n${product.specs.join(" | ")}`;
        })
        .join("\n\n");
}

function allProductsResponse() {
    const list = Object.values(productData)
        .map((product) => `- ${product.series} (${product.name}) : ${product.price}`)
        .join("\n");

    return `Berikut produk Achiyo yang tersedia:\n${list}\n\nKamu juga bisa minta rekomendasi dengan format: "rekomendasi tas budget 300000 untuk office".`;
}

function dimensionsResponse() {
    const list = Object.values(productData)
        .map((product) => `${getProductLabel(product)} : ${product.specs.find((s) => s.toLowerCase().includes("dimensi")) || "-"}`)
        .join("\n");
    return `Informasi dimensi produk Achiyo:\n${list}`;
}

function materialsResponse() {
    const list = Object.values(productData)
        .map((product) => `${getProductLabel(product)} : ${product.specs.find((s) => s.toLowerCase().includes("material")) || "-"}`)
        .join("\n");
    return `Informasi material produk Achiyo:\n${list}`;
}

function colorsResponse() {
    const colors = listValuesByField("colors");
    return `Warna yang tersedia di koleksi Achiyo: ${colors.join(", ")}.`;
}

function customResponse() {
    return [
        "Untuk custom Achiyo, kamu bisa sebutkan:",
        "- model/series yang diinginkan",
        "- warna favorit",
        "- kebutuhan pemakaian (daily/office/acara)",
        "- budget",
        "- detail tambahan (nama/inisial/noted khusus)",
        "",
        "Setelah itu klik produk lalu tekan tombol Beli Sekarang via WhatsApp supaya format pesan otomatis terisi."
    ].join("\n");
}

function greetingResponse() {
    return "Halo, aku Micio. Kamu bisa tanya apa pun seputar produk Achiyo: harga, bahan, dimensi, warna, rekomendasi style, sampai custom request. Tinggal bilang kebutuhanmu, aku bantu pilih yang paling cocok.";
}

function shippingResponse() {
    return "Untuk biaya pengiriman menyesuaikan lokasi customer. Saat checkout via WhatsApp, tim Achiyo akan bantu hitung ongkir sesuai alamat tujuan.";
}

function recommendationResponseFromText(text) {
    const picks = getRecommendations(text);
    const lines = ["Micio rekomendasikan produk ini:"];

    picks.forEach((pick, index) => {
        const reasonText = pick.reasons.length > 0 ? pick.reasons.join(", ") : "fit umum untuk kebutuhanmu";
        lines.push(`${index + 1}. ${getProductLabel(pick.product)} - ${pick.product.price} (${reasonText})`);
    });

    lines.push("Klik card produknya untuk lihat detail lengkap, pilih warna, lalu lanjut checkout via WhatsApp.");
    return lines.join("\n");
}

function recommendationFromProfile(profile) {
    const queryParts = [
        profile.style || "",
        profile.ageStyle || "",
        profile.color ? `warna ${profile.color}` : "",
        profile.budget ? `budget ${profile.budget}` : ""
    ];

    return recommendationResponseFromText(queryParts.join(" ").trim());
}

function parseGuideAnswer(step, text) {
    const normalized = normalizeText(text);
    if (step === 1) {
        const budget = detectBudget(normalized);
        return budget || null;
    }

    if (step === 2) {
        const styleMap = [
            { keys: ["office", "kantor", "formal", "rapi"], value: "office" },
            { keys: ["daily", "harian", "simple", "minimalis"], value: "daily" },
            { keys: ["anak muda", "kekinian", "trendy", "gaul", "estetik", "muda"], value: "anak muda" },
            { keys: ["natural", "alam", "eco", "organik"], value: "natural" },
            { keys: ["bohemian", "adventurous", "casual"], value: "bohemian" },
            { keys: ["elegan", "feminin", "anggun"], value: "elegan" }
        ];

        const match = styleMap.find((item) => item.keys.some((key) => normalized.includes(key)));
        return match ? match.value : normalized;
    }

    if (step === 3) {
        const allColors = listValuesByField("colors");
        const found = allColors.find((color) => normalized.includes(color.toLowerCase()));
        return found || normalized;
    }

    return null;
}

function buildMicioReply(userText) {
    const text = normalizeText(userText);

    if (!text) {
        return "Silakan ketik pertanyaanmu ya. Contoh: rekomendasi tas elegan budget 300rb.";
    }

    if (["halo", "hai", "hi", "pagi", "siang", "sore", "malam"].some((word) => text.includes(word))) {
        return greetingResponse();
    }

    if (text.includes("custom") || text.includes("request") || text.includes("pesan khusus")) {
        return customResponse();
    }

    if (text.includes("ongkir") || text.includes("pengiriman") || text.includes("biaya kirim")) {
        return shippingResponse();
    }

    if (text.includes("material") || text.includes("bahan") || text.includes("katun") || text.includes("sutra")) {
        return materialsResponse();
    }

    if (text.includes("dimensi") || text.includes("ukuran") || text.includes("besar") || text.includes("muat")) {
        return dimensionsResponse();
    }

    if (text.includes("warna") || text.includes("color")) {
        return colorsResponse();
    }

    if (text.includes("termurah") || text.includes("paling murah")) {
        const cheapest = getCheapestProduct();
        return `Produk paling terjangkau saat ini: ${getProductLabel(cheapest)} dengan harga ${cheapest.price}.`;
    }

    if (text.includes("termahal") || text.includes("paling mahal")) {
        const expensive = getMostExpensiveProduct();
        return `Produk premium dengan harga tertinggi saat ini: ${getProductLabel(expensive)} dengan harga ${expensive.price}.`;
    }

    if (text.includes("produk") && (text.includes("apa") || text.includes("list") || text.includes("semua"))) {
        return allProductsResponse();
    }

    if (text.includes("anak muda") || text.includes("kekinian") || text.includes("trendy") || text.includes("gaul")) {
        return recommendationResponseFromText(`${text} rekomendasi`);
    }

    const directHit = findProductByText(text);
    if (directHit) {
        return productInfoResponse(directHit.product);
    }

    const aboutInfoKeywords = ["botanica", "serenity", "aurora", "harmoni", "bohemian", "midnight", "crimson", "dusty", "natural", "forest"];
    const matchedSeriesKeyword = aboutInfoKeywords.find((word) => text.includes(word));
    if (matchedSeriesKeyword) {
        const info = productSpecByKeywordResponse(matchedSeriesKeyword);
        if (info) return info;
    }

    if (text.includes("rekomendasi") || text.includes("cocok") || text.includes("sarankan") || text.includes("budget")) {
        return recommendationResponseFromText(text);
    }

    if (text.includes("harga")) {
        return allProductsResponse();
    }

    const maybeProductInfo = productSpecByKeywordResponse(text);
    if (maybeProductInfo) {
        return maybeProductInfo;
    }

    return "Aku bisa bantu info produk Achiyo secara lengkap: harga, bahan, dimensi, warna, custom, dan rekomendasi personal (termasuk style anak muda). Contoh: saya suka produk yang disukai anak muda budget 300rb, atau saya cari tas daily untuk kuliah.";
}

function initMicio() {
    const toggle = document.getElementById("micioToggle");
    const panel = document.getElementById("micioPanel");
    const close = document.getElementById("micioClose");
    const form = document.getElementById("micioForm");
    const input = document.getElementById("micioInput");
    const messages = document.getElementById("micioMessages");
    const chips = document.querySelectorAll(".micio-chip");

    const guideState = {
        active: false,
        step: 0,
        profile: {
            budget: null,
            style: "",
            ageStyle: "",
            color: ""
        }
    };

    if (!toggle || !panel || !form || !input || !messages) return;

    const appendMessage = (text, role) => {
        const bubble = document.createElement("div");
        bubble.className = `micio-bubble ${role}`;
        bubble.textContent = text;
        messages.appendChild(bubble);
        messages.scrollTop = messages.scrollHeight;
    };

    const appendBot = (replyText, userQuery) => {
        appendMessage(applyMicioTone(replyText, userQuery), "bot");
    };

    const askMicio = (query) => {
        appendMessage(query, "user");

        if (guideState.active) {
            const parsed = parseGuideAnswer(guideState.step, query);

            if (guideState.step === 1) {
                if (!parsed) {
                    setTimeout(() => appendBot("Aku belum menangkap budgetnya. Tulis angka saja, misalnya 300000 atau 300rb.", query), 180);
                    return;
                }
                guideState.profile.budget = parsed;
                guideState.step = 2;
                setTimeout(() => appendBot("Bagus. Sekarang pilih style kamu: office, daily, anak muda, bohemian, natural, atau elegan.", query), 180);
                return;
            }

            if (guideState.step === 2) {
                guideState.profile.style = String(parsed || "");
                if (["anak muda"].includes(guideState.profile.style)) {
                    guideState.profile.ageStyle = "anak muda";
                }
                guideState.step = 3;
                setTimeout(() => appendBot("Sekarang pilih warna favoritmu. Contoh: Dusty Pink, Forest Green, atau Ocean Blue.", query), 180);
                return;
            }

            if (guideState.step === 3) {
                guideState.profile.color = String(parsed || "");
                const finalReply = recommendationFromProfile(guideState.profile);
                guideState.active = false;
                guideState.step = 0;
                guideState.profile = {
                    budget: null,
                    style: "",
                    ageStyle: "",
                    color: ""
                };

                setTimeout(() => appendBot(finalReply, query), 180);
                return;
            }
        }

        const normalized = normalizeText(query);
        if (
            normalized.includes("bingung pilih") ||
            normalized.includes("bantu pilih") ||
            normalized.includes("pilihin") ||
            normalized.includes("rekomendasi personal") ||
            normalized.includes("mulai rekomendasi")
        ) {
            guideState.active = true;
            guideState.step = 1;
            guideState.profile = {
                budget: null,
                style: "",
                ageStyle: "",
                color: ""
            };
            setTimeout(() => appendBot("Perfect. Kita pilih yang paling pas buat kamu. Budget kamu berapa? Contoh: 300000.", query), 180);
            return;
        }

        const reply = buildMicioReply(query);
        setTimeout(() => appendBot(reply, query), 220);
    };

    appendBot(
        "Halo, aku Micio. Aku bisa bantu info produk Achiyo, saran custom, dan rekomendasi tas yang cocok buat kamu. Coba sebutkan kebutuhanmu ya.",
        "halo"
    );
    appendBot(
        "Kalau mau rekomendasi lebih personal, ketik: bantu pilih tas.",
        "rekomendasi personal"
    );

    toggle.addEventListener("click", () => {
        panel.classList.toggle("open");
        if (panel.classList.contains("open")) {
            input.focus();
        }
    });

    close.addEventListener("click", () => {
        panel.classList.remove("open");
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = input.value.trim();
        if (!query) return;
        askMicio(query);
        input.value = "";
    });

    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            const query = chip.dataset.query || "";
            if (!query) return;
            if (!panel.classList.contains("open")) {
                panel.classList.add("open");
            }
            askMicio(query);
        });
    });
}

initMicio();
