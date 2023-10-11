// https://img.youtube.com/vi/ YOUTUBE-CODE /maxresdefault.jpg
const input = document.getElementById('url');
const thumbnail = document.getElementById('thumbnail');
const download = document.getElementById('download-button');
const error = document.querySelector('.error');

function getVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

input.addEventListener('keyup', (e) => {
  const url = input.value;
  const videoId = getVideoId(url);
  thumbnail.src = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  download.href = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  download.download = videoId ? `${videoId}-thumbnail.jpg` : '';
  download.style.display = videoId ? 'inline-block' : 'none';
  error.style.display = videoId ? 'none' : 'block';
});
