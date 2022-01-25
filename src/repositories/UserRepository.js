const { readFile, writeFile } = require('fs/promises');
const { join } = require('path');

class UserRepository {

  constructor() {
    this.file = join(__dirname, '..', '..', 'database', 'data.json');
  }

  async __currentFileContent() {
    return await readFile(this.file, 'utf8');
  }

  async recordInTheFile(currentFile) {
    return await writeFile(this.file, JSON.stringify(currentFile), 'utf8');
  }

  async find(itemID) {
    const allUsers = JSON.parse(await this.__currentFileContent());

    return !itemID ? allUsers : allUsers.find(({ _id }) => itemID === _id);
  }

  async save(user) {
    const currentFile = JSON.parse(await this.__currentFileContent());
    
    if (currentFile.find((({ email }) => email === user.email))) throw new Error(); 

    currentFile.push(user); 

   return await this.recordInTheFile(currentFile);
  }

  async update(id, user) {
    const allUsers = JSON.parse(await this.__currentFileContent());
    const newUser = allUsers.find(({ _id }) => id === _id);

    newUser.email = user.email;
    newUser.password = user.password;

    await this.recordInTheFile(allUsers);
  }

  async exclude(id) {
    if (!id) return await this.record([]);

    const usersSaved = JSON.parse(await this.__currentFileContent()) 
      .filter(({ _id }) => id != _id);
    
    return await this.recordInTheFile(usersSaved);
  }
}
module.exports = new UserRepository();