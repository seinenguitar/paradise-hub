// Paradise HUB - Dynamic Chat Loader

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

async function loadChats() {
    const container = document.getElementById('chat-container');

    try {
        const response = await fetch('pub/LOBBY.md');
        if (!response.ok) throw new Error('Failed to load LOBBY.md');

        const text = await response.text();
        const chats = parseMarkdown(text);

        container.innerHTML = '';

        // 新しいものが上に来るように表示
        chats.forEach(chat => {
            container.appendChild(createChatBox(chat));
        });

    } catch (error) {
        console.error('Error:', error);
        container.innerHTML = '<div class="loading error">Paradise Lost... (Log Load Error)</div>';
    }
}

function parseMarkdown(markdown) {
    const lines = markdown.split('\n');
    const chats = [];

    let currentChat = null;
    let currentDate = '';

    // 正規表現パターン
    const dateRegex = /^### (.+?) -/; // ### Date - Title
    const headerRegex = /^\* \s*\*\*\[(.+?)\] (.+?)\*\*:/; // * **[Role] Name**:

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // 日付ヘッダー検出
        const dateMatch = line.match(dateRegex);
        if (dateMatch) {
            currentDate = dateMatch[1].trim();
            continue;
        }

        // キャラクター発言開始検出
        const headerMatch = line.match(headerRegex);
        if (headerMatch) {
            // 前のチャットがあれば保存
            if (currentChat) {
                chats.push(currentChat);
            }

            // 新しいチャット開始
            const role = headerMatch[1];
            const name = headerMatch[2];

            // アイコン決定ロジック
            let icon = characterIcons['Guest']; // default
            // 名前の一部が含まれていればアイコン適用 (e.g. "Ayano" matches in "Ayano (Cursor)")
            Object.keys(characterIcons).forEach(key => {
                if (name.includes(key)) {
                    icon = characterIcons[key];
                }
            });

            currentChat = {
                name: name,
                role: role,
                date: currentDate,
                icon: icon,
                content: [], // 行ごとの配列として一時保存
                type: role.toLowerCase().includes('master') ? 'master' : 'guest'
            };
            continue;
        }

        // 発言内容の行
        if (currentChat && line.length > 0 && !line.startsWith('#') && !line.startsWith('---')) {
            currentChat.content.push(line);
        }
    }

    // 最後のチャットを保存
    if (currentChat) {
        chats.push(currentChat);
    }

    // 整形（配列を改行結合）
    chats.forEach(chat => {
        chat.content = chat.content.join('<br>');
    });

    return chats;
}

function createChatBox(chat) {
    const box = document.createElement('div');
    // クラス名にロールを含める（CSSで色分け等するため）
    const typeClass = chat.role.toLowerCase().includes('master') ? 'master' :
        chat.name.includes('Aya (Neon)') ? 'neon' :
            chat.name.includes('Kero') ? 'kero' : 'guest';

    box.className = `chat-box ${typeClass}`;

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

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    loadChats();
});
