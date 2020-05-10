document.addEventListener("DOMContentLoaded", function() {
    let apContainer = document.createElement("div");
    apContainer.id = "aplayer";
    document.body.append(apContainer);
    const ap = new APlayer({
      container: document.getElementById("aplayer"),
      fixed: true,
      audio: [
        {
          name: "盛夏的果实",
          artist: "阿虾",
          url: "https://music.163.com/song/media/outer/url?id=1354291617.mp3",
          cover: "https://p2.music.126.net/31_EEH2M71zU8oREcwcdCQ==/109951163760803424.jpg"
        },
        {
          name: "麻雀",
          artist: "李荣浩",
          url: "https://music.163.com/song/media/outer/url?id=1407551413.mp3",
          cover: "https://p1.music.126.net/TzlSVBiNtpRD2b7MT2Hi-w==/109951164527590793.jpg"
        },
        {
          name: "大田後生仔",
          artist: "王玉萌",
          url: "https://music.163.com/song/media/outer/url?id=1396602869.mp3",
          cover: "https://p1.music.126.net/hITz5arBFLYC4_3D1gu2qw==/109951164423988553.jpg"
        },
        {
          name: "盗将行",
          artist: "花粥 / 马雨阳",
          url: "https://music.163.com/song/media/outer/url?id=574566207.mp3",
          cover: "https://p2.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg"
        },
        {
          name: "纸短情长",
          artist: "烟把儿",
          url: "https://music.163.com/song/media/outer/url?id=516076896.mp3",
          cover: "https://p1.music.126.net/tbZaE-DjL_BkemynFlL1cQ==/109951163052534918.jpg"
        },
        {
          name: "起风了",
          artist: "买辣椒也用券",
          url: "https://music.163.com/song/media/outer/url?id=1330348068.mp3",
          cover: "https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg"
        },
        {
          name: "余香",
          artist: "张小九",
          url: "https://music.163.com/song/media/outer/url?id=487885426.mp3",
          cover: "https://p2.music.126.net/4y7L-7u0MYecYqjY_k8AYg==/109951162962767182.jpg"
        },
        {
          name: "借",
          artist: "毛不易",
          url: "https://music.163.com/song/media/outer/url?id=569214250.mp3",
          cover: "https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg"
        },
        {
          name: "这一生关于你的风景",
          artist: "隔壁老樊",
          url: "https://music.163.com/song/media/outer/url?id=1383927243.mp3",
          cover: "https://p1.music.126.net/72pkxsrTN_zUscdzMk5mMA==/109951164289743850.jpg"
        },
        {
          name: "你是人间四月天",
          artist: "解忧邵帅天",
          url: "https://music.163.com/song/media/outer/url?id=1344897943.mp3",
          cover: "https://p2.music.126.net/kQJQD58WkmQneTneOYe22A==/109951164252455813.jpg"
        },
        {
          name: "四块五",
          artist: "隔壁老樊",
          url: "https://music.163.com/song/media/outer/url?id=1365221826.mp3",
          cover: "https://p2.music.126.net/gNbAlXamNjhR2j3aOukNhg==/109951164232796511.jpg"
        },
        {
          name: "达拉崩吧 (Live)",
          artist: "周深",
          url: "https://music.163.com/song/media/outer/url?id=1434062381.mp3",
          cover: "https://p2.music.126.net/P11c_X9qdAMT7yXYIMahQw==/109951164840856331.jpg"
        },
        {
          name: "霜雪千年（Cover 洛天依 / 乐正绫）",
          artist: "双笙 / 封茗囧菌",
          url: "https://music.163.com/song/media/outer/url?id=409650851.mp3",
          cover: "https://p1.music.126.net/MlJ3IKOYOGJyrHtCTuLrqg==/18198016951567518.jpg"
        },
        {
          name: "一百万个可能",
          artist: "季彦霖生",
          url: "https://music.163.com/song/media/outer/url?id=1323509458.mp3",
          cover: "https://p1.music.126.net/HdoiUbINM6Zltwthgux4ZA==/109951163663677685.jpg"
        },
        {
          name: "广东爱情故事河",
          artist: "广东雨神生",
          url: "https://music.163.com/song/media/outer/url?id=545413103.mp3",
          cover: "https://p1.music.126.net/gjvguk9I-QwuyWFjQHM9SA==/109951163189947600.jpg"
        },
        {
          name: "相爱不能见",
          artist: "魏晨生",
          url: "https://music.163.com/song/media/outer/url?id=30352679.mp3",
          cover: "https://p2.music.126.net/KEqgXOcmx5ZycebGsLOapQ==/7846114975939989.jpg"
        },
        {
          name: "大天蓬（抖音女版）（清水er）（翻自 李袁杰）",
          artist: "抖音热门翻唱",
          url: "https://music.163.com/song/media/outer/url?id=1431611734.mp3",
          cover: "https://p2.music.126.net/WKVI1neKDc6zrSv_6GP2kw==/109951164811633376.jpg"
        },
        {
          name: "灭小山河",
          artist: "国风堂 / 司南",
          url: "https://music.163.com/song/media/outer/url?id=1412559986.mp3",
          cover: "https://p2.music.126.net/cZolbvntU90ECMSR_lVF9Q==/109951164583584578.jpg"
        },
        {
          name: "红黑",
          artist: "小星星Aurora",
          url: "https://music.163.com/song/media/outer/url?id=1378992201.mp3",
          cover: "https://p2.music.126.net/1ptq1PGigEuUf1fY8CNazA==/109951164225342779.jpg"
        },
        {
          name: "梅香如故（电视剧《如懿传》片尾曲）（翻自 周深）",
          artist: "云眠 / Ryo月笹舟",
          url: "https://music.163.com/song/media/outer/url?id=1428793259.mp3",
          cover: "https://p2.music.126.net/E00099ETPesAfVWLLGWyxw==/109951164775946886.jpg"
        },
      ]
    });
  });