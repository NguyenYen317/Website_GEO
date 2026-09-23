const articleSource = (name, url) => ({
  name,
  url,
  accessedAt: "2026-09-23",
});

const sources = {
  android: articleSource(
    "Android Developers - App and device fundamentals",
    "https://developer.android.com/guide",
  ),
  apple: articleSource(
    "Apple Developer Documentation",
    "https://developer.apple.com/documentation/",
  ),
  microsoft: articleSource(
    "Microsoft Learn - Windows and PC guidance",
    "https://learn.microsoft.com/en-us/windows/",
  ),
  intel: articleSource(
    "Intel - Technology and processor resources",
    "https://www.intel.com/content/www/us/en/products/docs/processors/processor-numbers.html",
  ),
  nvidia: articleSource(
    "NVIDIA - GeForce technology",
    "https://www.nvidia.com/en-us/geforce/",
  ),
};

export const articles = [
  {
    id: "ram-dien-thoai-la-gi",
    slug: "ram-dien-thoai-la-gi",
    title: "RAM điện thoại là gì?",
    description:
      "Giải thích ngắn gọn RAM điện thoại và cách nó ảnh hưởng đến đa nhiệm.",
    date: "2026-01-12",
    author: "TechGuide Editorial",
    category: "Kiến thức điện thoại",
    summary:
      "RAM giúp điện thoại giữ ứng dụng trong bộ nhớ để chuyển đổi nhanh hơn.",
    content: {
      sections: [
        {
          h2: "RAM là gì?",
          paragraphs: [
            "RAM là bộ nhớ tạm giúp thiết bị xử lý nhiều tác vụ cùng lúc.",
          ],
        },
        {
          h2: "RAM ảnh hưởng thế nào?",
          paragraphs: [
            "RAM nhiều hơn thường giúp mở nhiều ứng dụng mà ít phải tải lại.",
          ],
        },
      ],
      bullets: [
        "RAM không thay thế chip xử lý.",
        "RAM lớn hơn thường tốt hơn cho đa nhiệm.",
        "Nhu cầu thực tế quan trọng hơn con số đơn lẻ.",
      ],
    },
    faq: [
      {
        question: "RAM nhiều có luôn tốt hơn không?",
        answer:
          "Không phải luôn luôn, vì còn phụ thuộc tối ưu phần mềm và chip.",
      },
      {
        question: "RAM 8GB có đủ dùng không?",
        answer: "Có, với nhiều người dùng phổ thông và học tập.",
      },
    ],
    sources: [sources.android],
    related: [
      "ram-8gb-co-du-dung-khong",
      "chip-dien-thoai-anh-huong-den-hieu-nang-nhu-the-nao",
    ],
    tags: ["ram", "dien thoai", "da nhiem"],
  },
  {
    id: "ram-8gb-co-du-dung-khong",
    slug: "ram-8gb-co-du-dung-khong",
    title: "RAM 8GB có đủ dùng không?",
    description: "Bài viết giúp xác định khi nào RAM 8GB là phù hợp.",
    date: "2026-01-15",
    author: "TechGuide Editorial",
    category: "Kiến thức điện thoại",
    summary:
      "RAM 8GB đủ dùng cho học tập, làm việc và giải trí phổ thông ở nhiều mẫu máy hiện nay.",
    content: {
      sections: [
        {
          h2: "Khi nào 8GB là đủ?",
          paragraphs: [
            "Nếu bạn lướt web, học online, mạng xã hội và chụp ảnh cơ bản, 8GB thường đủ.",
          ],
        },
        {
          h2: "Khi nào nên nâng lên 12GB hoặc 16GB?",
          paragraphs: [
            "Nếu bạn chơi game nặng, chỉnh ảnh nhiều hoặc mở nhiều ứng dụng, RAM cao hơn sẽ thoải mái hơn.",
          ],
        },
      ],
      bullets: [
        "8GB phù hợp số đông.",
        "12GB hợp người đa nhiệm nhiều.",
        "16GB phù hợp người dùng nặng.",
      ],
    },
    faq: [
      {
        question: "Có nên mua máy 8GB để lâu dài không?",
        answer: "Có thể, nếu nhu cầu hiện tại không quá nặng.",
      },
      {
        question: "RAM 8GB có chơi game được không?",
        answer: "Có, nhưng còn tùy chip và tối ưu hệ thống.",
      },
    ],
    sources: [sources.android],
    related: [
      "ram-dien-thoai-la-gi",
      "chip-dien-thoai-anh-huong-den-hieu-nang-nhu-the-nao",
    ],
    tags: ["ram", "8gb", "dien thoai"],
  },
  {
    id: "chip-dien-thoai-anh-huong-den-hieu-nang-nhu-the-nao",
    slug: "chip-dien-thoai-anh-huong-den-hieu-nang-nhu-the-nao",
    title: "Chip điện thoại ảnh hưởng đến hiệu năng như thế nào?",
    description: "Vai trò của chip trong tốc độ, game và xử lý ảnh.",
    date: "2026-01-18",
    author: "TechGuide Editorial",
    category: "Kiến thức điện thoại",
    summary:
      "Chip là thành phần quyết định lớn đến tốc độ phản hồi, chơi game và xử lý ảnh.",
    content: {
      sections: [
        {
          h2: "Chip làm gì?",
          paragraphs: ["Chip xử lý gần như toàn bộ lệnh chính của điện thoại."],
        },
        {
          h2: "Vì sao chip quan trọng?",
          paragraphs: [
            "Chip mạnh giúp máy mượt hơn, xử lý ảnh nhanh hơn và chơi game ổn hơn.",
          ],
        },
      ],
      bullets: [
        "Chip ảnh hưởng tốc độ phản hồi.",
        "Chip quyết định nhiều đến game.",
        "Cần xem tổng thể cùng RAM và phần mềm.",
      ],
      table: [
        ["Tiêu chí", "Ý nghĩa"],
        ["Hiệu năng", "Tốc độ xử lý tác vụ"],
        ["Gaming", "Khả năng chạy game và giữ FPS"],
        ["Camera", "Xử lý ảnh và video"],
      ],
    },
    faq: [
      {
        question: "Chip mạnh có luôn chụp ảnh tốt hơn không?",
        answer: "Không hoàn toàn, còn phụ thuộc camera và phần mềm.",
      },
      {
        question: "Nên ưu tiên chip hay RAM?",
        answer:
          "Nên nhìn cả hai, nhưng chip thường ảnh hưởng tổng thể nhiều hơn.",
      },
    ],
    sources: [sources.android],
    related: [
      "ram-dien-thoai-la-gi",
      "camera-50mp-co-thuc-su-tot-hon-12mp-khong",
    ],
    tags: ["chip", "hieu nang", "gaming"],
  },
  {
    id: "amoled-va-lcd-khac-nhau-nhu-the-nao",
    slug: "amoled-va-lcd-khac-nhau-nhu-the-nao",
    title: "AMOLED và LCD khác nhau như thế nào?",
    description: "So sánh hai loại màn hình phổ biến trên điện thoại.",
    date: "2026-01-20",
    author: "TechGuide Editorial",
    category: "Kiến thức điện thoại",
    summary:
      "AMOLED thường có màu đen sâu và tương phản cao, còn LCD thường ổn định và dễ tiếp cận hơn.",
    content: {
      sections: [
        {
          h2: "AMOLED là gì?",
          paragraphs: [
            "AMOLED có khả năng hiển thị màu đen sâu và màu sắc nổi bật.",
          ],
        },
        {
          h2: "LCD là gì?",
          paragraphs: [
            "LCD thường cho màu sắc trung tính và có mặt ở nhiều máy phổ thông.",
          ],
        },
      ],
      bullets: [
        "AMOLED hợp người thích màu sắc nổi bật.",
        "LCD thường dễ tiếp cận hơn ở phân khúc giá thấp.",
        "Cả hai đều có ưu và nhược điểm riêng.",
      ],
    },
    faq: [
      {
        question: "AMOLED có bền hơn LCD không?",
        answer:
          "Không thể nói tuyệt đối, vì còn phụ thuộc chất lượng tấm nền và cách dùng.",
      },
      {
        question: "Nên chọn màn hình nào?",
        answer: "Tùy nhu cầu hiển thị, pin và ngân sách.",
      },
    ],
    sources: [sources.android],
    related: [
      "refresh-rate-120hz-la-gi",
      "camera-50mp-co-thuc-su-tot-hon-12mp-khong",
    ],
    tags: ["man hinh", "amoled", "lcd"],
  },
  {
    id: "refresh-rate-120hz-la-gi",
    slug: "refresh-rate-120hz-la-gi",
    title: "Refresh rate 120Hz là gì?",
    description: "Giải thích ý nghĩa của 120Hz trong trải nghiệm sử dụng.",
    date: "2026-01-22",
    author: "TechGuide Editorial",
    category: "Kiến thức điện thoại",
    summary:
      "120Hz giúp thao tác cuộn và chuyển động trên màn hình trông mượt hơn.",
    content: {
      sections: [
        {
          h2: "120Hz là gì?",
          paragraphs: [
            "Đây là tần số quét màn hình, nghĩa là màn hình làm mới hình ảnh 120 lần mỗi giây.",
          ],
        },
        {
          h2: "Khi nào thấy khác biệt?",
          paragraphs: [
            "Bạn sẽ thấy mượt hơn khi cuộn trang, chơi game hoặc xem giao diện hoạt động.",
          ],
        },
      ],
      bullets: [
        "Tần số quét cao tạo cảm giác mượt hơn.",
        "Không phải lúc nào cũng cần 120Hz.",
        "Pin có thể bị ảnh hưởng tùy cách dùng.",
      ],
    },
    faq: [
      {
        question: "120Hz có bắt buộc không?",
        answer: "Không bắt buộc, nhưng mang lại trải nghiệm mượt hơn.",
      },
      {
        question: "120Hz có tốn pin không?",
        answer: "Có thể tốn hơn tùy màn hình và phần mềm.",
      },
    ],
    sources: [sources.android],
    related: [
      "amoled-va-lcd-khac-nhau-nhu-the-nao",
      "camera-50mp-co-thuc-su-tot-hon-12mp-khong",
    ],
    tags: ["120hz", "man hinh", "refresh rate"],
  },
  {
    id: "camera-50mp-co-thuc-su-tot-hon-12mp-khong",
    slug: "camera-50mp-co-thuc-su-tot-hon-12mp-khong",
    title: "Camera 50MP có thực sự tốt hơn 12MP không?",
    description: "Tìm hiểu mối liên hệ giữa số megapixel và chất lượng ảnh.",
    date: "2026-01-24",
    author: "TechGuide Editorial",
    category: "Kiến thức điện thoại",
    summary:
      "Megapixel cao không tự động có nghĩa là ảnh tốt hơn; cảm biến và xử lý ảnh cũng rất quan trọng.",
    content: {
      sections: [
        {
          h2: "Megapixel là gì?",
          paragraphs: [
            "Megapixel mô tả độ phân giải ảnh, không phải toàn bộ chất lượng camera.",
          ],
        },
        {
          h2: "Điều gì quyết định ảnh đẹp?",
          paragraphs: [
            "Cảm biến, ống kính, xử lý phần mềm và ánh sáng đều quan trọng.",
          ],
        },
      ],
      bullets: [
        "MP chỉ là một phần của câu chuyện.",
        "Ảnh đẹp phụ thuộc nhiều yếu tố.",
        "Nên xem mẫu ảnh thực tế nếu có thể.",
      ],
    },
    faq: [
      {
        question: "50MP có tốt hơn 12MP không?",
        answer: "Không phải lúc nào cũng vậy.",
      },
      {
        question: "Nên chọn camera theo thông số hay ảnh mẫu?",
        answer: "Nên ưu tiên ảnh mẫu và đánh giá tổng thể.",
      },
    ],
    sources: [sources.apple],
    related: [
      "chip-dien-thoai-anh-huong-den-hieu-nang-nhu-the-nao",
      "amoled-va-lcd-khac-nhau-nhu-the-nao",
    ],
    tags: ["camera", "mp", "chup anh"],
  },
  {
    id: "snapdragon-va-apple-silicon-khac-nhau-nhu-the-nao",
    slug: "snapdragon-va-apple-silicon-khac-nhau-nhu-the-nao",
    title: "Snapdragon và Apple Silicon khác nhau như thế nào?",
    description: "So sánh hai hệ chip phổ biến trên điện thoại và laptop.",
    date: "2026-01-26",
    author: "TechGuide Editorial",
    category: "Kiến thức điện thoại",
    summary:
      "Snapdragon và Apple Silicon đều mạnh nhưng phục vụ hệ sinh thái và chiến lược sản phẩm khác nhau.",
    content: {
      sections: [
        {
          h2: "Khác biệt cốt lõi",
          paragraphs: [
            "Apple Silicon tối ưu rất chặt với hệ sinh thái Apple, còn Snapdragon phổ biến rộng trên Android và một số laptop.",
          ],
        },
        {
          h2: "Nên chọn gì?",
          paragraphs: [
            "Nên dựa vào hệ điều hành, nhu cầu và thiết bị bạn đang dùng.",
          ],
        },
      ],
      bullets: [
        "Apple Silicon tối ưu hệ sinh thái Apple.",
        "Snapdragon phổ biến trên nhiều thiết bị.",
        "Lựa chọn phụ thuộc vào hệ điều hành và nhu cầu.",
      ],
    },
    faq: [
      {
        question: "Chip nào mạnh hơn?",
        answer: "Tùy từng thế hệ và thiết bị, không thể kết luận tuyệt đối.",
      },
      {
        question: "Nên chọn theo chip hay hệ sinh thái?",
        answer: "Nên cân nhắc cả hai.",
      },
    ],
    sources: [sources.apple],
    related: [
      "chip-dien-thoai-anh-huong-den-hieu-nang-nhu-the-nao",
      "ram-dien-thoai-la-gi",
    ],
    tags: ["snapdragon", "apple silicon", "chip"],
  },
  {
    id: "cach-chon-laptop-cho-sinh-vien",
    slug: "cach-chon-laptop-cho-sinh-vien",
    title: "Cách chọn laptop cho sinh viên",
    description:
      "Các tiêu chí chọn laptop phù hợp học tập và ngân sách sinh viên.",
    date: "2026-01-28",
    author: "TechGuide Editorial",
    category: "Kiến thức laptop",
    summary:
      "Sinh viên nên ưu tiên độ bền, trọng lượng, pin và cấu hình đủ dùng.",
    content: {
      sections: [
        {
          h2: "Tiêu chí nên ưu tiên",
          paragraphs: [
            "Nên chọn máy phù hợp ngành học, trọng lượng dễ mang và thời lượng pin ổn.",
          ],
        },
        {
          h2: "Cấu hình gợi ý",
          paragraphs: [
            "Với đa số sinh viên, CPU tầm trung, RAM 16GB và SSD từ 512GB là mức dễ chịu.",
          ],
        },
      ],
      bullets: [
        "Ưu tiên pin và trọng lượng.",
        "Cân nhắc hệ điều hành theo ngành học.",
        "Nên chọn máy dễ nâng cấp nếu cần.",
      ],
    },
    faq: [
      {
        question: "Sinh viên nên mua laptop bao nhiêu tiền?",
        answer: "Tùy ngành học, nhưng nên cân bằng nhu cầu và ngân sách.",
      },
      {
        question: "RAM 8GB có đủ cho sinh viên không?",
        answer: "Có thể đủ với nhiều ngành, nhưng 16GB thoải mái hơn.",
      },
    ],
    sources: [sources.microsoft, sources.intel],
    related: ["ram-8gb-co-du-dung-khong", "ssd-nvme-la-gi"],
    tags: ["laptop", "sinh vien", "mua laptop"],
  },
  {
    id: "laptop-gaming-can-nhung-gi",
    slug: "laptop-gaming-can-nhung-gi",
    title: "Laptop gaming cần những gì?",
    description: "Những yếu tố cần xem khi chọn laptop gaming.",
    date: "2026-01-30",
    author: "TechGuide Editorial",
    category: "Kiến thức laptop",
    summary:
      "Laptop gaming cần CPU, GPU, tản nhiệt, màn hình và nguồn cấp phù hợp.",
    content: {
      sections: [
        {
          h2: "Yếu tố quan trọng",
          paragraphs: [
            "CPU, GPU và hệ thống tản nhiệt ảnh hưởng trực tiếp đến trải nghiệm game.",
          ],
        },
        {
          h2: "Đừng bỏ qua màn hình",
          paragraphs: [
            "Tần số quét cao và phản hồi tốt giúp chơi game mượt hơn.",
          ],
        },
      ],
      bullets: [
        "GPU quyết định phần lớn hiệu năng game.",
        "Tản nhiệt tốt giúp máy ổn định hơn.",
        "Pin thường không phải điểm mạnh của laptop gaming.",
      ],
    },
    faq: [
      {
        question: "Laptop gaming có cần RAM 16GB không?",
        answer: "Rất nên có để trải nghiệm mượt hơn.",
      },
      {
        question: "Có nên mua laptop gaming để học không?",
        answer: "Có nếu bạn cần hiệu năng, nhưng phải chấp nhận trọng lượng.",
      },
    ],
    sources: [sources.microsoft, sources.intel],
    related: ["cach-chon-laptop-cho-sinh-vien", "ssd-nvme-la-gi"],
    tags: ["laptop gaming", "gpu", "tản nhiệt"],
  },
  {
    id: "ssd-nvme-la-gi",
    slug: "ssd-nvme-la-gi",
    title: "SSD NVMe là gì?",
    description: "Giải thích SSD NVMe và lợi ích khi dùng máy tính.",
    date: "2026-02-01",
    author: "TechGuide Editorial",
    category: "Kiến thức laptop",
    summary:
      "SSD NVMe là chuẩn lưu trữ tốc độ cao giúp máy khởi động và mở ứng dụng nhanh hơn.",
    content: {
      sections: [
        {
          h2: "NVMe là gì?",
          paragraphs: [
            "NVMe là giao tiếp lưu trữ hiện đại giúp SSD đạt tốc độ cao hơn SATA.",
          ],
        },
        {
          h2: "Có đáng nâng cấp không?",
          paragraphs: [
            "Nếu bạn cần tốc độ phản hồi nhanh, đây là nâng cấp rất đáng giá.",
          ],
        },
      ],
      bullets: [
        "Khởi động nhanh hơn.",
        "Mở ứng dụng nhanh hơn.",
        "Tốt cho công việc nhiều file.",
      ],
    },
    faq: [
      {
        question: "SSD NVMe có khác SSD thường không?",
        answer: "Có, NVMe thường nhanh hơn rõ rệt.",
      },
      {
        question: "Laptop nào cũng hỗ trợ NVMe không?",
        answer: "Không, cần kiểm tra cấu hình cụ thể.",
      },
    ],
    sources: [sources.microsoft],
    related: ["cach-chon-laptop-cho-sinh-vien", "laptop-gaming-can-nhung-gi"],
    tags: ["ssd", "nvme", "laptop"],
  },
  {
    id: "so-sanh-ram-8gb-16gb",
    slug: "so-sanh-ram-8gb-16gb",
    title: "RAM 8GB và 16GB khác nhau như thế nào?",
    description: "So sánh thực tế giữa hai mức RAM phổ biến.",
    date: "2026-02-03",
    author: "TechGuide Editorial",
    category: "Kiến thức laptop",
    summary:
      "8GB đủ cho nhiều người, còn 16GB thoải mái hơn khi đa nhiệm hoặc mở nhiều ứng dụng nặng.",
    content: {
      sections: [
        {
          h2: "8GB phù hợp ai?",
          paragraphs: [
            "Người dùng cơ bản, học tập và công việc nhẹ thường có thể dùng 8GB.",
          ],
        },
        {
          h2: "16GB phù hợp ai?",
          paragraphs: [
            "Người dùng đa nhiệm, học IT hoặc làm việc sáng tạo sẽ thoải mái hơn với 16GB.",
          ],
        },
      ],
      bullets: [
        "8GB tiết kiệm hơn.",
        "16GB bền vững hơn cho tương lai.",
        "Nên cân nhắc theo nhu cầu thực tế.",
      ],
    },
    faq: [
      {
        question: "Nên chọn 8GB hay 16GB?",
        answer: "Nếu ngân sách cho phép, 16GB sẽ thoải mái hơn.",
      },
      {
        question: "RAM 8GB có lỗi thời không?",
        answer: "Không, nhưng có thể hạn chế với một số nhu cầu nặng.",
      },
    ],
    sources: [sources.microsoft],
    related: ["cach-chon-laptop-cho-sinh-vien", "ssd-nvme-la-gi"],
    tags: ["ram", "laptop", "so sanh"],
  },
];

export const articleMap = Object.fromEntries(
  articles.map((article) => [article.slug, article]),
);
