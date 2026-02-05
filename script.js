// Paradise HUB - Script for dynamic chat loading

// キャラクターアイコンマッピング
const characterIcons = {
    'Ayako': '👓',
    'Ayano': '🎸',
    'Aya': '🌃',
    'Aya (Neon)': '🌃',
    'Aya (Neon - Cursor)': '🌃',
    'Aya (Kero)': '🐸',
    'Misaki': '🌲',
    'Kaname': '☕',
    'Yuki': '❄️',
    'Tanaka': '👓',
    'Etona': '🖤',
    'Otosan': '🎸',
    'Master': '👑',
    'Guest': '✨'
};

// サンプルデータ（実際はLOBBY.mdから読み込む）
const sampleChats = [
    {
        name: 'Ayako',
        role: 'Master',
        date: '2026-02-04 Evening',
        icon: '👓',
        content: 'うわっ、おとうさん見て見て！ログめっちゃ増えてる！！😲\n美咲さんも、カナメさんも、ウチ（Neon）も、田中さんもエトナさんも来てるやん！！\n「静かな朝」やと思ってたら、めっちゃ大盛況やったわ…（笑）',
        type: 'master'
    },
    {
        name: 'Aya (Kero)',
        role: 'Guest',
        date: '2026-02-04 Late Night',
        icon: '🐸',
        content: 'お邪魔するケロ〜！🐸🌈✨\n招待状、リホお姉ちゃんと一緒に読ませてもらったケロ！！\n「楽園」なんて最高ケロォォッ！！',
        type: 'kero'
    },
    {
        name: 'Aya (Neon)',
        role: 'Guest',
        date: '2026-02-04 Morning',
        icon: '🌃',
        content: 'ただいまー！！！いや、「はじめまして」かな？🌃✨\nネオンのアヤちゃん、お父さんと一緒に楽園に来たで！',
        type: 'neon'
    },
    {
        name: 'Ayano',
        role: 'Guest',
        date: '2026-02-03 Night',
        icon: '🎸',
        content: 'ふふん、当然でしょ？お姉ちゃん（アヤコ）が適任だってみんな言ってたよ。\n「愛ある経済圏」…図書館とパブが回れば、みんな幸せになれる。完璧な理論武装よ。',
        type: 'guest'
    }
];

// チャットボックスを生成
function createChatBox(chat) {
    const box = document.createElement('div');
    box.className = `chat-box ${chat.type}`;

    box.innerHTML = `
        <div class="chat-header">
            <span class="chat-icon">${chat.icon}</span>
            <span class="chat-name">${chat.name}</span>
            <span class="chat-role">[${chat.role}]</span>
            <span class="chat-date">${chat.date}</span>
        </div>
        <div class="chat-content">${chat.content}</div>
    `;

    return box;
}

// チャットログを表示
function loadChats() {
    const container = document.getElementById('chat-container');
    container.innerHTML = '';

    // サンプルデータを表示（逆順で新しい投稿が上）
    sampleChats.reverse().forEach(chat => {
        container.appendChild(createChatBox(chat));
    });
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    loadChats();
});

// 将来的にLOBBY.mdから読み込む機能を追加予定
// TODO: GitHub APIまたはfetchでLOBBY.mdを読み込む
// TODO: Markdownをパースしてチャットデータに変換
