const brandThemes = {
  Apple: ["#0f172a", "#2563eb"],
  Samsung: ["#111827", "#0ea5e9"],
  Xiaomi: ["#7c2d12", "#f97316"],
  OPPO: ["#14532d", "#22c55e"],
  Google: ["#312e81", "#8b5cf6"],
  ASUS: ["#1e293b", "#38bdf8"],
  Dell: ["#0f172a", "#22c55e"],
  Lenovo: ["#111827", "#ef4444"],
  HP: ["#0f172a", "#06b6d4"],
  Acer: ["#1f2937", "#84cc16"],
  Microsoft: ["#0f172a", "#3b82f6"],
  default: ["#0f172a", "#64748b"],
};

const phoneImage = (brand, model) => {
  const [from, to] = brandThemes[brand] || brandThemes.default;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 720" role="img" aria-label="${brand} ${model}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="960" height="720" rx="44" fill="url(#bg)" />
      <rect x="58" y="58" width="844" height="604" rx="34" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
      <circle cx="196" cy="166" r="74" fill="rgba(255,255,255,0.12)" />
      <rect x="284" y="146" width="352" height="24" rx="12" fill="rgba(255,255,255,0.18)" />
      <rect x="284" y="190" width="260" height="18" rx="9" fill="rgba(255,255,255,0.14)" />
      <text x="92" y="354" fill="#ffffff" font-size="54" font-weight="700" font-family="Inter, Arial, sans-serif">${brand}</text>
      <text x="92" y="424" fill="#e2e8f0" font-size="38" font-weight="500" font-family="Inter, Arial, sans-serif">${model}</text>
      <text x="92" y="492" fill="#cbd5e1" font-size="24" font-weight="500" font-family="Inter, Arial, sans-serif">Dữ liệu minh họa cho prototype</text>
      <rect x="92" y="548" width="238" height="48" rx="24" fill="rgba(255,255,255,0.16)" />
      <text x="121" y="580" fill="#ffffff" font-size="22" font-weight="600" font-family="Inter, Arial, sans-serif">TechGuide Demo</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const sourceDate = "2026-09-23";
const officialSources = {
  Apple: {
    name: "Apple - iPhone",
    url: "https://www.apple.com/iphone/",
  },
  Samsung: {
    name: "Samsung - Galaxy smartphones",
    url: "https://www.samsung.com/global/galaxy/",
  },
  Xiaomi: {
    name: "Xiaomi - Smartphones",
    url: "https://www.mi.com/global/phone/",
  },
  OPPO: {
    name: "OPPO - Smartphones",
    url: "https://www.oppo.com/en/smartphones/",
  },
  Google: {
    name: "Google Store - Pixel phones",
    url: "https://store.google.com/category/phones",
  },
  ASUS: {
    name: "ASUS - Phones and gaming devices",
    url: "https://www.asus.com/mobile-handhelds/",
  },
  Dell: {
    name: "Dell - Laptops",
    url: "https://www.dell.com/en-us/shop/dell-laptops-and-2-in-1-pcs/scr/laptops",
  },
  Lenovo: {
    name: "Lenovo - Laptops",
    url: "https://www.lenovo.com/us/en/c/laptops/",
  },
  HP: {
    name: "HP - Laptops",
    url: "https://www.hp.com/us-en/shop/cat/laptops",
  },
  Acer: {
    name: "Acer - Laptops",
    url: "https://www.acer.com/us-en/laptops",
  },
  Microsoft: {
    name: "Microsoft Surface - Laptops",
    url: "https://www.microsoft.com/en-us/surface/devices/surface-laptops",
  },
};

const productSource = (brand) => ({
  ...officialSources[brand],
  accessedAt: sourceDate,
});

const verifiedSource = (name, url) => ({
  name,
  url,
  accessedAt: sourceDate,
});

export const products = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    category: "phone",
    price: 29990000,
    image: phoneImage("Apple", "iPhone 16 Pro"),
    description:
      "Điện thoại cao cấp với hiệu năng mạnh, camera linh hoạt và hệ sinh thái Apple.",
    quickAnswer:
      "iPhone 16 Pro phù hợp với người dùng cần hiệu năng mạnh, camera tốt và trải nghiệm phần mềm ổn định.",
    releaseDate: "2024-09",
    os: "iOS",
    display: "6.3 inch OLED, 120Hz",
    processor: "Apple A18 Pro",
    ram: "8GB",
    storage: "128GB",
    camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
    battery: "Tối đa 27 giờ phát video theo Apple",
    weight: "199g",
    connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, USB-C",
    suitableFor: ["camera", "work", "ecosystem"],
    pros: ["Hiệu năng mạnh", "Camera linh hoạt", "Hệ sinh thái tốt"],
    cons: ["Giá cao", "Không phù hợp người cần màn hình lớn nhất"],
    tags: ["iphone", "pin", "camera", "cao cấp"],
    sources: [
      verifiedSource(
        "Apple Support - iPhone 16 Pro Tech Specs",
        "https://support.apple.com/en-us/121031",
      ),
    ],
    verificationStatus:
      "Đã đối chiếu các thông số cơ bản với nguồn chính thức.",
    faq: [
      {
        question: "iPhone 16 Pro có phù hợp cho sinh viên không?",
        answer: "Phù hợp nếu bạn ưu tiên camera, độ ổn định và dùng lâu dài.",
      },
      {
        question: "Máy có phù hợp chơi game không?",
        answer: "Có, nhờ chip mạnh và tối ưu hệ điều hành tốt.",
      },
      {
        question: "Pin có đủ dùng cả ngày không?",
        answer: "Phù hợp cho nhu cầu phổ thông đến hỗn hợp trong một ngày.",
      },
      {
        question: "Máy có mạnh hơn thế hệ trước không?",
        answer:
          "Dữ liệu demo này mô tả một nâng cấp thế hệ mới với hiệu năng cao hơn.",
      },
      {
        question: "Điện thoại này hợp người chụp ảnh không?",
        answer:
          "Có, vì hệ camera được mô tả thiên về sự linh hoạt và chất lượng ảnh cao.",
      },
    ],
  },
  {
    id: "galaxy-s26-ultra",
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    category: "phone",
    price: 31990000,
    image: phoneImage("Samsung", "Galaxy S26 Ultra"),
    description:
      "Mẫu flagship thiên về màn hình lớn, bút S Pen và khả năng đa nhiệm.",
    quickAnswer:
      "Galaxy S26 Ultra phù hợp nếu bạn ưu tiên màn hình lớn, đa nhiệm và pin mạnh.",
    releaseDate: "2025-01",
    os: "Android",
    display: "6.8 inch AMOLED, 120Hz",
    processor: "Snapdragon 8 Elite for Galaxy",
    ram: "12GB",
    storage: "256GB",
    camera: "200MP + 12MP + 50MP + 10MP",
    battery: "5000mAh",
    weight: "232g",
    connectivity: "5G, Wi-Fi 7, Bluetooth 5.4, USB-C",
    suitableFor: ["camera", "work", "battery", "multitask"],
    pros: ["Màn hình lớn", "Camera nhiều chế độ", "Pin tốt"],
    cons: ["Kích thước lớn", "Nặng hơn nhóm máy phổ thông"],
    tags: ["samsung", "pin", "camera", "multitask"],
    sources: [productSource("Samsung")],
    faq: [
      {
        question: "Galaxy S26 Ultra có hợp người cần pin tốt không?",
        answer: "Có, đây là lựa chọn phù hợp nếu ưu tiên thời lượng pin.",
      },
      {
        question: "Máy có phù hợp văn phòng không?",
        answer: "Có, đặc biệt khi bạn cần màn hình lớn và đa nhiệm.",
      },
      {
        question: "Có phù hợp chụp ảnh không?",
        answer: "Có, vì định hướng camera được mô tả rất mạnh.",
      },
      {
        question: "Máy có quá lớn không?",
        answer: "Có thể lớn với người dùng thích máy gọn nhẹ.",
      },
      {
        question: "Có nên so sánh với iPhone 16 Pro không?",
        answer:
          "Nên, nếu bạn phân vân giữa camera, hệ sinh thái và màn hình lớn.",
      },
    ],
  },
  {
    id: "xiaomi-15-ultra",
    name: "Xiaomi 15 Ultra",
    brand: "Xiaomi",
    category: "phone",
    price: 26990000,
    image: phoneImage("Xiaomi", "15 Ultra"),
    description:
      "Flagship tập trung vào camera, sạc nhanh và giá thường cạnh tranh hơn nhóm siêu cao cấp.",
    quickAnswer:
      "Xiaomi 15 Ultra phù hợp với người thích camera mạnh và giá cạnh tranh trong phân khúc cao cấp.",
    releaseDate: "2025-02",
    os: "Android",
    display: "6.73 inch AMOLED, 120Hz",
    processor: "Snapdragon 8 Elite",
    ram: "12GB",
    storage: "512GB",
    camera:
      "Leica 50MP main + 50MP ultra-wide + 50MP telephoto + 200MP ultra telephoto",
    battery: "5410mAh (typ)",
    weight: "226g (Black/White) hoặc 229g (Silver Chrome)",
    connectivity: "5G, Wi-Fi 7, Bluetooth 6.0, USB-C",
    suitableFor: ["camera", "gaming", "battery"],
    pros: ["Camera đa tiêu cự", "Sạc nhanh", "Hiệu năng mạnh"],
    cons: ["Giao diện có thể cần làm quen", "Thiết kế lớn"],
    tags: ["xiaomi", "camera", "sac nhanh", "gaming"],
    sources: [
      verifiedSource(
        "Xiaomi - Xiaomi 15 Ultra Specs",
        "https://www.mi.com/global/product/xiaomi-15-ultra/specs/",
      ),
    ],
    verificationStatus:
      "Đã đối chiếu các thông số cơ bản với nguồn chính thức.",
    faq: [
      {
        question: "Xiaomi 15 Ultra có hợp chụp ảnh không?",
        answer: "Có, đây là nhóm máy phù hợp người ưu tiên camera.",
      },
      {
        question: "Pin có tốt không?",
        answer: "Có, nhờ viên pin lớn trong mô tả demo.",
      },
      {
        question: "Có hợp game không?",
        answer: "Có, vì chip flagship và RAM lớn.",
      },
      {
        question: "Có đáng so sánh với Galaxy Ultra không?",
        answer: "Có, vì cùng hướng đến người dùng cao cấp.",
      },
      {
        question: "Máy có phù hợp làm việc không?",
        answer: "Phù hợp nếu bạn cần màn hình lớn và hiệu năng cao.",
      },
    ],
  },
  {
    id: "oppo-find-x8-pro",
    name: "OPPO Find X8 Pro",
    brand: "OPPO",
    category: "phone",
    price: 23990000,
    image: phoneImage("OPPO", "Find X8 Pro"),
    description:
      "Điện thoại cân bằng giữa camera, thiết kế và trải nghiệm sử dụng hàng ngày.",
    quickAnswer:
      "OPPO Find X8 Pro phù hợp nếu bạn muốn thiết kế đẹp, camera tốt và trải nghiệm cân bằng.",
    releaseDate: "2024-10",
    os: "Android",
    display: "6.78 inch AMOLED, 120Hz",
    processor: "Dimensity 9400",
    ram: "16GB",
    storage: "512GB",
    camera: "50MP + 50MP + 64MP + 50MP",
    battery: "5000mAh",
    weight: "215g",
    connectivity: "5G, Wi-Fi 7, Bluetooth 5.4, USB-C",
    suitableFor: ["camera", "work", "daily"],
    pros: ["Thiết kế đẹp", "Camera đa dụng", "RAM lớn"],
    cons: ["Giá cao", "Không phải máy nhỏ gọn"],
    tags: ["oppo", "camera", "thiet ke", "ram"],
    sources: [productSource("OPPO")],
    faq: [
      {
        question: "OPPO Find X8 Pro có hợp chụp ảnh không?",
        answer: "Có, đặc biệt với người thích ảnh đẹp và dễ dùng.",
      },
      {
        question: "Máy có hợp văn phòng không?",
        answer: "Có, nhờ RAM lớn và màn hình đẹp.",
      },
      {
        question: "Có nên chọn nếu cần máy gọn nhẹ?",
        answer: "Không hẳn, vì đây là máy cao cấp kích thước lớn.",
      },
      {
        question: "Máy có hợp so sánh với Xiaomi Ultra không?",
        answer: "Có, vì cùng tập trung camera và hiệu năng.",
      },
      {
        question: "Pin dùng có lâu không?",
        answer: "Đủ cho nhu cầu hỗn hợp trong ngày.",
      },
    ],
  },
  {
    id: "pixel-9-pro",
    name: "Google Pixel 9 Pro",
    brand: "Google",
    category: "phone",
    price: 25990000,
    image: phoneImage("Google", "Pixel 9 Pro"),
    description:
      "Mẫu máy tối ưu phần mềm, camera tính toán và trải nghiệm Android thuần.",
    quickAnswer:
      "Pixel 9 Pro phù hợp với người thích Android sạch, camera thông minh và cập nhật phần mềm tốt.",
    releaseDate: "2024-08",
    os: "Android",
    display: "6.7 inch LTPO OLED, 120Hz",
    processor: "Google Tensor G4",
    ram: "12GB",
    storage: "256GB",
    camera: "50MP + 48MP + 48MP",
    battery: "4700mAh",
    weight: "199g",
    connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, USB-C",
    suitableFor: ["camera", "daily", "work"],
    pros: ["Android thuần", "Camera xử lý tốt", "Máy gọn hơn nhiều flagship"],
    cons: ["Chip không thiên về game bằng một số máy khác", "Giá cao"],
    tags: ["google", "android", "camera", "thuần"],
    sources: [productSource("Google")],
    faq: [
      {
        question: "Pixel 9 Pro có hợp người thích Android thuần không?",
        answer: "Có, đây là nhóm máy rất phù hợp.",
      },
      {
        question: "Máy có chụp ảnh tốt không?",
        answer: "Có, đặc biệt nhờ xử lý phần mềm ảnh.",
      },
      {
        question: "Có hợp game nặng không?",
        answer: "Phù hợp mức khá, nhưng không phải ưu tiên số một cho game.",
      },
      {
        question: "Có nên so với iPhone không?",
        answer: "Có, nếu bạn cân nhắc giữa Android thuần và iOS.",
      },
      {
        question: "Máy có nhẹ không?",
        answer: "Tương đối nhẹ so với nhiều flagship lớn.",
      },
    ],
  },
  {
    id: "asus-rog-phone-9",
    name: "ASUS ROG Phone 9",
    brand: "ASUS",
    category: "phone",
    price: 27990000,
    image: phoneImage("ASUS", "ROG Phone 9"),
    description:
      "Điện thoại hướng game thủ với tản nhiệt, màn hình mượt và pin lớn.",
    quickAnswer:
      "ROG Phone 9 phù hợp nhất với người ưu tiên gaming, tản nhiệt và trải nghiệm chơi game.",
    releaseDate: "2025-01",
    os: "Android",
    display: "6.78 inch AMOLED, 165Hz",
    processor: "Snapdragon 8 Elite",
    ram: "16GB",
    storage: "512GB",
    camera: "50MP + 13MP + 5MP",
    battery: "5500mAh",
    weight: "239g",
    connectivity: "5G, Wi-Fi 7, Bluetooth 5.4, USB-C",
    suitableFor: ["gaming", "battery"],
    pros: ["Gaming mạnh", "Màn hình tần số quét cao", "Pin lớn"],
    cons: ["Thiết kế hầm hố", "Không tối ưu nhất cho người thích máy nhẹ"],
    tags: ["asus", "gaming", "pin", "165hz"],
    sources: [productSource("ASUS")],
    faq: [
      {
        question: "ROG Phone 9 có hợp gaming không?",
        answer: "Rất hợp nếu bạn đặt game lên đầu.",
      },
      {
        question: "Máy có hợp người dùng văn phòng không?",
        answer: "Có thể dùng, nhưng thiết kế và định hướng thiên game.",
      },
      { question: "Pin có tốt không?", answer: "Có, nhờ pin dung lượng lớn." },
      {
        question: "Có nên chọn để chụp ảnh không?",
        answer: "Không phải lựa chọn ưu tiên nếu camera là tiêu chí chính.",
      },
      {
        question: "Máy có nặng không?",
        answer: "Có, tương đối nặng so với điện thoại phổ thông.",
      },
    ],
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    brand: "Apple",
    category: "phone",
    price: 22990000,
    image: phoneImage("Apple", "iPhone 16"),
    description:
      "Lựa chọn cân bằng hơn trong hệ iPhone với hiệu năng tốt và kích thước vừa phải.",
    quickAnswer:
      "iPhone 16 phù hợp người muốn hệ sinh thái Apple nhưng không cần bản Pro.",
    releaseDate: "2024-09",
    os: "iOS",
    display: "6.1 inch OLED, 60Hz",
    processor: "Apple A18",
    ram: "8GB",
    storage: "128GB",
    camera: "48MP + 12MP",
    battery: "Pin dùng thoải mái cho ngày cơ bản",
    weight: "170g",
    connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, USB-C",
    suitableFor: ["daily", "work", "ecosystem"],
    pros: ["Gọn nhẹ", "Hệ sinh thái tốt", "Dễ dùng"],
    cons: ["Màn hình 60Hz", "Không thiên gaming nặng"],
    tags: ["iphone", "gọn nhẹ", "ecosystem"],
    sources: [productSource("Apple")],
    faq: [
      {
        question: "iPhone 16 có đủ dùng không?",
        answer: "Có, nếu nhu cầu của bạn ở mức phổ thông đến bán chuyên.",
      },
      {
        question: "Máy có phù hợp người thích máy nhỏ gọn không?",
        answer: "Có, đây là điểm mạnh của mẫu này.",
      },
      {
        question: "Có hợp chụp ảnh không?",
        answer: "Có, nhưng không phải mức cao nhất trong dòng Pro.",
      },
      {
        question: "Có nên so với iPhone 16 Pro không?",
        answer: "Có, nếu bạn cân nhắc giữa giá và tính năng.",
      },
      {
        question: "Pin có đủ dùng một ngày không?",
        answer: "Phù hợp với nhu cầu cơ bản trong ngày.",
      },
    ],
  },
  {
    id: "galaxy-a56",
    name: "Samsung Galaxy A56",
    brand: "Samsung",
    category: "phone",
    price: 10990000,
    image: phoneImage("Samsung", "Galaxy A56"),
    description:
      "Điện thoại tầm trung phù hợp học tập, công việc và dùng cơ bản với màn hình đẹp.",
    quickAnswer:
      "Galaxy A56 phù hợp sinh viên và người dùng cần thiết bị tầm trung cân bằng.",
    releaseDate: "2025-03",
    os: "Android",
    display: "6.6 inch AMOLED, 120Hz",
    processor: "Exynos 1580",
    ram: "8GB",
    storage: "256GB",
    camera: "50MP + 12MP + 5MP",
    battery: "5000mAh",
    weight: "198g",
    connectivity: "5G, Wi-Fi 6, Bluetooth 5.3, USB-C",
    suitableFor: ["student", "work", "daily"],
    pros: ["Giá hợp lý", "Màn hình đẹp", "Pin tốt"],
    cons: ["Không mạnh cho game nặng", "Camera ở mức cân bằng"],
    tags: ["samsung", "tam trung", "sinh vien"],
    sources: [productSource("Samsung")],
    faq: [
      {
        question: "Galaxy A56 có hợp sinh viên không?",
        answer: "Có, đây là lựa chọn rất phù hợp cho sinh viên.",
      },
      {
        question: "Máy có pin tốt không?",
        answer: "Có, dung lượng pin lớn giúp dùng cả ngày.",
      },
      {
        question: "Có hợp chơi game không?",
        answer: "Phù hợp game nhẹ đến trung bình.",
      },
      {
        question: "Có nên so với iPhone 16 không?",
        answer: "Nên nếu bạn phân vân giữa Android tầm trung và iPhone.",
      },
      {
        question: "Máy có hợp văn phòng không?",
        answer: "Có, nếu cần thiết bị ổn định và dễ dùng.",
      },
    ],
  },
  {
    id: "redmi-note-15-pro",
    name: "Xiaomi Redmi Note 15 Pro",
    brand: "Xiaomi",
    category: "phone",
    price: 7990000,
    image: phoneImage("Xiaomi", "Redmi Note 15 Pro"),
    description: "Tầm trung thiên về màn hình đẹp, pin tốt và giá dễ tiếp cận.",
    quickAnswer:
      "Redmi Note 15 Pro phù hợp người cần máy tầm trung có pin tốt và màn hình đẹp.",
    releaseDate: "2025-04",
    os: "Android",
    display: "6.67 inch AMOLED, 120Hz",
    processor: "Snapdragon 7s Gen 4",
    ram: "8GB",
    storage: "256GB",
    camera: "108MP + 8MP + 2MP",
    battery: "5100mAh",
    weight: "190g",
    connectivity: "5G, Wi-Fi 6, Bluetooth 5.3, USB-C",
    suitableFor: ["student", "battery", "daily"],
    pros: ["Giá hợp lý", "Pin tốt", "Màn hình sáng"],
    cons: ["Camera phụ ở mức cơ bản", "Không dành cho game nặng lâu dài"],
    tags: ["xiaomi", "tam trung", "pin"],
    sources: [productSource("Xiaomi")],
    faq: [
      {
        question: "Máy có phù hợp sinh viên không?",
        answer: "Có, nhờ mức giá và cấu hình cân bằng.",
      },
      {
        question: "Có hợp chụp ảnh không?",
        answer: "Phù hợp mức cơ bản đến khá.",
      },
      {
        question: "Pin có tốt không?",
        answer: "Có, là một ưu điểm chính của mẫu này.",
      },
      { question: "Có hợp game không?", answer: "Phù hợp game vừa phải." },
      {
        question: "Có nên so với Galaxy A56 không?",
        answer: "Nên nếu bạn cân nhắc giữa giá và trải nghiệm hệ sinh thái.",
      },
    ],
  },
  {
    id: "oppo-reno13",
    name: "OPPO Reno13",
    brand: "OPPO",
    category: "phone",
    price: 9990000,
    image: phoneImage("OPPO", "Reno13"),
    description:
      "Thiên về thiết kế đẹp, camera dễ dùng và pin ổn cho người dùng trẻ.",
    quickAnswer:
      "OPPO Reno13 phù hợp người dùng thích thiết kế đẹp và trải nghiệm hàng ngày cân bằng.",
    releaseDate: "2025-01",
    os: "Android",
    display: "6.7 inch OLED, 120Hz",
    processor: "Dimensity 8300",
    ram: "12GB",
    storage: "256GB",
    camera: "50MP + 8MP + 2MP",
    battery: "5000mAh",
    weight: "185g",
    connectivity: "5G, Wi-Fi 6, Bluetooth 5.3, USB-C",
    suitableFor: ["camera", "daily", "student"],
    pros: ["Thiết kế đẹp", "Tương đối nhẹ", "Pin ổn"],
    cons: ["Không mạnh nhất cho game", "Camera ở mức cân bằng"],
    tags: ["oppo", "dep", "tam trung"],
    sources: [productSource("OPPO")],
    faq: [
      {
        question: "Reno13 có hợp người trẻ không?",
        answer: "Có, nhất là người thích thiết kế và chụp ảnh.",
      },
      {
        question: "Máy có nặng không?",
        answer: "Không, thuộc nhóm khá nhẹ trong tầm trung.",
      },
      {
        question: "Pin có đủ dùng không?",
        answer: "Có, đủ cho ngày sử dụng thông thường.",
      },
      {
        question: "Có hợp học tập không?",
        answer: "Có, vì cấu hình và màn hình cân bằng.",
      },
      {
        question: "Có nên so với Redmi Note 15 Pro không?",
        answer: "Nên để so giữa thiết kế và giá trị phần cứng.",
      },
    ],
  },
  {
    id: "pixel-9a",
    name: "Google Pixel 9a",
    brand: "Google",
    category: "phone",
    price: 13990000,
    image: phoneImage("Google", "Pixel 9a"),
    description:
      "Máy tầm trung thiên Android thuần, cập nhật dài và camera phần mềm tốt.",
    quickAnswer:
      "Pixel 9a phù hợp người thích Android thuần, chụp ảnh đẹp và máy dễ dùng.",
    releaseDate: "2025-05",
    os: "Android",
    display: "6.1 inch OLED, 120Hz",
    processor: "Google Tensor G4",
    ram: "8GB",
    storage: "128GB",
    camera: "48MP + 13MP",
    battery: "4500mAh",
    weight: "185g",
    connectivity: "5G, Wi-Fi 6, Bluetooth 5.3, USB-C",
    suitableFor: ["camera", "daily", "student"],
    pros: ["Android sạch", "Camera phần mềm tốt", "Kích thước gọn"],
    cons: ["Pin ở mức vừa phải", "Không phải lựa chọn tối ưu cho game"],
    tags: ["google", "android", "tam trung"],
    sources: [productSource("Google")],
    faq: [
      {
        question: "Pixel 9a có hợp sinh viên không?",
        answer: "Có, nếu bạn muốn máy gọn và dễ dùng.",
      },
      {
        question: "Có chụp ảnh tốt không?",
        answer: "Có, điểm mạnh thường nằm ở xử lý ảnh.",
      },
      {
        question: "Có hợp game không?",
        answer: "Phù hợp mức trung bình, không phải ưu tiên game.",
      },
      {
        question: "Có nên chọn nếu thích Android thuần?",
        answer: "Có, đây là mẫu phù hợp.",
      },
      {
        question: "Có pin tốt không?",
        answer: "Đủ dùng cơ bản, không phải nhóm pin mạnh nhất.",
      },
    ],
  },
  {
    id: "asus-zenfone-11",
    name: "ASUS Zenfone 11",
    brand: "ASUS",
    category: "phone",
    price: 16990000,
    image: phoneImage("ASUS", "Zenfone 11"),
    description:
      "Máy gọn, hiệu năng mạnh, hướng tới người muốn flagship nhỏ gọn hơn.",
    quickAnswer:
      "Zenfone 11 phù hợp nếu bạn muốn máy gọn nhưng vẫn cần hiệu năng cao.",
    releaseDate: "2024-06",
    os: "Android",
    display: "6.2 inch AMOLED, 144Hz",
    processor: "Snapdragon 8 Gen 3",
    ram: "12GB",
    storage: "256GB",
    camera: "50MP + 13MP",
    battery: "5500mAh",
    weight: "187g",
    connectivity: "5G, Wi-Fi 7, Bluetooth 5.4, USB-C",
    suitableFor: ["daily", "gaming", "student"],
    pros: ["Máy gọn", "Hiệu năng mạnh", "Màn hình mượt"],
    cons: [
      "Camera không phải loại đa ống kính phức tạp",
      "Hệ sinh thái không lớn như Apple",
    ],
    tags: ["asus", "gon", "gaming"],
    sources: [productSource("ASUS")],
    faq: [
      {
        question: "Zenfone 11 có hợp người thích máy gọn không?",
        answer: "Có, đây là điểm mạnh chính.",
      },
      {
        question: "Có hợp game không?",
        answer: "Có, nhờ chip mạnh và màn hình tần số quét cao.",
      },
      {
        question: "Pin có tốt không?",
        answer: "Có, trong mô tả demo là viên pin dung lượng lớn.",
      },
      {
        question: "Có nên so với ROG Phone 9 không?",
        answer: "Nên nếu bạn cân nhắc giữa gọn nhẹ và gaming thuần.",
      },
      {
        question: "Máy có hợp đi làm không?",
        answer: "Có, vì thiết kế gọn và hiệu năng tốt.",
      },
    ],
  },
  {
    id: "macbook-air-m4",
    name: "MacBook Air M4",
    brand: "Apple",
    category: "laptop",
    price: 29990000,
    image: phoneImage("Apple", "MacBook Air M4"),
    description:
      "Laptop mỏng nhẹ cho học tập, công việc văn phòng và hệ sinh thái Apple.",
    quickAnswer:
      "MacBook Air M4 phù hợp học tập, văn phòng và người cần máy nhẹ, pin tốt.",
    releaseDate: "2025-03",
    os: "macOS",
    display: "13.6 inch Liquid Retina",
    processor: "Apple M4",
    ram: "16GB",
    storage: "512GB",
    camera: "Camera 1080p",
    battery: "18 giờ xem video theo mô tả demo",
    weight: "1.24kg",
    connectivity: "Wi-Fi 6E, Bluetooth 5.3, USB-C",
    suitableFor: ["student", "work", "portable"],
    pros: ["Rất nhẹ", "Pin tốt", "Hiệu năng mượt cho tác vụ phổ thông"],
    cons: ["Không tối ưu cho game nặng", "Ít cổng hơn một số máy Windows"],
    tags: ["laptop", "apple", "sinh vien", "moi"],
    sources: [productSource("Apple")],
    faq: [
      {
        question: "MacBook Air M4 có hợp sinh viên không?",
        answer: "Có, nhất là sinh viên cần máy nhẹ và pin tốt.",
      },
      {
        question: "Có hợp học IT không?",
        answer:
          "Phù hợp nhiều tác vụ, nhưng nên kiểm tra nhu cầu phần mềm chuyên biệt.",
      },
      { question: "Pin có tốt không?", answer: "Có, đây là ưu điểm nổi bật." },
      {
        question: "Có chơi game nặng được không?",
        answer: "Không phải lựa chọn tối ưu cho game nặng.",
      },
      {
        question: "Có nên so với laptop Windows cùng giá?",
        answer: "Nên nếu bạn cần so giữa di động, pin và hệ điều hành.",
      },
    ],
  },
  {
    id: "dell-xps-14",
    name: "Dell XPS 14",
    brand: "Dell",
    category: "laptop",
    price: 35990000,
    image: phoneImage("Dell", "XPS 14"),
    description:
      "Laptop cao cấp cho người làm việc chuyên nghiệp, màn hình đẹp và hoàn thiện tốt.",
    quickAnswer:
      "Dell XPS 14 phù hợp người cần laptop cao cấp, màn hình đẹp và hiệu năng làm việc tốt.",
    releaseDate: "2024-07",
    os: "Windows 11",
    display: "14.5 inch OLED",
    processor: "Intel Core Ultra 7",
    ram: "32GB",
    storage: "1TB",
    camera: "Webcam FHD",
    battery: "10–12 giờ dùng văn phòng theo mô tả demo",
    weight: "1.68kg",
    connectivity: "Wi-Fi 7, Bluetooth 5.4, USB-C/Thunderbolt",
    suitableFor: ["work", "creative", "portable"],
    pros: ["Màn hình đẹp", "Thiết kế sang", "Phù hợp làm việc"],
    cons: ["Giá cao", "Không rẻ cho sinh viên phổ thông"],
    tags: ["laptop", "dell", "premium", "work"],
    sources: [productSource("Dell")],
    faq: [
      {
        question: "Dell XPS 14 có hợp văn phòng không?",
        answer: "Có, đây là nhóm máy rất phù hợp.",
      },
      {
        question: "Có hợp làm thiết kế không?",
        answer: "Phù hợp nếu bạn cần màn hình đẹp và cấu hình cao.",
      },
      {
        question: "Có nên so với MacBook Air không?",
        answer: "Nên, nếu bạn cân nhắc giữa Windows và macOS.",
      },
      {
        question: "Máy có nặng không?",
        answer: "Có nặng hơn laptop mỏng nhẹ thuần túy.",
      },
      {
        question: "Có phù hợp sinh viên không?",
        answer: "Phù hợp nếu ngân sách cao và cần cấu hình mạnh.",
      },
    ],
  },
  {
    id: "lenovo-thinkpad-x1",
    name: "Lenovo ThinkPad X1 Carbon",
    brand: "Lenovo",
    category: "laptop",
    price: 39990000,
    image: phoneImage("Lenovo", "ThinkPad X1 Carbon"),
    description: "Laptop doanh nghiệp bền bỉ, bàn phím tốt và độ tin cậy cao.",
    quickAnswer:
      "ThinkPad X1 Carbon phù hợp người cần máy làm việc bền, gõ nhiều và mang đi thường xuyên.",
    releaseDate: "2024-05",
    os: "Windows 11",
    display: "14 inch IPS/OLED tùy cấu hình",
    processor: "Intel Core Ultra 7",
    ram: "32GB",
    storage: "1TB",
    camera: "Webcam FHD + IR",
    battery: "Thời lượng dùng tốt cho công việc theo mô tả demo",
    weight: "1.12kg",
    connectivity: "Wi-Fi 7, Bluetooth 5.4, USB-C/Thunderbolt",
    suitableFor: ["work", "portable", "business"],
    pros: ["Bàn phím tốt", "Nhẹ", "Bền"],
    cons: ["Giá cao", "Không thiên giải trí"],
    tags: ["laptop", "lenovo", "business", "light"],
    sources: [productSource("Lenovo")],
    faq: [
      {
        question: "ThinkPad X1 Carbon có hợp công việc văn phòng không?",
        answer: "Rất hợp, đặc biệt với người gõ nhiều.",
      },
      {
        question: "Có hợp sinh viên không?",
        answer: "Có nếu ngân sách lớn và cần máy bền.",
      },
      { question: "Có nặng không?", answer: "Không, đây là mẫu rất nhẹ." },
      {
        question: "Có nên so với MacBook Air không?",
        answer: "Nên nếu bạn chọn giữa Windows doanh nghiệp và macOS.",
      },
      {
        question: "Có hợp giải trí không?",
        answer: "Có, nhưng không phải trọng tâm.",
      },
    ],
  },
  {
    id: "hp-omen-16",
    name: "HP Omen 16",
    brand: "HP",
    category: "laptop",
    price: 32990000,
    image: phoneImage("HP", "Omen 16"),
    description:
      "Laptop gaming cân bằng giữa hiệu năng, tản nhiệt và mức giá trong phân khúc.",
    quickAnswer:
      "HP Omen 16 phù hợp người cần laptop gaming và làm việc nặng, đa dụng hơn máy văn phòng.",
    releaseDate: "2024-08",
    os: "Windows 11",
    display: "16 inch 165Hz",
    processor: "Intel Core i7 H-series",
    ram: "16GB",
    storage: "1TB SSD",
    camera: "Webcam FHD",
    battery: "Khoảng dùng hỗn hợp vừa phải",
    weight: "2.4kg",
    connectivity: "Wi-Fi 6E, Bluetooth 5.3, USB-A/USB-C",
    suitableFor: ["gaming", "creative", "work"],
    pros: ["Hiệu năng cao", "Màn hình mượt", "Đa dụng"],
    cons: ["Nặng", "Pin không phải ưu tiên hàng đầu"],
    tags: ["laptop", "gaming", "hp"],
    sources: [productSource("HP")],
    faq: [
      {
        question: "HP Omen 16 có hợp gaming không?",
        answer: "Có, đây là nhóm máy phù hợp game và tác vụ nặng.",
      },
      {
        question: "Có hợp sinh viên không?",
        answer:
          "Chỉ phù hợp nếu bạn thật sự cần hiệu năng và chấp nhận trọng lượng.",
      },
      {
        question: "Máy có nặng không?",
        answer: "Có, đây là đặc điểm thường gặp của laptop gaming.",
      },
      {
        question: "Có nên so với laptop mỏng nhẹ không?",
        answer: "Có, để cân nhắc giữa hiệu năng và tính di động.",
      },
      {
        question: "Pin có tốt không?",
        answer: "Ở mức vừa phải, không phải thế mạnh chính.",
      },
    ],
  },
  {
    id: "asus-vivobook-s15",
    name: "ASUS Vivobook S15",
    brand: "ASUS",
    category: "laptop",
    price: 19990000,
    image: phoneImage("ASUS", "Vivobook S15"),
    description:
      "Laptop phổ thông hiện đại cho học tập, làm việc và giải trí nhẹ.",
    quickAnswer:
      "Vivobook S15 phù hợp sinh viên và người làm văn phòng cần máy cân bằng giá và trải nghiệm.",
    releaseDate: "2024-06",
    os: "Windows 11",
    display: "15.6 inch OLED, 120Hz",
    processor: "Intel Core Ultra 5",
    ram: "16GB",
    storage: "512GB",
    camera: "Webcam FHD",
    battery: "8–10 giờ theo mô tả demo",
    weight: "1.6kg",
    connectivity: "Wi-Fi 6E, Bluetooth 5.3, USB-C",
    suitableFor: ["student", "work", "daily"],
    pros: ["Giá dễ tiếp cận hơn", "Màn hình đẹp", "Đủ dùng cho đa số nhu cầu"],
    cons: ["Không dành cho game nặng", "Hoàn thiện ở mức phổ thông"],
    tags: ["laptop", "asus", "sinh vien", "van phong"],
    sources: [productSource("ASUS")],
    faq: [
      {
        question: "Vivobook S15 có hợp sinh viên không?",
        answer: "Có, đây là lựa chọn cân bằng.",
      },
      {
        question: "Có hợp làm việc văn phòng không?",
        answer: "Có, đặc biệt với nhu cầu phổ thông.",
      },
      {
        question: "Có nên so với MacBook Air không?",
        answer: "Nên nếu bạn chọn giữa Windows và macOS.",
      },
      { question: "Có chơi game được không?", answer: "Chỉ phù hợp game nhẹ." },
      {
        question: "Pin có tốt không?",
        answer: "Ở mức khá, đủ cho ngày học tập cơ bản.",
      },
    ],
  },
  {
    id: "lenovo-loq-15",
    name: "Lenovo LOQ 15",
    brand: "Lenovo",
    category: "laptop",
    price: 21990000,
    image: phoneImage("Lenovo", "LOQ 15"),
    description:
      "Laptop gaming entry-level phù hợp người muốn hiệu năng và chi phí hợp lý hơn.",
    quickAnswer:
      "LOQ 15 phù hợp người cần laptop gaming phổ thông với ngân sách vừa phải.",
    releaseDate: "2024-09",
    os: "Windows 11",
    display: "15.6 inch 144Hz",
    processor: "AMD Ryzen 7 HS",
    ram: "16GB",
    storage: "512GB SSD",
    camera: "Webcam FHD",
    battery: "Mức trung bình",
    weight: "2.3kg",
    connectivity: "Wi-Fi 6, Bluetooth 5.3, USB-A/USB-C",
    suitableFor: ["gaming", "student", "work"],
    pros: ["Giá hợp lý hơn gaming cao cấp", "Hiệu năng ổn", "Màn hình mượt"],
    cons: ["Nặng", "Không phải máy di động"],
    tags: ["laptop", "gaming", "lenovo"],
    sources: [productSource("Lenovo")],
    faq: [
      {
        question: "LOQ 15 có hợp game không?",
        answer: "Có, đây là dòng laptop gaming phổ thông.",
      },
      {
        question: "Có hợp sinh viên không?",
        answer: "Có nếu bạn học ngành cần hiệu năng.",
      },
      { question: "Máy có nặng không?", answer: "Có, tương đối nặng." },
      {
        question: "Có nên so với HP Omen 16 không?",
        answer: "Nên để so giữa hiệu năng và chi phí.",
      },
      {
        question: "Có hợp văn phòng không?",
        answer: "Có, nhưng hơi dư nếu chỉ làm việc cơ bản.",
      },
    ],
  },
  {
    id: "acer-swift-go",
    name: "Acer Swift Go 14",
    brand: "Acer",
    category: "laptop",
    price: 16990000,
    image: phoneImage("Acer", "Swift Go 14"),
    description:
      "Laptop mỏng nhẹ cho học tập và công việc cơ bản với mức giá dễ tiếp cận.",
    quickAnswer:
      "Swift Go 14 phù hợp sinh viên và người dùng văn phòng cần máy gọn, nhẹ, dễ mang theo.",
    releaseDate: "2024-04",
    os: "Windows 11",
    display: "14 inch OLED",
    processor: "Intel Core Ultra 5",
    ram: "16GB",
    storage: "512GB",
    camera: "Webcam FHD",
    battery: "8 giờ dùng văn phòng theo mô tả demo",
    weight: "1.3kg",
    connectivity: "Wi-Fi 6E, Bluetooth 5.3, USB-C",
    suitableFor: ["student", "work", "portable"],
    pros: ["Nhẹ", "Giá hợp lý", "Đủ cho học tập"],
    cons: ["Không mạnh cho game", "Độ cao cấp không bằng dòng premium"],
    tags: ["laptop", "acer", "sinh vien", "light"],
    sources: [productSource("Acer")],
    faq: [
      {
        question: "Swift Go 14 có hợp sinh viên không?",
        answer: "Có, đặc biệt nếu cần máy nhẹ.",
      },
      {
        question: "Có hợp làm việc văn phòng không?",
        answer: "Có, với nhu cầu phổ thông.",
      },
      { question: "Có chơi game được không?", answer: "Chỉ hợp game nhẹ." },
      {
        question: "Pin có tốt không?",
        answer: "Khá ổn cho học tập và công việc.",
      },
      {
        question: "Có nên so với Vivobook S15 không?",
        answer: "Nên nếu bạn cân nhắc giữa giá và màn hình.",
      },
    ],
  },
  {
    id: "microsoft-surface-laptop",
    name: "Microsoft Surface Laptop",
    brand: "Microsoft",
    category: "laptop",
    price: 28990000,
    image: phoneImage("Microsoft", "Surface Laptop"),
    description:
      "Laptop mỏng nhẹ, màn hình đẹp, phù hợp người yêu thích thiết kế tối giản.",
    quickAnswer:
      "Surface Laptop phù hợp người cần máy gọn, đẹp và trải nghiệm Windows cao cấp.",
    releaseDate: "2024-05",
    os: "Windows 11",
    display: "13.8 inch PixelSense",
    processor: "Qualcomm Snapdragon X Elite",
    ram: "16GB",
    storage: "512GB",
    camera: "Webcam FHD",
    battery: "Pin tốt cho ngày làm việc theo mô tả demo",
    weight: "1.34kg",
    connectivity: "Wi-Fi 7, Bluetooth 5.4, USB-C",
    suitableFor: ["work", "portable", "student"],
    pros: ["Thiết kế đẹp", "Nhẹ", "Pin tốt"],
    cons: ["Ít cổng", "Không dành cho game nặng"],
    tags: ["laptop", "microsoft", "premium"],
    sources: [productSource("Microsoft")],
    faq: [
      {
        question: "Surface Laptop có hợp văn phòng không?",
        answer: "Có, đặc biệt với nhu cầu di động.",
      },
      {
        question: "Có hợp sinh viên không?",
        answer: "Có, nếu bạn thích thiết kế gọn đẹp.",
      },
      {
        question: "Có nên so với MacBook Air không?",
        answer: "Nên nếu bạn cân nhắc giữa Windows cao cấp và macOS.",
      },
      { question: "Pin có tốt không?", answer: "Theo mô tả demo là khá tốt." },
      {
        question: "Có chơi game được không?",
        answer: "Không phải ưu tiên cho game nặng.",
      },
    ],
  },
];

export const phones = products.filter(
  (product) => product.category === "phone",
);
export const laptops = products.filter(
  (product) => product.category === "laptop",
);
