// // detail.js

document.addEventListener("DOMContentLoaded", function () {
  // URLからクエリパラメータを取得
  const urlParams = new URLSearchParams(window.location.search);
  const studentId = urlParams.get("id");

  // 生徒のデータを仮定した配列
  const students = [
    {
      id: "1",
      name: "山田太郎",
      comment: "プログラミングが大好き！",
      icon: "icons/student1.svg",
    },
    {
      id: "2",
      name: "佐藤花子",
      comment: "絵を描くのが得意です。",
      icon: "icons/student2.svg",
    },
    {
      id: "3",
      name: "石破しげる",
      comment: "公約は守るのが得意です。",

      // 追加の生徒データ...
    },
  ];

  // 選択された生徒の情報を取得
  const student = students.find((s) => s.id === studentId);

  if (student) {
    // アイコンと詳細情報を表示
    document.getElementById("student-icon").src = student.icon;
    document.getElementById("student-name").textContent = student.name;
    document.getElementById("student-comment").textContent = student.comment;
  } else {
    document.getElementById("student-name").textContent =
      "生徒が見つかりませんでした。";
    document.getElementById("student-comment").textContent = "";
  }
});
//     document.getElementById("student-name").textContent =
//       "生徒が見つかりませんでした。";
//   }
// });
