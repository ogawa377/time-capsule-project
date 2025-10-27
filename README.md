# タイムカプセルプロジェクトへようこそ！

この「タイムカプセルプロジェクト」は、みんなの紹介ページが集まった、特別なウェブサイトを作るためのものです。
クラス全員のアイコンが並んでいて、クリックするとその人の詳しいページが見れるようになっています。

## このプロジェクトの中身

プロジェクト（作品）は、いくつかの種類のファイルで出来ています。

- **html/**
  - `index.html`: 最初のページ（みんなのアイコンが並んでいるページ）の入り口です。
  - `detail.html`: アイコンをクリックした後に表示される、詳しい自己紹介のページです。
- **css/**
  - `styles.css`: ページの見た目（色や形、文字の大きさなど）を決めるファイルです。
- **js/**
  - `main.js`: 最初のページで、アイコンがクリックされたときに、その人の詳しいページに移動させるための命令が書かれています。
  - `detail.js`: 詳しいページで、特別な動きをさせるための命令が書かれています。

## 使い方

1.  **プロジェクトをコピーする**: まず、このプロジェクトのファイル一式を自分のパソコンにコピーします。
2.  **ブラウザで開く**: `html/index.html` ファイルを、ChromeやSafariなどのブラウザ（インターネットを見るソフト）で開きます。
3.  **アイコンをクリック**: みんなのアイコンが表示されるので、クリックするとその人の詳しいページに移動します。

---

# 君だけの自己紹介ページを作ろう！

ここからは、君だけの自己紹介ページを作る方法を説明します。

## 1. 自分のフォルダ（ファイル入れ）を作ろう

- `html/sts/` という場所の中に、自分の名前で新しい**フォルダ**（書類をまとめるファイル入れ）を作ります。
- フォルダの名前は、例えば「日本 太郎」君なら `taro.n` のように、「下の名前.名字の頭文字」にしましょう。
  - 例： `html/sts/taro.n/`

## 2. HTMLファイル（ページの設計図）を作ろう

- 作った自分のフォルダの中に、`detail.html` という名前で新しい**ファイル**（1枚の書類）を作ります。
- `html/sts/{ユーザー名}/detail.html` の中身をコピーして、自分の `detail.html` に貼り付けると、簡単に始められます。

### HTMLの基本の形

**HTML**（ホームページを作るための言葉）は、ページの骨組みを作ります。下の例を参考にして、自分の情報を書き換えてみましょう。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>日本 太郎のページ</title>
    <!-- CSSファイルを読み込んで、見た目をきれいにする -->
    <link rel="stylesheet" href="../../../css/styles.css">
</head>
<body>
    <!-- ヘッダー：ページのタイトル -->
    <header class="detail-header">
        <h1 class="detail-title">日本 太郎のページ</h1>
    </header>

    <!-- メインコンテンツ：自己紹介などを書く場所 -->
    <main class="detail-main">
        <!-- プロフィール -->
        <section class="profile-section">
            <!-- 画像の場所（パス）を指定して、自分のアイコンを表示 -->
            <img src="（自分のアイコン画像のパス）" alt="プロフィールアイコン" class="profile-icon">
            <h2 class="profile-name">日本 太郎</h2>
            <p class="profile-comment">（一言コメント）</p>
        </section>

        <!-- 好きなことなどを3つのカードで紹介 -->
        <div class="content-cards">
            <div class="card">
                <h3>（タイトル1）</h3>
                <p>（内容1）</p>
            </div>
            <div class="card">
                <h3>（タイトル2）</h3>
                <p>（内容2）</p>
            </div>
            <div class="card">
                <h3>（タイトル3）</h3>
                <p>（内容3）</p>
            </div>
        </div>

        <!-- 戻るボタン -->
        <div class="actions">
            <button class="btn-back" onclick="goBack()">戻る</button>
        </div>
    </main>

    <!-- JavaScriptで動きをつける -->
    <script>
        // goBackという名前の命令（関数）
        function goBack() {
            // 一つ前のページに戻る
            window.history.back();
        }
    </script>
</body>
</html>
```

## 3. CSSで見た目をかっこよくしよう

**CSS**（見た目をデザインするための言葉）を使うと、ページがおしゃれになります。
`styles.css` には、あらかじめ便利なデザインが用意されています。

HTMLの `class="..."` は、CSSでデザインの種類を分けるための名前です。これを色々付け替えて、見た目がどう変わるか試してみましょう。

- `.detail-header`: ページのタイトル部分
- `.profile-icon`: 丸いプロフィール画像
- `.profile-name`: プロフィール名
- `.card`: 自己紹介などを書くカード
- `.btn-back`: 戻るボタン

## 4. JavaScriptでページに動きをつけよう

**JavaScript**（ページに動きをつけるための言葉）を使うと、**アニメーション**（絵が動くように見せるもの）などが作れます。

### 戻るボタンの仕組み

`detail.html` の下の方にある `<script>` タグの中には、`goBack()` という**関数**（命令をまとめたもの）が書かれています。これは、「戻るボタンが押されたときに、前のページに戻る」という命令です。

```javascript
function goBack() {
    window.history.back();
}
```

### 自分だけのアニメーション

君だけの特別なアニメーションも作れます。
`js/users/taro.n/fall-animation.js` のようなファイルを作って、面白い動きを追加してみましょう。

作ったJavaScriptファイルは、`detail.html` の `</body>` タグのすぐ上で読み込むのを忘れないでね。

```html
    <script src="../../../js/users/taro.n/fall-animation.js"></script>
</body>
```