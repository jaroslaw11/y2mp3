const fs = require('fs');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const transliteration = require('transliteration');

const inputFolderPath = './input'; // Path to the input folder

const downloadMP3 = async (videoUrl, searchQuery, outputFolder) => {
  try {
    const info = await ytdl.getInfo(videoUrl);
    const format = ytdl.filterFormats(info.formats, 'audioonly').find((f) => f.container === 'mp4');
    
    if (!format) {
      console.log(`No audio format available for search query: ${searchQuery}`);
      return;
    }

    const outputFileName = getOutputFileName(info.videoDetails.title);
    const output = `${outputFolder}/${outputFileName}`;

    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }

    const videoStream = ytdl(videoUrl, { format });

    videoStream.pipe(fs.createWriteStream(output));

    videoStream.on('end', () => {
      console.log(`Download complete for search query: ${searchQuery}`);
    });

    videoStream.on('error', (error) => {
      console.error(`Error downloading file for search query '${searchQuery}':`, error.message);
    });
  } catch (error) {
    console.error(`Error for search query '${searchQuery}':`, error.message);
  }
};

const processInputFile = async (file) => {
  const fileContent = fs.readFileSync(file, 'utf-8');
  const searchQueries = fileContent.split('\n').filter((query) => query.trim() !== '');

  const outputFolder = `./output/${getOutputFolderName(file)}`;
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
  }

  for (const searchQuery of searchQueries) {
    try {
      const { videos } = await ytSearch(searchQuery);
      if (videos.length > 0) {
        const videoUrl = `https://www.youtube.com/watch?v=${videos[0].videoId}`;
        await downloadMP3(videoUrl, searchQuery, outputFolder);
      } else {
        console.log(`No search results found for query: ${searchQuery}`);
      }
    } catch (error) {
      console.error(`Error for search query '${searchQuery}':`, error.message);
    }
  }
};

const getOutputFolderName = (inputFile) => {
  const fileName = inputFile.replace(/^.*[\\/]/, '').replace('.txt', '');
  return transliterateText(fileName);
};

const sanitizeFileName = (fileName) => {
  const sanitizedFileName = fileName.replace(/[^\w\s-|/\\]/gi, '');
  const parts = sanitizedFileName.split(/[_|/\\]+/);
  return parts[0].trim();
};

const transliterateText = (text) => {
  return transliteration.transliterate(text);
};

const getOutputFileName = (videoTitle) => {
    const transliteratedTitle = transliterateText(videoTitle);
    const sanitizedTitle = sanitizeFileName(transliteratedTitle);
    return `${sanitizedTitle}.mp3`;
  };
  

const processInputFiles = async () => {
  fs.readdir(inputFolderPath, (err, files) => {
    if (err) {
      console.error('Error reading input folder:', err.message);
      return;
    }

    for (const file of files) {
      if (file.endsWith('.txt')) {
        const filePath = `${inputFolderPath}/${file}`;
        console.log(`Processing input file: ${filePath}`);
        processInputFile(filePath);
      }
    }
  });
};

processInputFiles();
