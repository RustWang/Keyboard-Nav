!function () {
    //1. 初始化数据
    var startHash = init();
    var keys = startHash.keys;
    var hash = startHash.hash;

    //2.生成键盘
	//遍历 keys，生成kbd标签
    generaetKeyboard(keys, hash);

    //3. 监听用户动作
    listenTiUser(hash);

  
    


    // 工具函数
    function getFromLocalStorage(name) {
        return JSON.parse(localStorage.getItem(name) || 'null');
    }

    function tag(tagename) {
        return document.createElement(tagename);
    }

    function createSpan(textContent) {
        var span = tag("span");
        span.textContent = textContent;
        span.className = "text";
        return span;
    }

    function createButton(id) {
        var button = tag("button");
        button.textContent = "编辑";
        button.id = id;
        button.addEventListener('click', function (jfglkhj) {
            var key = jfglkhj.target.id;
            var x = prompt('给我一个网址');

            hash[key] = x; // hash 变更

            var button2 = jfglkhj.target;
            var img2 = button2.previousSibling;

            img2.src = 'http://' + x + '/favicon.ico';
            img2.onerror = function (ev) {
                ev.target.src = './点.png';
            };      
            localStorage.setItem("zzz", JSON.stringify(hash));
            event.stopPropagation();
        })
        return button;
    }

    function createImg(domain) {
        var img = tag("img");
        if (domain) {
            img.src = 'http://' + domain + '/favicon.ico';
            
        } else {
            img.src = './点.png';
        }
        img.onerror = function (ev) {
            ev.target.src = './点.png';
        };
        return img;
    }

    function init() {
        var keys = {
            '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
            '1': ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            '2': ['z', 'x', 'c', 'v', 'b', 'n', 'm'],

            'length': 3
        };
        var hash = {
            'q': 'qq.com',
            'w': 'weibo.com',
            'e': undefined,
            'r': undefined,
            't': 'taobao.com',
            'y': 'www.youku.com',
            'u': undefined,
            'i': 'www.iqiyi.com',
            'o': undefined,
            'p': 'www.panda.tv',
            'a': 'www.acfun.cn',
            's': undefined,
            'd':'www.douyu.com',
            'f': undefined,
            'g': 'google.com',
            'h': 'www.huya.com',
            'j': 'jianshu.com',
            'k': undefined,
            'l': undefined,
            'z': 'zhihu.com',
            'x': undefined,
            'c': undefined,
            'v': undefined,
            'b': 'bilibili.com',
            'n': undefined,
            'm': undefined
        };

        var hashINLocalStorage = getFromLocalStorage('zzz');
        if (hashINLocalStorage) { 
            hash = hashINLocalStorage;
        }
        return {
            'keys': keys,
            'hash': hash
        }
    }


    function generaetKeyboard(keys, hash) {
        for (var index = 0; index < keys['length']; index++) {

            var div = tag('div');
            var main = document.getElementById('mainxxxx');
            main.appendChild(div);

            var row = keys[index];
            for (var index2 = 0; index2 < row.length; index2++) {
                var span = createSpan(row[index2]);
                var button = createButton(row[index2]);
                var img = createImg(hash[row[index2]]);
                var kbd = tag("kbd");
                kbd.className = 'kbd';

                if (hash[row[index2]] === undefined) {
                    kbd.setAttribute('title', '未设置网站导航')
                } else {
                    kbd.setAttribute('title', hash[row[index2]])
                }

                kbd.onclick = function (e) {

                    var website = e.currentTarget.getAttribute('title');
                    if (website === '未设置网站导航') {
                        alert('请编辑此按键的网站再跳转')
                    } else {
                        window.open('http://' + website, "_blank");
                    }

                }

                var kbd_wrapper = tag("div");
                kbd_wrapper.className = 'kbd_wrapper';

                kbd.appendChild(span);
                kbd.appendChild(img);
                kbd.appendChild(button);

                kbd_wrapper.appendChild(kbd);

                div.appendChild(kbd_wrapper);
            }
        }
    }

    function listenTiUser(hash) {
        document.onkeypress = function (sjdhfakdhjlsdka) {
            let searchInput = document.querySelector('#searchInput')
            if (!searchInput.getAttribute('alreadyFocus')) {
                var key = sjdhfakdhjlsdka['key'];
                var website = hash[key]; 
                if (website === undefined) {
                    alert('请编辑此按键的网站再跳转')
                } else {
                    window.open('http://' + website, "_blank");
                }
                
            }
        };
    }
}()