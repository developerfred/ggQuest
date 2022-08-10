const url = 'https://gg.quest/api/quests'

var opts = {
    headers: {
      'mode':'cors'
    }
}

export default async function fetchText(): Promise<object[]> {
    let response = await fetch(url,opts);
    return await response.json();
}