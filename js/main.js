// main.js

document.addEventListener("DOMContentLoaded", function () {
  /// Userデータ配列
  const students = [
    {
      id: 1,
      name: "ドナルド・トランプ",
      comment: "アメリカを取り戻す",
      icon: "../assets/images/user_icon/dnald/ttanp1.jpeg",
    },
    {
      id: 2,
      name: "佐藤花子",
      comment: "プログラミングが大好き",
      icon: "icons/student2.svg",
    },
    {
      id: 3,
      name: "石破しげる",
      comment: "公約は守るのが得意です。",
      icon: "icons/student3.svg",
    },
    {
      id: 4,
      name: "田中一郎",
      comment: "スポーツが得意です。",
      icon: "icons/student4.svg",
    },
    {
      id: 5,
      name: "鈴木花子",
      comment: "読書が好きです。",
      icon: "icons/student5.svg",
    },
    {
      id: 6,
      name: "高橋次郎",
      comment: "音楽が趣味です。",
      icon: "icons/student6.svg",
    },
    {
      id: 7,
      name: "山本浩司",
      comment: "映画鑑賞が好き",
      icon: "icons/student7.svg",
    },
    {
      id: 8,
      name: "中村優子",
      comment: "旅行が趣味です。",
      icon: "icons/student8.svg",
    },
    {
      id: 9,
      name: "小林大輔",
      comment: "料理が得意です。",
      icon: "icons/student9.svg",
    },
    {
      id: 10,
      name: "加藤恵美",
      comment: "ダンスが好きです。",
      icon: "icons/student10.svg",
    },
    {
      id: 11,
      name: "吉田直樹",
      comment: "ジョギングをしています。",
      icon: "icons/student11.svg",
    },
    {
      id: 12,
      name: "山田花子",
      comment: "イラストを描くのが好き",
      icon: "icons/student12.svg",
    },
    {
      id: 13,
      name: "佐藤次郎",
      comment: "プログラミングを勉強中",
      icon: "icons/student13.svg",
    },
    {
      id: 14,
      name: "鈴木一郎",
      comment: "サッカーが得意です。",
      icon: "icons/student14.svg",
    },
    {
      id: 15,
      name: "高橋花子",
      comment: "ピアノを弾きます。",
      icon: "icons/student15.svg",
    },
    {
      id: 16,
      name: "田中次郎",
      comment: "テニスが好きです。",
      icon: "icons/student16.svg",
    },
    {
      id: 17,
      name: "山本花子",
      comment: "バスケットボールが得意",
      icon: "icons/student17.svg",
    },
    {
      id: 18,
      name: "中村次郎",
      comment: "アニメが好きです。",
      icon: "icons/student18.svg",
    },
    {
      id: 19,
      name: "小林花子",
      comment: "漫画を描いています。",
      icon: "icons/student19.svg",
    },
    {
      id: 20,
      name: "加藤次郎",
      comment: "写真を撮るのが趣味",
      icon: "icons/student20.svg",
    },
    {
      id: 21,
      name: "吉田花子",
      comment: "ハイキングが好きです。",
      icon: "icons/student21.svg",
    },
    {
      id: 22,
      name: "山田次郎",
      comment: "プログラミングコンテストに参加",
      icon: "icons/student22.svg",
    },
    {
      id: 23,
      name: "佐藤花子",
      comment: "英会話を勉強中",
      icon: "icons/student23.svg",
    },
    {
      id: 24,
      name: "鈴木次郎",
      comment: "ボランティア活動に参加",
      icon: "icons/student24.svg",
    },
    {
      id: 25,
      name: "高橋花子",
      comment: "料理教室に通っています。",
      icon: "icons/student25.svg",
    },
    {
      id: 26,
      name: "田中次郎",
      comment: "プログラミングが得意です。",
      icon: "icons/student26.svg",
    },
    {
      id: 27,
      name: "山本花子",
      comment: "絵を描くのが好き",
      icon: "icons/student27.svg",
    },
    {
      id: 28,
      name: "中村次郎",
      comment: "音楽を作るのが趣味",
      icon: "icons/student28.svg",
    },
    {
      id: 29,
      name: "小林花子",
      comment: "ダンスを習っています。",
      icon: "icons/student29.svg",
    },
    {
      id: 30,
      name: "加藤次郎",
      comment: "サッカー部に所属",
      icon: "icons/student30.svg",
    },
    {
      id: 31,
      name: "吉田花子",
      comment: "テニスをしています。",
      icon: "icons/student31.svg",
    },
    {
      id: 32,
      name: "山田次郎",
      comment: "バスケットボール部",
      icon: "icons/student32.svg",
    },
    {
      id: 33,
      name: "佐藤花子",
      comment: "アニメーションを勉強中",
      icon: "icons/student33.svg",
    },
    {
      id: 34,
      name: "鈴木次郎",
      comment: "写真部に所属",
      icon: "icons/student34.svg",
    },
    {
      id: 35,
      name: "高橋花子",
      comment: "ハイキングが趣味",
      icon: "icons/student35.svg",
    },
    {
      id: 36,
      name: "田中次郎",
      comment: "プログラミング講座を受講",
      icon: "icons/student36.svg",
    },
    {
      id: 37,
      name: "山本花子",
      comment: "イラストを勉強中",
      icon: "icons/student37.svg",
    },
    {
      id: 38,
      name: "中村次郎",
      comment: "音楽理論を学んでいます。",
      icon: "icons/student38.svg",
    },
    {
      id: 39,
      name: "小林花子",
      comment: "ダンスコンテストに出場",
      icon: "icons/student39.svg",
    },
    {
      id: 40,
      name: "佐々木大輔",
      comment: "未来の科学者を目指しています。",
      icon: "icons/student40.svg",
    },
  ];

  //   // 生徒リスト表示コンテナ
  const studentContainer = document.getElementById("student-container");
  //  // 生徒カードを生成して表示

  //   繰り返し処理を実装しています
  students.forEach((student) => {
    const studentCard = document.createElement("div");
    studentCard.classList.add("obj-card");
    studentCard.style.backgroundImage = `url('${student.icon}')`;
    studentCard.innerHTML = `
      <div class="card-content">
        <h3 class="obj-name">${student.name}</h3>
        <p class="obj-comment">${student.comment}</p>
      </div>
    `;

    studentCard.addEventListener("click", () => {
      // 各ユーザーのフォルダに遷移
      const userFolder = encodeURIComponent(student.name.replace(/\s+/g, "_")); // スペース:アンダースコアに変換
      window.location.href = `/html/sts/${userFolder}/detail.html`;
    });

    studentContainer.appendChild(studentCard);
  });
});
