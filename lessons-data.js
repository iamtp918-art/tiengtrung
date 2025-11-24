/**
 * DỮ LIỆU BÀI HỌC (JSON) - CHINESE MASTERY
 * Tổng hợp: 20 Bài học (Cập nhật ngày 24/11/2025)
 */
const lessonsData = [
    {
        id: 1,
        title: "Bài 1: Xin chào",
        subtitle: "Chủ đề: Giao tiếp cơ bản",
        vocab: [
            { hanzi: "你好", pinyin: "nǐ hǎo", meaning: "Xin chào" },
            { hanzi: "我", pinyin: "wǒ", meaning: "Tôi" },
            { hanzi: "叫", pinyin: "jiào", meaning: "Tên là / Gọi là" },
            { hanzi: "什么", pinyin: "shén me", meaning: "Cái gì" }
        ],
        conversation: {
            start: "你好! (Xin chào!)",
            exchanges: [
                {
                    expectKeywords: ["ni hao", "nǐ hǎo", "你好"],
                    successReply: "Tốt lắm! Bạn tên là gì? (你叫什么?)",
                    failReply: "Bạn hãy thử chào lại bằng 'nǐ hǎo' xem?"
                },
                {
                    expectKeywords: ["jiao", "jiào", "叫", "wo", "wǒ", "我"],
                    successReply: "Rất vui được gặp bạn! (Bài hội thoại kết thúc)",
                    failReply: "Hãy dùng cấu trúc 'Wǒ jiào...' (Tôi tên là...) để trả lời nhé."
                }
            ]
        },
        quiz: {
            question: "Câu nào dưới đây có nghĩa là 'Bạn tên là gì'?",
            options: [
                { text: "你好吗? (Nǐ hǎo ma?)", correct: false },
                { text: "你叫什么? (Nǐ jiào shénme?)", correct: true },
                { text: "再见! (Zàijiàn!)", correct: false }
            ]
        }
    },
    {
        id: 2,
        title: "Bài 2: Cảm ơn",
        subtitle: "Chủ đề: Phép lịch sự",
        vocab: [
            { hanzi: "谢谢", pinyin: "xiè xie", meaning: "Cảm ơn" },
            { hanzi: "不客气", pinyin: "bú kè qi", meaning: "Không có chi" },
            { hanzi: "再见", pinyin: "zài jiàn", meaning: "Tạm biệt" }
        ],
        conversation: {
            start: "Đây là quà cho bạn. (这是给你的礼物)",
            exchanges: [
                {
                    expectKeywords: ["xie", "xiè", "谢谢"],
                    successReply: "Không có chi! (不客气!). Bạn sắp về chưa?",
                    failReply: "Khi nhận quà, bạn nên nói 'xiè xie' (Cảm ơn)."
                },
                {
                    expectKeywords: ["zai jian", "zài jiàn", "再见"],
                    successReply: "Tạm biệt! (Bài hội thoại kết thúc)",
                    failReply: "Hãy chào tạm biệt bằng 'zài jiàn' nhé."
                }
            ]
        },
        quiz: {
            question: "Khi ai đó nói 'Cảm ơn' (Xièxie), bạn đáp lại thế nào?",
            options: [
                { text: "不客气 (Bú kè qi)", correct: true },
                { text: "你好 (Nǐ hǎo)", correct: false },
                { text: "什么 (Shén me)", correct: false }
            ]
        }
    },
    {
        id: 3,
        title: "Bài 3: Từ vựng Công sở & Đời sống",
        subtitle: "Chủ đề: Công việc, cảm xúc và giao tiếp hàng ngày",
        vocab: [
            { hanzi: "公司", pinyin: "gōng sī", meaning: "Công ty" },
            { hanzi: "经理", pinyin: "jīng lǐ", meaning: "Giám đốc" },
            { hanzi: "加班", pinyin: "jiā bān", meaning: "Tăng ca" },
            { hanzi: "下班", pinyin: "xià bān", meaning: "Tan làm" },
            { hanzi: "懂吗", pinyin: "dǒng ma?", meaning: "Hiểu không?" },
            { hanzi: "没有", pinyin: "méi yǒu", meaning: "Không có" },
            { hanzi: "帅哥", pinyin: "shuài gē", meaning: "Soái ca (Đẹp trai)" },
            { hanzi: "讨论", pinyin: "tǎo lùn", meaning: "Thảo luận" },
            { hanzi: "法律", pinyin: "fǎ lǜ", meaning: "Pháp luật" },
            { hanzi: "可乐", pinyin: "kě lè", meaning: "Coca Cola" }
        ],
        conversation: {
            start: "Hôm nay công việc thế nào? Có thuận lợi không? (今天工作顺利吗?)",
            exchanges: [
                {
                    expectKeywords: ["shun li", "lei", "khong", "co"],
                    successReply: "Có phải tăng ca không? (加班吗?)",
                    failReply: "Bạn có thể trả lời 'Hěn shùn lì' (Rất thuận lợi) hoặc 'Hěn lèi' (Rất mệt)."
                },
                {
                    expectKeywords: ["jia ban", "mei you", "co"],
                    successReply: "Vất vả rồi! Uống Coca không? (辛苦了! 喝可乐吗?)",
                    failReply: "Nếu có tăng ca hãy nói 'Yǒu jiā bān', nếu không thì 'Méi yǒu'."
                },
                {
                    expectKeywords: ["he", "uong", "co", "hao", "ok"],
                    successReply: "Ok. Tan làm vui vẻ nhé! (下班快乐!)",
                    failReply: "Bạn trả lời 'Hē' (Uống) hoặc 'Bù hē' (Không uống) nhé."
                }
            ]
        },
        quiz: {
            question: "Từ nào dưới đây có nghĩa là 'Tăng ca'?",
            options: [
                { text: "下班 (Xià bān)", correct: false },
                { text: "加班 (Jiā bān)", correct: true },
                { text: "旷工 (Kuàng gōng)", correct: false }
            ]
        }
    },
    {
        id: 4,
        title: "Bài 4: Số đếm cơ bản",
        subtitle: "Chủ đề: Đếm số từ 0-10 và các số lớn",
        vocab: [
            { hanzi: "零", pinyin: "líng", meaning: "Số 0" },
            { hanzi: "一", pinyin: "yī", meaning: "Số 1" },
            { hanzi: "二", pinyin: "èr", meaning: "Số 2" },
            { hanzi: "三", pinyin: "sān", meaning: "Số 3" },
            { hanzi: "四", pinyin: "sì", meaning: "Số 4" },
            { hanzi: "五", pinyin: "wǔ", meaning: "Số 5" },
            { hanzi: "六", pinyin: "liù", meaning: "Số 6" },
            { hanzi: "七", pinyin: "qī", meaning: "Số 7" },
            { hanzi: "八", pinyin: "bā", meaning: "Số 8" },
            { hanzi: "九", pinyin: "jiǔ", meaning: "Số 9" },
            { hanzi: "十", pinyin: "shí", meaning: "Số 10" },
            { hanzi: "百", pinyin: "bǎi", meaning: "Trăm" },
            { hanzi: "一千", pinyin: "yī qiān", meaning: "1000" },
            { hanzi: "五百", pinyin: "wǔ bǎi", meaning: "500" }
        ],
        conversation: {
            start: "Cái này bao nhiêu tiền? (这个多少钱?)",
            exchanges: [
                {
                    expectKeywords: ["wu", "bai", "500", "nam tram"],
                    successReply: "500 tệ à? Đắt quá! 200 được không? (二百行吗?)",
                    failReply: "Hãy thử trả lời một con số, ví dụ 'Wǔ bǎi' (500)."
                },
                {
                    expectKeywords: ["bu", "khong", "duoc", "xing"],
                    successReply: "Thôi được rồi. 300 nhé? (三百?)",
                    failReply: "Bạn có thể nói 'Bù xíng' (Không được) hoặc 'Hǎo' (Được)."
                }
            ]
        },
        quiz: {
            question: "Số '999' đọc là gì?",
            options: [
                { text: "Jiǔ bǎi jiǔ shí jiǔ", correct: true },
                { text: "Yī bǎi èr", correct: false },
                { text: "Sān bǎi", correct: false }
            ]
        }
    },
    {
        id: 5,
        title: "Bài 5: Thời gian & Trạng thái",
        subtitle: "Chủ đề: Hôm qua/Hôm nay, Bận/Rảnh & Cảm xúc",
        vocab: [
            { hanzi: "昨天", pinyin: "zuó tiān", meaning: "Hôm qua" },
            { hanzi: "今天", pinyin: "jīn tiān", meaning: "Hôm nay" },
            { hanzi: "明天", pinyin: "míng tiān", meaning: "Ngày mai" },
            { hanzi: "刚才", pinyin: "gāng cái", meaning: "Vừa nãy / Hồi nãy" },
            { hanzi: "忙", pinyin: "máng", meaning: "Bận" },
            { hanzi: "空", pinyin: "kòng", meaning: "Rảnh" },
            { hanzi: "累", pinyin: "lèi", meaning: "Mệt" },
            { hanzi: "开心", pinyin: "kāi xīn", meaning: "Vui vẻ" },
            { hanzi: "因为", pinyin: "yīn wèi", meaning: "Bởi vì" },
            { hanzi: "所以", pinyin: "suǒ yǐ", meaning: "Cho nên" }
        ],
        conversation: {
            start: "Ngày mai bạn rảnh không? (明天你空吗?)",
            exchanges: [
                {
                    expectKeywords: ["mei you", "bu", "mang", "ban"],
                    successReply: "Vậy hôm nay bạn có mệt không? (那今天你累吗?)",
                    failReply: "Bạn hãy trả lời: 'Wǒ hěn máng' (Tôi rất bận) hoặc 'Wǒ yǒu kòng' (Tôi rảnh)."
                },
                {
                    expectKeywords: ["lei", "hen", "rat", "khong"],
                    successReply: "Tại sao hôm nay bạn mệt? (为什么?)",
                    failReply: "Hãy dùng từ 'Hěn lèi' (Rất mệt) hoặc 'Bú lèi' (Không mệt)."
                },
                {
                    expectKeywords: ["yin wei", "jia ban", "lam viec"],
                    successReply: "Ồ, vất vả rồi. Về nhà nghỉ ngơi đi. (辛苦了. 回家吧!)",
                    failReply: "Hãy thử dùng cấu trúc: 'Yīn wèi... jiā bān' (Bởi vì tăng ca)."
                }
            ]
        },
        quiz: {
            question: "Câu: 'Míng tiān wǒ bú shàng kè' nghĩa là gì?",
            options: [
                { text: "Ngày mai tôi đi làm", correct: false },
                { text: "Ngày mai tôi không đi học", correct: true },
                { text: "Hôm nay tôi rất mệt", correct: false }
            ]
        }
    },
    {
        id: 6,
        title: "Bài 6: Kho vận & Ngân hàng",
        subtitle: "Chủ đề: Kiểm kê, Xuất hàng, Chuyển khoản",
        vocab: [
            { hanzi: "仓库", pinyin: "cāng kù", meaning: "Nhà kho" },
            { hanzi: "库存", pinyin: "kù cún", meaning: "Tồn kho" },
            { hanzi: "盘点", pinyin: "pán diǎn", meaning: "Kiểm kê" },
            { hanzi: "出货", pinyin: "chū huò", meaning: "Xuất hàng" },
            { hanzi: "主管", pinyin: "zhǔ guǎn", meaning: "Chủ quản / Quản lý" },
            { hanzi: "银行", pinyin: "yín háng", meaning: "Ngân hàng" },
            { hanzi: "转款", pinyin: "zhuǎn kuǎn", meaning: "Chuyển khoản" },
            { hanzi: "现金", pinyin: "xiàn jīn", meaning: "Tiền mặt" },
            { hanzi: "扫码", pinyin: "sǎo mǎ", meaning: "Quét mã QR" }
        ],
        conversation: {
            start: "Chủ quản, hôm nay có xuất hàng không? (主管, 今天出货吗?)",
            exchanges: [
                {
                    expectKeywords: ["chu", "huo", "co", "you", "mei"],
                    successReply: "Vậy chúng ta đi kiểm kê kho nhé? (那我们去盘点仓库吧?)",
                    failReply: "Bạn có thể trả lời: 'Jīn tiān chū huò' (Hôm nay xuất hàng)."
                },
                {
                    expectKeywords: ["hao", "ok", "di", "qu"],
                    successReply: "Việc kiểm kê có phức tạp không? (盘点复杂吗?)",
                    failReply: "Hãy đồng ý bằng cách nói 'Hǎo' (Được) hoặc 'Zǒu ba' (Đi thôi)."
                },
                {
                    expectKeywords: ["bu", "jian dan", "rong yi", "phuc tap"],
                    successReply: "Tốt lắm. Làm xong tôi sẽ chuyển khoản lương. (做完我会转款薪水)",
                    failReply: "Hãy dùng từ 'Hěn jiǎn dān' (Rất đơn giản) hoặc 'Hěn fù zá' (Rất phức tạp)."
                }
            ]
        },
        quiz: {
            question: "Hành động 'Quét mã QR' tiếng Trung là gì?",
            options: [
                { text: "转款 (Zhuǎn kuǎn)", correct: false },
                { text: "扫码 (Sǎo mǎ)", correct: true },
                { text: "盘点 (Pán diǎn)", correct: false }
            ]
        }
    },
    {
        id: 7,
        title: "Bài 7: Thời gian & Sinh hoạt",
        subtitle: "Chủ đề: Thứ ngày, Giờ giấc & Thói quen hàng ngày",
        vocab: [
            { hanzi: "星期", pinyin: "xīng qī", meaning: "Thứ (Tuần)" },
            { hanzi: "星期一", pinyin: "xīng qī yī", meaning: "Thứ 2" },
            { hanzi: "星期天", pinyin: "xīng qī tiān", meaning: "Chủ nhật" },
            { hanzi: "点", pinyin: "diǎn", meaning: "Giờ" },
            { hanzi: "分钟", pinyin: "fēn zhōng", meaning: "Phút" },
            { hanzi: "半", pinyin: "bàn", meaning: "Rưỡi (30 phút)" },
            { hanzi: "睡觉", pinyin: "shuì jiào", meaning: "Đi ngủ" },
            { hanzi: "起床", pinyin: "qǐ chuáng", meaning: "Thức dậy" },
            { hanzi: "迟到", pinyin: "chí dào", meaning: "Đến trễ" }
        ],
        conversation: {
            start: "Sao hôm nay bạn đến trễ vậy? (今天你怎么迟到?)",
            exchanges: [
                {
                    expectKeywords: ["shui jiao", "qi chuang", "wan", "tre", "muon"],
                    successReply: "Bởi vì hôm qua ngủ trễ à? (因为昨天晚睡觉吗?)",
                    failReply: "Hãy thử trả lời: 'Yīn wèi wǒ shuì jiào wǎn' (Bởi vì tôi ngủ muộn)."
                },
                {
                    expectKeywords: ["dui", "dung", "shi de"],
                    successReply: "Lần sau đừng đi muộn nữa nhé. (下次不要迟到了).",
                    failReply: "Bạn có thể nói 'Duì' (Đúng) hoặc 'Bú shì' (Không phải)."
                }
            ]
        },
        quiz: {
            question: "Trong tiếng Trung, 'Thứ 4' nói thế nào?",
            options: [
                { text: "星期四 (Xīng qī sì)", correct: false },
                { text: "星期三 (Xīng qī sān)", correct: true },
                { text: "星期二 (Xīng qī èr)", correct: false }
            ]
        }
    },
    {
        id: 8,
        title: "Bài 8: Lương bổng & Nhà xưởng",
        subtitle: "Chủ đề: Nhận lương, Họp hành & Cấu trúc câu",
        vocab: [
            { hanzi: "薪水", pinyin: "xīn shuǐ", meaning: "Lương" },
            { hanzi: "领薪水", pinyin: "lǐng xīn shuǐ", meaning: "Lãnh lương" },
            { hanzi: "开会", pinyin: "kāi huì", meaning: "Họp" },
            { hanzi: "车间", pinyin: "chē jiān", meaning: "Xưởng" },
            { hanzi: "工人", pinyin: "gōng rén", meaning: "Công nhân" },
            { hanzi: "记得", pinyin: "jì de", meaning: "Nhớ" },
            { hanzi: "跟", pinyin: "gēn", meaning: "Với / Cùng" },
            { hanzi: "给", pinyin: "gěi", meaning: "Cho" }
        ],
        conversation: {
            start: "Công ty trả lương tiền mặt hay chuyển khoản? (公司发薪水现金还是转款?)",
            exchanges: [
                {
                    expectKeywords: ["zhuan kuan", "xian jin", "tien mat"],
                    successReply: "Hôm nay bạn đã lãnh lương chưa? (今天你领薪水了吗?)",
                    failReply: "Bạn hãy chọn: 'Xiàn jīn' (Tiền mặt) hoặc 'Zhuǎn kuǎn' (Chuyển khoản)."
                },
                {
                    expectKeywords: ["mei you", "le", "roi", "chua"],
                    successReply: "Giám đốc nói chiều nay 3 giờ xuống xưởng họp đấy. (经理说下午三点去车间开会)",
                    failReply: "Trả lời 'Lǐng le' (Lãnh rồi) hoặc 'Hái méi' (Vẫn chưa)."
                },
                {
                    expectKeywords: ["hao", "ok", "zhi dao", "biet"],
                    successReply: "Nhớ đừng đi trễ nhé! (记得别迟到!)",
                    failReply: "Hãy đáp 'Wǒ zhī dào le' (Tôi biết rồi)."
                }
            ]
        },
        quiz: {
            question: "Điền vào chỗ trống: Wǒ ___ nǐ shuō (Tôi nói CÙNG bạn).",
            options: [
                { text: "给 (gěi)", correct: false },
                { text: "跟 (gēn)", correct: true },
                { text: "在 (zài)", correct: false }
            ]
        }
    },
    {
        id: 9,
        title: "Bài 9: Quản lý Kho & Đơn hàng",
        subtitle: "Chủ đề: Nhà cung ứng, Kiểm tra hàng & Nhập kho",
        vocab: [
            { hanzi: "供应商", pinyin: "gōng yìng shāng", meaning: "Nhà cung ứng" },
            { hanzi: "订单", pinyin: "dìng dān", meaning: "Đơn hàng" },
            { hanzi: "入库", pinyin: "rù kù", meaning: "Nhập kho" },
            { hanzi: "送货", pinyin: "sòng huò", meaning: "Giao hàng" },
            { hanzi: "退货", pinyin: "tuì huò", meaning: "Trả hàng" },
            { hanzi: "检查", pinyin: "jiǎn chá", meaning: "Kiểm tra" },
            { hanzi: "签名", pinyin: "qiān míng", meaning: "Ký tên" },
            { hanzi: "问题", pinyin: "wèn tí", meaning: "Vấn đề" }
        ],
        conversation: {
            start: "Hôm nay nhà cung ứng có giao hàng không? (今天供应商有送货吗?)",
            exchanges: [
                {
                    expectKeywords: ["you", "co", "song huo", "giao hang"],
                    successReply: "Hàng đến rồi. Bạn hãy kiểm tra quy cách đi. (货到了. 你检查规格吧!)",
                    failReply: "Hãy trả lời 'Yǒu' (Có) hoặc 'Méi yǒu' (Không)."
                },
                {
                    expectKeywords: ["ok", "hao", "mei wen ti", "khong co van de"],
                    successReply: "Nếu không có vấn đề thì ký tên nhập kho. (如果没问题就签名入库)",
                    failReply: "Nếu tốt hãy nói 'Méi wèn tí' (Không có vấn đề)."
                },
                {
                    expectKeywords: ["qian ming", "ru ku", "nhap kho"],
                    successReply: "Đã nhập vào hệ thống chưa? (入系统了吗?)",
                    failReply: "Hãy xác nhận bằng 'Rù le' (Nhập rồi)."
                }
            ]
        },
        quiz: {
            question: "Từ nào có nghĩa là 'Nhà cung ứng'?",
            options: [
                { text: "供应商 (Gōng yìng shāng)", correct: true },
                { text: "客户 (Kè hù)", correct: false },
                { text: "经理 (Jīng lǐ)", correct: false }
            ]
        }
    },
    {
        id: 10,
        title: "Bài 10: Quan hệ & Sở hữu",
        subtitle: "Chủ đề: Giới thiệu người thân & Chữ 'Của' (De)",
        vocab: [
            { hanzi: "这是", pinyin: "zhè shì", meaning: "Đây là" },
            { hanzi: "谁", pinyin: "shéi", meaning: "Ai" },
            { hanzi: "朋友", pinyin: "péng yǒu", meaning: "Bạn bè" },
            { hanzi: "老师", pinyin: "lǎo shī", meaning: "Thầy giáo" },
            { hanzi: "的", pinyin: "de", meaning: "Của (Sở hữu cách)" },
            { hanzi: "书", pinyin: "shū", meaning: "Sách" },
            { hanzi: "生气", pinyin: "shēng qì", meaning: "Tức giận" }
        ],
        conversation: {
            start: "Đây là ai? (这是谁?)",
            exchanges: [
                {
                    expectKeywords: ["lao shi", "ban", "peng you", "thay giao"],
                    successReply: "Đây là thầy giáo tiếng Trung của tôi. (这是我的中文老师)",
                    failReply: "Hãy thử trả lời: 'Zhè shì wǒ de...' (Đây là... của tôi)."
                },
                {
                    expectKeywords: ["hao", "chao", "ni hao"],
                    successReply: "Quyển sách này là của ai? (这本书是谁的?)",
                    failReply: "Hãy chào thầy giáo hoặc trả lời câu hỏi."
                },
                {
                    expectKeywords: ["wo de", "cua toi", "lao shi de"],
                    successReply: "À, là sách của bạn à. Đừng tức giận nhé. (啊, 是你的书. 别生气)",
                    failReply: "Trả lời 'Wǒ de' (Của tôi)."
                }
            ]
        },
        quiz: {
            question: "Dịch câu: 'Sách của tôi' sang tiếng Trung?",
            options: [
                { text: "我书 (Wǒ shū)", correct: false },
                { text: "我的书 (Wǒ de shū)", correct: true },
                { text: "书我 (Shū wǒ)", correct: false }
            ]
        }
    },
    {
        id: 11,
        title: "Bài 11: Đồ uống & Ngày tháng",
        subtitle: "Chủ đề: Mời khách, Gọi món & Hỏi năm làm việc",
        vocab: [
            { hanzi: "请", pinyin: "qǐng", meaning: "Mời / Xin" },
            { hanzi: "喝", pinyin: "hē", meaning: "Uống" },
            { hanzi: "咖啡", pinyin: "kā fēi", meaning: "Cà phê" },
            { hanzi: "牛奶", pinyin: "niú nǎi", meaning: "Sữa" },
            { hanzi: "啤酒", pinyin: "pí jiǔ", meaning: "Bia" },
            { hanzi: "口渴", pinyin: "kǒu kě", meaning: "Khát nước" },
            { hanzi: "年", pinyin: "nián", meaning: "Năm" },
            { hanzi: "月", pinyin: "yuè", meaning: "Tháng" },
            { hanzi: "号", pinyin: "hào", meaning: "Ngày" }
        ],
        conversation: {
            start: "Bạn làm việc ở công ty mấy năm rồi? (你在公司工作几年了?)",
            exchanges: [
                {
                    expectKeywords: ["nian", "nam", "1", "2", "3", "yr"],
                    successReply: "Lâu quá nhỉ! Bạn khát nước không? (太久了! 你口渴吗?)",
                    failReply: "Hãy trả lời số năm, ví dụ: 'Sān nián' (3 năm)."
                },
                {
                    expectKeywords: ["ke", "khat", "co", "you"],
                    successReply: "Tôi mời bạn uống cà phê nhé? (我请你喝咖啡, 好吗?)",
                    failReply: "Trả lời 'Kǒu kě' (Khát) hoặc 'Bù kě' (Không khát)."
                },
                {
                    expectKeywords: ["hao", "ok", "cam on", "xie xie"],
                    successReply: "Cà phê đá hay cà phê sữa? (冰咖啡还是牛奶咖啡?)",
                    failReply: "Hãy đồng ý 'Hǎo' hoặc cảm ơn 'Xiè xie'."
                }
            ]
        },
        quiz: {
            question: "Cấu trúc 'Quá tốt' nói thế nào?",
            options: [
                { text: "太好 (Tài hǎo)", correct: true },
                { text: "好太 (Hǎo tài)", correct: false },
                { text: "很忙 (Hěn máng)", correct: false }
            ]
        }
    },
    {
        id: 12,
        title: "Bài 12: Giới thiệu & Quốc tịch",
        subtitle: "Chủ đề: Quê quán, Vùng miền & Ngôn ngữ",
        vocab: [
            { hanzi: "越南", pinyin: "yuè nán", meaning: "Việt Nam" },
            { hanzi: "台湾", pinyin: "tái wān", meaning: "Đài Loan" },
            { hanzi: "哪国人", pinyin: "nǎ guó rén", meaning: "Người nước nào" },
            { hanzi: "北部", pinyin: "běi bù", meaning: "Miền Bắc" },
            { hanzi: "中部", pinyin: "zhōng bù", meaning: "Miền Trung" },
            { hanzi: "南部", pinyin: "nán bù", meaning: "Miền Nam" },
            { hanzi: "汉语", pinyin: "hàn yǔ", meaning: "Tiếng Hoa" },
            { hanzi: "介绍", pinyin: "jiè shào", meaning: "Giới thiệu" },
            { hanzi: "陌生人", pinyin: "mò shēng rén", meaning: "Người lạ" }
        ],
        conversation: {
            start: "Bạn là người nước nào? (你是哪国人?)",
            exchanges: [
                {
                    expectKeywords: ["yue nan", "tai wan", "vn"],
                    successReply: "Bạn là người miền Bắc hay miền Nam? (你是北部人还是南部人?)",
                    failReply: "Hãy trả lời: 'Wǒ shì Yuè nán rén' (Tôi là người VN)."
                },
                {
                    expectKeywords: ["bei", "nan", "zhong"],
                    successReply: "Bạn đến đây bao lâu rồi? (你来这里多久了?)",
                    failReply: "Hãy chọn miền: 'Běi bù' (Bắc), 'Zhōng bù' (Trung) hoặc 'Nán bù' (Nam)."
                },
                {
                    expectKeywords: ["nian", "yue", "nam", "thang"],
                    successReply: "Tiếng Hoa của bạn rất tốt! (你的汉语很好!)",
                    failReply: "Trả lời thời gian, ví dụ 'Yī nián' (1 năm)."
                }
            ]
        },
        quiz: {
            question: "Từ nào có nghĩa là 'Người lạ'?",
            options: [
                { text: "同事 (Tóng shì)", correct: false },
                { text: "陌生人 (Mò shēng rén)", correct: true },
                { text: "同学 (Tóng xué)", correct: false }
            ]
        }
    },
    {
        id: 13,
        title: "Bài 13: 12 Con Giáp & Tuổi tác",
        subtitle: "Chủ đề: Hỏi tuổi & Cầm tinh con gì",
        vocab: [
            { hanzi: "生肖", pinyin: "shēng xiào", meaning: "Con giáp" },
            { hanzi: "属", pinyin: "shǔ", meaning: "Thuộc (Cầm tinh)" },
            { hanzi: "龙", pinyin: "lóng", meaning: "Con Rồng" },
            { hanzi: "马", pinyin: "mǎ", meaning: "Con Ngựa" },
            { hanzi: "鸡", pinyin: "jī", meaning: "Con Gà" },
            { hanzi: "狗", pinyin: "gǒu", meaning: "Con Chó" },
            { hanzi: "猪", pinyin: "zhū", meaning: "Con Heo" },
            { hanzi: "岁", pinyin: "suì", meaning: "Tuổi" },
            { hanzi: "多大", pinyin: "duō dà", meaning: "Bao lớn (Hỏi tuổi)" }
        ],
        conversation: {
            start: "Năm nay bạn bao nhiêu tuổi? (今年你多大?)",
            exchanges: [
                {
                    expectKeywords: ["sui", "tuoi", "18", "20", "30"],
                    successReply: "Vậy bạn cầm tinh con gì? (那你属什么生肖?)",
                    failReply: "Trả lời số tuổi + suì. Ví dụ: 'Wǒ èr shí suì' (20 tuổi)."
                },
                {
                    expectKeywords: ["shu", "long", "hu", "zhu", "mao"],
                    successReply: "À, ra thế. (啊, 这样啊)",
                    failReply: "Hãy dùng cấu trúc 'Wǒ shǔ...' (Tôi cầm tinh...). Ví dụ: 'Wǒ shǔ Lóng'."
                }
            ]
        },
        quiz: {
            question: "Nếu bạn sinh năm con Rồng, bạn sẽ nói: Wǒ shǔ ___?",
            options: [
                { text: "龙 (Lóng)", correct: true },
                { text: "蛇 (Shé)", correct: false },
                { text: "猪 (Zhū)", correct: false }
            ]
        }
    },
    {
        id: 14,
        title: "Bài 14: Sự cố & Thiết bị",
        subtitle: "Chủ đề: Xử lý vấn đề, Cảm xúc & Đồ điện",
        vocab: [
            { hanzi: "处理", pinyin: "chǔ lǐ", meaning: "Xử lý" },
            { hanzi: "不够", pinyin: "bú gòu", meaning: "Không đủ" },
            { hanzi: "让", pinyin: "ràng", meaning: "Để (Ai làm gì)" },
            { hanzi: "请假", pinyin: "qǐng jià", meaning: "Nghỉ phép" },
            { hanzi: "完蛋", pinyin: "wán dàn", meaning: "Tiêu đời / Toang rồi" },
            { hanzi: "冷气", pinyin: "lěng qì", meaning: "Máy lạnh" },
            { hanzi: "电风扇", pinyin: "diàn fēng shàn", meaning: "Quạt máy" },
            { hanzi: "讨厌", pinyin: "tǎo yàn", meaning: "Đáng ghét" }
        ],
        conversation: {
            start: "Chủ quản, máy lạnh hư rồi! Nóng quá. (主管, 冷气坏了! 太热了)",
            exchanges: [
                {
                    expectKeywords: ["re", "nong", "hu", "hong"],
                    successReply: "Tiêu rồi! Để tôi gọi người xử lý. (完蛋了! 让我叫人处理)",
                    failReply: "Bạn hãy than phiền 'Hěn rè' (Rất nóng)."
                },
                {
                    expectKeywords: ["hao", "ok", "cam on", "xie xie"],
                    successReply: "Bạn bật quạt đỡ đi nhé. (你先开电风扇吧)",
                    failReply: "Hãy đồng ý 'Hǎo' (Được)."
                }
            ]
        },
        quiz: {
            question: "Từ nào có nghĩa là 'Xử lý'?",
            options: [
                { text: "解释 (Jiě shì)", correct: false },
                { text: "处理 (Chǔ lǐ)", correct: true },
                { text: "请假 (Qǐng jià)", correct: false }
            ]
        }
    },
    {
        id: 15,
        title: "Bài 15: Thời gian & Lịch làm việc",
        subtitle: "Chủ đề: Đầu tháng/Cuối tháng, Làm nửa ngày & Tính công",
        vocab: [
            { hanzi: "月初", pinyin: "yuè chū", meaning: "Đầu tháng" },
            { hanzi: "月底", pinyin: "yuè dǐ", meaning: "Cuối tháng" },
            { hanzi: "半", pinyin: "bàn", meaning: "Rưỡi / Nửa" },
            { hanzi: "一天半", pinyin: "yī tiān bàn", meaning: "1 ngày rưỡi" },
            { hanzi: "总共", pinyin: "zǒng gòng", meaning: "Tổng cộng" },
            { hanzi: "小时", pinyin: "xiǎo shí", meaning: "Tiếng đồng hồ" },
            { hanzi: "算", pinyin: "suàn", meaning: "Tính (toán)" }
        ],
        conversation: {
            start: "Tháng này có 30 ngày, tôi làm đủ 26 ngày. (这个月有30天, 我工作够26天)",
            exchanges: [
                {
                    expectKeywords: ["gou", "du", "30", "26"],
                    successReply: "Vậy có tăng ca không? (那有加班吗?)",
                    failReply: "Hãy xác nhận số ngày làm việc."
                },
                {
                    expectKeywords: ["you", "co", "3", "san"],
                    successReply: "Tổng cộng bao nhiêu tiếng? (总共多少个小时?)",
                    failReply: "Hãy trả lời số giờ, ví dụ: 'Bā xiǎo shí' (8 tiếng)."
                },
                {
                    expectKeywords: ["xiao shi", "tieng", "100"],
                    successReply: "Được rồi, để tôi tính lương cho bạn. (好了, 让我给你算薪水)",
                    failReply: "Hãy đưa ra một con số."
                }
            ]
        },
        quiz: {
            question: "Từ nào có nghĩa là 'Cuối tháng'?",
            options: [
                { text: "月初 (Yuè chū)", correct: false },
                { text: "月底 (Yuè dǐ)", correct: true },
                { text: "月中 (Yuè zhōng)", correct: false }
            ]
        }
    },
    {
        id: 16,
        title: "Bài 16: Xưng hô & Giao tiếp",
        subtitle: "Chủ đề: Hỏi tên, Xưng hô Anh/Chị & Từ chối lịch sự",
        vocab: [
            { hanzi: "名字", pinyin: "míng zi", meaning: "Tên" },
            { hanzi: "叫", pinyin: "jiào", meaning: "Tên là / Gọi là" },
            { hanzi: "称呼", pinyin: "chēng hu", meaning: "Xưng hô" },
            { hanzi: "您", pinyin: "nín", meaning: "Ngài (Kính ngữ của Nǐ)" },
            { hanzi: "贵姓", pinyin: "guì xìng", meaning: "Quý danh (Họ gì?)" },
            { hanzi: "试", pinyin: "shì", meaning: "Thử" },
            { hanzi: "觉得", pinyin: "jué de", meaning: "Cảm thấy" },
            { hanzi: "重要", pinyin: "zhòng yào", meaning: "Quan trọng" }
        ],
        conversation: {
            start: "Xin hỏi, bạn tên là gì? (请问, 你叫什么名字?)",
            exchanges: [
                {
                    expectKeywords: ["jiao", "wo", "ten", "a"],
                    successReply: "Tôi nên xưng hô với bạn thế nào? (我怎么称呼您呢?)",
                    failReply: "Hãy dùng cấu trúc: 'Wǒ jiào...' (Tôi tên là...)"
                },
                {
                    expectKeywords: ["xiong di", "a", "anh", "chi"],
                    successReply: "Ngài khách sáo quá. (您太客气了)",
                    failReply: "Bạn có thể nói 'Jiào wǒ A...' (Gọi tôi là A...)."
                }
            ]
        },
        quiz: {
            question: "Khi muốn hỏi họ tên một cách lịch sự, người ta dùng từ gì?",
            options: [
                { text: "你叫什么 (Nǐ jiào shén me)", correct: false },
                { text: "您贵姓 (Nín guì xìng)", correct: true },
                { text: "你是谁 (Nǐ shì shéi)", correct: false }
            ]
        }
    },
    {
        id: 17,
        title: "Bài 17: Gia đình & Cuộc sống",
        subtitle: "Chủ đề: Con cái, Kết hôn & Các mối quan hệ",
        vocab: [
            { hanzi: "孩子", pinyin: "hái zi", meaning: "Con cái" },
            { hanzi: "儿子", pinyin: "ér zi", meaning: "Con trai" },
            { hanzi: "女儿", pinyin: "nǚ ér", meaning: "Con gái" },
            { hanzi: "照顾", pinyin: "zhào gù", meaning: "Chăm sóc" },
            { hanzi: "结婚", pinyin: "jié hūn", meaning: "Kết hôn" },
            { hanzi: "便宜", pinyin: "pián yi", meaning: "Rẻ" },
            { hanzi: "贵", pinyin: "guì", meaning: "Đắt" }
        ],
        conversation: {
            start: "Bạn đã kết hôn chưa? (你结婚了吗?)",
            exchanges: [
                {
                    expectKeywords: ["jie hun", "le", "mei you", "chua", "roi"],
                    successReply: "Có con cái chưa? (有孩子了吗?)",
                    failReply: "Trả lời 'Jié hūn le' (Kết hôn rồi) hoặc 'Hái méi' (Vẫn chưa)."
                },
                {
                    expectKeywords: ["you", "co", "er zi", "nu er"],
                    successReply: "Con trai hay con gái vậy? (儿子还是女儿?)",
                    failReply: "Trả lời 'Yǒu' (Có) hoặc 'Méi yǒu' (Chưa có)."
                },
                {
                    expectKeywords: ["er zi", "nu er", "trai", "gai"],
                    successReply: "Tuyệt vời! Nhớ chăm sóc con tốt nhé. (太棒了! 记得照顾好孩子)",
                    failReply: "Hãy chọn 'Ér zi' hoặc 'Nǚ ér'."
                }
            ]
        },
        quiz: {
            question: "Từ 'Jié guǒ' nghĩa là gì?",
            options: [
                { text: "Kết hôn", correct: false },
                { text: "Kết quả", correct: true },
                { text: "Kết thúc", correct: false }
            ]
        }
    },
    {
        id: 18,
        title: "Bài 18: Vị trí & Khoảng cách",
        subtitle: "Chủ đề: Bên trên/Bên dưới, Xa/Gần & Cách hỏi đường",
        vocab: [
            { hanzi: "上面", pinyin: "shàng miàn", meaning: "Bên trên" },
            { hanzi: "下面", pinyin: "xià miàn", meaning: "Bên dưới" },
            { hanzi: "前面", pinyin: "qián miàn", meaning: "Phía trước" },
            { hanzi: "后面", pinyin: "hòu miàn", meaning: "Phía sau" },
            { hanzi: "离", pinyin: "lí", meaning: "Cách (A cách B bao xa)" },
            { hanzi: "远", pinyin: "yuǎn", meaning: "Xa" },
            { hanzi: "近", pinyin: "jìn", meaning: "Gần" },
            { hanzi: "去", pinyin: "qù", meaning: "Đi (Có đích đến)" }
        ],
        conversation: {
            start: "Nhà bạn cách công ty xa không? (你家离公司远吗?)",
            exchanges: [
                {
                    expectKeywords: ["hen", "yuan", "jin", "xa", "gan"],
                    successReply: "Vậy bạn đi làm bằng cách nào? (那你怎么去上班?)",
                    failReply: "Hãy dùng từ 'Hěn yuǎn' (Rất xa) hoặc 'Hěn jìn' (Rất gần)."
                },
                {
                    expectKeywords: ["zou", "pao bu", "lai", "xe"],
                    successReply: "Công ty ở phía trước, đi thẳng là tới. (公司在前面, 直走就到了)",
                    failReply: "Bạn có thể nói 'Wǒ zǒu qù' (Tôi đi bộ) hoặc 'Wǒ kāi chē' (Tôi lái xe)."
                }
            ]
        },
        quiz: {
            question: "Cấu trúc: 'A ___ B hěn jìn' (A cách B rất gần). Điền từ còn thiếu?",
            options: [
                { text: "在 (Zài)", correct: false },
                { text: "离 (Lí)", correct: true },
                { text: "去 (Qù)", correct: false }
            ]
        }
    },
    {
        id: 19,
        title: "Bài 19: Nhà ở & Đời sống",
        subtitle: "Chủ đề: Thuê phòng, Địa danh Bình Dương & Vé số",
        vocab: [
            { hanzi: "出租", pinyin: "chū zū", meaning: "Cho thuê" },
            { hanzi: "房子", pinyin: "fáng zi", meaning: "Căn nhà" },
            { hanzi: "宿舍", pinyin: "sù shè", meaning: "Ký túc xá" },
            { hanzi: "房租", pinyin: "fáng zū", meaning: "Tiền thuê nhà" },
            { hanzi: "彩票", pinyin: "cǎi piào", meaning: "Vé số" },
            { hanzi: "美福", pinyin: "měi fú", meaning: "Mỹ Phước" },
            { hanzi: "槟吉", pinyin: "bīn jí", meaning: "Bến Cát" },
            { hanzi: "土龙木", pinyin: "tǔ lóng mù", meaning: "Thủ Dầu Một" }
        ],
        conversation: {
            start: "Bạn đang sống ở đâu? (你住在哪里?)",
            exchanges: [
                {
                    expectKeywords: ["mei fu", "bin ji", "an xi", "ktx", "su she"],
                    successReply: "Tiền thuê phòng có đắt không? (房租贵吗?)",
                    failReply: "Bạn có thể trả lời địa danh như 'Měi fú' (Mỹ Phước) hoặc 'Sù shè' (KTX)."
                },
                {
                    expectKeywords: ["gui", "pian yi", "mac", "re"],
                    successReply: "Hy vọng bạn trúng vé số để mua nhà! (希望你中彩票买房子!)",
                    failReply: "Hãy trả lời 'Hěn guì' (Rất đắt) hoặc 'Hěn pián yi' (Rất rẻ)."
                }
            ]
        },
        quiz: {
            question: "Từ nào nghĩa là 'Ký túc xá'?",
            options: [
                { text: "宿舍 (Sù shè)", correct: true },
                { text: "房子 (Fáng zi)", correct: false },
                { text: "银行 (Yín háng)", correct: false }
            ]
        }
    },
    {
        id: 20,
        title: "Bài 20: Kiểm tra Chất lượng (QC)",
        subtitle: "Chủ đề: Hàng đạt/Hàng lỗi, Phỏng vấn & Kinh nghiệm",
        vocab: [
            { hanzi: "质量", pinyin: "zhì liàng", meaning: "Chất lượng" },
            { hanzi: "良品", pinyin: "liáng pǐn", meaning: "Hàng đạt (Lương phẩm)" },
            { hanzi: "不良品", pinyin: "bù liáng pǐn", meaning: "Hàng lỗi" },
            { hanzi: "合格", pinyin: "hé gé", meaning: "Hợp lệ / Đạt" },
            { hanzi: "经验", pinyin: "jīng yàn", meaning: "Kinh nghiệm" },
            { hanzi: "面试", pinyin: "miàn shì", meaning: "Phỏng vấn" },
            { hanzi: "辛苦", pinyin: "xīn kǔ", meaning: "Vất vả" },
            { hanzi: "加油", pinyin: "jiā yóu", meaning: "Cố lên" }
        ],
        conversation: {
            start: "Lô hàng này chất lượng thế nào? (这批货质量怎么样?)",
            exchanges: [
                {
                    expectKeywords: ["liang pin", "bu liang", "he ge", "ok", "tot"],
                    successReply: "Là hàng đạt hay hàng lỗi? (是良品还是不良品?)",
                    failReply: "Hãy dùng từ 'Hé gé' (Đạt) hoặc 'Bù liáng' (Lỗi)."
                },
                {
                    expectKeywords: ["liang pin", "bu liang pin", "dat", "loi"],
                    successReply: "Bạn có kinh nghiệm làm QC không? (你有QC经验吗?)",
                    failReply: "Trả lời 'Liáng pǐn' hoặc 'Bù liáng pǐn'."
                },
                {
                    expectKeywords: ["you", "co", "mei you", "khong"],
                    successReply: "Tốt lắm. Cố lên nhé! (很好. 加油!)",
                    failReply: "Trả lời 'Yǒu' (Có) hoặc 'Méi yǒu' (Không)."
                }
            ]
        },
        quiz: {
            question: "Hàng bị lỗi, không đạt chất lượng gọi là gì?",
            options: [
                { text: "良品 (Liáng pǐn)", correct: false },
                { text: "不良品 (Bù liáng pǐn)", correct: true },
                { text: "成品 (Chéng pǐn)", correct: false }
            ]
        }
    }
];