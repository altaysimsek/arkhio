import path from 'path'
import fsPromises from 'fs/promises';

const readJsonFile = async (pathname: string) => {
    const filePath = path.join(process.cwd(), pathname);
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());
    return objectData
}

export { readJsonFile }
