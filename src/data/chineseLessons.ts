import type { Lesson, LessonCharacter } from '../types/lesson';

const recognitionCharacterSets = {
  "s1-05": [
    "金",
    "木",
    "水",
    "火",
    "土",
    "一",
    "二",
    "三",
    "四",
    "五"
  ],
  "s1-06": [
    "口",
    "耳",
    "目",
    "手",
    "足"
  ],
  "s1-07": [
    "日",
    "月",
    "水",
    "火",
    "山",
    "石",
    "田",
    "禾"
  ],
  "s1-08": [
    "云",
    "雨",
    "风",
    "花",
    "鸟",
    "虫"
  ],
  "s1-26": [
    "远",
    "有",
    "色",
    "近",
    "听",
    "无",
    "声",
    "去",
    "还",
    "来"
  ],
  "s1-27": [
    "大",
    "小",
    "多",
    "少",
    "黄",
    "牛",
    "只",
    "猫",
    "边",
    "鸭",
    "苹",
    "果",
    "杏",
    "桃"
  ],
  "s1-28": [
    "书",
    "包",
    "尺",
    "作",
    "业",
    "本",
    "笔",
    "刀",
    "课",
    "早",
    "校"
  ],
  "s1-29": [
    "明",
    "力",
    "尘",
    "从",
    "众",
    "双",
    "木",
    "林",
    "森",
    "条",
    "心"
  ],
  "s1-30": [
    "升",
    "国",
    "旗",
    "中",
    "红",
    "歌",
    "起",
    "么",
    "美",
    "丽",
    "立"
  ],
  "s2-01": [
    "春",
    "冬",
    "风",
    "雪",
    "花",
    "飞",
    "入"
  ],
  "s2-02": [
    "姓",
    "什",
    "么",
    "双",
    "国",
    "王",
    "方"
  ],
  "s2-03": [
    "青",
    "清",
    "晴",
    "情",
    "请"
  ],
  "s2-04": [
    "字",
    "左",
    "右",
    "红",
    "时",
    "动",
    "万"
  ],
  "s2-09": [
    "他",
    "河",
    "说",
    "也",
    "地",
    "听",
    "哥"
  ],
  "s2-10": [
    "单",
    "居",
    "招",
    "呼",
    "快",
    "乐"
  ],
  "s2-11": [
    "玩",
    "很",
    "当",
    "音",
    "讲",
    "行",
    "许"
  ]
} as const;

const baiduCharacterDetails = {
  "金": {
    "pinyin": "jīn",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b0ae4d97351c9489295eb4c155f80a999.gif"
  },
  "木": {
    "pinyin": "mù",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b8db55624486749d9a417fc0efd350699.gif"
  },
  "水": {
    "pinyin": "shuǐ",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b88a076f81e8e4d36b0b7c78519627cfa.gif"
  },
  "火": {
    "pinyin": "huǒ",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b9cc823be4d974fafb06330d246022644.gif"
  },
  "土": {
    "pinyin": "tǔ",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b86e3063e526747b3b87ea7ead8aeb34f.gif"
  },
  "一": {
    "pinyin": "yī",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bb3e43bce24154e4ea04e1887c296d7b8.gif"
  },
  "二": {
    "pinyin": "èr",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b1fcc1334d1d043a5955ad19f0c949adb.gif"
  },
  "三": {
    "pinyin": "sān",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/ba92147330f804f45980e304c4e70affc.gif"
  },
  "四": {
    "pinyin": "sì",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b7669e9b2e76643aaaf51b2810775b5ca.gif"
  },
  "五": {
    "pinyin": "wǔ",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b707c4975e10349d7a1e55a429ee37ff0.gif"
  },
  "口": {
    "pinyin": "kǒu",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b4070ad1bbc9546f28de360553fa1f367.gif"
  },
  "耳": {
    "pinyin": "ěr",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b830aa100d9aa4ecead16b1df89c8007d.gif"
  },
  "目": {
    "pinyin": "mù",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bf38af84dc9c148fab822ddae472e115d.gif"
  },
  "手": {
    "pinyin": "shǒu",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bab8c8885adbf4abeb5da2725a87c0cf4.gif"
  },
  "足": {
    "pinyin": "zú",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b37f5648f224641c4ac5c5f0b6b5fd826.gif"
  },
  "日": {
    "pinyin": "rì",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b3df1066c58c24b1caf4903143e1da12d.gif"
  },
  "月": {
    "pinyin": "yuè",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/be2b0e1d8d00b4488af14f4f8664bc2f0.gif"
  },
  "山": {
    "pinyin": "shān",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b4ef0038042304da991f273a26da5160b.gif"
  },
  "石": {
    "pinyin": "shí",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b215404c350be4d9dbcef0f5b353f8087.gif"
  },
  "田": {
    "pinyin": "tián",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b8a1fe0c6969c4b229f08600d438880da.gif"
  },
  "禾": {
    "pinyin": "hé",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b46121e436e014bf088d63fc4b75587ef.gif"
  },
  "云": {
    "pinyin": "yún",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bb2c76569164f43e7a608ae47ba7e9779.gif"
  },
  "雨": {
    "pinyin": "yǔ",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b4a08ba70427711e58335c8e0eb15ce01.gif"
  },
  "风": {
    "pinyin": "fēng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b13d8702d38a446ebadaa8064984098b1.gif"
  },
  "花": {
    "pinyin": "huā",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b5018f79921da4144a6453e7987edce0b.gif"
  },
  "鸟": {
    "pinyin": "niǎo",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bf777eed9ba964cdab5845cf244c66e79.gif"
  },
  "虫": {
    "pinyin": "chóng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bb1a1a86e8b744a20ba247ecfae3a9cbe.gif"
  },
  "远": {
    "pinyin": "yuǎn",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bd086ffedca314acfb9103c5819ca8eb9.gif"
  },
  "有": {
    "pinyin": "yǒu",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bcfeb05ee1eea4dfd971e4a1f0611f906.gif"
  },
  "色": {
    "pinyin": "sè",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bba80252d6f5d43df996d4e466174001b.gif"
  },
  "近": {
    "pinyin": "jìn",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b856f82e58df34e1bae4a653345fbedb5.gif"
  },
  "听": {
    "pinyin": "tīng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b437d19f045bb4691ac758ea488c97bd7.gif"
  },
  "无": {
    "pinyin": "wú",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bac4a98420b6e449f8fa8f56c2a33906b.gif"
  },
  "声": {
    "pinyin": "shēng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b6a8c1e79fee74cbda3b4b4de86d22330.gif"
  },
  "去": {
    "pinyin": "qù",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b8698e7db8e6044faae5c9a9238bffbf4.gif"
  },
  "还": {
    "pinyin": "hái",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b0102895ea9784bce9d91ec5f0e73dbfb.gif"
  },
  "来": {
    "pinyin": "lái",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b96cd1a64199c4b71ae1ebef56f5f8387.gif"
  },
  "大": {
    "pinyin": "dà",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49cdc1cc427711e5876ac8e0eb15ce01.gif"
  },
  "小": {
    "pinyin": "xiǎo",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b1dc72c759db04171a34a53f82284bbdb.gif"
  },
  "多": {
    "pinyin": "duō",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/be412b06328374adcaed0ebea0865331b.gif"
  },
  "少": {
    "pinyin": "shǎo",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49d1907a427711e5b67ac8e0eb15ce01.gif"
  },
  "黄": {
    "pinyin": "huáng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bc72bdee07f4f4b74b64e1fd2952dadde.gif"
  },
  "牛": {
    "pinyin": "niú",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b22108502548d479dbab406e2d7657ab2.gif"
  },
  "只": {
    "pinyin": "zhī",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49c5722e427711e5b366c8e0eb15ce01.gif"
  },
  "猫": {
    "pinyin": "māo",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49ec3240427711e5b69bc8e0eb15ce01.gif"
  },
  "边": {
    "pinyin": "biān",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b5608d4309a4f44e68c77ebcbc4a7135f.gif"
  },
  "鸭": {
    "pinyin": "yā",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b52962a8baca34c458c8a1e08f64a7ed7.gif"
  },
  "苹": {
    "pinyin": "píng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bce91847b7022469ebb1f86bd32e9da2a.gif"
  },
  "果": {
    "pinyin": "guǒ",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/baa69a4d837d04b3fa88e16ff133cc212.gif"
  },
  "杏": {
    "pinyin": "xìng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b91a373cecc1746ffa45f9f952f9be167.gif"
  },
  "桃": {
    "pinyin": "táo",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b45630209751c48049b82fbd1c76946d7.gif"
  },
  "书": {
    "pinyin": "shū",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b95e3e093d98b4681a6d40033ade6237e.gif"
  },
  "包": {
    "pinyin": "bāo",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b9ed64eaf87be418fa31d2d5c3a086dcc.gif"
  },
  "尺": {
    "pinyin": "chǐ",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/be251e89610944403b142d677b1c7f85c.gif"
  },
  "作": {
    "pinyin": "zuò",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b3359b86a6ee541fcb8441302c1994136.gif"
  },
  "业": {
    "pinyin": "yè",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b931548ed54594a448f53b7d95d000bb2.gif"
  },
  "本": {
    "pinyin": "běn",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b4f684d9693ee47e996479373b07600c6.gif"
  },
  "笔": {
    "pinyin": "bǐ",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bd14117639e284525bb110eaae38cb82d.gif"
  },
  "刀": {
    "pinyin": "dāo",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b82be423ddd214307b14a342f76714179.gif"
  },
  "课": {
    "pinyin": "kè",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bd1f56ad5cbf247cf9f694e57689fe3db.gif"
  },
  "早": {
    "pinyin": "zǎo",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b76d3f817670943acaa44f95931edc92c.gif"
  },
  "校": {
    "pinyin": "xiào",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49e2919147711e5a6d0c8e0eb15ce01.gif"
  },
  "明": {
    "pinyin": "míng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bcde9518294bb423cbc4e4e7a51e5225a.gif"
  },
  "力": {
    "pinyin": "lì",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/befb38ae743c34613922e0e91df1eb840.gif"
  },
  "尘": {
    "pinyin": "chén",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/be15ac45658db48d89821f23fdde78882.gif"
  },
  "从": {
    "pinyin": "cóng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b4ebf08e4479449f99268faf842622c12.gif"
  },
  "众": {
    "pinyin": "zhòng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bc1a7811c11864669a2d05f70cb2d7b76.gif"
  },
  "双": {
    "pinyin": "shuāng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/ba6d631172c43453095f89ba167d35b38.gif"
  },
  "林": {
    "pinyin": "lín",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b1534e898096541a69ce6902abeacf3f2.gif"
  },
  "森": {
    "pinyin": "sēn",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/be7146cdfc8e4400385ea55ad3997be4f.gif"
  },
  "条": {
    "pinyin": "tiáo",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bc9bc1fedc61e4f92a7fc2f66eecfbb85.gif"
  },
  "心": {
    "pinyin": "xīn",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b81f9f9d0367f4bca8f4ea1872522b9ec.gif"
  },
  "升": {
    "pinyin": "shēng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b6f48ac8bf114465b84e28062c6b90fd4.gif"
  },
  "国": {
    "pinyin": "guó",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b0f61df98ea4f4f5a9cfac0f586918c7c.gif"
  },
  "旗": {
    "pinyin": "qí",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bd29c693da403416991e4e34b8943f1c4.gif"
  },
  "中": {
    "pinyin": "zhōng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49ba3238427711e5b450c8e0eb15ce01.gif"
  },
  "红": {
    "pinyin": "hóng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49f3e9c5427711e58530c8e0eb15ce01.gif"
  },
  "歌": {
    "pinyin": "gē",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bd0c0c55e8dc647d7bfa2ab5476b1a879.gif"
  },
  "起": {
    "pinyin": "qǐ",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bf523c118688d48f3b6565c1698db68f5.gif"
  },
  "么": {
    "pinyin": "me",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bf30a398604af456f9c3ef151e2acbb9d.gif"
  },
  "美": {
    "pinyin": "měi",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b3e0e31040dac4496b6c6688fde9d9157.gif"
  },
  "丽": {
    "pinyin": "lì",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49baa523427711e5ba5bc8e0eb15ce01.gif"
  },
  "立": {
    "pinyin": "lì",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b62fc1bfa95e9411480a1c36602c30ccf.gif"
  },
  "春": {
    "pinyin": "chūn",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49dfa1c5427711e593bcc8e0eb15ce01.gif"
  },
  "冬": {
    "pinyin": "dōng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b34e1019e638d42d0938f318e96cc3f31.gif"
  },
  "雪": {
    "pinyin": "xuě",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/baf0b83c5564b4d68973b8fa8bef56095.gif"
  },
  "飞": {
    "pinyin": "fēi",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b676c10f2df0048a6a5188d31a2201800.gif"
  },
  "入": {
    "pinyin": "rù",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bbaf1190227ac4060b55810c5b68e0c0f.gif"
  },
  "姓": {
    "pinyin": "xìng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b55f3ee61c6224f5a822ca85f4ce336a0.gif"
  },
  "什": {
    "pinyin": "shí",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49bba79e427711e5a496c8e0eb15ce01.gif"
  },
  "王": {
    "pinyin": "wáng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49ec7678427711e5975dc8e0eb15ce01.gif"
  },
  "方": {
    "pinyin": "fāng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b3a16ac66dea4450f86927e5f7b052f22.gif"
  },
  "青": {
    "pinyin": "qīng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b5631e542054c406d8dc7c97f72df04ef.gif"
  },
  "清": {
    "pinyin": "qīng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/ba6e107a918504c1fab03ff123fcfc8b1.gif"
  },
  "晴": {
    "pinyin": "qíng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bf2778f5039964242b7753b416354e8b1.gif"
  },
  "情": {
    "pinyin": "qíng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b54010db76d684a08b9925cbc3dd30837.gif"
  },
  "请": {
    "pinyin": "qǐng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bb2d025474b274e199999b1bbb286808e.gif"
  },
  "字": {
    "pinyin": "zì",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/baf716cd323474f24947a9523c7085afa.gif"
  },
  "左": {
    "pinyin": "zuǒ",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b9a85a766dc8141a6a09ec2a7674ea876.gif"
  },
  "右": {
    "pinyin": "yòu",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/be9593cde99e7418ab4ce26b0aa971bbf.gif"
  },
  "时": {
    "pinyin": "shí",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bae6f06fcbc60488abb25fcf1c26dbc09.gif"
  },
  "动": {
    "pinyin": "dòng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b83255e6547df4e6f9b09b4d1417588c3.gif"
  },
  "万": {
    "pinyin": "wàn",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49b5d03a427711e584d2c8e0eb15ce01.gif"
  },
  "他": {
    "pinyin": "tā",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b0dbe31bac60542b2b1a59fff57e9ce8d.gif"
  },
  "河": {
    "pinyin": "hé",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b609d9b0100994e6893ac71bed2f80a5a.gif"
  },
  "说": {
    "pinyin": "shuō",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49ffcce3427711e5bb44c8e0eb15ce01.gif"
  },
  "也": {
    "pinyin": "yě",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b100d1891a353477395d9dd020e07f96b.gif"
  },
  "地": {
    "pinyin": "dì",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49cc261c427711e5918ac8e0eb15ce01.gif"
  },
  "哥": {
    "pinyin": "gē",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/ba11f5e84dc64451a92250b0d6424e877.gif"
  },
  "单": {
    "pinyin": "dān",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49c374eb427711e5b331c8e0eb15ce01.gif"
  },
  "居": {
    "pinyin": "jū",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b96a27dfc23fe49bcbbc6081e127a3789.gif"
  },
  "招": {
    "pinyin": "zhāo",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b5768bdf1f2824048b65a69cfd8384981.gif"
  },
  "呼": {
    "pinyin": "hū",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b8fbf6b69695b4c0d9971c1b5f45773a6.gif"
  },
  "快": {
    "pinyin": "kuài",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bc3060ae90fcc4cee921154cbf0696051.gif"
  },
  "乐": {
    "pinyin": "lè",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49bac48a427711e588b6c8e0eb15ce01.gif"
  },
  "玩": {
    "pinyin": "wán",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bb8ac5307b4024237bbbbcf4e7cf2bfc2.gif"
  },
  "很": {
    "pinyin": "hěn",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b142eaa0599a14c47b0bdfabc18178693.gif"
  },
  "当": {
    "pinyin": "dāng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49d5767d427711e58783c8e0eb15ce01.gif"
  },
  "音": {
    "pinyin": "yīn",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/bf8640ef0232d4099b3e2c92f1499662f.gif"
  },
  "讲": {
    "pinyin": "jiǎng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b9752aa50050c4eb9b5f2b652f49236f8.gif"
  },
  "行": {
    "pinyin": "háng",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b49fc94e6427711e58937c8e0eb15ce01.gif"
  },
  "许": {
    "pinyin": "xǔ",
    "strokeGifUrl": "https://hanyu-word-gif.cdn.bcebos.com/b7f870487f4524170b9eecede5d32a399.gif"
  }
} as const;

const recognitionStrokeOrders = {
  "金": ["撇", "捺", "横", "横", "竖", "点", "撇", "横"],
  "木": ["横", "竖", "撇", "捺"],
  "水": ["竖钩", "横撇", "撇", "捺"],
  "火": ["点", "撇", "撇", "捺"],
  "土": ["横", "竖", "横"],
  "一": ["横"],
  "二": ["横", "横"],
  "三": ["横", "横", "横"],
  "四": ["竖", "横折", "撇", "竖弯", "横"],
  "五": ["横", "竖", "横折", "横"],
  "口": ["竖", "横折", "横"],
  "耳": ["横", "竖", "竖", "横", "横", "横"],
  "目": ["竖", "横折", "横", "横", "横"],
  "手": ["撇", "横", "横", "竖钩"],
  "足": ["竖", "横折", "横", "竖", "横", "撇", "捺"],
  "日": ["竖", "横折", "横", "横"],
  "月": ["撇", "横折钩", "横", "横"],
  "山": ["竖", "竖折", "竖"],
  "石": ["横", "撇", "竖", "横折", "横"],
  "田": ["竖", "横折", "横", "竖", "横"],
  "禾": ["撇", "横", "竖", "撇", "捺"],
  "云": ["横", "横", "撇折", "点"],
  "雨": ["横", "竖", "横折钩", "竖", "点", "点", "点", "点"],
  "风": ["撇", "横折弯钩", "撇", "点"],
  "花": ["横", "竖", "竖", "撇", "竖", "撇", "竖弯钩"],
  "鸟": ["撇", "横折钩", "点", "竖折折钩", "横"],
  "虫": ["竖", "横折", "横", "竖", "横", "点"],
  "远": ["横", "横", "撇", "竖弯钩", "点", "横折折撇", "捺"],
  "有": ["横", "撇", "竖", "横折钩", "横", "横"],
  "色": ["撇", "横撇", "横折", "竖", "横", "竖弯钩"],
  "近": ["撇", "撇", "横", "竖", "点", "横折折撇", "捺"],
  "听": ["竖", "横折", "横", "撇", "撇", "横", "竖"],
  "无": ["横", "横", "撇", "竖弯钩"],
  "声": ["横", "竖", "横", "横折", "竖", "横", "撇"],
  "去": ["横", "竖", "横", "撇折", "点"],
  "还": ["横", "撇", "竖", "点", "点", "横折折撇", "捺"],
  "来": ["横", "点", "撇", "横", "竖", "撇", "捺"],
  "大": ["横", "撇", "捺"],
  "小": ["竖钩", "撇", "点"],
  "多": ["撇", "横撇", "点", "撇", "横撇", "点"],
  "少": ["竖", "撇", "点", "撇"],
  "黄": ["横", "竖", "竖", "横", "竖", "横折", "横", "竖", "横", "撇", "点"],
  "牛": ["撇", "横", "横", "竖"],
  "只": ["竖", "横折", "横", "撇", "点"],
  "猫": ["撇", "弯钩", "撇", "横", "竖", "竖", "竖", "横折", "横", "竖", "横"],
  "边": ["横折钩", "撇", "点", "横折折撇", "捺"],
  "鸭": ["竖", "横折", "横", "横", "竖", "撇", "横折钩", "点", "竖折折钩", "横"],
  "苹": ["横", "竖", "竖", "横", "点", "撇", "横", "竖"],
  "果": ["竖", "横折", "横", "横", "横", "竖", "撇", "捺"],
  "杏": ["横", "竖", "撇", "捺", "竖", "横折", "横"],
  "桃": ["横", "竖", "撇", "点", "撇", "点", "提", "竖弯钩", "撇", "点"],
  "书": ["横折", "横折钩", "竖", "点"],
  "包": ["撇", "横折钩", "横折", "横", "竖弯钩"],
  "尺": ["横折", "横", "撇", "捺"],
  "作": ["撇", "竖", "撇", "横", "竖", "横", "横"],
  "业": ["竖", "竖", "点", "撇", "横"],
  "本": ["横", "竖", "撇", "捺", "横"],
  "笔": ["撇", "横", "点", "撇", "横", "点", "撇", "横", "横", "竖弯钩"],
  "刀": ["横折钩", "撇"],
  "课": ["点", "横折提", "竖", "横折", "横", "横", "横", "竖", "撇", "捺"],
  "早": ["竖", "横折", "横", "横", "横", "竖"],
  "校": ["横", "竖", "撇", "点", "点", "横", "撇", "点", "撇", "捺"],
  "明": ["竖", "横折", "横", "横", "撇", "横折钩", "横", "横"],
  "力": ["横折钩", "撇"],
  "尘": ["竖", "撇", "点", "横", "竖", "横"],
  "从": ["撇", "点", "撇", "捺"],
  "众": ["撇", "捺", "撇", "点", "撇", "捺"],
  "双": ["横撇", "点", "横撇", "捺"],
  "林": ["横", "竖", "撇", "点", "横", "竖", "撇", "捺"],
  "森": ["横", "竖", "撇", "捺", "横", "竖", "撇", "点", "横", "竖", "撇", "捺"],
  "条": ["撇", "横撇", "捺", "横", "竖钩", "撇", "点"],
  "心": ["点", "斜钩", "点", "点"],
  "升": ["撇", "横", "撇", "竖"],
  "国": ["竖", "横折", "横", "横", "竖", "横", "点", "横"],
  "旗": ["点", "横", "横折钩", "撇", "撇", "横", "横", "竖", "竖", "横", "横", "横", "撇", "点"],
  "中": ["竖", "横折", "横", "竖"],
  "红": ["撇折", "撇折", "提", "横", "竖", "横"],
  "歌": ["横", "竖", "横折", "横", "竖", "横", "竖钩", "撇", "横撇", "撇", "捺"],
  "起": ["横", "竖", "横", "竖", "横", "撇", "捺", "横折", "横", "竖弯钩"],
  "么": ["撇", "撇折", "点"],
  "美": ["点", "撇", "横", "横", "竖", "横", "横", "撇", "捺"],
  "丽": ["横", "竖", "横折钩", "点", "竖", "横折钩", "点"],
  "立": ["点", "横", "点", "撇", "横"],
  "春": ["横", "横", "横", "撇", "捺", "竖", "横折", "横", "横"],
  "冬": ["撇", "横撇", "捺", "点", "点"],
  "雪": ["横", "点", "横钩", "竖", "点", "点", "点", "点", "横折", "横", "横"],
  "飞": ["横斜钩", "撇", "点"],
  "入": ["撇", "捺"],
  "姓": ["撇点", "撇", "横", "撇", "横", "横", "竖", "横"],
  "什": ["撇", "竖", "横", "竖"],
  "王": ["横", "横", "竖", "横"],
  "方": ["点", "横", "横折钩", "撇"],
  "青": ["横", "横", "竖", "横", "竖", "横折钩", "横", "横"],
  "清": ["点", "点", "提", "横", "横", "竖", "横", "竖", "横折钩", "横", "横"],
  "晴": ["竖", "横折", "横", "横", "横", "横", "竖", "横", "竖", "横折钩", "横", "横"],
  "情": ["点", "点", "竖", "横", "横", "竖", "横", "竖", "横折钩", "横", "横"],
  "请": ["点", "横折提", "横", "横", "竖", "横", "竖", "横折钩", "横", "横"],
  "字": ["点", "点", "横钩", "横撇", "竖钩", "横"],
  "左": ["横", "撇", "横", "竖", "横"],
  "右": ["横", "撇", "竖", "横折", "横"],
  "时": ["竖", "横折", "横", "横", "横", "竖钩", "点"],
  "动": ["横", "横", "撇折", "点", "横折钩", "撇"],
  "万": ["横", "横折钩", "撇"],
  "河": ["点", "点", "提", "横", "竖", "横折", "横", "竖钩"],
  "说": ["点", "横折提", "点", "撇", "竖", "横折", "横", "撇", "竖弯钩"],
  "也": ["横折钩", "竖", "竖弯钩"],
  "地": ["横", "竖", "提", "横折钩", "竖", "竖弯钩"],
  "他": ["撇", "竖", "横折钩", "竖", "竖弯钩"],
  "哥": ["横", "竖", "横折", "横", "竖", "横", "竖", "横折", "横", "竖钩"],
  "单": ["点", "撇", "竖", "横折", "横", "横", "横", "竖"],
  "居": ["横折", "横", "撇", "横", "竖", "竖", "横折", "横"],
  "招": ["横", "竖钩", "提", "横折钩", "撇", "竖", "横折", "横"],
  "呼": ["竖", "横折", "横", "撇", "点", "撇", "横", "竖钩"],
  "快": ["点", "点", "竖", "横折", "横", "撇", "捺"],
  "乐": ["撇", "竖折", "竖钩", "撇", "点"],
  "玩": ["横", "横", "竖", "提", "横", "横", "撇", "竖弯钩"],
  "很": ["撇", "撇", "竖", "横折", "横", "横", "竖提", "撇", "捺"],
  "当": ["竖", "点", "撇", "横折", "横", "横"],
  "音": ["点", "横", "点", "撇", "横", "竖", "横折", "横", "横"],
  "讲": ["点", "横折提", "横", "横", "撇", "竖"],
  "行": ["撇", "撇", "竖", "横", "横", "竖钩"],
  "许": ["点", "横折提", "撇", "横", "横", "竖"]
} as const;

function createRecognitionCharacters(
  lessonId: keyof typeof recognitionCharacterSets
): LessonCharacter[] {
  return recognitionCharacterSets[lessonId].map((character) => {
    const detail = baiduCharacterDetails[character];
    const strokeOrder = recognitionStrokeOrders[character];

    return {
      character,
      pinyin: detail.pinyin,
      strokes: strokeOrder.length,
      meaning: `认识“${character}”这个汉字，结合课文和生活场景理解意思。`,
      words: [`${character}字`],
      sentence: `我会认“${character}”。`,
      voiceText: character,
      strokeOrder,
      strokeGifUrl: detail.strokeGifUrl
    };
  });
}

const pinyinCharacterSets = {
  "s1-09": [
    "a",
    "o",
    "e"
  ],
  "s1-10": [
    "i",
    "u",
    "ü",
    "y",
    "w"
  ],
  "s1-11": [
    "b",
    "p",
    "m",
    "f"
  ],
  "s1-12": [
    "d",
    "t",
    "n",
    "l"
  ],
  "s1-13": [
    "g",
    "k",
    "h"
  ],
  "s1-14": [
    "j",
    "q",
    "x"
  ],
  "s1-15": [
    "z",
    "c",
    "s"
  ],
  "s1-16": [
    "zh",
    "ch",
    "sh",
    "r"
  ],
  "s1-17": [
    "ai",
    "ei",
    "ui"
  ],
  "s1-18": [
    "ao",
    "ou",
    "iu"
  ],
  "s1-19": [
    "ie",
    "üe",
    "er"
  ],
  "s1-20": [
    "an",
    "en",
    "in",
    "un",
    "ün"
  ],
  "s1-21": [
    "ang",
    "eng",
    "ing",
    "ong"
  ]
} as const;

const pinyinWritingDetails = {
  "a": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0rechJjtkhhoTibS1rs18jdps4yicTlVQ5PcRSX09ushiaKK5DtKnPwsVricA/640?wx_fmt=gif&wxfrom=13&tp=wxpic"
  },
  "o": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reR41yEoJDhUzmpiclQNwGOrm4qU4FibQ2OhQ9E82cquSzPC5ibpkia4nV2A/640?wx_fmt=gif&wxfrom=13&tp=wxpic"
  },
  "e": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reQa3tRctqsgptO5TZ6GMzRgY5AG2EdwvEeWleILqY4AF0EvEzPI8s5w/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "i": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reWYrthgG4ibcdLl2PQIN34PF5kaibrz6DYaTCAgic38s6iafRBfBmo1BZUA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "u": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reV5Eic8PfqyVBnTVz8YmrHDZ2ficsySdRpNaxlDkT2ADvn6jP93bSpI8w/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "ü": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reazNHtMpgFhK8ic5kHHJPtFIXTu1V9eDB5T7y6HN7W10BFKgTe4X5HEw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "y": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reO8j1SBzvDv1WSwMRIXMo8WK42lYEupXQnUNujCcbHzicTtftZv8zdXQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "w": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reOpxpW5nBVslkPE2MQU9icHI1lyo977gHnRViaoicruxDbiaBvLfKLb02tg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "b": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reSdOCCEsQazlNBico18s1fC5BMgnjOGsAlrz0PicWocdM4ic8ylficumUzg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "p": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reuRSEca3ac0eCceI87P07sVT5cf0iclKT6mXOZ4vhv3uibkfeboylqHpA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "m": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reNLhIoDvbXlJiaJlatSD4xO3F53hoFaxXrMjKYKW8w0ibyglGibeiazvD8Q/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "f": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0rej4SmIWoayGic3hiaXiawKTQSocXPzNicpME5SF3IyKllnribt3LXPqTRvNQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "d": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reaBrWQkZpz9byBHDkiaazZVbTATVcpnEialWGBI1XKLaDuH0AFKvYTcQg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "t": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reLoLBS909m3yBEXq9N98l0jpGu86uBwR79OCPRyH6FJTo2I6Y5ZM8zQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "n": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reAM3biaMqcrAYcZowlDQZgkBXrt8ocpPYupZIUia2xYvSics8TYia09fOpg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "l": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reCBHCXyweiaetFiaHDNWBdBu9zVEMccduWDKAbSYEMesFRTkkEt4UohkQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "g": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0re7c0IQWwp5IQOC6VYibwvAjiajPLZLnOicEicVZfOx75CwfibRmziaBtn5gwg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "k": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reML6gq7GZA1tJKntnIyOfJznKD3t53bt2DeNWnZwVmQLsV0taGdHyibw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "h": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reeeicR6WdYaUWAuiavvmSxTJCoaWwHuUBib3GjFhhzkQrZ2Q4T3qfhVH8Q/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "j": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reZ55pJPoJOicnKWFtTFYn0JQuzoULs4wukSUiaTPZ70qe5dyW3IyNFqLg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "q": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0refEgATevgtLQulFiaOs30hj9ScWYapPDP56n0l18RasD2MACAgOIdHsg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "x": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reOiabSJ4myA5W7fIR8icW9LWLWx55aMfMEdtWV06ZDlphXDEqMyUmNwjw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "z": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0rebhB8NKtewibvAmlibMludv5fYGIgKwTbZP7iaDibaSGD57n1cqJ04aLQLw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "c": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reQqibsmXeibDXKp4MibiaJkoI7hN3yLehEYxd1DcJFGl8YHoqeiaUiafbTeaQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "s": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0rekw3IINWh8tmPmhvq3wicFEcxEMqLkibnYu164cO0E0OpMxQgGYS8vorA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "zh": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reiad1YPfdicDZPibDVicNCPsDKPXKNm3oznVzg6wR7w8e8GSNxmjZjmOpwQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "ch": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reBoia5NPjpWEGFicqQxWqd2cibOU95NZ3SYYIvfVSdk8JrKoib95ibxbBYLw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "sh": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reAz3tdib3bTecznoYiaGAFvQbh3tAWtt55ALNNV3dIlpUdLvkJQ5grPDw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "r": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0relmS2W5pKscSTMCUEZLqDzvYNQWXJAh4gHSXnMaVoklx8EKTgqZJrJg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "ai": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reicZk950K1hqSLEDLicqb5pYydN8L8nfRXZTF41Kic4XlJnic0yFw2fDoEg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "ei": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reibXKHmwwrhyukIrtBNBxMGzSCKzj8LDYwGicWbicwCzdaZY8mbJg1mp3g/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "ui": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reAUx9SEp1MH4prSCOlCGA7gC2CSgjuyfKaVNFh4BG2Ge4N2b6Mugjmw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "ao": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0re71IWkQwjpKfnhRs4oQVGt6eudupogwibEeEIoGJKrMxAQPHdGGwr55g/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "ou": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0regMqUwiatLYYrm885fR4iaVibFQWbBHI8V7fnPsT9OWoIQe1icZgDMrrnhg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "iu": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reWHicxjwQgpWQGWN46R2Y73upUTmcicpXb7jJMESTRos0HVMtn6Ls7TIA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "ie": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0refTqVDyVUEtPP7nMDUrTBZKDErwOygImOafAGEMYvXmHYUV2BwGRtBA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "üe": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reweIZs8Mjp8hKXdkaXY3InlRxXn7qeJjOn4VGe4kHe8iaqQtLKLbyyRw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "er": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0ref9hpXmwuUxh9scy5SgmQ4OK9ykiawz4Sl3HDLufQ94wCeB6cQiaHl6cQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "an": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0rerOibuBicW2nOKN2rtlR86pJkvCA3kOt2iaYXib6ib4NYBrkibgmfiad7mvKWQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "en": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reZ2slCdqFO4z5a1btahrgIPP1XicWndYz8icwqy0NN5VIYORqQPuhNjEw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "in": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reBJ1qPJG1h5ndiaXv2IgA3kbTLlxmAeLFmUXpVja3amJBGfsFuibl2q4A/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "un": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reicndsOLkRp86DLdib9o7ow3hmAxMOzsefYmlkt1QwbvhCEyrL4qqJb9g/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "ün": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0reHSsnuInULbmEpFQBfD0ia0ObqqGkBNcibk2M2cmtiaHFmfxy63J1QJEicQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "ang": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0rexqmBLqCM6n0RWqic047QlPV9hIQd4xjMUsOvUoczcPzCKvoVtmjicVbQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "eng": {
    "strokeGifUrl": "https://mmbiz.qpic.cn/mmbiz_gif/nLPGCJrkHwjuZSZcLDOcAdmFdeIIV0re1cuNTbQ70ywzqN5ZKg3HsBwhhd4lfUgI5jWu8TGcLWdC8Y25knooUw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1"
  },
  "ing": {
    "strokeGifUrl": ""
  },
  "ong": {
    "strokeGifUrl": ""
  }
} as const;

const pinyinSvgWritingDetails = {
  "a": [
    {
      "path": "M286 187 C276 168 258 157 236 157 C206 157 184 179 184 211 C184 244 207 265 236 265 C265 265 286 244 286 211",
      "duration": 4.6
    },
    {
      "path": "M286 154 L286 241 C286 257 291 264 301 264 C308 264 314 260 318 252",
      "delay": 1.55,
      "duration": 4.6
    }
  ],
  "o": [
    {
      "path": "M250 157 C214 151 184 179 184 211 C184 244 207 265 236 265 C265 265 286 244 286 211 C286 179 272 162 250 157",
      "duration": 4.6
    }
  ],
  "e": [
    {
      "path": "M176 208 L276 208 C273 177 249 162 224 164 C195 166 176 190 176 219 C176 247 197 266 225 266 C249 266 268 254 278 235",
      "duration": 4.6
    }
  ]
} as const;

function createPinyinCharacters(
  lessonId: keyof typeof pinyinCharacterSets
): LessonCharacter[] {
  return pinyinCharacterSets[lessonId].map((symbol) => {
    const detail = pinyinWritingDetails[symbol];

    return {
      character: symbol,
      pinyin: symbol,
      meaning: `学习拼音“${symbol}”的规范写法，观察它在四线三格中的位置。`,
      words: ['四线三格', '规范书写'],
      sentence: `我会写拼音“${symbol}”。`,
      voiceText: symbol,
      strokeGifUrl: detail.strokeGifUrl || undefined,
      pinyinSvg: pinyinSvgWritingDetails[symbol as keyof typeof pinyinSvgWritingDetails]
    };
  });
}

export const chineseLessons: Lesson[] = [
  {
    id: 's1-01',
    semester: '上册',
    unit: '入学准备',
    title: '我是中国人',
    focus: '认识校园身份与国家认同',
    points: [
      '知道自己是中国人，建立入学后的集体意识。',
      '能看图说出校园、国旗、同学等常见内容。',
      '学习在课堂上认真听、坐端正、主动表达。'
    ]
  },
  {
    id: 's1-02',
    semester: '上册',
    unit: '入学准备',
    title: '我是小学生',
    focus: '完成角色转换与学习习惯启蒙',
    points: [
      '了解小学生的基本行为规范和课堂礼仪。',
      '学习整理书包、摆放文具、按要求完成任务。',
      '初步形成按时上学、认真听讲的习惯。'
    ]
  },
  {
    id: 's1-03',
    semester: '上册',
    unit: '入学准备',
    title: '我爱学语文',
    focus: '感受语文学习的内容与乐趣',
    points: [
      '知道语文学习包括听、说、读、写几个方面。',
      '通过图画、儿歌和交流感受语言表达的快乐。',
      '建立愿意开口说、愿意朗读、愿意识字的兴趣。'
    ]
  },
  {
    id: 's1-04',
    semester: '上册',
    unit: '识字一',
    title: '天地人',
    focus: '借助生活场景认识最基础的汉字',
    points: [
      '认识“天、地、人、你、我、他”等字。',
      '理解字义和人物关系，学会联系生活识字。',
      '练习用“你我他”进行简单表达。'
    ],
    characters: [
      {
        character: '天',
        pinyin: 'tiān',
        strokes: 4,
        meaning: '头顶上的天空，也可表示自然、时间。',
        words: ['天空', '今天'],
        sentence: '今天的天空很蓝。',
        voiceText: '天',
        strokeOrder: ['横', '横', '撇', '捺'],
        strokeGifUrl: 'https://hanyu-word-gif.cdn.bcebos.com/b619cfe1141f749118dc8ab69a2d54da2.gif'
      },
      {
        character: '地',
        pinyin: 'dì',
        strokes: 6,
        meaning: '脚下的土地，也可以表示地方。',
        words: ['土地', '地方'],
        sentence: '我们站在平平的地上。',
        voiceText: '地',
        strokeOrder: ['横', '竖', '提', '横折钩', '竖', '竖弯钩'],
        strokeGifUrl: 'https://hanyu-word-gif.cdn.bcebos.com/b49cc261c427711e5918ac8e0eb15ce01.gif'
      },
      {
        character: '人',
        pinyin: 'rén',
        strokes: 2,
        meaning: '会说话、会劳动、会思考的人。',
        words: ['大人', '人们'],
        sentence: '我是一个小学生。',
        voiceText: '人',
        strokeOrder: ['撇', '捺'],
        strokeGifUrl: 'https://hanyu-word-gif.cdn.bcebos.com/b22e4c92df25a43d4aa07c2b745136b6e.gif'
      },
      {
        character: '你',
        pinyin: 'nǐ',
        strokes: 7,
        meaning: '说话时称呼对方。',
        words: ['你好', '你们'],
        sentence: '你好，我们一起读书吧。',
        voiceText: '你',
        strokeOrder: ['撇', '竖', '撇', '横钩', '竖钩', '撇', '点'],
        strokeGifUrl: 'https://hanyu-word-gif.cdn.bcebos.com/b34dd6ef867974b4385894bb0aaeb1c2b.gif'
      },
      {
        character: '我',
        pinyin: 'wǒ',
        strokes: 7,
        meaning: '说话的人称自己。',
        words: ['我们', '我的'],
        sentence: '我爱学语文。',
        voiceText: '我',
        strokeOrder: ['撇', '横', '竖钩', '提', '斜钩', '撇', '点'],
        strokeGifUrl: 'https://hanyu-word-gif.cdn.bcebos.com/ba0a041b62c4347f0ba3f4e086316baa8.gif'
      },
      {
        character: '他',
        pinyin: 'tā',
        strokes: 5,
        meaning: '称呼自己和对方以外的男性或人物。',
        words: ['他们', '他人'],
        sentence: '他在认真听老师讲课。',
        voiceText: '他',
        strokeOrder: ['撇', '竖', '横折钩', '竖', '竖弯钩'],
        strokeGifUrl: 'https://hanyu-word-gif.cdn.bcebos.com/b0dbe31bac60542b2b1a59fff57e9ce8d.gif'
      }
    ]
  },
  {
    id: 's1-05',
    semester: '上册',
    unit: '识字一',
    title: '金木水火土',
    focus: '认识事物名称与数量顺序',
    points: [
      '认识“金、木、水、火、土、一、二、三、四、五”等字。',
      '结合童谣理解自然事物和数字顺序。',
      '练习节奏朗读，感受语言韵律。'
    ],
    characters: createRecognitionCharacters('s1-05')
  },
  {
    id: 's1-06',
    semester: '上册',
    unit: '识字一',
    title: '口耳目',
    focus: '图字对应认识身体部位',
    points: [
      '认识“口、耳、目、手、足”等字。',
      '理解象形字特点，知道汉字和图画的联系。',
      '能在指认活动中完成“看字认物”。'
    ],
    characters: createRecognitionCharacters('s1-06')
  },
  {
    id: 's1-07',
    semester: '上册',
    unit: '识字一',
    title: '日月水火',
    focus: '继续感受象形字构字规律',
    points: [
      '认识“日、月、水、火、山、石、田、禾”等字。',
      '观察字形演变，初步感受汉字文化。',
      '能将字形和生活中的事物对应起来。'
    ],
    characters: createRecognitionCharacters('s1-07')
  },
  {
    id: 's1-08',
    semester: '上册',
    unit: '识字一',
    title: '对韵歌',
    focus: '通过韵文积累反义和对应词',
    points: [
      '认识“云、雨、风、花、鸟、虫”等字词。',
      '感受对仗和押韵，培养语感。',
      '练习有节奏地朗读短小韵文。'
    ],
    characters: createRecognitionCharacters('s1-08')
  },
  {
    id: 's1-09',
    semester: '上册',
    unit: '汉语拼音',
    title: 'a o e',
    focus: '学习单韵母发音与四声',
    points: [
      '读准 a、o、e 的发音，认识口型变化。',
      '学习四声读法，建立声调意识。',
      '能在情境图中找到对应声音线索。'
    ],
    characters: createPinyinCharacters('s1-09')
  },
  {
    id: 's1-10',
    semester: '上册',
    unit: '汉语拼音',
    title: 'i u ü y w',
    focus: '继续学习单韵母和声母辅助音',
    points: [
      '掌握 i、u、ü 的发音和书写。',
      '认识 y、w 在拼音中的辅助作用。',
      '注意 ü 和 y 组成音节时的读写特点。'
    ],
    characters: createPinyinCharacters('s1-10')
  },
  {
    id: 's1-11',
    semester: '上册',
    unit: '汉语拼音',
    title: 'b p m f',
    focus: '学习双唇音和唇齿音',
    points: [
      '读准 b、p、m、f 的发音并会书写。',
      '学会声母和单韵母拼读简单音节。',
      '比较 b 与 p 的送气差异。'
    ],
    characters: createPinyinCharacters('s1-11')
  },
  {
    id: 's1-12',
    semester: '上册',
    unit: '汉语拼音',
    title: 'd t n l',
    focus: '学习舌尖音并继续拼读',
    points: [
      '掌握 d、t、n、l 的发音方法。',
      '练习声母与韵母相拼，读准常见音节。',
      '分辨 d、b 和 n、l 等易混字母。'
    ],
    characters: createPinyinCharacters('s1-12')
  },
  {
    id: 's1-13',
    semester: '上册',
    unit: '汉语拼音',
    title: 'g k h',
    focus: '学习舌根音',
    points: [
      '读准 g、k、h 的发音并规范书写。',
      '在儿歌和词语中巩固拼读。',
      '知道声母发音轻短，拼读时要快速连读。'
    ],
    characters: createPinyinCharacters('s1-13')
  },
  {
    id: 's1-14',
    semester: '上册',
    unit: '汉语拼音',
    title: 'j q x',
    focus: '掌握舌面音与 ü 的拼读规则',
    points: [
      '会读会写 j、q、x。',
      '知道 j、q、x 和 ü 相拼时两点省写规则。',
      '能拼读相关音节并运用到词语中。'
    ],
    characters: createPinyinCharacters('s1-14')
  },
  {
    id: 's1-15',
    semester: '上册',
    unit: '汉语拼音',
    title: 'z c s',
    focus: '学习平舌音',
    points: [
      '掌握 z、c、s 的发音和书写。',
      '认识整体认读音节 zi、ci、si。',
      '能区分平舌音与生活口语中的混读现象。'
    ],
    characters: createPinyinCharacters('s1-15')
  },
  {
    id: 's1-16',
    semester: '上册',
    unit: '汉语拼音',
    title: 'zh ch sh r',
    focus: '学习翘舌音',
    points: [
      '掌握 zh、ch、sh、r 的发音位置。',
      '认识整体认读音节 zhi、chi、shi、ri。',
      '能对比平舌音与翘舌音的差异。'
    ],
    characters: createPinyinCharacters('s1-16')
  },
  {
    id: 's1-17',
    semester: '上册',
    unit: '汉语拼音',
    title: 'ai ei ui',
    focus: '学习复韵母',
    points: [
      '掌握 ai、ei、ui 的发音和书写。',
      '知道复韵母由两个元音滑动组成。',
      '能进行带声调复韵母音节拼读。'
    ],
    characters: createPinyinCharacters('s1-17')
  },
  {
    id: 's1-18',
    semester: '上册',
    unit: '汉语拼音',
    title: 'ao ou iu',
    focus: '继续学习复韵母',
    points: [
      '准确读写 ao、ou、iu。',
      '能在音节中正确标调。',
      '通过词语和儿歌巩固拼读。'
    ],
    characters: createPinyinCharacters('s1-18')
  },
  {
    id: 's1-19',
    semester: '上册',
    unit: '汉语拼音',
    title: 'ie üe er',
    focus: '学习特殊韵母和儿化感知',
    points: [
      '掌握 ie、üe、er 的发音。',
      '了解 er 既可独立成音节，也可表示儿化语感。',
      '继续熟悉 üe 的书写规则。'
    ],
    characters: createPinyinCharacters('s1-19')
  },
  {
    id: 's1-20',
    semester: '上册',
    unit: '汉语拼音',
    title: 'an en in un ün',
    focus: '学习前鼻韵母',
    points: [
      '掌握前鼻韵母的发音特点。',
      '会拼读带前鼻韵母的常见音节。',
      '注意 en、eng，in、ing 等后续区分基础。'
    ],
    characters: createPinyinCharacters('s1-20')
  },
  {
    id: 's1-21',
    semester: '上册',
    unit: '汉语拼音',
    title: 'ang eng ing ong',
    focus: '学习后鼻韵母',
    points: [
      '掌握 ang、eng、ing、ong 的发音方法。',
      '感受前后鼻音的口腔位置差别。',
      '能在拼读中正确区分鼻韵母。'
    ],
    characters: createPinyinCharacters('s1-21')
  },
  {
    id: 's1-22',
    semester: '上册',
    unit: '课文一',
    title: '秋天',
    focus: '感受秋天景物特点',
    points: [
      '抓住天空、树叶等景物了解秋天变化。',
      '学习按顺序观察画面并说完整句子。',
      '积累描写季节的词语，练习朗读停顿。'
    ]
  },
  {
    id: 's1-23',
    semester: '上册',
    unit: '课文一',
    title: '小小的船',
    focus: '借助想象理解比喻表达',
    points: [
      '理解“弯弯的月儿像小船”的比喻。',
      '感受儿童视角中的夜空想象。',
      '练习有感情地朗读并积累叠词表达。'
    ]
  },
  {
    id: 's1-24',
    semester: '上册',
    unit: '课文一',
    title: '江南',
    focus: '感受采莲情景与语言节奏',
    points: [
      '理解鱼戏莲叶间的画面和童趣。',
      '学习反复句式，感受古诗节奏美。',
      '在诵读中初步感知江南水乡意境。'
    ]
  },
  {
    id: 's1-25',
    semester: '上册',
    unit: '课文一',
    title: '四季',
    focus: '认识四季代表景物',
    points: [
      '能说出春夏秋冬的典型景物特点。',
      '学习诗歌中拟人化、形象化表达。',
      '建立按季节分类观察自然的意识。'
    ]
  },
  {
    id: 's1-26',
    semester: '上册',
    unit: '识字二',
    title: '画',
    focus: '在对比中理解诗句意思',
    points: [
      '通过“远看、近听”理解画的特点。',
      '感受诗中景与现实不同形成的趣味。',
      '学习借助对比理解短诗内容。'
    ],
    characters: createRecognitionCharacters('s1-26')
  },
  {
    id: 's1-27',
    semester: '上册',
    unit: '识字二',
    title: '大小多少',
    focus: '学习反义词和量词搭配',
    points: [
      '理解大与小、多与少等比较关系。',
      '认识常见量词的基本用法。',
      '能借助图片进行简单比较表达。'
    ],
    characters: createRecognitionCharacters('s1-27')
  },
  {
    id: 's1-28',
    semester: '上册',
    unit: '识字二',
    title: '小书包',
    focus: '认识学习用品与整理习惯',
    points: [
      '认识书包中的常见学习用品名称。',
      '学习按类别整理文具与爱护用品。',
      '能说出物品用途并进行简单描述。'
    ],
    characters: createRecognitionCharacters('s1-28')
  },
  {
    id: 's1-29',
    semester: '上册',
    unit: '识字二',
    title: '日月明',
    focus: '发现会意字构字规律',
    points: [
      '认识“明、尘、从、众”等会意字。',
      '理解部分汉字由两个熟字组合而成。',
      '通过拆分和组合提高识字兴趣。'
    ],
    characters: createRecognitionCharacters('s1-29')
  },
  {
    id: 's1-30',
    semester: '上册',
    unit: '识字二',
    title: '升国旗',
    focus: '培养礼仪意识与爱国情感',
    points: [
      '了解升国旗时应有的行为规范。',
      '认识国旗、国歌相关内容。',
      '通过朗读体会庄重、自豪的情感。'
    ],
    characters: createRecognitionCharacters('s1-30')
  },
  {
    id: 's1-31',
    semester: '上册',
    unit: '课文二',
    title: '影子',
    focus: '观察影子的方向变化',
    points: [
      '知道影子会跟随光线和人物变化。',
      '学习方位词前、后、左、右。',
      '在生活观察中理解课文内容。'
    ]
  },
  {
    id: 's1-32',
    semester: '上册',
    unit: '课文二',
    title: '比尾巴',
    focus: '在问答形式中认识动物特点',
    points: [
      '了解猴子、兔子、松鼠等动物尾巴特点。',
      '学习一问一答的表达方式。',
      '积累“长、短、像伞”等描述词。'
    ]
  },
  {
    id: 's1-33',
    semester: '上册',
    unit: '课文二',
    title: '青蛙写诗',
    focus: '认识标点与语言节奏',
    points: [
      '知道逗号、句号、省略号在文中的作用。',
      '感受下雨场景和小动物合作的趣味。',
      '练习根据标点停顿朗读。'
    ]
  },
  {
    id: 's1-34',
    semester: '上册',
    unit: '课文二',
    title: '雨点儿',
    focus: '理解雨水滋润万物',
    points: [
      '知道大雨点和小雨点的不同作用。',
      '理解自然现象和植物生长之间的联系。',
      '练习分角色朗读对话。'
    ]
  },
  {
    id: 's1-35',
    semester: '上册',
    unit: '课文三',
    title: '明天要远足',
    focus: '体会期待心情的表达',
    points: [
      '通过重复句式感受孩子临行前的兴奋。',
      '学习抓住“睡不着”等细节理解情绪。',
      '能联系自身经历说说期待的事情。'
    ]
  },
  {
    id: 's1-36',
    semester: '上册',
    unit: '课文三',
    title: '大还是小',
    focus: '在对比中认识成长',
    points: [
      '理解“大”和“小”在不同情境中的相对性。',
      '能结合生活判断自己会做和不会做的事。',
      '学习表达成长中的自我认识。'
    ]
  },
  {
    id: 's1-37',
    semester: '上册',
    unit: '课文三',
    title: '项链',
    focus: '感受海边生活与语言美感',
    points: [
      '理解沙滩、海浪、贝壳等画面描写。',
      '感受“项链”这一形象命名的妙处。',
      '积累优美词句并练习朗读。'
    ]
  },
  {
    id: 's1-38',
    semester: '上册',
    unit: '课文四',
    title: '雪地里的小画家',
    focus: '认识动物脚印与比喻',
    points: [
      '知道小鸡、小狗、小鸭、小马脚印不同。',
      '理解“画家”是拟人化表达。',
      '感受冬天雪地活动的童趣。'
    ]
  },
  {
    id: 's1-39',
    semester: '上册',
    unit: '课文四',
    title: '乌鸦喝水',
    focus: '学习遇事动脑解决问题',
    points: [
      '理解乌鸦喝不到水到想出办法的过程。',
      '知道石子投入瓶中水位会上升。',
      '培养观察、思考和尝试的意识。'
    ]
  },
  {
    id: 's1-40',
    semester: '上册',
    unit: '课文四',
    title: '小蜗牛',
    focus: '借助连环画理解故事顺序',
    points: [
      '能根据图画梳理小蜗牛出门和返回的经过。',
      '知道季节变化会带来景物变化。',
      '学习边看图边猜读，提高阅读能力。'
    ]
  },
  {
    id: 's2-01',
    semester: '下册',
    unit: '识字一',
    title: '春夏秋冬',
    focus: '认识四季特点与自然词语',
    points: [
      '积累春风、夏雨、秋霜、冬雪等词语。',
      '知道四季变化和自然现象的联系。',
      '通过节奏朗读感受语言整齐美。'
    ],
    characters: createRecognitionCharacters('s2-01')
  },
  {
    id: 's2-02',
    semester: '下册',
    unit: '识字一',
    title: '姓氏歌',
    focus: '认识姓氏文化和识字方法',
    points: [
      '知道常见姓氏及其简单介绍方式。',
      '学习拆字识字和问答表达。',
      '感受中华姓氏文化的亲切感。'
    ],
    characters: createRecognitionCharacters('s2-02')
  },
  {
    id: 's2-03',
    semester: '下册',
    unit: '识字一',
    title: '小青蛙',
    focus: '辨析形近字与保护动物意识',
    points: [
      '认识“青、清、晴、情、请”等形近字。',
      '理解偏旁和字义之间的联系。',
      '知道青蛙捉害虫，树立爱护动物意识。'
    ],
    characters: createRecognitionCharacters('s2-03')
  },
  {
    id: 's2-04',
    semester: '下册',
    unit: '识字一',
    title: '猜字谜',
    focus: '在游戏中巩固识字思维',
    points: [
      '通过字谜线索理解字形、字义。',
      '学习从部件、意思入手猜字。',
      '提升主动识字和合作交流兴趣。'
    ],
    characters: createRecognitionCharacters('s2-04')
  },
  {
    id: 's2-05',
    semester: '下册',
    unit: '课文一',
    title: '吃水不忘挖井人',
    focus: '理解故事中的感恩精神',
    points: [
      '了解乡亲们吃水困难和挖井经过。',
      '理解“吃水不忘挖井人”的含义。',
      '学习在生活中懂得感恩帮助自己的人。'
    ]
  },
  {
    id: 's2-06',
    semester: '下册',
    unit: '课文一',
    title: '我多想去看看',
    focus: '表达对祖国和远方的向往',
    points: [
      '知道北京天安门等重要场景。',
      '感受孩子想到远方看看的愿望。',
      '学习用“我多想……”表达愿望。'
    ]
  },
  {
    id: 's2-07',
    semester: '下册',
    unit: '课文一',
    title: '一个接一个',
    focus: '感受儿童生活中的心理变化',
    points: [
      '理解“舍不得”和“又期待”的连续心理。',
      '学习口语化、生活化的表达方式。',
      '能联系自己的日常说说类似经历。'
    ]
  },
  {
    id: 's2-08',
    semester: '下册',
    unit: '课文一',
    title: '四个太阳',
    focus: '借想象表达美好心愿',
    points: [
      '理解不同颜色太阳对应不同季节愿望。',
      '感受想象作文式表达的童真。',
      '学习围绕一个主题展开简单想象。'
    ]
  },
  {
    id: 's2-09',
    semester: '下册',
    unit: '识字二',
    title: '小公鸡和小鸭子',
    focus: '理解朋友互助与角色特点',
    points: [
      '知道小公鸡和小鸭子各自擅长的本领。',
      '理解“互相帮助”的故事主题。',
      '学习从动作和对话理解人物特点。'
    ],
    characters: createRecognitionCharacters('s2-09')
  },
  {
    id: 's2-10',
    semester: '下册',
    unit: '识字二',
    title: '树和喜鹊',
    focus: '理解有伙伴才会快乐',
    points: [
      '通过“孤单”到“快乐”的变化理解主题。',
      '认识树和喜鹊数量变化带来的情感变化。',
      '学习积累“A也……B也……”句式。'
    ],
    characters: createRecognitionCharacters('s2-10')
  },
  {
    id: 's2-11',
    semester: '下册',
    unit: '识字二',
    title: '怎么都快乐',
    focus: '感受不同游戏方式都能带来快乐',
    points: [
      '知道一个人、两个人、许多人都能玩得快乐。',
      '学习并列表达和节奏朗读。',
      '树立积极参与集体活动的意识。'
    ],
    characters: createRecognitionCharacters('s2-11')
  },
  {
    id: 's2-12',
    semester: '下册',
    unit: '课文二',
    title: '静夜思',
    focus: '初步感受古诗中的思乡情',
    points: [
      '理解明月、地上霜等意象。',
      '知道诗人由月光想到故乡。',
      '练习古诗背诵和停顿节奏。'
    ]
  },
  {
    id: 's2-13',
    semester: '下册',
    unit: '课文二',
    title: '夜色',
    focus: '认识勇敢面对害怕的方法',
    points: [
      '理解“我”从怕黑到不怕黑的过程。',
      '感受家人陪伴和鼓励的作用。',
      '学习通过经历变化表现人物成长。'
    ]
  },
  {
    id: 's2-14',
    semester: '下册',
    unit: '课文二',
    title: '端午粽',
    focus: '了解传统节日与生活习俗',
    points: [
      '知道端午节吃粽子的习俗和粽子的样子。',
      '感受外婆包粽子的亲情氛围。',
      '积累描写食物颜色和味道的词语。'
    ]
  },
  {
    id: 's2-15',
    semester: '下册',
    unit: '课文二',
    title: '彩虹',
    focus: '理解孩子关爱家人的想象',
    points: [
      '知道彩虹像桥，激发联想。',
      '理解“我”想帮助爸爸妈妈的心愿。',
      '学习用提问和想象推进表达。'
    ]
  },
  {
    id: 's2-16',
    semester: '下册',
    unit: '课文三',
    title: '动物儿歌',
    focus: '在儿歌中识字与认识动物活动',
    points: [
      '认识蜻蜓、蝴蝶、蚯蚓等小动物。',
      '知道不同动物的活动特点。',
      '借助形声字和偏旁巩固识字。'
    ]
  },
  {
    id: 's2-17',
    semester: '下册',
    unit: '课文三',
    title: '古对今',
    focus: '通过对子积累反义和对应词',
    points: [
      '知道古与今、圆与方等对应关系。',
      '感受对子整齐、对称的语言特点。',
      '练习诵读并积累词语。'
    ]
  },
  {
    id: 's2-18',
    semester: '下册',
    unit: '课文三',
    title: '操场上',
    focus: '认识体育活动与动词表达',
    points: [
      '认识跑步、拍球、跳高等校园活动。',
      '学习动词和动作对应关系。',
      '培养热爱运动、积极锻炼的意识。'
    ]
  },
  {
    id: 's2-19',
    semester: '下册',
    unit: '课文三',
    title: '人之初',
    focus: '接触传统启蒙经典',
    points: [
      '初步理解“性本善、习相远”等内容。',
      '感受三字一句的节奏和韵律。',
      '知道学习和教育对成长的重要性。'
    ]
  },
  {
    id: 's2-20',
    semester: '下册',
    unit: '课文四',
    title: '池上',
    focus: '借古诗感受儿童偷采白莲的情景',
    points: [
      '理解“小娃撑小艇”的画面。',
      '体会诗中动作描写和童趣。',
      '练习借助图画理解古诗内容。'
    ]
  },
  {
    id: 's2-21',
    semester: '下册',
    unit: '课文四',
    title: '小池',
    focus: '欣赏夏日池塘的细致景象',
    points: [
      '理解泉眼、树阴、荷叶、小荷等景物。',
      '感受自然景物之间的静与动。',
      '学习古诗中观察细致、描写生动的特点。'
    ]
  },
  {
    id: 's2-22',
    semester: '下册',
    unit: '课文四',
    title: '荷叶圆圆',
    focus: '认识荷叶与小动物的关系',
    points: [
      '知道荷叶像摇篮、停机坪、歌台、凉伞。',
      '学习比喻句和拟人化表达。',
      '能根据画面进行角色化朗读。'
    ]
  },
  {
    id: 's2-23',
    semester: '下册',
    unit: '课文四',
    title: '要下雨了',
    focus: '了解下雨前动物的表现',
    points: [
      '知道燕子低飞、小鱼出水、蚂蚁搬家等现象。',
      '理解天气变化和动物行为的联系。',
      '学习通过对话推进故事发展。'
    ]
  },
  {
    id: 's2-24',
    semester: '下册',
    unit: '课文五',
    title: '文具的家',
    focus: '培养整理文具和责任意识',
    points: [
      '知道铅笔、橡皮等文具都有自己的“家”。',
      '理解乱放文具带来的麻烦。',
      '养成及时整理和爱护文具的习惯。'
    ]
  },
  {
    id: 's2-25',
    semester: '下册',
    unit: '课文五',
    title: '一分钟',
    focus: '认识珍惜时间的重要性',
    points: [
      '理解因为多睡一分钟带来的一连串迟到结果。',
      '知道时间管理对生活学习的重要性。',
      '能联系生活反思拖延带来的影响。'
    ]
  },
  {
    id: 's2-26',
    semester: '下册',
    unit: '课文五',
    title: '动物王国开大会',
    focus: '学习把通知说清楚',
    points: [
      '知道通知要说清时间、地点和事情。',
      '理解多次修改通知的原因。',
      '提升有条理表达信息的能力。'
    ]
  },
  {
    id: 's2-27',
    semester: '下册',
    unit: '课文五',
    title: '小猴子下山',
    focus: '理解做事要专注有目标',
    points: [
      '梳理小猴子看见玉米、西瓜、兔子后的行动变化。',
      '理解见一样丢一样导致最后空手而回。',
      '明白做事不能三心二意。'
    ]
  },
  {
    id: 's2-28',
    semester: '下册',
    unit: '课文六',
    title: '棉花姑娘',
    focus: '认识益虫益鸟与自然常识',
    points: [
      '知道燕子、啄木鸟、青蛙各自捉虫范围不同。',
      '理解七星瓢虫能帮助棉花姑娘治病。',
      '认识不同动物的本领和生态作用。'
    ]
  },
  {
    id: 's2-29',
    semester: '下册',
    unit: '课文六',
    title: '咕咚',
    focus: '学习遇事要弄清真相',
    points: [
      '理解小动物因误会而惊慌逃跑的经过。',
      '知道不能听风就是雨，要先观察判断。',
      '培养勇于求证、独立思考的意识。'
    ]
  },
  {
    id: 's2-30',
    semester: '下册',
    unit: '课文六',
    title: '小壁虎借尾巴',
    focus: '认识动物尾巴作用和再生特点',
    points: [
      '知道鱼、牛、燕子的尾巴各有不同作用。',
      '理解小壁虎为什么借不到尾巴。',
      '了解壁虎尾巴可再生的自然知识。'
    ]
  }
];
