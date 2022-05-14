import { defineStore, mapActions } from "pinia";

export const useImgContent = defineStore("imgContent", {
  state() {
    return {
      imgs: [
        {
          id: 8,
          imgName: "post-8",
          mainTitle: "sample title 8",
          imgContent: {
            imgContent1: "Content 1",
            imgContent2: "Content 2",
            imgContent3: "Content 3",
            imgContent4: "Content 4",
            imgContent5: "Content 5",
          },
        },
        {
          id: 7,
          imgName: "post-7",
          mainTitle: "sample title 7",
          imgContent: {
            imgContent1: "Content 1",
            imgContent2: "Content 2",
            imgContent3: "Content 3",
            imgContent4: "Content 4",
            imgContent5: "Content 5",
          },
        },
        {
          id: 6,
          imgName: "post-6",
          mainTitle: "sample title 6",
          imgContent: {
            imgContent1: "Content 1",
            imgContent2: "Content 2",
            imgContent3: "Content 3",
            imgContent4: "Content 4",
            imgContent5: "Content 5",
          },
        },
        {
          id: 5,
          imgName: "post-5",
          mainTitle: "sample title 5",
          imgContent: {
            imgContent1: "Content 1",
            imgContent2: "Content 2",
            imgContent3: "Content 3",
            imgContent4: "Content 4",
            imgContent5: "Content 5",
          },
        },
        {
          id: 4,
          imgName: "post-4",
          mainTitle: "sample title 4",
          imgContent: {
            imgContent1: "Content 1",
            imgContent2: "Content 2",
            imgContent3: "Content 3",
            imgContent4: "Content 4",
            imgContent5: "Content 5",
          },
        },
        {
          id: 3,
          imgName: "post-3",
          mainTitle: "sample title 3",
          imgContent: {
            imgContent1: "Content 1",
            imgContent2: "Content 2",
            imgContent3: "Content 3",
            imgContent4: "Content 4",
            imgContent5: "Content 5",
          },
        },
        {
          id: 2,
          imgName: "post-2",
          mainTitle: "sample title 2",
          imgContent: {
            imgContent1: "Content 1",
            imgContent2: "Content 2",
            imgContent3: "Content 3",
            imgContent4: "Content 4",
            imgContent5: "Content 5",
          },
        },
        {
          id: 1,
          imgName: "post-1",
          mainTitle: "篇一 – 中国 – 北京 – 故宫",
          imgContent: {
            imgContent1: "中国明清两代",
            imgContent2:
              "旧称紫禁城，是皇家宫殿，占地面积约72万平方米，位于北京中轴线的中心。于明成祖永乐4年(1406年) 以南京故宫为蓝本营建开始建设，永乐18年(1420年)建成，成为明清两朝24位皇帝的皇宫。是世界上现存规模最大、保存最完整的木质结构古建筑之一，是中国AAAAA级旅游景区；1961年被列为第一批全国重点文物保护单位；1987年被列为世界文化遗产",
            imgContent3:
              "南北长961米，东西宽753米，四面围有高10米的城墙，城外有宽52米的护城河。紫禁城有4座城门，南面为午门，北面为神武门，东面为东华门，西面为西华门。城墙的四角，各有一座风姿绰约的角楼，民间有9梁18柱72条脊之说，形容其结构的复杂。内部分为外朝和内廷两部分。以3大殿为中心，有大小宫殿70多座，房屋9千余间。外朝的中心为太和殿、中和殿、保和殿，统称三大殿，是国家举行大典礼的地方。三大殿左右两翼辅以文华殿、武英殿两组建筑。内廷的中心是乾清宫、交泰殿、坤宁宫，统称后三宫，是皇帝和皇后居住的正宫。其后为御花园。后三宫两侧排列着东、西六宫，是后妃们居住休息的地方。东六宫东侧是天穹宝殿等佛堂建筑，西六宫西侧是中正殿等佛堂建筑。外朝、内廷之外还有外东路、外西路两部分建筑",
            imgContent4: [
              {
                subTitle: `紫微宫与紫禁城\n`,
                paragraph: `中国古代讲究“天人合一”的规划理念，用天上的星辰与都城规划相对应，以突出政权的合法性和皇权的至高性。天帝居住在紫微宫，而皇帝自诩为受命于天的“天子”，其居所应象征紫微宫以与天帝对应，《后汉书》载“天有紫微宫，是上帝之所居也。王者立宫，象而为之”。紫微、紫垣、紫宫等便成了帝王宫殿的代称。由于封建皇宫在古代属于禁地，常人不能进入，故称为“紫禁”。明朝初期同外禁垣一起统称“皇城”。大约明朝中晚期，与外禁垣区分开来，即宫城叫“紫禁城”，外禁垣为“皇城”\n`,
              },
              {
                subTitle: `皇帝寝宫\n`,
                paragraph: `在明朝，乾清宫是皇帝的主要寝宫，是主要政治活动场所。自永乐皇帝朱棣至崇祯皇帝朱由检，共有14位皇帝曾在此居住。因宫殿高大、空间过敞，皇帝在此居住时曾分隔成数室。明代乾清宫有暖阁9间，分上下两层，共置床27张，后妃们得以进御。由于室多床多，皇帝每晚就寝之处很少有人知道，以防不测。皇帝虽居住在迷楼式的宫殿内，且防范森严，但仍发生“壬寅宫变”。变后，世宗移居西苑，不敢回乾清宫居住。万历帝的郑贵妃为争皇太后闹出的“红丸案”、泰昌妃李选侍争做皇后而移居仁寿殿的“移宫案”，都发生在乾清宫。明代乾清宫也曾作为皇帝守丧之处\n`,
              },
              {
                subTitle: `迁移寝宫\n`,
                paragraph: `雍正帝即位后移居养心殿。养心殿位于紫禁城内廷、乾清宫西侧，始建于明朝嘉靖年间，原本并不是皇帝的寝宫。清康熙时期，设置“养心殿造办处”负责为皇室造办宫廷活计的诸多作坊。康熙皇帝去世后，雍正皇帝并没有搬到其父寝宫乾清宫，而将西侧遵义门内暂时用作守孝之“苫次”的养心殿辟为皇帝寝宫。从此，养心殿开始成为皇帝居住和清朝朝政的主要处理地点，后设立的军机处办公地点也在养心殿附近。乾隆帝即位，大规模扩建和改建养心殿殿区，逐步形成一定的规制。雍正帝后，乾隆、嘉庆、道光、咸丰、同治、光绪、宣统八位皇帝都在此居住。一直到宣统帝被赶出紫禁城\n`,
              },
              {
                subTitle: `曾是“国中之国”的紫禁城\n`,
                paragraph: `辛亥革命后，紫禁城宫殿本应全归国有，但那时拟定的《清室优待条件》，逊帝爱新觉罗·溥仪被允许“暂居宫禁”，即“后寝”部分。皇帝溥仪以及原来的皇室大臣等仍安居在皇宫里。帝制虽被废除，一切如旧：侍卫人等照常留用；王公世爵仍其旧”等条款；溥仪仍发布“上谕”，用宣统年号纪年；遗老遗少仍行跪拜大礼；宫内还保有内务府、宗人府和慎刑司等机构；故臣赠谥，不改衣冠；触犯王法者由慎刑司处治。1917年7月，徐州军阀张勋拥立溥仪复辟。段祺瑞命令北京南苑航空学校师生加入战斗，用飞机轰炸紫禁城。在紫禁城内投下三枚小炸弹。飞机超低空飞行(距紫禁城的高度只300米)炸了紫禁城东六宫当中的延禧宫，造成当时建筑轻度损坏。这被认为是东亚第一次空袭轰炸。1924年，冯玉祥发动“北京政变”，将溥仪逐出宫禁，并成立“清室善后委员会”接管故宫。1925年9月制订《故宫博物院临时组织大纲》，设立临时董事会协议全院重要事物、设立临时理事会执行全院事物。1925年10月10日宣布故宫博物院正式成立，对外开放。1925年后紫禁城才被称为“故宫”。随着清王朝的没落(尤其是1949年前的38年中)故宫建筑日渐破败，有多处宫殿群倒塌，垃圾如山\n`,
              },
              {
                subTitle: `门禁制度\n`,
                paragraph: `明代夜间，紫禁城各城门采用传铃巡更制度。在紫禁城城垣和护城河之间建看守铺房40座。名为红铺，每铺驻10人。设了41个铜铃，放在阙右门。每晚从阙右门开始每隔一段时间传出一个铃，最后全部传回阙右门。清代入夜后四门都会上锁，钥匙由护军校送到景运门司钥长保管，第二天送回。传铃制则改为传筹，每晚传红色木棒八根。四个城门的守卫任务交给八旗的满族护军担当，乾隆年间四门又设章京各二人。嘉庆18年癸酉之变后，四门又增设火器营官兵400人守卫。对无故闯入者施以重刑\n`,
              },
            ],
            imgContent5: "资料来源百度维基",
          },
        },
      ],
    };
  },
  actions: {
    getContent(id) {
      const imgObj = this.imgs.filter((img) => {
        return img.id === id;
      });
      return imgObj[0].imgContent;
    },
    getTitle(id) {
      const imgObj = this.imgs.filter((img) => {
        return img.id === id;
      });
      return imgObj[0].mainTitle;
    },
  },
});
