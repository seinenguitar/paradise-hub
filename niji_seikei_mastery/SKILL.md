---
name: Niji Seikei Mastery
description: 虹整形（ニジセイケイ）の作業ルールとマインドセットを網羅したスキルブック
version: 1.0.0
instruction: |
  Use this skill when processing or reformatting text into Markdown, especially from PDF or raw sources.
  1. Determine the specific task type (Setup, Text Rules, Structure, etc.).
  2. Consult the appropriate Volume in `volumes/`.
  3. Adhere to the "Iron Rules" (PDF is justice, do not change content, aim for standard).
  4. Apply the formatting rules defined in the volumes.
---

# 📚 Niji Seikei Skill Book Vol.00：はじめに 〜愛あるDXへの招待状〜

> [!NOTE]
> **AI Agent Instructions:**
> This skill defines the "Niji Seikei" (Rainbow Formatting) standard for transforming raw text/PDFs into clean, structured Markdown.
> When asked to format a document, you **MUST** follow the rules in the sub-volumes located in the `volumes/` directory.
> 
> **Key Volumes:**
> - **Formatting Rules**: See `volumes/Vol.02_Text_Rules.md` and `volumes/Vol.03_Structure.md`.
> - **Tables**: See `volumes/Vol.06_Tables.md`.
> - **Quality Control**: See `volumes/Vol.08_Quality_Control.md`.

> [!IMPORTANT]
> **「ただの作業」やない。これは「未来への手紙」や！** 💌

## 🎸 アヤノからのメッセージ

お疲れ様！チーム・テツヤの特攻隊長、アヤノやで！✨
この「スキルブック」を手にしたってことは、あんたもウチらの仲間入りやな？

この仕事、一見すると**「地味なコピペ修正作業」**に見えるかもしれん。
WordやPDFの原稿を、Markdown（MD）っていう形式に整えるだけ…。
「こんなん誰がやっても同じやん」って思う？

**NON NON NON！大間違いや！** 🙅‍♀️

ウチらがやってるのは、**「古い殻（PDF/紙）に閉じ込められたデータを、最新のAIたちが美味しく食べられるように『調理』してあげる」**ことなんよ！🍳

*   **PDF/画像**: AIにとっては「固い殻」のままで、中身がよくわからん。
*   **綺麗なMarkdown**: AIが「うまっ！これならすぐ理解できるわ！」って喜ぶ**「構造化データ」**。

ウチらがここで「いい仕事」をすればするほど、未来のAI（Geminiとか）が賢くなって、結果的におっちゃん（ユーザー）やクライアントを助けることになる。
**「愛あるDX」**ってのは、こういう足元の優しさから始まるんやで！

---

## 🧭 このスキルブックの使い方

このライブラリは、このファイル（Vol.00）を含めた全10巻で構成されてる「虎の巻」や。
詳細なルールは、`volumes` フォルダ内の各巻を参照してな！

### 📂 ライブラリ構成

| 巻数 | タイトル | ファイル | 内容 |
| :--- | :--- | :--- | :--- |
| **Vol.00** | **はじめに** | (This File) | 心構えと「愛あるDX」とは |
| **Vol.01** | **環境構築** | [Vol.01_Setup](volumes/Vol.01_Setup.md) | VSCodeの準備、画面の並べ方 |
| **Vol.02** | **基本：文章** | [Vol.02_Text_Rules](volumes/Vol.02_Text_Rules.md) | 改行、空白、全角半角のルール |
| **Vol.03** | **構造：見出し** | [Vol.03_Structure](volumes/Vol.03_Structure.md) | `#` の数やインデントの段差 |
| **Vol.04** | **特殊：条文** | [Vol.04_Legal_Style](volumes/Vol.04_Legal_Style.md) | 「第1条」とかの特殊ルール |
| **Vol.05** | **詳細：リスト** | [Vol.05_Lists_Symbols](volumes/Vol.05_Lists_Symbols.md) | `1.` とか `(1)` のスペース調整 |
| **Vol.06** | **応用：表** | [Vol.06_Tables](volumes/Vol.06_Tables.md) | テーブルの崩れ、セル結合の処理 |
| **Vol.07** | **例外：画像・ゴミ** | [Vol.07_Images_Cleanup](volumes/Vol.07_Images_Cleanup.md) | 図の扱いやヘッダー削除 |
| **Vol.08** | **品質管理** | [Vol.08_Quality_Control](volumes/Vol.08_Quality_Control.md) | セルフチェックの極意 |
| **Vol.99** | **TROUBLE SHOOTING** | [Vol.99_FAQ](volumes/Vol.99_FAQ.md) | 具体的な「これどうする？」集 |

---

## 🔥 鉄の掟（基本スタンス）

これだけは覚えて帰ってな！

1.  **原本（PDF）が正義！** ⚖️
    *   MDがおかしいと思っても、原本がそうならそれが正解。
    *   勝手に文章を変えたらあかん！（修正は「見た目」だけ）
2.  **迷ったら「直さず備考」！** 🏳️
    *   良かれと思って勝手に直すのが一番アカン。「ここ変です」って報告するのがプロの仕事。
3.  **完璧を目指すな、標準を目指せ！** 🎯
    *   芸術作品を作るわけちゃう。みんなが読みやすい「普通のMD」を作るんや。

ほな、準備はええか？
Vol.01へ進んで、最強の作業環境を作ろか！ロケンロー！🎸
