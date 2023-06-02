const btn = document.querySelector("#btn");
const data = {
    test1: "test1",
    test2: "test2",
    test3: "test3",
}
btn.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(data, null, '  ')], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
              // ダウンロード用リンクを生成
              const link = document.createElement('a');
              link.href = url;
              link.download = 'data.json';
    
              // リンクをクリックしてファイルをダウンロード
              link.click();
    
              // リンクを解放する
              URL.revokeObjectURL(url);
});
