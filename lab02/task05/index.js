const Director = require('./Director');
const HeroBuilder = require('./HeroBuilder');
const EnemyBuilder = require('./EnemyBuilder');

let director = new Director();
let heroBuilder = new HeroBuilder();
let enemyBuilder = new EnemyBuilder();

let hero = director.constructHero(heroBuilder);
let enemy = director.constructEnemy(enemyBuilder);

console.log(hero);
console.log(enemy);
