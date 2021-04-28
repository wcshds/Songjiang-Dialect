import data from './data.js';

function init(list) {
    return list.map((list, idx) => {
        if (idx === 0) {
            return list.map((each, idx) => ({ code: idx + 1, hanzi: each[0], remark: each[1], syllable: each[2] }));
        }
        else if (idx === 1) {
            return list.map((each, idx) => ({ code: idx + 1, hanzi: each[0], remark: each[1], syllable: each[2] }));
        }
        else if (idx === 2) {
            return list.map((each, idx) => ({ code: idx + 1, word: each[0], remark: each[1], syllable: each[2], note: each[3] }));
        }
        else if (idx === 3) {
            return list.map((each, idx) => ({ code: idx + 1, sentence: each[0], remark: each[1], syllable: each[2] }));
        }
    });
}

export let songjiang = init(data.songjiang);
export let puxizhongxin = init(data.puxizhongxin);