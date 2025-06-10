import RNFS from 'react-native-fs';

export const downloadReflectivity = async (url: string): Promise<string> => {
  const filename = `reflectividad_${Date.now()}.png`;

  const localPath = `${RNFS.DocumentDirectoryPath}/${filename}`;

  const files = await RNFS.readDir(RNFS.DocumentDirectoryPath);
  for (const f of files) {
    if (f.name.startsWith('reflectividad_')) {
      await RNFS.unlink(f.path);
    }
  }

  await RNFS.downloadFile({
    fromUrl: url,
    toFile: localPath,
  }).promise;

  return localPath;
};
