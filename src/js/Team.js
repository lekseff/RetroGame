export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    this.members.add(member);
  }

  get toArray() {
    return [...this.members];
  }
}
