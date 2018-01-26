/**
 * 该函数用来生成mock数据
 * @type {MockXMLHttpRequest}
 */

var Mockjs = require('mockjs');
var _ = require('lodash');
let Random = Mockjs.Random;
let data = {};



//生成随机的新闻
function generateNew() {
    //生成3张随机图片
    let images = [1, 2, 3].map(x => Random.image('200x100', Random.color(), Random.word(2, 6)));
    data.news = [];
    _.times(100, (i) => {
        var content = Random.cparagraph(0, 10);
        data.news.push({
            id: i,
            title: Random.cword(8, 20),
            desc: content.substr(0, 40),
            tag: Random.cword(2, 6),
            views: Random.integer(100, 5000),
            images: images.slice(0, Random.integer(1, 3))
        })
    })
}

//生成随机的用户数据
function generateUser() {
    data.users = [];
    _.times(100, (i) => {
        let name = Random.cname();
        data.users.push(Mockjs.mock({
            'id|': Random.increment(),
            'name': name,
            'age|18-50': 1,
            'email': '@email',
            'birthday': '@date("yyyy-MM-dd")',
            'avatar': Random.image('200X100', '#4A7BF7', '#FFF', name),
            'phone': /^1[385][1-9]\d{8}/,
            'address': '@county(true)'
        }));
    });
}

module.exports = function () {
    //generateNew();
    generateUser();
    return data
}

