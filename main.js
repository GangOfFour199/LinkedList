import { LinkedList } from "./linkedlist.js";

const premierLeagueTop6 = new LinkedList();

premierLeagueTop6.append("Manchester City");
premierLeagueTop6.prepend("Liverpool");
premierLeagueTop6.append("Chelsea");
premierLeagueTop6.append("Arsenal");
premierLeagueTop6.append("Nottingham Forest");
premierLeagueTop6.append("Brighton");

console.log(premierLeagueTop6.toString());
// (Liverpool) -> (Manchester City) -> (Chelsea) -> (Arsenal) -> (Nottingham Forest) -> (Brighton) -> null

console.log(premierLeagueTop6.getHead());
// Node {value: "Liverpool", nextNode: Node ...}

console.log(premierLeagueTop6.getTail());
// Node {value: "Brighton", nextNode: null}

console.log(premierLeagueTop6.size()); // 6

console.log(premierLeagueTop6.find("Arsenal")); // true

console.log(premierLeagueTop6.contains("Manchester United")); // false

console.log(premierLeagueTop6.at(2));
// Node {value: "Chelsea", nextNode: Node {....}

console.log(premierLeagueTop6.at(7));
// Item at this index does not exist!

premierLeagueTop6.insertAt("Fulham", 6);
console.log(premierLeagueTop6.toString());
// (Liverpool) -> (Manchester City) -> (Chelsea) -> (Arsenal) -> (Nottingham Forest) -> (Brighton) -> (Fulham) -> null

console.log(premierLeagueTop6.size()); // 7

premierLeagueTop6.removeAt(2);
console.log(premierLeagueTop6.toString());
// (Liverpool) -> (Manchester City) -> (Arsenal) -> (Nottingham Forest) -> (Brighton) -> (Fulham) -> null

premierLeagueTop6.popLast();
console.log(premierLeagueTop6.toString());
// (Liverpool) -> (Manchester City) -> (Arsenal) -> (Nottingham Forest) -> (Brighton) -> null

premierLeagueTop6.clear();
console.log(premierLeagueTop6.toString());
// null
