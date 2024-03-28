export class File {
  constructor (
    public userId: number,
    public uri: string,
    public file_name: string,
  ) {
    this.userId = userId
    this.uri = uri
    this.file_name = file_name
  }
}