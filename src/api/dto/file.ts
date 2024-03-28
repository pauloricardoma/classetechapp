import { File } from "../models/file";

export class FileDTO {
  uri: string
  file_name: string

  constructor (
    public file: File,
  ) {
    this.uri = file.uri
    this.file_name = file.file_name
  }
}