import JSZip from 'jszip';
import axios from 'axios';
import downloadFile from './downloadFile';

const zip = new JSZip();


export type FileToDownloadType = {
  url: string
  name: string
}

const download = (item: FileToDownloadType) => {
  //download single file as blob and add it to zip archive
  return axios.get(item.url, { responseType: 'blob' }).then((resp) => {
    zip.file(item.name, resp.data);
  });
};

//call this function to download all files as ZIP archive
const downloadZip = (fileArr: FileToDownloadType[], zipName: string = 'hello.zip') => {
  const arrOfFiles = fileArr.map((item) => download(item)); //create array of promises
  Promise.all(arrOfFiles)
    .then(() => {
      //when all promises resolved - save zip file
      zip.generateAsync({ type: 'blob' }).then(function (blob) {
        downloadFile(URL.createObjectURL(blob), zipName);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};


export default downloadZip
