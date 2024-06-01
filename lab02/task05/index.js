const Director = require('./Director');
const HeroBuilder = require('./HeroBuilder');
const EnemyBuilder = require('./EnemyBuilder');

const director = new Director();
const heroBuilder = new HeroBuilder();
const enemyBuilder = new EnemyBuilder();

const hero = director.constructHero(heroBuilder);
const enemy = director.constructEnemy(enemyBuilder);

console.log(hero);
console.log(enemy);
