// David Budak, AI 7/2022
// Alen Gavrilović AI 13/2022

const video = document.getElementById('modalVideo');
const modal = document.getElementById('videoModal');

modal.addEventListener('hidden.bs.modal', () => {
  video.pause();
  video.currentTime = 0;
});