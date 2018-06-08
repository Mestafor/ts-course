const menuList: IMenuItem[] = [
  {
    title: 'JavaScript',
    items: ['Angular', 'React', 'Vue'],
  }, {
    title: 'Dart',
    items: ['Angular', 'Polymer'],
  }
];

function generateMenu(list: IMenuItem[]): string {
  let content: string = `<ul>`;
  for (let a of list) {
    content += `<li><a class='title'>${a.title}</a><ul>`

    for (let item of a.items) {
      content += `<li><a>${item}</a></li>`
    }

    content += '</li></ul>';
  }
  content += '</ul>';
  return content;
}

console.log(generateMenu(menuList));

function isString(param: any): param is string {
  return typeof param === 'string';
}

function getAvarage(a: string, b: string, c?: string): number;
function getAvarage(a: number, b: number, c: number): number;
function getAvarage(a: any, b: any, c: any): any {
  let total: number = 0;

  if (isString(a)) {
    total += parseInt(a, 10);
  } else {
    total += 0;
  }

  return total;
}

class Singleton {
  private static _instance: Singleton;
  private constructor() {

  }

  public static getInstance() {
    if (!Singleton._instance) {
      console.log('create instance');
      Singleton._instance = new Singleton;
    }

    console.log('return instance');
    return Singleton._instance;
  }
}

Singleton.getInstance();
Singleton.getInstance();
Singleton.getInstance();
Singleton.getInstance();
